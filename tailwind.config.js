/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				black: '#131518',
				gray: '#606060',
				'light-gray': '#adadad',
				'white-background': '#f5f2eb',
				'light-yellow-button': '#fcc888',
			},
		},
	},
	plugins: [],
}
