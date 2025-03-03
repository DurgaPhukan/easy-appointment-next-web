// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // brand: {
        //   50: "#f0fdf4",  // Lightest shade
        //   100: "#dcfce7",
        //   200: "#bbf7d0",
        //   300: "#86efac",
        //   400: "#4ade80",  // Lighter shade
        //   500: "#22c55e",  // Main color
        //   600: "#16a34a",  // Darker shade
        //   700: "#15803d",
        //   800: "#166534",  // Even darker
        //   900: "#14532d",
        //   950: "#052e16",  // Darkest shade
        // },


        brand: {
          // Primary Blue based on #0052b2 - Trustworthy, professional, calm
          50: "#f0f6ff",   // Lightest shade - backgrounds
          100: "#e0eeff",  // Light shade - subtle backgrounds, borders
          200: "#c0daff",  // Light accent elements
          300: "#94bfff",  // Secondary elements
          400: "#659eff",  // Highlights
          500: "#3d7df7",  // Brighter primary - active states
          600: "#0052b2",  // Primary brand color - buttons, important elements
          700: "#004499",  // Darker primary - hover states, focus
          800: "#003780",  // Very dark accent
          900: "#002d66",  // Footer backgrounds, dark sections
          950: "#001f47",  // Darkest shade - dark mode backgrounds

          // Enhanced accent colors that complement #0052b2
          teal: {
            100: "#e0f7f8",
            400: "#00b1c2",
            600: "#008999",
          },

          coral: {
            100: "#ffede8",
            400: "#ff7961",
            600: "#e54e3d",
          },

          lavender: {
            100: "#f3f0ff",
            400: "#9c82e3",
            600: "#7655d6",
          },

          // Additional complementary accent (gold/amber)
          amber: {
            100: "#fff8e0",
            400: "#ffbb38",
            600: "#e59c00",
          }
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}