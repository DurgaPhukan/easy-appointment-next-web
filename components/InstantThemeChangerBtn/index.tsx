"use client"
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

const InstantThemeChangerBtn = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    < button
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
    </button >
  )
}

export default InstantThemeChangerBtn