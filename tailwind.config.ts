import typography from "@tailwindcss/typography";
import headlessui from "@headlessui/tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {},
    },
  },
  plugins: [typography, headlessui, require("tailwindcss-animate")],
};
export default config;
