/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
