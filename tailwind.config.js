import fluid, { extract, fontSize, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: { files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], extract },
  theme: {
    screens,
    fontSize,
  },
  plugins: [fluid],
};
