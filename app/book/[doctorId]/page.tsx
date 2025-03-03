// src/app/book/[doctorId]/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, MapPin, Star } from "lucide-react";
import { DoctorAvailableSlots } from "@/components/booking/doctor-available-slots";
// import { DoctorAvailableSlots } from "@/components/booking/doctor-available-slots";

export default function DoctorDetailPage({ params }: { params: { doctorId: string } }) {
  // In a real app, you would fetch the doctor data based on the ID
  const doctor = {
    id: params.doctorId,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with 15 years of experience in treating various heart conditions. She specializes in preventive cardiology, heart failure management, and cardiac rehabilitation.",
    rating: 4.9,
    reviews: 124,
    availability: "Available Today",
    location: "Health Center Building A, Room 305",
    avatar: "/placeholder-avatar.jpg",
    education: [
      { degree: "MD", institution: "Stanford University School of Medicine", year: "2008" },
      { degree: "Cardiology Fellowship", institution: "Mayo Clinic", year: "2012" },
      { degree: "Internal Medicine Residency", institution: "Johns Hopkins Hospital", year: "2010" },
    ],
    experience: [
      { position: "Senior Cardiologist", institution: "Heart Care Center", duration: "2018-Present" },
      { position: "Cardiologist", institution: "University Medical Center", duration: "2012-2018" },
    ],
    languages: ["English", "Spanish"],
    insurance: ["Blue Cross", "Aetna", "Medicare", "UnitedHealthcare"],
    services: [
      "Cardiovascular Disease Prevention",
      "Cardiac Consultation",
      "Heart Failure Management",
      "Stress Testing",
      "Echocardiography",
      "Cardiac Rehabilitation",
    ],
  };

  return (
    <div className="app-container">
      <div className="mb-6">
        <Button variant="outline" className="mb-4">
          Back to Doctors
        </Button>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/3">
                <div className="flex flex-col items-center gap-4 text-center">
                  <Avatar className="h-28 w-28">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold">{doctor.name}</h1>
                    <p className="text-muted-foreground">{doctor.specialty}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>

                  <Badge variant="secondary" className="mt-2">
                    {doctor.availability}
                  </Badge>
                </div>
              </div>

              <div className="md:w-2/3">
                <Tabs defaultValue="about">
                  <TabsList className="w-full">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="education">Education & Experience</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="mt-4 space-y-4">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Biography</h3>
                      <p>{doctor.bio}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Languages</h3>
                        <ul className="list-inside list-disc">
                          {doctor.languages.map((language) => (
                            <li key={language}>{language}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Insurance</h3>
                        <ul className="list-inside list-disc">
                          {doctor.insurance.map((insurance) => (
                            <li key={insurance}>{insurance}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="mt-4 space-y-4">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Education</h3>
                      <div className="space-y-2">
                        {doctor.education.map((edu, index) => (
                          <div key={index} className="rounded-md border p-3">
                            <h4 className="font-medium">{edu.degree}</h4>
                            <p className="text-sm text-muted-foreground">
                              {edu.institution}, {edu.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Experience</h3>
                      <div className="space-y-2">
                        {doctor.experience.map((exp, index) => (
                          <div key={index} className="rounded-md border p-3">
                            <h4 className="font-medium">{exp.position}</h4>
                            <p className="text-sm text-muted-foreground">
                              {exp.institution}, {exp.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="services" className="mt-4 space-y-4">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Services</h3>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {doctor.services.map((service, index) => (
                          <div key={index} className="rounded-md border p-3">
                            <p>{service}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-4 space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Patient Reviews</h3>
                      <p className="text-muted-foreground">
                        {doctor.reviews} reviews with an average rating of {doctor.rating}
                      </p>
                      {/* Review content would be added here in a real application */}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Book an Appointment</CardTitle>
          <CardDescription>
            Select a date and time slot for your appointment with {doctor.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-medium">Select Date</h3>
              <Card>
                <CardContent className="p-3">
                  <Calendar
                    mode="single"
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Available Time Slots</h3>
              <Card>
                <CardContent className="p-3">
                  <DoctorAvailableSlots doctorId={doctor.id} />
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}