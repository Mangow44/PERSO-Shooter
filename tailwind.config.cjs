/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'c-black': '#0D0D0D',
				'c-dark-gray': '#262626'
			}
		}
	},
	plugins: []
};
