// import { Button } from "@/components/ui/button";
// import { Calendar, Heart, Stethoscope, Users, Star, MessageCircle, Shield } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

"use client"

import { Button } from "@/components/ui/button";
import { Calendar, Heart, Stethoscope, Users, Star, MessageCircle, Shield, CheckCircle, Clock, Award, Briefcase, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero Section with Gradient */}
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-brand-700 via-brand-100 to-brand-700 dark:from-brand-950 dark:via-black dark:to-brand-950">
        <div className="relative z-10 space-y-6 max-w-4xl px-4">
          <div className="mb-4 flex justify-center">
            <div className="p-3 bg-white dark:bg-brand-950 rounded-full shadow-lg">
              <Heart className="h-10 w-10 text-brand-600 dark:text-brand-100" />
            </div>
          </div>
          <h1 className="text-7xl md:text-7xl font-bold animate-fade-in text-brand-950 dark:text-brand-50">
            Your Health, Our Priority
          </h1>
          <p className="text-xl font-light text-brand-800 dark:text-brand-200 animate-fade-in delay-100 max-w-2xl mx-auto">
            Experience healthcare reimagined. Our platform connects you with leading medical professionals for personalized care when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-100 shadow-md">
              <Link href="/dashboard">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Go to Dashboard
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-brand-600 dark:bg-brand-500 hover:bg-brand-500 dark:hover:bg-brand-400 text-white shadow-md">
              <Link href="/book">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book an Appointment
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 h-24 w-24 rounded-full bg-brand-400 dark:bg-brand-700 opacity-40 animate-float delay-100"></div>
        <div className="absolute bottom-1/4 right-10 h-20 w-20 rounded-full bg-brand-500 dark:bg-brand-700 opacity-40 animate-float delay-300"></div>
        <div className="absolute top-1/3 right-1/4 h-16 w-16 rounded-full bg-brand-200 dark:bg-brand-700 opacity-30 animate-float delay-700"></div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-brand-950 relative">
        <div className="absolute left-0 w-full -top-28">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center bg-gradient-to-r from-brand-100 via-brand-200 to-brand-400 dark:from-brand-800 dark:to-brand-700 p-8 rounded-xl shadow-lg">
              <div className="animate-slide-up delay-100 p-4 bg-white bg-opacity-60 dark:bg-brand-900 dark:bg-opacity-60 rounded-lg">
                <Users className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-300" />
                <h2 className="text-4xl font-bold mt-4 text-brand-800 dark:text-brand-50">10,000+</h2>
                <p className="text-brand-600 dark:text-brand-200">Patients Treated</p>
              </div>
              <div className="animate-slide-up delay-200 p-4 bg-white bg-opacity-60 dark:bg-brand-900 dark:bg-opacity-60 rounded-lg">
                <Stethoscope className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-300" />
                <h2 className="text-4xl font-bold mt-4 text-brand-800 dark:text-brand-50">500+</h2>
                <p className="text-brand-600 dark:text-brand-200">Specialized Doctors</p>
              </div>
              <div className="animate-slide-up delay-300 p-4 bg-white bg-opacity-60 dark:bg-brand-900 dark:bg-opacity-60 rounded-lg">
                <Heart className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-300" />
                <h2 className="text-4xl font-bold mt-4 text-brand-800 dark:text-brand-50">200+</h2>
                <p className="text-brand-600 dark:text-brand-200">Healthcare Institutions</p>
              </div>
              <div className="animate-slide-up delay-400 p-4 bg-white bg-opacity-60 dark:bg-brand-900 dark:bg-opacity-60 rounded-lg">
                <Star className="h-12 w-12 mx-auto text-brand-600 dark:text-brand-300" />
                <h2 className="text-4xl font-bold mt-4 text-brand-800 dark:text-brand-50">4.9/5</h2>
                <p className="text-brand-600 dark:text-brand-200">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section - New */}
      <div className="py-36 bg-gradient-to-b from-white to-brand-50 dark:from-brand-950 dark:to-brand-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2 animate-fade-in text-brand-700 dark:text-brand-300">
            Medical Specialties
          </h2>
          <p className="font-light text-lg text-brand-600 dark:text-brand-400 mb-12 animate-fade-in delay-100 max-w-3xl mx-auto">
            Our platform connects you with specialists across all major medical fields
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: <Heart className="h-8 w-8" />, name: "Cardiology" },
              { icon: <Briefcase className="h-8 w-8" />, name: "Orthopedics" },
              { icon: <Shield className="h-8 w-8" />, name: "Pediatrics" },
              { icon: <Stethoscope className="h-8 w-8" />, name: "General Medicine" },
              { icon: <Award className="h-8 w-8" />, name: "Dermatology" },
              { icon: <Clock className="h-8 w-8" />, name: "Neurology" },
              { icon: <CheckCircle className="h-8 w-8" />, name: "Gynecology" },
              { icon: <MessageCircle className="h-8 w-8" />, name: "Psychology" },
              { icon: <Calendar className="h-8 w-8" />, name: "Ophthalmology" },
              { icon: <Users className="h-8 w-8" />, name: "Family Medicine" },
              { icon: <Star className="h-8 w-8" />, name: "Dentistry" },
              { icon: <Shield className="h-8 w-8" />, name: "Immunology" },
            ].map((specialty, index) => (
              <div key={index} className="p-4 bg-white dark:bg-brand-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${100 * index}ms` }}>
                <div className="p-3 mx-auto mb-3 bg-brand-100 dark:bg-brand-700 rounded-full inline-flex">
                  <div className="text-brand-600 dark:text-brand-200">
                    {specialty.icon}
                  </div>
                </div>
                <h3 className="font-medium text-brand-800 dark:text-brand-100">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-brand-50 dark:bg-brand-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in text-brand-700 dark:text-brand-300">
            Why Choose Our Platform
          </h2>
          <p className="font-light text-lg text-brand-600 dark:text-brand-400 mb-12 animate-fade-in delay-100 max-w-3xl mx-auto">
            We've designed our service with both patients and healthcare providers in mind, offering unparalleled benefits
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-brand-100 dark:from-brand-800 dark:to-brand-700 p-8 rounded-xl shadow-lg animate-slide-up delay-100 group hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-brand-200 dark:bg-brand-600 rounded-full inline-flex group-hover:bg-brand-300 dark:group-hover:bg-brand-500 transition-colors duration-300">
                <Calendar className="h-10 w-10 text-brand-700 dark:text-brand-100" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-brand-700 dark:text-brand-100">Seamless Scheduling</h3>
              <p className="text-brand-600 dark:text-brand-300 mt-2">
                Book appointments in just a few clicks with our intuitive interface. Receive instant confirmations and reminders.
              </p>
              <ul className="mt-4 text-left space-y-2">
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>24/7 online booking availability</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Automated appointment reminders</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Easy rescheduling options</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-brand-100 dark:from-brand-800 dark:to-brand-700 p-8 rounded-xl shadow-lg animate-slide-up delay-200 group hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-brand-200 dark:bg-brand-600 rounded-full inline-flex group-hover:bg-brand-300 dark:group-hover:bg-brand-500 transition-colors duration-300">
                <Shield className="h-10 w-10 text-brand-700 dark:text-brand-100" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-brand-700 dark:text-brand-100">Verified Professionals</h3>
              <p className="text-brand-600 dark:text-brand-300 mt-2">
                Connect with certified doctors and healthcare providers. All professionals undergo thorough verification.
              </p>
              <ul className="mt-4 text-left space-y-2">
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Credential verification process</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Detailed professional profiles</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Specialization information</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-brand-100 dark:from-brand-800 dark:to-brand-700 p-8 rounded-xl shadow-lg animate-slide-up delay-300 group hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-brand-200 dark:bg-brand-600 rounded-full inline-flex group-hover:bg-brand-300 dark:group-hover:bg-brand-500 transition-colors duration-300">
                <MessageCircle className="h-10 w-10 text-brand-700 dark:text-brand-100" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-brand-700 dark:text-brand-100">Patient-Centered Care</h3>
              <p className="text-brand-600 dark:text-brand-300 mt-2">
                Read verified reviews from real patients and make informed decisions about your healthcare journey.
              </p>
              <ul className="mt-4 text-left space-y-2">
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Verified patient reviews</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Secure messaging system</span>
                </li>
                <li className="flex items-center text-brand-600 dark:text-brand-300">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-500 dark:text-brand-400" />
                  <span>Digital health records access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - New */}
      <div className="py-28 bg-white dark:bg-brand-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in text-brand-700 dark:text-brand-300">
            How It Works
          </h2>
          <p className="text-lg font-light text-brand-600 dark:text-brand-400 mb-12 animate-fade-in delay-100 max-w-3xl mx-auto">
            Getting the care you need is simple with our streamlined process
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 dark:from-brand-700 dark:via-brand-600 dark:to-brand-700 transform -translate-y-1/2 rounded-full"></div>

            {[
              { icon: <Users className="h-8 w-8" />, title: "Create Account", desc: "Sign up in seconds with your email" },
              { icon: <Calendar className="h-8 w-8" />, title: "Find & Book", desc: "Search for specialists and book instantly" },
              { icon: <MessageCircle className="h-8 w-8" />, title: "Consultation", desc: "Meet in-person or via telemedicine" },
              { icon: <Heart className="h-8 w-8" />, title: "Follow-up", desc: "Manage care and schedule follow-ups" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${200 * index}ms` }}>
                <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 rounded-full text-white shadow-lg mb-4">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-brand-800 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-300 font-bold shadow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-700 dark:text-brand-300">{step.title}</h3>
                <p className="text-brand-600 dark:text-brand-400 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-brand-50 to-white dark:from-brand-900 dark:to-brand-950">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in text-brand-700 dark:text-brand-300">
            Patient Success Stories
          </h2>
          <p className="text-brand-600 dark:text-brand-400 mb-12 animate-fade-in delay-100 max-w-3xl mx-auto">
            Read authentic experiences from patients who have transformed their healthcare journey with our platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The platform is so intuitive! I booked an appointment with a specialist in minutes, received reminders, and even had a video consultation option. Truly transformed my healthcare experience.",
                name: "Sarah L.",
                title: "Busy Professional",
                rating: 5
              },
              {
                quote: "After struggling to find a specialist for my condition, this platform connected me with the perfect doctor. The verified reviews helped me make an informed choice. I've already recommended it to my family.",
                name: "John D.",
                title: "Chronic Care Patient",
                rating: 5
              },
              {
                quote: "As someone who travels frequently, having my medical records and appointment history in one place is invaluable. The follow-up reminders and secure messaging with my doctor have improved my ongoing care.",
                name: "Emily R.",
                title: "Frequent Traveler",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-brand-800 p-8 rounded-lg shadow-lg animate-slide-up delay-100 border border-brand-100 dark:border-brand-700 hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${200 * index}ms` }}>
                <div className="mb-4 flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-600 fill-brand-600" />
                  ))}
                </div>
                <p className="text-brand-600 dark:text-brand-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4">
                  <p className="font-bold text-brand-700 dark:text-brand-200">{testimonial.name}</p>
                  <p className="text-brand-500 dark:text-brand-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-56 bg-gradient-to-r from-brand-600 to-brand-700 dark:from-brand-500 dark:to-brand-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in">
            Take Control of Your Health Today
          </h2>
          <p className="font-light text-lg text-brand-100 mb-8 animate-fade-in delay-100 max-w-2xl mx-auto">
            Join thousands of satisfied patients and healthcare providers on our platform. Experience healthcare reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-50 shadow-lg group transition-all duration-300">
              <Link href="/dashboard">
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <Users className="h-5 w-5" />
                  Access Dashboard
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-brand-900 text-white hover:bg-brand-800 shadow-lg group transition-all duration-300">
              <Link href="/book">
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <Calendar className="h-5 w-5" />
                  Book Your First Appointment
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - New */}
      <footer className="bg-brand-950 text-brand-300 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-brand-500" />
                <h3 className="text-xl font-bold text-white">HealthConnect</h3>
              </div>
              <p className="text-brand-400 mb-4">Making healthcare accessible for everyone, everywhere.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">About Us</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">How It Works</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">For Patients</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">For Providers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">Blog</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-500" />
                  <span className="text-brand-400">support@healthconnect.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-500" />
                  <span className="text-brand-400">+1 (800) 123-4567</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button size="sm" className="bg-brand-500 hover:bg-brand-400 text-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-800 mt-8 pt-8 text-center text-brand-500">
            <p>© 2025 HealthConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}