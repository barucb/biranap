const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary-green), <alpha-value>)",
          red: "hsl(var(--primary-red), <alpha-value>)",
          white: "hsl(var(--primary-white), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-lg), <alpha-value>)",
          db: "hsl(var(--secondary-db), <alpha-value>)",
          red: "hsl(var(--secondary-red), <alpha-value>)",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary-lg), <alpha-value>)",
          foreground: "hsl(var(--tertiary-dg), <alpha-value>)",
          foreground: "hsl(var(--tertiary-lr), <alpha-value>)",
        },
      }
    },
  },
  plugins: [nextui()],
}