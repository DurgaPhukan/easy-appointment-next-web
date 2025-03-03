import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { medicalHistory } from "@/app/dashboard/history/page";

// Mock function to fetch a single record (replace with actual data fetching)
const getRecordById = (id: number) => {
  const record = medicalHistory.find((record) => record.id === id);
  if (!record) return null;
  return record;
};

export default function MedicalRecordPage({ params }: { params: { id: string } }) {
  const record = getRecordById(Number(params.id));
  if (!record) return notFound();

  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Medical Record</h1>
        <p className="page-description">
          Detailed information about this medical record.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{record.diagnosis}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Date</p>
            <p className="text-sm text-muted-foreground">{record.date}</p>
          </div>
          <div>
            <p className="font-medium">Treatment</p>
            <p className="text-sm text-muted-foreground">{record.treatment}</p>
          </div>
          <div>
            <p className="font-medium">Doctor</p>
            <p className="text-sm text-muted-foreground">{record.doctor}</p>
          </div>
          {record.notes && (
            <div>
              <p className="font-medium">Notes</p>
              <p className="text-sm text-muted-foreground">{record.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}