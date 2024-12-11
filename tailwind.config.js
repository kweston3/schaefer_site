// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Scan source files
    "./_site/**/*.{html,js,jsx,ts,tsx}", // Scan generated HTML in _site
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
