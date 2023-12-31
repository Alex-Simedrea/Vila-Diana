import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'md': '1.25rem',
        'large': '3rem',
      },
      colors: {
        text: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        background: {
          50: '#ffffff',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        primary: {
          50: '#eafaf1',
          100: '#d6f5e3',
          200: '#adebc7',
          300: '#84e1ab',
          400: '#5bd78f',
          500: '#32cd73',
          600: '#28a45c',
          700: '#1e7b45',
          800: '#14522e',
          900: '#0a2917',
          950: '#05150b',
        },
        secondary: {
          50: '#f0f5f2',
          100: '#e1eae5',
          200: '#c3d5ca',
          300: '#a5c0b0',
          400: '#87ab96',
          500: '#69967c',
          600: '#547863',
          700: '#3f5a4a',
          800: '#2a3c31',
          900: '#151e19',
          950: '#0a0f0c',
        },
        accent: {
          50: '#fff2e5',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#cc6600',
          700: '#994c00',
          800: '#663300',
          900: '#331a00',
          950: '#1a0d00',
        },
      },
    },
  },
  plugins: [],
};
export default config;
