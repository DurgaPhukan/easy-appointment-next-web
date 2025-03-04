"use client";
import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import "ol/ol.css";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { Translate } from "ol/interaction";
import axios from "axios";

const LOCATION_IQ_API_KEY = process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY;

interface LocationPickerProps {
  onLocationSelect: (lat: number, lon: number) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  onLocationSelect,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [vectorSource, setVectorSource] = useState<VectorSource | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const translateRef = useRef<Translate | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize OpenLayers map
    const newMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([78.9629, 20.5937]), // Default to India
        zoom: 5,
      }),
    });

    // Initialize vector source and layer
    const newVectorSource = new VectorSource();
    const markerLayer = new VectorLayer({
      source: newVectorSource,
    });
    newMap.addLayer(markerLayer);

    // Initialize Translate interaction for dragging the marker
    const translate = new Translate({
      layers: [markerLayer],
    });
    newMap.addInteraction(translate);
    translateRef.current = translate;

    // Handle marker drag end
    translate.on("translateend", (event) => {
      const feature = event.features.getArray()[0];
      if (feature) {
        const geometry = feature.getGeometry() as Point;
        const coordinates = toLonLat(geometry.getCoordinates());
        updateLocation(coordinates[1], coordinates[0]);
      }
    });

    setMap(newMap);
    setVectorSource(newVectorSource);

    // Handle click to place a marker
    newMap.on("click", (event) => {
      const clickedCoordinate = toLonLat(event.coordinate);
      placeMarker(clickedCoordinate[0], clickedCoordinate[1]);
    });

    return () => newMap.setTarget(undefined);
  }, []);

  // Function to add a marker
  const placeMarker = (lon: number, lat: number) => {
    if (!map || !vectorSource) return;

    // Clear previous markers
    vectorSource.clear();

    // Create new marker
    const newMarker = new Feature({
      geometry: new Point(fromLonLat([lon, lat])),
    });

    newMarker.setStyle(
      new Style({
        image: new Icon({
          src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          scale: 0.05,
        }),
      })
    );

    // Add marker to the layer
    vectorSource.addFeature(newMarker);

    // Center and zoom to marker
    map.getView().animate({ center: fromLonLat([lon, lat]), zoom: 14 });

    // Update location
    updateLocation(lat, lon);
  };

  // Function to update location
  const updateLocation = (lat: number, lon: number) => {
    axios
      .get(
        `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`
      )
      .then((response) => {
        const locationName = response.data.display_name;
        console.log("Fetched location name:", locationName);

        // Send location to parent component
        onLocationSelect(lat, lon);
      })
      .catch((error) => {
        console.error("Error fetching location name:", error);
      });
  };

  // Get user's current location
  const getCurrentLocation = () => {
    if (!map) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        placeMarker(longitude, latitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        alert(
          "Unable to retrieve your location. Please ensure location services are enabled."
        );
      }
    );
  };

  // Search for a location using LocationIQ with debouncing
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    searchTimeout.current = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATION_IQ_API_KEY}&q=${searchQuery}&limit=5&format=json`
        );

        setSearchResults(response.data || []);
      } catch (error) {
        console.error("Error searching location:", error);
        alert("Failed to fetch search results. Please try again.");
      }
    }, 500);

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchQuery]);

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for a location"
          className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => {
            if (searchResults.length > 0) {
              const { lat, lon } = searchResults[0];
              placeMarker(parseFloat(lon), parseFloat(lat));
              setSearchQuery("");
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>

      {/* Suggestions List */}
      {searchResults.length > 0 && (
        <ul className="border rounded-lg dark:bg-brand-950 bg-brand-100 shadow-md">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="p-2 hover:bg-brand-600 cursor-pointer transition-colors"
              onClick={() => {
                placeMarker(parseFloat(result.lon), parseFloat(result.lat));
                setSearchQuery("");
              }}
            >
              {result.display_name}
            </li>
          ))}
        </ul>
      )}

      {/* Use Current Location Button */}
      <button
        onClick={getCurrentLocation}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Use Current Location
      </button>

      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-96 rounded-lg border shadow-md"
      ></div>
    </div>
  );
};

export default LocationPicker;
