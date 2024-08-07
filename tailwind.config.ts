import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "20px",
        sm: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--CU)",
      secondary: "var(--OS)",
    },
    extend: {
      backgroundImage: {
        hero_overlay: "url(/assets/hero/hero-overlay.png)",
        opening_hours: "url(/assets/opening-hours/bg.png)",
        footer: "url(/assets/footer/bg.png)",
      },
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondary: {
          DEFAULT: "#787f8a",
        },
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      transitionDuration: {
        main: "300ms",
      },
    },
  },
  plugins: [],
};
export default config;
