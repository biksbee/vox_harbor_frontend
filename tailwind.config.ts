import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: "1440px",
      xx: "1024px",
      md: "768px",
      sm: "576px"
    },
    fontFamily: {

    },
    extend: {
      backgroundImage: {

      },
      colors: {
        navbar: "#13132a",
        wraper: "#0178FFFF",
        inf: "#d6f5d9",
        button: "#026af6",
        backMessage: "#766ac8",
        textMessage: "#b1abe0",
      }
    },
  },
  plugins: [],
}
export default config
