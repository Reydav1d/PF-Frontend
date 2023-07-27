/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        700: "700px",
        600: "600px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
