import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ['Inter'],
        'play' : ['Play'],
        'plus-jakarta-sans': ['Plus Jakarta Sans']
      },
      translate: {
        '140': '140px',
        '115': '115px',
        '110': '110px',
        '100': '100px',
        '90': '90px',
        '25': '25px',
        '20': '20px',
        '10': '10px',
      },

    },
  },
  plugins: [],
};
export default config;
