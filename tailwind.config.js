/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		screens: {
			mobile: "340px",
			// => @media (min-width: 340px) { ... }

			tablet: "600px",
			// => @media (min-width: 600px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
