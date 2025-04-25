/** @type {import('tailwindcss').Config} */
import { colors, surfaces, darkSurfaces } from './src/styles/colors';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // Surface colors
        surface: surfaces,
        'dark-surface': darkSurfaces,
        // Text colors
        text: {
          light: {
            primary: colors.neutral[900],
            secondary: colors.neutral[600],
          },
          dark: {
            primary: colors.neutral[50],
            secondary: colors.neutral[200],
            DEFAULT: colors.neutral[50]
          }
        }
      },
    },
  },
  plugins: [],
}