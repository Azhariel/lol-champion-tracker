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
				blue: {
					100: '#CDFAFA',
					200: '#0AC8B9',
					300: '#0397AB',
					400: '#005A82',
					500: '#0A323C',
					600: '#091428',
					700: '#0A1428'
				},
				gold: {
					100: '#F0E6D2',
					200: '#C8AA6E',
					300: '#C8AA6E',
					400: '#C89B3C',
					500: '#785A28',
					600: '#463714',
					700: '#32281E'
				},
				grey: {
					100: '#A09B8C',
					200: '#5B5A56',
					300: '#3C3C41',
					400: '#1E2328',
					500: '#1E282D',
					600: '#010A13'
				}
			}
		}
	}
}
