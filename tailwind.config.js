/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      background: {
        base: {
          default: "#F4F4F6",
          default_pressed: "#E7E7E9",
          elevated: "#FFFFFF",
          elevated_pressed: "#F4F4F6",
          border: "#E7E7E9",
        },
        accent: {
          default: "#007AFF",
          default_pressed: "#0062CC",
          elevated: "#F0F0FF",
          elevated_pressed: "#C6EEF8",
        },
        positive: {
          default: "#34CA94",
          default_pressed: "#00B887",
          elevated: "#D5FAED",
          elevated_pressed: "#CBF5E3",
          border: "#00B887",
        },
        negative: {
          default: "#FF3B30",
          default_pressed: "#B2231A",
          elevated: "#FFD6D2",
          elevated_pressed: "#FF9C98",
          border: "#B2231A",
        },
        warning: {
          default: "#F5C400",
          default_pressed: "#CCA300",
          elevated: "#FFF3C2",
          elevated_pressed: "#FFE270",
          border: "#CCA300",
        },
      },
      contents: {
        default: {
          primary: "#101016",
          secondary: "#5A5A66",
          tertiary: "#777783",
          quaternary: "#9797A0",
        },
        status: {
          unselected: "#B2B2BD",
          unabled: "#CFCFDA",
          accent: "#34CA94",
          positive: "#007AFF",
          negative: "#FF3B30",
          warning: "#F5C400",
        },
      },
    },
    fontSize: {
      headlineLarge: [
        "64px",
        {
          fontWeight: 800,
          lineHeight: "80px",
        },
      ],
      headlineMedium: [
        "48px",
        {
          fontWeight: 700,
          lineHeight: "64px",
        },
      ],
      headlineSmall: [
        "40px",
        {
          fontWeight: 600,
          lineHeight: "52px",
        },
      ],
      titleLarge: [
        "36px",
        {
          fontWeight: 600,
          lineHeight: "48px",
        },
      ],
      titleMedium: [
        "24px",
        {
          fontWeight: 600,
          lineHeight: "32px",
        },
      ],
      titleSmall: [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "24px",
        },
      ],
      bodyLarge: [
        "20px",
        {
          fontWeight: 400,
          lineHeight: "24px",
        },
      ],
      bodyMedium: [
        "16px",
        {
          fontWeight: 400,
          lineHeight: "20px",
        },
      ],
      bodySmall: [
        "14px",
        {
          fontWeight: 400,
          lineHeight: "18px",
        },
      ],
      bodyTiny: [
        "12px",
        {
          fontWeight: 400,
          lineHeight: "16px",
        },
      ],
      labelLarge: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      labelMedium: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      labelSmall: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "18px",
        },
      ],
    },
    screens: {
      fold: { max: "375px" },
      sm: { max: "719px" },
      md: { min: "720px", max: "1419px" },
      lg: { min: "1420px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
