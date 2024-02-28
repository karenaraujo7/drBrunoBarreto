import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-manrope)',
        alt: 'var(--font-roboto)'
      }
    },

    colors: {
      blue: {
        50: '#e8f0f9',
        100:'#dce8f6',
        200: '#b6cfeb',
        300: '#1565c0', // azul claro
        400: '#135bad',
        500: '#1f3a51',
        600: '#104c90',
        700: '#3d517f', // azul input
        800: '#1d2538', // azul da pagina
        900: '#0c2046', // Azul escuro
      },

      gray: {
        50: '#fafafa',
        100:'#e5e5e5',
        200: '#f3f3f3',
        300: '#cfcfd0',
        400: '#bababb',
        500: '#a6a6a6',
        600: '#9b9b9c',
        700: '#7c7c7d', 
        800: '#5d5d5e', 
        900: '#484849',
      },

      brown: {
        50: '#faf5ef',
        100:'#f8f0e6',
        200: '#f0e0cc',
        300: '#cf9c5b', // marrom do input
        400: '#ba8c52',
        500: '#a67d49',
        600: '#9b7544',
        700: '#7c5e37', 
        800: '#5d4629', 
        900: '#483720',
      },

      black: {
        50:  '#e6e6e6',
        100: '#d9d9d9',
        200: '#4D4D4D',
        300: '#000000', 
        400: '#000000',
        500: '#000000',
        600: '#000000',
        700: '#000000', 
        800: '#000000', 
        900: '#000000',
      },

      green: {
        50:  '#e9eeee',
        100: '#dee5e5',
        200: '#bac9c9',
        300: '#225050', // verde claro 
        400: '#1f4848',
        500: '#1b4040',
        600: '#1a3c3c',
        700: '#143030', // verd escuro
        800: '#0f2424', 
        900: '#0c1c1c',
      },
    }
  },
  darkMode: "class",
  // plugins: [nextui()]
  plugins: [nextui()]
}
export default config
