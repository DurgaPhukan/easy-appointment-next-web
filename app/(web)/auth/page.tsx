"use client";
import { QueryProvider } from "@/app/components/QueryProvider";
import InstantThemeChangerBtn from "@/components/InstantThemeChangerBtn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarIcon,
  CheckCircle,
  Eye,
  EyeOff,
  Heart,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import
import React, { useEffect, useState } from "react";
import GoogleOAuthButton from "./component/GoogleOAuthButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  email: string;
  password: string;
}

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [mounted, setMounted] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // const [date, setDate] = useState<Date | null>(null);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // email verify states
  const [isVerified, setIsVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const saveAuthToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) =>
      axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/login`, data),
    onSuccess: (response) => {
      saveAuthToken(response.data.accessToken);
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormData) =>
      axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/register`, data),
    onSuccess: (response) => {
      console.log("User Created Successfully", response);
      setIsLogin(true);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  const verifyEmailMutation = useMutation({
    mutationFn: (email: string) =>
      axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/send-otp`, {
        email,
      }),
    onSuccess: () => {
      setEmail(email);
      setIsModalOpen(true);
      startResendTimer();
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: ({ otp, email }: { otp: string; email: string }) =>
      axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/verify-otp`, {
        otp,
        email,
      }),
    onSuccess: () => {
      setIsVerified(true);
      setIsModalOpen(false);
      setResendTimer(30);
      setIsResendDisabled(true);
    },
  });

  const startResendTimer = () => {
    setIsResendDisabled(true);
    let timeLeft = 30;
    setResendTimer(timeLeft);
    const interval = setInterval(() => {
      timeLeft -= 1;
      setResendTimer(timeLeft);
      if (timeLeft === 0) {
        clearInterval(interval);
        setIsResendDisabled(false);
      }
    }, 1000);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    try {
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (payload.exp * 1000 > Date.now()) {
          router.push("/dashboard");
        } else {
          localStorage.removeItem("authToken");
        }
      }
    } catch (error) {
      console.log("Error !", error);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    loginMutation.mutate(
      { email, password },
      {
        onError: (error) => {
          console.error("Login failed:", error);
        },
      }
    );
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const data: RegisterFormData = {
      email,
      password: formData.get("password") as string,
    };

    registerMutation.mutate(data, {
      onError: (error) => {
        console.error("Registration failed:", error);
      },
    });
  };

  const handleEmailVerification = () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    verifyEmailMutation.mutate(email);
  };

  return (
    <QueryProvider>
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
                  boxShadow: [
                    "0 0 0 0px rgba(79, 70, 229, 0.2)",
                    "0 0 0 10px rgba(79, 70, 229, 0)",
                  ],
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
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <CardHeader className="pb-2">
                  <TabsList className="grid grid-cols-2 gap-1 h-12 w-full bg-brand-100 dark:bg-brand-800">
                    <TabsTrigger
                      value="login"
                      className={`z-10 relative text-brand-700 dark:text-brand-100 py-2 ${
                        activeTab === "login"
                          ? "bg-white dark:bg-brand-950"
                          : ""
                      }`}
                    >
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger
                      value="register"
                      className={`z-10 relative text-brand-700 dark:text-brand-100 py-2 ${
                        activeTab === "register"
                          ? "bg-white dark:bg-brand-950"
                          : ""
                      }`}
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
                        <form
                          onSubmit={handleLogin}
                          className="flex flex-col gap-4"
                        >
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-brand-700 dark:text-brand-100"
                            >
                              Email
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-200" />
                              <Input
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                type="email"
                                className="pl-10 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <Label
                                htmlFor="password"
                                className="text-brand-700 dark:text-brand-100"
                              >
                                Password
                              </Label>
                              <Link
                                href="/forgot-password"
                                className="text-xs text-brand-600 dark:text-brand-200 hover:underline"
                              >
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                              <Input
                                id="password"
                                name="password"
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
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </motion.button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <Label
                              htmlFor="remember"
                              className="text-sm font-normal text-brand-600 dark:text-brand-100"
                            >
                              Remember me for 30 days
                            </Label>
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              className="w-full group bg-brand-600 dark:bg-brand-700 hover:bg-brand-500 dark:hover:bg-brand-600 text-white"
                            >
                              Sign In
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  ease: "easeInOut",
                                  repeatDelay: 1,
                                }}
                              >
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </motion.div>
                            </Button>
                          </motion.div>
                        </form>
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
                        <form
                          onSubmit={handleRegister}
                          className="flex flex-col gap-4"
                        >
                          {/* email part */}
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-brand-700 dark:text-brand-300"
                            >
                              Email
                            </Label>
                            <div className="relative flex items-center gap-2">
                              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                              <Input
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                type="email"
                                className="pl-10 flex-1 transition-all duration-300 border-brand-200 dark:border-brand-700 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                                disabled={isVerified}
                              />
                              {isVerified ? (
                                <CheckCircle className="text-green-500 h-5 w-5" />
                              ) : (
                                <Button
                                  size="sm"
                                  onClick={handleEmailVerification}
                                >
                                  Verify
                                </Button>
                              )}
                            </div>
                            <Dialog
                              open={isModalOpen}
                              onOpenChange={(open) => {
                                if (!open && !isVerified) {
                                  setIsModalOpen(false);
                                }
                              }}
                            >
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Enter the 6-digit OTP
                                  </DialogTitle>
                                </DialogHeader>
                                <Input
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                                  maxLength={6}
                                  className="text-center tracking-widest text-lg"
                                />
                                <div className="flex justify-between items-center mt-4">
                                  <Button
                                    size="sm"
                                    onClick={() =>
                                      verifyOtpMutation.mutate({ otp, email })
                                    }
                                    disabled={otp.length !== 6}
                                  >
                                    Submit
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={handleEmailVerification}
                                    disabled={isResendDisabled}
                                  >
                                    Resend OTP{" "}
                                    {isResendDisabled
                                      ? `(${resendTimer}s)`
                                      : ""}
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="password"
                              className="text-brand-700 dark:text-brand-300"
                            >
                              Password
                            </Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500 dark:text-brand-400" />
                              <Input
                                id="password"
                                name="password"
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
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </motion.button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label
                              htmlFor="terms"
                              className="text-sm font-normal text-brand-600 dark:text-brand-400"
                            >
                              I agree to the{" "}
                              <Link
                                href="/terms"
                                className="text-brand-600 dark:text-brand-300 hover:underline"
                              >
                                terms of service
                              </Link>{" "}
                              and{" "}
                              <Link
                                href="/privacy"
                                className="text-brand-600 dark:text-brand-300 hover:underline"
                              >
                                privacy policy
                              </Link>
                            </Label>
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              className="w-full group bg-brand-600 dark:bg-brand-700 hover:bg-brand-500 dark:hover:bg-brand-600 text-white"
                            >
                              Create Account
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  ease: "easeInOut",
                                  repeatDelay: 1,
                                }}
                              >
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </motion.div>
                            </Button>
                          </motion.div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>

                <CardFooter className="flex flex-col pt-2 dark:border-gray-700">
                  <div className="grid grid-cols-1 gap-4 w-full">
                    <GoogleOAuthButton />
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
            <Link
              href="/terms"
              className="text-brand-600 dark:text-brand-300 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-brand-600 dark:text-brand-300 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </motion.p>
        </motion.div>

        {/* Add floating animation */}
        <style jsx global>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    </QueryProvider>
  );
}
