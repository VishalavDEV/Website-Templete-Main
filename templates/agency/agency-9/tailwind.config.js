/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-paper': '#F3EEE6',
        'soft-cream': '#FAF7F1',
        'burnt-orange': '#D65F3F',
        'vermilion': '#B94732',
        'dusty-lilac': '#B8A8BD',
        'deep-plum': '#332832',
        'charcoal': '#2B2727',
        'muted-grey': '#77716D',
        'border-agency': '#CFC7BE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        condensed: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
