import { Button } from "@/components/ui/button";
import { Calendar, Heart, Stethoscope, Users, Star, MessageCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your hero image
            alt="Hero Background"
            fill
            className="object-cover opacity-85 dark:opacity-45"
          />
        </div>
        <div className="relative z-10 space-y-6 max-w-4xl px-4">
          <h1 className="text-7xl font-bold animate-fade-in text-brand-950 dark:text-brand-50">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-brand-950 dark:text-brand-100 animate-fade-in delay-100">
            Book appointments with top doctors effortlessly. Join thousands of satisfied patients and healthcare providers.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in delay-200">
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-100">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button asChild size="lg" className="bg-brand-600 dark:bg-brand-400 hover:bg-brand-500">
              <Link href="/book">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-brand-950 flex top-0 left-0">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-7xl bg-brand-200 dark:bg-brand-800 p-8 rounded-xl">
          <div className="animate-slide-up delay-100">
            <Users className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-200" />
            <h2 className="text-4xl font-bold mt-4">10,000+</h2>
            <p className="text-muted-foreground">Patients Treated</p>
          </div>
          <div className="animate-slide-up delay-200">
            <Stethoscope className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-200" />
            <h2 className="text-4xl font-bold mt-4">500+</h2>
            <p className="text-muted-foreground">Doctors</p>
          </div>
          <div className="animate-slide-up delay-300">
            <Heart className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-200" />
            <h2 className="text-4xl font-bold mt-4">200+</h2>
            <p className="text-muted-foreground">Healthcare Institutions</p>
          </div>
          <div className="animate-slide-up delay-400">
            <Star className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-200" />
            <h2 className="text-4xl font-bold mt-4">4.9/5</h2>
            <p className="text-muted-foreground">Patient Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-brand-50 dark:bg-brand-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in text-brand-500">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground mb-12 animate-fade-in delay-100">
            Discover the benefits of joining our platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-brand-800 p-8 rounded-lg shadow-lg animate-slide-up delay-100">
              <Calendar className="h-10 w-10 mx-auto text-brand-600 dark:text-brand-50" />
              <h3 className="text-xl font-bold mt-4 text-brand-400 dark:text-brand-50">Easy Appointments</h3>
              <p className="text-muted-foreground mt-2">
                Book appointments in just a few clicks. No hassle, no waiting.
              </p>
            </div>
            <div className="bg-white dark:bg-brand-800 p-8 rounded-lg shadow-lg animate-slide-up delay-200">
              <Shield className="h-10 w-10 mx-auto text-brand-600 dark:text-brand-50" />
              <h3 className="text-xl font-bold mt-4 text-brand-400 dark:text-brand-50">Trusted Professionals</h3>
              <p className="text-muted-foreground mt-2">
                Connect with certified doctors and healthcare providers.
              </p>
            </div>
            <div className="bg-white dark:bg-brand-800 p-8 rounded-lg shadow-lg animate-slide-up delay-300">
              <MessageCircle className="h-10 w-10 mx-auto text-brand-600 dark:text-brand-50" />
              <h3 className="text-xl font-bold mt-4 text-brand-400 dark:text-brand-50">Real Feedback</h3>
              <p className="text-muted-foreground mt-2">
                Read reviews from real patients and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="py-16 bg-brand-100 dark:bg-brand-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground mb-12 animate-fade-in delay-100">
            Hear from the people who trust us with their health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-50 p-8 rounded-lg shadow-lg animate-slide-up delay-100">
              <p className="text-muted-foreground italic">
                "The platform is so easy to use. I booked an appointment in minutes!"
              </p>
              <p className="mt-4 font-bold text-brand-500">- Sarah L.</p>
            </div>
            <div className="bg-brand-50 p-8 rounded-lg shadow-lg animate-slide-up delay-200">
              <p className="text-muted-foreground italic">
                "I found the best doctor for my needs. Highly recommend!"
              </p>
              <p className="mt-4 font-bold text-brand-500">- John D.</p>
            </div>
            <div className="bg-brand-50 p-8 rounded-lg shadow-lg animate-slide-up delay-300">
              <p className="text-muted-foreground italic">
                "The reminders and follow-ups are a lifesaver. Thank you!"
              </p>
              <p className="mt-4 font-bold text-brand-500">- Emily R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-brand-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          Ready to Get Started?
        </h2>
        <p className="text-brand-100 mb-8 animate-fade-in delay-100">
          Join thousands of happy patients and healthcare providers today.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in delay-200">
          <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-100">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600">
            <Link href="/book">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}