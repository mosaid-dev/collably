/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Scans all .html files in the root
    './src/**/*.js', // Scans all .js files in the src directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  darkMode: 'class', // Enable dark mode by adding 'dark' class
  content: ["./*.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

