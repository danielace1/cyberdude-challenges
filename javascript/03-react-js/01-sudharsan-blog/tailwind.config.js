/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#273c48",
        cyan: "#13e5c0",
        backGround: "#19303d",
      },
    },
  },
  plugins: [],
};
