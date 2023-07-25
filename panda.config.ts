import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  emitTokensOnly: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        slate100: { value: "#BECBD6" },
      },
      fontSizes: {
        base: { value: "18px" },
        title: { value: "34px" },
      },
      fontWeights: {
        base: { value: "400" },
        bold: { value: "600" },
      },
      fonts: {
        exo: { value: "var(--font-exo)" },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          value: {
            _light: "black",
            _dark: "white",
          },
        },
        background: {
          value: {
            _light: "white",
            _dark: "black",
          },
        },
      },
    },
  },

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // The output directory for your css system
  outdir: "styled-system",
});
