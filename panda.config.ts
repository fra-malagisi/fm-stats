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
      fontSizes: {
        base: { value: "18px" },
        title: { value: "34px" },
      },
      fontWeights: {
        base: { value: "500" },
        bold: { value: "600" },
      },
      fonts: {
        exo: { value: "var(--font-exo)" },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: {
              _light: "white",
              _dark: "black",
            },
          },
          inverted: {
            value: {
              _light: "black",
              _dark: "white",
            },
          },
        },
        secondary: {
          DEFAULT: {
            value: {
              _light: "#D1D5DB",
              _dark: "#383838",
            },
          },
          inverted: {
            value: {
              _light: "#383838",
              _dark: "#D1D5DB",
            },
          },
        },
        tertiary: {
          DEFAULT: {
            value: {
              _light: "blue",
              _dark: "red",
            },
          },
          inverted: {
            value: {
              _light: "red",
              _dark: "blue",
            },
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
