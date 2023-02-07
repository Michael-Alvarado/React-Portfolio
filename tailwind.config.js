/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				magnolia: '#F3EFF5',
				emerald: '#6FD08C',
				'light-emerald': '#ABE4BC',
				'picton-blue': '#59A5D8',
				'light-picton': '#9ECAE8',
				charcoal: '#454955',
				night: '#0D0A0B',
				'rose-red': '#BF11363',
				'light-rose': '#EF5DA1',
			},
			fontFamily: {
				itim: ['Itim', 'cursive'],
			},
			content: {},
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
	},
	darkMode: 'media',
	plugins: [],
};
