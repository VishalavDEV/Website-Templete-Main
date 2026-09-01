/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        primaryText: "#172033",
        secondaryText: "#64748B",
        primaryAccent: "#6366F1",
        secondaryAccent: "#38BDF8",
        lightAccent: "#EEF2FF",
        customBorder: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
