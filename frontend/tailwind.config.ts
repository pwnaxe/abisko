import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        aquamarine: {
        '50': '#e7fff9',
        '100': '#c6ffef',
        '200': '#92ffe6',
        '300': '#4dffde',
        '400': '#00f8ca',
        '500': '#00e8bb',
        '600': '#00be9a',
        '700': '#009880',
        '800': '#007867',
        '900': '#006256',
        '950': '#003832',
        },
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
