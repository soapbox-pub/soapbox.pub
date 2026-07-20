import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";


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
			fontFamily: {
				sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
				display: ['Outfit Variable', 'Outfit', 'system-ui', 'sans-serif'],
				gothic: ['Creepster', 'Nosifer', 'Butcherman', 'Chiller', 'Ravie', 'Impact', 'serif'],
				// Agora-specific display family: Bebas Neue is the condensed
				// all-caps display face Agora itself uses on its hero. It
				// only ships at weight 400, so faux-bold is achieved with
				// `WebkitTextStroke` instead of synthetic font-weight.
				agora: ['Bebas Neue', 'Impact', 'Inter Variable', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				azure: {
					DEFAULT: 'hsl(var(--azure))',
					50: 'hsl(var(--azure-50))',
					100: 'hsl(var(--azure-100))',
					500: 'hsl(var(--azure-500))',
					600: 'hsl(var(--azure-600))',
					700: 'hsl(var(--azure-700))',
					dark: 'hsl(var(--azure-dark))',
				},
				// Agora brand palette. The `500` value is the official
				// brand orange (#ed4c18); the rest are tints/shades derived
				// from it so we have a full ramp for backgrounds, borders,
				// hover states, and dark-on-light contrast.
				agora: {
					50: '#fef2ec',
					100: '#fcdfd2',
					200: '#f9bda6',
					300: '#f59572',
					400: '#f1734a',
					500: '#ed4c18',
					600: '#c93d10',
					700: '#a1320d',
					800: '#7a260a',
					900: '#521a07',
				},
				// Shakespeare brand palette, extracted from the theater-masks
				// logo (public/assets/logos/shakespeare-logo.png): sky blue and
				// gold masks, red curtain tones, deep navy stage. Blue is the
				// primary UI accent, gold the secondary, red the energetic
				// highlight used sparingly.
				shakespeare: {
					blue: {
						50: '#eef6fd',
						100: '#d8ecfa',
						200: '#b2d9f4',
						300: '#84c2ec',
						400: '#5fade4',
						500: '#429adf', // logo sky blue
						600: '#2a82c8',
						700: '#2268a2',
						800: '#205584',
						900: '#1f486c',
					},
					gold: {
						50: '#fefbe8',
						100: '#fdf4c4',
						200: '#fbe78b',
						300: '#f9d649',
						400: '#fcc21b', // logo gold
						500: '#eaa907',
						600: '#c98706',
						700: '#a06309',
						800: '#844e0e',
						900: '#6e4111',
					},
					red: {
						50: '#fef3ef',
						100: '#fde4da',
						200: '#fbc9b5',
						300: '#f8a486',
						400: '#f67a52',
						500: '#f45125', // logo curtain red-orange
						600: '#d63f16',
						700: '#b23313',
						800: '#8e2c14',
						900: '#752814',
					},
					navy: {
						50: '#f1f7fa',
						100: '#e0edf3',
						200: '#c3d9e4',
						300: '#94bacd',
						400: '#5d92ae',
						500: '#3a7492',
						600: '#2b5d77',
						700: '#193d51', // logo deep navy ink
						800: '#122e3e',
						900: '#0c2230',
						950: '#081824',
						DEFAULT: '#193d51',
					},
					bronze: {
						500: '#b08718',
						600: '#9b7515', // logo bronze/olive
						700: '#7c5d10',
						DEFAULT: '#9b7515',
					},
				},
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
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(-50%)'
					}
				},
			'dash-flow': {
				to: {
					strokeDashoffset: '-120'
				}
			},
			'feed-in': {
				from: {
					opacity: '0',
					transform: 'translateY(-8px)'
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			marquee: 'marquee linear infinite',
			'dash-flow': 'dash-flow linear infinite',
			'feed-in': 'feed-in 0.4s ease-out'
		},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'rgb(55 65 81)', // gray-700
						lineHeight: '1.75',
						fontSize: '1.125rem', // text-lg
						'[class~="lead"]': {
							fontSize: '1.25rem',
							lineHeight: '1.6',
						},
						h1: {
							color: 'rgb(17 24 39)', // gray-900
							fontWeight: '700',
							fontSize: '2.25rem', // text-4xl
							marginTop: '3rem',
							marginBottom: '1.5rem',
							lineHeight: '1.1',
							fontFamily: 'var(--font-display)',
						},
						h2: {
							color: 'rgb(17 24 39)', // gray-900
							fontWeight: '700',
							fontSize: '1.875rem', // text-3xl
							marginTop: '2.5rem',
							marginBottom: '1.25rem',
							lineHeight: '1.2',
							fontFamily: 'var(--font-display)',
						},
						h3: {
							color: 'rgb(17 24 39)', // gray-900
							fontWeight: '600',
							fontSize: '1.5rem', // text-2xl
							marginTop: '2rem',
							marginBottom: '1rem',
							lineHeight: '1.3',
							fontFamily: 'var(--font-display)',
						},
						h4: {
							color: 'rgb(17 24 39)', // gray-900
							fontWeight: '600',
							fontSize: '1.25rem', // text-xl
							marginTop: '1.5rem',
							marginBottom: '0.75rem',
							lineHeight: '1.4',
							fontFamily: 'var(--font-display)',
						},
						p: {
							marginTop: '1.5rem',
							marginBottom: '1.5rem',
						},
						a: {
							color: 'hsl(var(--azure))',
							textDecoration: 'underline',
							textDecorationColor: 'hsl(var(--azure) / 0.3)',
							textUnderlineOffset: '2px',
							fontWeight: '500',
							'&:hover': {
								color: 'hsl(var(--azure-600))',
								textDecorationColor: 'hsl(var(--azure-600))',
							},
						},
						strong: {
							color: 'rgb(17 24 39)', // gray-900
							fontWeight: '600',
						},
						code: {
							color: 'rgb(55 65 81)', // gray-700
							backgroundColor: 'rgb(243 244 246)', // gray-100
							paddingLeft: '0.5rem',
							paddingRight: '0.5rem',
							paddingTop: '0.25rem',
							paddingBottom: '0.25rem',
							borderRadius: '0.375rem',
							fontSize: '0.875rem',
							fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
						},
						'pre code': {
							backgroundColor: 'transparent',
							color: 'inherit',
							padding: '0',
						},
						pre: {
							backgroundColor: 'rgb(17 24 39)', // gray-900
							color: 'rgb(243 244 246)', // gray-100
							padding: '1.5rem',
							borderRadius: '0.75rem',
							overflow: 'auto',
							marginTop: '2rem',
							marginBottom: '2rem',
						},
						blockquote: {
							borderLeftWidth: '4px',
							borderLeftColor: 'hsl(var(--azure))',
							paddingLeft: '1.5rem',
							paddingTop: '0.5rem',
							paddingBottom: '0.5rem',
							marginTop: '2rem',
							marginBottom: '2rem',
							backgroundColor: 'hsl(var(--azure-50))',
							borderRadius: '0 0.5rem 0.5rem 0',
							fontStyle: 'italic',
						},
						'blockquote p': {
							color: 'rgb(55 65 81)', // gray-700
							marginTop: '0',
							marginBottom: '0',
						},
						img: {
							borderRadius: '0.75rem',
							boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
							marginTop: '2rem',
							marginBottom: '2rem',
						},
						figure: {
							marginTop: '2.5rem',
							marginBottom: '2.5rem',
						},
						figcaption: {
							textAlign: 'center',
							fontSize: '0.875rem',
							color: 'rgb(107 114 128)', // gray-500
							marginTop: '0.75rem',
							fontStyle: 'italic',
						},
						iframe: {
							borderRadius: '0.75rem',
							boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
							marginTop: '2rem',
							marginBottom: '2rem',
							width: '100%',
							height: 'auto',
							aspectRatio: '16 / 9',
						},
					},
				},
			}
		}
	},
	plugins: [tailwindcssAnimate, typography],
} satisfies Config;