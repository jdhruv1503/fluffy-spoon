/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"'],
        poppins: ['"Poppins"'],
      },
      backgroundImage: {
        "green-svg": "url('/src/images/green_bg.svg')",
      },
    },
  },
  plugins: [],
};
