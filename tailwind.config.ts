import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				"quansk-orange": "#F96D19", // The bright orange in the UI
				"quansk-dark": "#333333", // A dark color for primary text
				"quansk-light-gray": "#F5F5F5", // For subtle backgrounds if needed
				"quansk-blue": "#1a73e8", // A common blue for links/actions
				fill: {
					"1": "rgba(255, 255, 255, 0.10)",
				},
				primary: "#202431",
				secondary: "#FF9100",
				lightblue: "#0B2F9F",
				lightgreen: "#E4FDD5",
				ash: "#F1F1F1",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
