/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "rgb(var(--primary))",
      error: "rgb(var(--error))",
      disable: "rgb(var(--disable))",
      green: "rgb(var(--green))",
      yellow: "rgb(var(--yellow))",
      purple: "rgb(var(--purple))",
      neutral: "rgb(var(--neutral))"
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}