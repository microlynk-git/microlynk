import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDarkBlue: '#0F172A',
        backgroundBlue: '#15223F',
        backgroundLightBlue: '#003B75',
        gradientBlue: '#0056ABDB',
      }
    },
    
  },
  plugins: [],
};
export default config;