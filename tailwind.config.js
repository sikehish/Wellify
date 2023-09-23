/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050605',
        'background': '#e6e8e3',
        'primary': '#374436',
        'secondary': '#e1f1d0',
        'accent': '#6b8577',
      }
    },
    
  },
  plugins: [],
}