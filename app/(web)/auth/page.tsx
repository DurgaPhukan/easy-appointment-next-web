"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, Lock, User, KeyIcon, EyeOff, Eye, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

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
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-200 dark:bg-[#111111]">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-900 dark:bg-[#081c15]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />


        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-900 dark:bg-[#081c15]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-900 dark:bg-[#081c15]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/80 dark:bg-brand-900 shadow-md hover:shadow-lg transition-all duration-300 z-10"
      >
        <motion.div
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-amber-400" />
          ) : (
            <Moon className="h-5 w-5 text-slate-700" />
          )}
        </motion.div>
      </button>

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
              className="h-16 w-16 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center"
              animate={{
                boxShadow: ["0 0 0 0px rgba(79, 70, 229, 0.2)", "0 0 0 10px rgba(79, 70, 229, 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <motion.div
                className="h-10 w-10 rounded-full bg-primary/40 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  className="h-5 w-5 rounded-full bg-primary"
                  animate={{
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-5xl font-bold text-brand-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Easy Appointment
          </motion.h1>
          <motion.p
            className="mt-4 text-brand-800 dark:text-gray-400 text-xl font-light"
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
          <Card className="p-2 border-none shadow-sm shadow-brand-100/50 dark:shadow-none dark:bg-[#081c15/10] dark:backdrop-blur-sm transition-all duration-500">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="pb-2">
                <TabsList className="grid grid-cols-2 gap-1 h-12 w-full bg-gray-100 dark:bg-[#111111]">
                  <TabsTrigger
                    value="login"
                    className={`z-10 relative text-brand-900 dark:text-white py-2 ${activeTab === "login" ? "border-2 border-primary" : ""}`}
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className={`z-10 relative text-brand-900 dark:text-white py-2 ${activeTab === "register" ? "border-2 border-primary" : ""}`}
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="pt-6 h-[20rem] overflow-y-auto">
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
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            className="pl-10 transition-all duration-300 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                          <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 transition-all duration-300 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal text-gray-600 dark:text-gray-400">Remember me for 30 days</Label>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full group">
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
                        <Label htmlFor="fullname" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="fullname"
                            placeholder="John Doe"
                            className="pl-10 transition-all duration-300 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-email" className="text-gray-700 dark:text-gray-300">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="reg-email"
                            placeholder="name@example.com"
                            type="email"
                            className="pl-10 transition-all duration-300 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reg-password" className="text-gray-700 dark:text-gray-300">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="reg-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 transition-all duration-300 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            whileTap={{ scale: 0.95 }}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">terms of service</Link>
                          {" "}and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">privacy policy</Link>
                        </Label>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full group">
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
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Button variant="outline" className="w-9 transition-all duration-300 hover:bg-gray-100 dark:bg-brand-950 dark:text-white dark:border-gray-600 dark:hover:bg-brand-900 rounded-full">
                    G
                  </Button>
                </div>
              </CardFooter>
            </Tabs>
          </Card>
        </motion.div>

        <motion.p
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </motion.p>
      </motion.div>
    </div>
  );
}