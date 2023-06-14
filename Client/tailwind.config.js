/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#ffff",
        tertiary: "#3160D8",
        acent: "#F9FBFF",
        acentsecondary: "#F6F6F6",
      },
    },
  },

  // [require("daisyui")
  plugins: ["flowbite/plugin"],
};
