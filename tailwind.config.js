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

            'th-main-color': 'var(--main-color)',
            'th-bg-color': 'var(--bg-color)',
         },
      },
   },
   variants: {},
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
   ],
}
