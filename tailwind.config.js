/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Eudoxus-regular": ["Eudoxus-Sans"],
      },
      colors: {
        "dark-blue": "#001738",
        "light-blue": "#1977F31A",
      },
    },
  },
  plugins: [],
};
