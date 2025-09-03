/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
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
        // Brand Primary Colors
        primary: {
          DEFAULT: "#E94057", // Primary Pink
          pink: "#E94057",
          orange: "#F27121",
          foreground: "#FFFFFF",
          hover: "#C72E46",
        },
        // Brand Secondary Colors
        secondary: {
          DEFAULT: "#FF6F91", // Secondary Light Pink
          pink: "#FF6F91",
          orange: "#FFA07A",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Neutral Colors
        neutral: {
          dark: "#4A4A4A", // Dark Gray for headings
          medium: "#555555", // Medium Gray for sub-labels
          light: "#F7F7F7", // Light Gray for background blocks
          white: "#FFFFFF",
        },
        // Button Colors
        button: {
          primary: {
            bg: "#E94057",
            text: "#FFFFFF",
            hover: "#C72E46",
          },
          secondary: {
            border: "#E94057",
            text: "#E94057",
            hover: "#FFF0F3",
          },
        },
        // Accent Colors
        accent: {
          success: "#28A745",
          warning: "#FFC107",
          error: "#DC3545",
          info: "#007BFF",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "#DC3545",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #E94057 0%, #F27121 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        caveat: ["Caveat", "Poppins"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
