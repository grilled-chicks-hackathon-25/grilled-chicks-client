/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      headlineLarge: [
        '64px',
        {
          fontWeight: 800,
          lineHeight: '80px',
        },
      ],
      headlineMedium: [
        '48px',
        {
          fontWeight: 700,
          lineHeight: '64px',
        },
      ],
      headlineSmall: [
        '40px',
        {
          fontWeight: 600,
          lineHeight: '52px',
        },
      ],
      titleLarge: [
        '36px',
        {
          fontWeight: 600,
          lineHeight: '48px',
        },
      ],
      titleMedium: [
        '24px',
        {
          fontWeight: 600,
          lineHeight: '32px',
        },
      ],
      titleSmall: [
        '16px',
        {
          fontWeight: 600,
          lineHeight: '24px',
        },
      ],
      bodyLarge: [
        '20px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
      bodyMedium: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '20px',
        },
      ],
      bodySmall: [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '18px',
        },
      ],
      bodyTiny: [
        '12px',
        {
          fontWeight: 400,
          lineHeight: '16px',
        },
      ],
      labelLarge: [
        '20px',
        {
          fontWeight: 500,
          lineHeight: '24px',
        },
      ],
      labelMedium: [
        '16px',
        {
          fontWeight: 500,
          lineHeight: '20px',
        },
      ],
      labelSmall: [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '18px',
        },
      ],
    },
    screens: {
      fold: { max: '375px' },
      sm: { max: '719px' },
      md: { min: '720px', max: '1419px' },
      lg: { min: '1420px' },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
