import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", ...fontFamily.sans],
        aeonik: ["var(--font-aeonik)", ...fontFamily.sans],
      },
      screens: {
        xs: { min: "300px", max: "540px" },
        xs1: { min: "300px", max: "400px" },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
