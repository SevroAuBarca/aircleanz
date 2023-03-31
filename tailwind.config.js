/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('./src/assets/fondo.jpg')",
        user: 'url("https://api.iconify.design/material-symbols:person-pin.svg")',
        pass: 'url("https://api.iconify.design/ri:lock-password-fill.svg")',
      },
      fontFamily: {
        nunito: ["nunito"],
      },
    },
  },
  plugins: [],
};
