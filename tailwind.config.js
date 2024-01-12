/** @type {import('tailwindcss').Config} */
import Flowbite from 'flowbite/plugin';

export default {
  darkMode: 'class',
  content: [
    './*/*.html', './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    Flowbite
  ],
}
