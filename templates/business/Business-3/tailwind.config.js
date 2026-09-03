/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1033",
        primaryText: "#F9FAFB",
        secondaryText: "#C4B5FD",
        primaryAccent: "#7C3AED",
        secondaryAccent: "#4C1D95",
        lightAccent: "#2E1A47",
        customBorder: "#3B2163",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
