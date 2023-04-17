/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/tailwind-next-app/pages/**/*.{js,ts,jsx,tsx}",
    "./apps/tailwind-next-app/components/**/*.{js,ts,jsx,tsx}",
    "./apps/tailwind-next-app/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      blue: {
        'primary': {
          DEFAULT: '#2596be',
          light: '#2596be',
          dark: 'white',
        },
        'secondary': {
          DEFAULT: '#f3f4f6',
          light: '#f3f4f6',
          dark: '#111827',
        },
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "text-white": "#fff",
      gray: "#8492a6",
      "gray-light": "#d3dce6", 
    },
    fontFamily: {
      sans: ["var(--robotoflex-font)", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
