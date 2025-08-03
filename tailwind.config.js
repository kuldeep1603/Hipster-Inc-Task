export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Baskerville: ["Libre Baskerville", "serif"],
        Fredoka: ["Fredoka", "sans-serif"],
      },
      colors: {
        primary: "#db4444;",
        white: "#ffffff",
        black: "#111111",
        light_black: "#333",
        light_white: "#fafafa",
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
