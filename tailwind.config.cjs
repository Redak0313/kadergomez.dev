/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light", "dark", "corporate", "retro", "cyberpunk", "luxury", "dracula"],
	  },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
