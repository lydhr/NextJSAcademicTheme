module.exports = {
	mode: 'jit',
	purge: {
		mode: 'all',
		preserveHtmlElements: false,
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}'
		]
	},
	darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			filter: ['hover'],
		},
	}
}
