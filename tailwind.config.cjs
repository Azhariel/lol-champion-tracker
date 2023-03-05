const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}', './components/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Spiegel', defaultTheme.fontFamily.sans],
				title: ['"Beaufort for LOL"', defaultTheme.fontFamily.sans]
			},
			colors: {
				gold: '#FFD700'
			}
		}
	}
}
