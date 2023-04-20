/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/tailwind-next-app/pages/**/*.{js,ts,jsx,tsx}",
    "./apps/tailwind-next-app/components/**/*.{js,ts,jsx,tsx}",
    "./apps/tailwind-next-app/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--robotoflex-font)", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.1, 0.7, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
