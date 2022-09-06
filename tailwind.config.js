/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ruby: "var(--color-ruby)",
        graphene: "var(--color-richBlack)",
        milk: "var(--color-culturedWhite)",
        tomato: "var(--color-persianRed)",
        blue: "var(--color-honoluluBlue)",
        pastel: "var(--color-pastelPink)",
        cofee: "var(--color-blackCoffee)",
        sienna: "var(--color-rawSienna)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
    },
  },
  plugins: [],
};
