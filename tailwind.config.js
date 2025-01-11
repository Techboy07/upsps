/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-heading": "#333366",
        "text-body": "#202020",
      },
    },
  },
  plugins: [],
};
