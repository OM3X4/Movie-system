/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary : "#1c1e31",
          secondry : "#282b45",
          purple : "#9747ff",
          dark_background : "#0b0c17",
          search: "#27293c",
          navbar: "#181a2b",
          
        }
      },
    },
    plugins: [],
  }

