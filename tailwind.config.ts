import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f7f3",
          100: "#e2f0e8",
          200: "#c4e1d1",
          300: "#94c9a9",
          400: "#5daa7a",
          500: "#1e8040",
          600: "#1a7a3e",
          700: "#155f30",
          800: "#0f4522",
          900: "#07200f",
        },
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
