/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
    fontFamily: {
      sans: ["Noto Sans HK", "sans-serif"],
    }

  },
  plugins: [],
}

