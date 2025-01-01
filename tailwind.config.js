/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				purple: {
					400: "#4F03ff",
					500: "#4F0341",
				},
			},
		},
	},
	plugins: [],
};
