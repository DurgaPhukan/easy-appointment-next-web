// src/components/dashboard/upcoming-appointments.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function UpcomingAppointments() {
  // Mock data - replace with real data in your implementation
  const appointments = [
    {
      id: "1",
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: new Date(2025, 1, 27, 14, 0), // Today at 2:00 PM
      location: "Health Center Building A, Room 305",
      avatar: "/placeholder-avatar.jpg",
      status: "confirmed",
    },
    {
      id: "2",
      doctorName: "Dr. Michael Williams",
      specialty: "Dermatologist",
      date: new Date(2025, 1, 28, 10, 30), // Tomorrow at 10:30 AM
      location: "Medical Plaza, Suite 220",
      avatar: "/placeholder-avatar.jpg",
      status: "confirmed",
    },
    {
      id: "3",
      doctorName: "Dr. Emily Chen",
      specialty: "Neurologist",
      date: new Date(2025, 2, 3, 15, 45), // Next week
      location: "Neurology Center, Floor 4",
      avatar: "/placeholder-avatar.jpg",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-4">
      {appointments.map((appointment) =>
      (
        <Card key={appointment.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              <div className="flex w-72 items-center gap-4 border-b p-4 sm:border-b-0 sm:border-r sm:p-6">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={appointment.avatar} alt={appointment.doctorName} />
                  <AvatarFallback>
                    {appointment.doctorName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{appointment.doctorName}</h3>
                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {appointment.date.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {appointment.date.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
                    {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/dashboard/appointments/${appointment.id}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

    </div >
  );
}