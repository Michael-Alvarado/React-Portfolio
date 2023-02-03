// tailwind.config.js

import colors from 'tailwindcss/colors';

module.exports = {
	mode: 'jit',
	purge: [
		// ...
		'./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}', // path to vechaiui
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				amber: colors.amber,
				black: colors.black,
				blue: colors.blue,
				cyan: colors.cyan,
				emerald: colors.emerald,
				fuchsia: colors.fuchsia,
				gray: colors.gray,
				green: colors.green,
				indigo: colors.indigo,
				lime: colors.lime,
				orange: colors.orange,
				pink: colors.pink,
				purple: colors.purple,
				red: colors.red,
				rose: colors.rose,
				sky: colors.sky,
				slate: colors.slate,
				stone: colors.stone,
				teal: colors.teal,
				violet: colors.violet,
				white: colors.white,
				yellow: colors.yellow,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@vechaiui/core')({
			colors: [
				'amber',
				'black',
				'blue',
				'cyan',
				'emerald',
				'fuchsia',
				'gray',
				'green',
				'indigo',
				'lime',
				'orange',
				'pink',
				'purple',
				'red',
				'rose',
				'sky',
				'slate',
				'stone',
				'teal',
				'violet',
				'white',
				'yellow',
			],
		}),
	],
};
