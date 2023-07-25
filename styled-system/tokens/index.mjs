const tokens = {
  "colors.slate100": {
    "value": "#BECBD6",
    "variable": "var(--colors-slate100)"
  },
  "fontSizes.base": {
    "value": "18px",
    "variable": "var(--font-sizes-base)"
  },
  "fontSizes.title": {
    "value": "34px",
    "variable": "var(--font-sizes-title)"
  },
  "fontWeights.base": {
    "value": "400",
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
  "colors.text": {
    "value": "var(--colors-text)",
    "variable": "var(--colors-text)"
  },
  "colors.background": {
    "value": "var(--colors-background)",
    "variable": "var(--colors-background)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar