const tokens = {
  "fontSizes.base": {
    "value": "18px",
    "variable": "var(--font-sizes-base)"
  },
  "fontSizes.title": {
    "value": "34px",
    "variable": "var(--font-sizes-title)"
  },
  "fontWeights.base": {
    "value": "500",
    "variable": "var(--font-weights-base)"
  },
  "fontWeights.bold": {
    "value": "600",
    "variable": "var(--font-weights-bold)"
  },
  "fonts.exo": {
    "value": "var(--font-exo)",
    "variable": "var(--fonts-exo)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "colors.primary": {
    "value": "var(--colors-primary)",
    "variable": "var(--colors-primary)"
  },
  "colors.primary.inverted": {
    "value": "var(--colors-primary-inverted)",
    "variable": "var(--colors-primary-inverted)"
  },
  "colors.secondary": {
    "value": "var(--colors-secondary)",
    "variable": "var(--colors-secondary)"
  },
  "colors.secondary.inverted": {
    "value": "var(--colors-secondary-inverted)",
    "variable": "var(--colors-secondary-inverted)"
  },
  "colors.colorPalette.inverted": {
    "value": "var(--colors-color-palette-inverted)",
    "variable": "var(--colors-color-palette-inverted)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar