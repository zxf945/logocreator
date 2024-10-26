import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#2C2C2C",
          800: "#343434",
          900: "#1F1F1F",
        },
        blue: {
          500: "#0F6FFF",
        },
      },
      fontFamily: {
        jura: ["var(--font-jura)"],
      },
    },
  },
  plugins: [],
};
export default config;
