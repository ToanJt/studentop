/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        line: "#EDEFF2",
        primary: "#4D5E80",
        secondary: "#6B7A99",
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
});
