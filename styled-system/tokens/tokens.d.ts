export type Token = "fontSizes.base" | "fontSizes.title" | "fontWeights.base" | "fontWeights.bold" | "fonts.exo" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.primary" | "colors.primary.inverted" | "colors.secondary" | "colors.secondary.inverted" | "colors.colorPalette.inverted"

export type ColorPalette = "primary" | "secondary"

export type FontSizeToken = "base" | "title"

export type FontWeightToken = "base" | "bold"

export type FontToken = "exo"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type ColorToken = "primary" | "primary.inverted" | "secondary" | "secondary.inverted" | "colorPalette.inverted"

export type Tokens = {
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		colors: ColorToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"