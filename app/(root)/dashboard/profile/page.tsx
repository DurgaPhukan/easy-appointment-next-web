import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Calendar, MapPin } from "lucide-react";

export default function ProfilePage() {
  // Mock user data (replace with actual data fetching)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1990-01-01",
    address: "123 Main St, New York, NY 10001",
  };

  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Profile</h1>
        <p className="page-description">
          View and update your personal information and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your name, contact details, and other personal information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <Input
                id="name"
                defaultValue={user.name}
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                defaultValue={user.email}
                placeholder="Enter your email address"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <Input
                id="phone"
                defaultValue={user.phone}
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <Input
                id="dob"
                defaultValue={user.dob}
                placeholder="Enter your date of birth"
                type="date"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Input
                id="address"
                defaultValue={user.address}
                placeholder="Enter your address"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Manage your notification and privacy preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Notification Preferences</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  id="email-notifications"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="email-notifications">
                  Receive email notifications
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="sms-notifications"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="sms-notifications">
                  Receive SMS notifications
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Privacy Settings</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  id="share-data"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="share-data">
                  Share my data with healthcare providers
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}