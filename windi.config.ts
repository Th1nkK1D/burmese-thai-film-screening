import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			black: '#000000',
			orange: '#E65A2C',
			yellow: '#FFD119',
			wheat: '#F9F1E3',
			white: '#FFFFFF'
		},
		fontFamily: {
			staatliches: ['Staatliches', 'cursive'],
			barlow: ['Barlow', 'sans-serif']
		},
		fontSize: {}
	},
	shortcuts: {
		'typo-title': 'font-staatliches md:text-128px text-64px leading-100%',
		'typo-subtitle': 'font-barlow md:text-32px text-16px',
		'typo-h1': 'font-staatliches md:text-64px text-36px leading-100%',
		'typo-h2': 'font-staatliches md:text-36px text-24px leading-100%',
		'typo-b1': 'font-barlow md:text-16px text-14px leading-150%',
		'typo-b2': 'font-barlow md:text-14px text-12px'
	}
});
