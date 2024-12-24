/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                scroll: "scroll 40s linear infinite",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-200px * 7))" },
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
