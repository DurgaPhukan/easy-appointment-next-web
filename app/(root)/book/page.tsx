// src/app/book/page.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Calendar, Filter, MapPin, Search, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BookingPage() {
  // Mock data - replace with real data in your implementation
  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 124,
      availability: "Available Today",
      location: "Health Center Building A",
      avatar: "/placeholder-avatar.jpg",
      education: "Stanford University",
      experience: "15+ years",
    },
    {
      id: "2",
      name: "Dr. Michael Williams",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 98,
      availability: "Available Tomorrow",
      location: "Medical Plaza",
      avatar: "/placeholder-avatar.jpg",
      education: "Harvard Medical School",
      experience: "10+ years",
    },
    {
      id: "3",
      name: "Dr. Emily Chen",
      specialty: "Neurologist",
      rating: 4.7,
      reviews: 86,
      availability: "Available in 3 days",
      location: "Neurology Center",
      avatar: "/placeholder-avatar.jpg",
      education: "Johns Hopkins University",
      experience: "12+ years",
    },
    {
      id: "4",
      name: "Dr. David Rodriguez",
      specialty: "General Practitioner",
      rating: 4.9,
      reviews: 210,
      availability: "Available Today",
      location: "Family Health Center",
      avatar: "/placeholder-avatar.jpg",
      education: "Yale University",
      experience: "20+ years",
    },
    {
      id: "5",
      name: "Dr. Jennifer Lee",
      specialty: "Pediatrician",
      rating: 4.8,
      reviews: 155,
      availability: "Available Tomorrow",
      location: "Children's Medical Center",
      avatar: "/placeholder-avatar.jpg",
      education: "Columbia University",
      experience: "8+ years",
    },
    {
      id: "6",
      name: "Dr. Robert Miller",
      specialty: "Orthopedic Surgeon",
      rating: 4.7,
      reviews: 92,
      availability: "Available in 2 days",
      location: "Orthopedic Institute",
      avatar: "/placeholder-avatar.jpg",
      education: "University of Chicago",
      experience: "18+ years",
    },
  ];

  // Define specialty categories
  const specialties = [
    "All Specialties",
    "General Practice",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
  ];

  return (
    <div className="app-container">
      <div className="page-header">
        <h1 className="page-title">Book an Appointment</h1>
        <p className="page-description">
          Find and book appointments with trusted healthcare providers
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by doctor name, specialty, or location"
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="default" className="gap-2">
          <Calendar className="h-4 w-4" />
          Check Availability
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full md:w-auto">
          {specialties.map((specialty) => (
            <TabsTrigger
              key={specialty}
              value={specialty === "All Specialties" ? "all" : specialty.toLowerCase()}
            >
              {specialty}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={doctor.avatar} alt={doctor.name} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{doctor.name}</CardTitle>
                  <CardDescription>{doctor.specialty}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="mb-4 mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({doctor.reviews} reviews)
                </span>
                <div className="ml-auto">
                  <Badge variant="secondary">{doctor.availability}</Badge>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{doctor.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-md bg-muted p-2">
                    <span className="text-xs font-medium">Education</span>
                    <p className="text-xs text-muted-foreground">
                      {doctor.education}
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-2">
                    <span className="text-xs font-medium">Experience</span>
                    <p className="text-xs text-muted-foreground">
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild className="w-full">
                <Link href={`/book/${doctor.id}`}>Book Appointment</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}