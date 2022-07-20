const colors = require("tailwindcss/colors");

module.exports = {
   content: [
      './src/components/**/*.{ts,tsx,js,jsx}', 
      './src/pages/**/*.{ts,tsx,js,jsx}'
   ],
   darkMode: true,
   theme: {
      extend: {
         colors: {
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,

            'tt-main-color': 'var(--main-color)',
            'tt-bg-color': 'var(--bg-color)',
            'tt-subbg-color': 'var(--subbg-color)',
            'tt-text-color': 'var(--text-color)',
            'tt-subtext-color': 'var(--subtext-color)',
         },
         boxShadow: {
            'white-shadow-dark': 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;',
            'dark-shadow-dark': 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;',

            'tt-shadow': 'var(--shadow-color)'
         }
      },
   },
   variants: {},
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
   ],
}
