/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				franchise: ['Franchise', 'sans-serif'],
				retrogaming: ['RetroGaming', 'sans-serif']
			},
			colors: {
				'c-black': '#0D0D0D',
				'c-dark-gray': '#262626',
				'c-white': '#F2F2F2'
			}
		}
	},
	plugins: []
};
