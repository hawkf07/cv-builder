/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,css,html}"],
  theme: {
    extend: {
      colors: { primary: colors.blue[400], secondary: colors.blue[300] },
    },
  },
  plugins: [],
};
