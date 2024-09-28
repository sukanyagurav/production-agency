/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".group-nth-before": {
          "&:not(:last-child)::after": {
            content:'""',
            position: "absolute",
            right: "2rem",
            top: "28%",
            display: "block",
            width: "0.5px",
            height: "35px",
            background: "#BDBDBD",
          },
        },
      });
    },
  ],
};
