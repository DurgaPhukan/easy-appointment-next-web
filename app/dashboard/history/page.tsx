import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, FileText, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for medical history
export const medicalHistory = [
  {
    id: 1,
    date: "2023-09-10",
    diagnosis: "Hypertension",
    treatment: "Prescribed Lisinopril 10mg daily",
    doctor: "Dr. Smith",
    notes: "Follow up in 3 months.",
  },
  {
    id: 2,
    date: "2023-07-22",
    diagnosis: "Type 2 Diabetes",
    treatment: "Prescribed Metformin 500mg twice daily",
    doctor: "Dr. Johnson",
    notes: "Monitor blood sugar levels regularly.",
  },
  {
    id: 3,
    date: "2023-05-15",
    diagnosis: "Migraine",
    treatment: "Prescribed Sumatriptan 50mg as needed",
    doctor: "Dr. Lee",
    notes: "Avoid triggers like stress and lack of sleep.",
  },
];

export default function MedicalHistoryPage() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Medical History</h1>
        <p className="page-description">
          View and manage your medical history, including diagnoses, treatments, and prescriptions.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-md">
          <Input
            type="search"
            placeholder="Search medical history..."
            className="w-full"
          />
        </div>
        <Button asChild className="ml-4">
          <Link href="/add-medical-record" className="flex items-center">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add New Record
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Medical Records</CardTitle>
          <CardDescription>
            A detailed overview of your past diagnoses, treatments, and prescriptions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {medicalHistory.map((record) => (
              <Card key={record.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{record.diagnosis}</p>
                    <p className="text-sm text-muted-foreground">
                      {record.date} - Treated by {record.doctor}
                    </p>
                    <p className="mt-2 text-sm">{record.treatment}</p>
                    {record.notes && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        <strong>Notes:</strong> {record.notes}
                      </p>
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/medical-history/${record.id}`}>
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}