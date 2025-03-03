// src/app/(dashboard)/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PlusCircle, User } from "lucide-react";
import UpcomingAppointments from "../upcoming-appointments/page";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">
          Welcome back! Here's an overview of your health appointments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Next: Today at 2:00 PM
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              12 completed, 12 upcoming
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Different Doctors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Across 4 specialties
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Medication Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Updated 2 days ago
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>
              You have 3 appointments scheduled for the next 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingAppointments />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full justify-start" size="lg">
              <Link href="/book" className="flex items-center">
                <PlusCircle className="mr-2 h-5 w-5" />
                Book New Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start" size="lg">
              <Link href="/dashboard/appointments" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                View All Appointments
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start" size="lg">
              <Link href="/dashboard/profile" className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Update Profile
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start" size="lg">
              <Link href="/dashboard/history" className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Medical History
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}