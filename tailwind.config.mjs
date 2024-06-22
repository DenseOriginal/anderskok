/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			blue: {
				DEFAULT: '#2D4059'
			},
			red: {
				DEFAULT: '#EA5455',
			},
			orange: {
				DEFAULT: '#F07B3F',
			},
			yellow: {
				DEFAULT: '#FFD460',
			},
			green: {
				DEFAULT: '#34CB64',
			},
		}
	},
	plugins: [],
}
