// src/components/booking/doctor-available-slots.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

interface DoctorAvailableSlotsProps {
  doctorId: string;
}

export function DoctorAvailableSlots({ doctorId }: DoctorAvailableSlotsProps) {
  // In a real app, you would fetch the time slots based on the doctor ID and selected date
  const timeSlots = [
    { id: "1", time: "09:00 AM", available: true },
    { id: "2", time: "09:30 AM", available: true },
    { id: "3", time: "10:00 AM", available: true },
    { id: "4", time: "10:30 AM", available: false },
    { id: "5", time: "11:00 AM", available: true },
    { id: "6", time: "11:30 AM", available: true },
    { id: "7", time: "01:00 PM", available: true },
    { id: "8", time: "01:30 PM", available: false },
    { id: "9", time: "02:00 PM", available: true },
    { id: "10", time: "02:30 PM", available: true },
    { id: "11", time: "03:00 PM", available: true },
    { id: "12", time: "03:30 PM", available: true },
  ];

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSlotSelection = (slotId: string) => {
    setSelectedSlot(slotId);
  };

  const confirmAppointment = () => {
    // Here you would handle the appointment booking logic
    setDialogOpen(false);
    // Redirect to confirmation page or show confirmation message
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <Button
            key={slot.id}
            variant={selectedSlot === slot.id ? "default" : "outline"}
            className={`flex items-center gap-2 ${!slot.available && "opacity-50"
              } ${selectedSlot === slot.id && "bg-primary text-primary-foreground"}`}
            disabled={!slot.available}
            onClick={() => handleSlotSelection(slot.id)}
          >
            <Clock className="h-4 w-4" />
            {slot.time}
            {selectedSlot === slot.id && (
              <Check className="ml-auto h-4 w-4" />
            )}
          </Button>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="mt-4 w-full"
            disabled={!selectedSlot}
            onClick={() => selectedSlot && setDialogOpen(true)}
          >
            Book Appointment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Appointment</DialogTitle>
            <DialogDescription>
              Please confirm your appointment details below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Input id="reason" placeholder="Brief description of your health concern" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Input id="notes" placeholder="Any additional information for the doctor" />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAppointment}>
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}