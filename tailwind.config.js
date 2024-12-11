module.exports = {
  content: [
    "./src/**/*.html", // All HTML files in 'src' folder
    "./_site/**/*.html", // All HTML files in '_site' folder
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
