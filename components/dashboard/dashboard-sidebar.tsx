// src/components/dashboard/dashboard-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  Home,
  Settings,
  CreditCard,
  PlusCircle,
} from "lucide-react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export function DashboardSidebar({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/dashboard/appointments",
      title: "My Appointments",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      href: "/book",
      title: "Book Appointment",
      icon: <PlusCircle className="h-5 w-5" />,
    },
    {
      href: "/dashboard/history",
      title: "Medical History",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      href: "/dashboard/profile",
      title: "Profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      href: "/dashboard/billing",
      title: "Billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <nav
      className={cn(
        "flex h-screen w-60 flex-col border-r bg-background p-4",
        className
      )}
      {...props}
    >
      <div className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
            asChild
          >
            <Link href={item.href} className="flex items-center gap-3">
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}