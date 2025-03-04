"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, Lock, User, KeyIcon, EyeOff, Eye, Moon, Sun, Heart } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import InstantThemeChangerBtn from "@/components/InstantThemeChangerBtn";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fix hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-brand-900 via-brand-300 to-brand-900 dark:from-brand-950 dark:via-black dark:to-brand-950 relative overflow-hidden">
      {/* Decorative elements to match homepage */}
      <div className="absolute top-1/4 left-10 h-24 w-24 rounded-full bg-brand-400 dark:bg-brand-700 opacity-40 animate-float delay-100"></div>
      <div className="absolute bottom-1/4 right-10 h-20 w-20 rounded-full bg-brand-500 dark:bg-brand-700 opacity-40 animate-float delay-300"></div>
      <div className="absolute top-1/3 right-1/4 h-16 w-16 rounded-full bg-brand-200 dark:bg-brand-700 opacity-30 animate-float delay-700"></div>

      <InstantThemeChangerBtn />

      <motion.div
        className="w-full max-w-lg z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ...springTransition }}
      >
        {/* Logo and Branding */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ...springTransition }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-16 w-16 rounded-full bg-white dark:bg-brand-950 mx-auto mb-3 flex items-center justify-center shadow-lg p-3"
              animate={{
                boxShadow: ["0 0 0 0px rgba(79, 70, 229, 0.2)", "0 0 0 10px rgba(79, 70, 229, 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Heart className="h-10 w-10 text-brand-600 dark:text-brand-100" />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-5xl font-bold text-brand-950 dark:text-brand-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Health~Point
          </motion.h1>
          <motion.p
            className="mt-4 text-brand-800 dark:text-brand-200 text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Your health, our priority
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ...springTransition }}
        >
          <Card className="p-2 border-none shadow-lg bg-white  dark:bg-brand-950/60 backdrop-blur-sm transition-all duration-500">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="pb-2">
                <TabsList className="grid grid-cols-2 gap-1 h-12 w-full bg-brand-100 dark:bg-brand-800">
                  <TabsTrigger
                    value="login"
                    className={`z-10 relative text-brand-700 dark:text-brand-100 py-2 ${activeTab === "login" ? "bg-white dark:bg-brand-950" : ""}`}
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className={`z-10 relative text-brand-700 dark:text-brand-100 py-2 ${activeTab === "register" ? "bg-white dark:bg-brand-950" : ""}`}
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="pt-3 h-[23rem] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === "login" && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-brand-700 dark:text-brand-100">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-200" />
                          <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="password" className="text-brand-700 dark:text-brand-100">Password</Label>
                          <Link href="/forgot-password" className="text-xs text-brand-600 dark:text-brand-200 hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal text-brand-600 dark:text-brand-100">Remember me for 30 days</Label>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full group bg-brand-600 dark:bg-brand-700 hover:bg-brand-500 dark:hover:bg-brand-600 text-white">
                          Sign In
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                              repeatDelay: 1
                            }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}

                  {activeTab === "register" && (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="fullname" className="text-brand-700 dark:text-brand-300">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                          <Input
                            id="fullname"
                            placeholder="John Doe"
                            className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-email" className="text-brand-700 dark:text-brand-300">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                          <Input
                            id="reg-email"
                            placeholder="name@example.com"
                            type="email"
                            className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-password" className="text-brand-700 dark:text-brand-300">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                          <Input
                            id="reg-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm font-normal text-brand-600 dark:text-brand-400">
                          I agree to the{" "}
                          <Link href="/terms" className="text-brand-600 dark:text-brand-300 hover:underline">terms of service</Link>
                          {" "}and{" "}
                          <Link href="/privacy" className="text-brand-600 dark:text-brand-300 hover:underline">privacy policy</Link>
                        </Label>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full group bg-brand-600 dark:bg-brand-700 hover:bg-brand-500 dark:hover:bg-brand-600 text-white">
                          Create Account
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                              repeatDelay: 1
                            }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>

              <CardFooter className="flex flex-col pt-2 dark:border-gray-700">
                <div className="grid grid-cols-1 gap-4 w-full">
                  <Button variant="outline" className="bg-white text-brand-700 hover:bg-brand-100 dark:bg-brand-800 dark:text-brand-200 dark:border-brand-700 dark:hover:bg-brand-700 shadow-md transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Continue with Google
                    </span>
                  </Button>
                </div>
              </CardFooter>
            </Tabs>
          </Card>
        </motion.div>

        <motion.p
          className="text-center text-sm text-brand-800 dark:text-brand-300 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-brand-600 dark:text-brand-300 hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="text-brand-600 dark:text-brand-300 hover:underline">Privacy Policy</Link>.
        </motion.p>
      </motion.div>

      {/* Add floating animation */}
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