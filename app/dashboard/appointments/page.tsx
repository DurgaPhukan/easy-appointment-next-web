import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PlusCircle, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for appointments
const appointments = [
  {
    id: 1,
    date: "2023-10-15",
    time: "10:00 AM",
    doctor: "Dr. Smith",
    specialty: "Cardiology",
    status: "Upcoming",
  },
  {
    id: 2,
    date: "2023-10-16",
    time: "2:00 PM",
    doctor: "Dr. Johnson",
    specialty: "Dermatology",
    status: "Upcoming",
  },
  {
    id: 3,
    date: "2023-10-17",
    time: "9:00 AM",
    doctor: "Dr. Lee",
    specialty: "Orthopedics",
    status: "Completed",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Appointments</h1>
        <p className="page-description">
          Manage and view all your health appointments in one place.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-md">
          <Input
            type="search"
            placeholder="Search appointments..."
            className="w-full"
          />
        </div>
        <Button asChild className="ml-4">
          <Link href="/book" className="flex items-center">
            <PlusCircle className="mr-2 h-5 w-5" />
            Book New Appointment
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
          <CardDescription>
            View and manage your upcoming and past appointments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      {appointment.doctor} - {appointment.specialty}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${appointment.status === "Upcoming"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                        }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}