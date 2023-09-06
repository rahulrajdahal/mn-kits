/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          900: "#030913",
          700: "#1C2A3A",
          600: "#304254",
          500: "#445668",
          400: "#61758A",
          200: "#CAD5E0",
        },
        blue: "#2D49D7",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
