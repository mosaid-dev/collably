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