/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: { preflight: false },
  plugins: [],
  important: true,
};
