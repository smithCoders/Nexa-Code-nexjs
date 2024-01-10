import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../public/images/herobackground.png')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
    plugins: [require("daisyui"), require("tailgrids/plugin")],

}
export default config
