/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
        extend: {
          colors: {
            navy: {
              900: '#0a192f',
            },
            'lightest-slate': '#ccd6f6',
            slate: {
              50: '#f8fafc',
              400: '#8892b0',
            },
            green: {
              300: '#64ffda',
            },
            blue: {
              300: '#93c5fd',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            }
          },
          fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
          }
        }
      },
  plugins: [],
}