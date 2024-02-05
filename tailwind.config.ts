import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				"brand-red": '#F24C3D',
				"brand-blue": '#1A3140',
				"brand-gray": '#6C7173',
				"brand-white": '#F2EEEB',
				"brand-crimson": '#732720',
				"brand-black": "#1D1E26",
				"brand-dark-gray": "#323240"
			  }
    },
  },
  plugins: [],
};
export default config;
