/** @type {import('tailwindcss').Config} */
import Flowbite from 'flowbite/plugin';

export default {
  darkMode: 'class',
  content: [
    './index.html', './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    Flowbite
  ],
}
