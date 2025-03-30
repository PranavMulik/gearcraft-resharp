
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Mulik HTech
				teal: {
					"50": "#f0f9f9",
					"100": "#d9f1f0",
					"200": "#b8e4e3",
					"300": "#86d0ce",
					"400": "#4fb6b3",
					"500": "#3a9d9b",
					"600": "#246e6d",
					"700": "#1d5757",
					"800": "#1a4747",
					"900": "#193c3c",
					"950": "#0d2424"
				},
				rust: {
					"50": "#fdf5f3",
					"100": "#fbe9e6",
					"200": "#f8d6d0",
					"300": "#f3b9ad",
					"400": "#ea917e",
					"500": "#df714f",
					"600": "#d95d39",
					"700": "#b6452b",
					"800": "#963c28",
					"900": "#7b3825",
					"950": "#421a11"
				},
				gold: {
					"50": "#fcf9eb",
					"100": "#f9f3c7",
					"200": "#f5e58e",
					"300": "#f2d24d",
					"400": "#f2c14e",
					"500": "#ea9d1e",
					"600": "#cb7915",
					"700": "#a75714",
					"800": "#884516",
					"900": "#723b18",
					"950": "#421e09"
				},
				slate: {
					"50": "#f5f6f8",
					"100": "#ebecf0",
					"200": "#d1d5de",
					"300": "#aab1c3",
					"400": "#7c85a2",
					"500": "#596887",
					"600": "#465271",
					"700": "#39445d",
					"800": "#2d3142",
					"900": "#282a3a",
					"950": "#1b1c27"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
