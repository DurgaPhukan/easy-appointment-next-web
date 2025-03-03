import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, Lock, User, Mail, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-description">
          Manage your account settings, preferences, and privacy.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>
            Update your account information and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <Input
                id="name"
                defaultValue="John Doe"
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
                defaultValue="john.doe@example.com"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter a new password"
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
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Manage how you receive notifications for appointments and updates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Appointment Reminders</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  id="email-reminders"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="email-reminders">
                  Receive email reminders
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="sms-reminders"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="sms-reminders">
                  Receive SMS reminders
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>General Notifications</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  id="promotional-emails"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="promotional-emails">
                  Receive promotional emails
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="newsletter"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="newsletter">
                  Subscribe to our newsletter
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
          <CardDescription>
            Manage your privacy settings and secure your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Data Sharing</Label>
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

          <div className="space-y-2">
            <Label>Two-Factor Authentication</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  id="2fa"
                  type="checkbox"
                  className="w-4 h-4"
                />
                <Label htmlFor="2fa">
                  Enable two-factor authentication
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}