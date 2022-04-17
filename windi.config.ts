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
		}
	},
	shortcuts: {
		'typo-title': 'font-staatliches md:text-128px text-64px',
		'typo-subtitle': 'font-barlow md:text-32px text-20px',
		'typo-h1': 'font-staatliches md:text-84px text-52px',
		'typo-h2': 'font-staatliches md:text-56px text-36px',
		'typo-h3': 'font-barlow md:text-36px text-24px',
		'typo-b1': 'font-barlow md:text-18px text-16px',
		'typo-b2': 'font-barlow md:text-16px text-14px',
		container: 'w-full mx-auto px-8 py-24 md:(px-16 py-48)'
	}
});
