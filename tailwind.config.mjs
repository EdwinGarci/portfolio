/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                scrollFrontend: "scrollFrontend 30s linear infinite",
				scrollBackend: "scrollBackend 40s linear infinite reverse",
				scrollOthers: "scrollOthers 50s linear infinite",
            },
            keyframes: {
                scrollFrontend: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-200px * 7))" },
				},
				scrollBackend: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-200px * 5))" },
				},
				scrollOthers: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-200px * 9))" },
				},
            },
			colors: {
				primary: {
					DEFAULT: '#33ee77',
					light: '#4eff88',
					dark: '#2bcc66',
				}
			}
		},
	},
	plugins: [],
}
