const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'counterparty-red': '#EC1550',
        'blue': {
          900: '#293C70',
        },
      },
      fontFamily: {
        'readex-pro': ['Readex Pro', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '5.5': '1.375rem', // 22px
        '3.5': '0.875rem', // This creates a new spacing option between 3 (0.75rem) and 4 (1rem)
      },
      letterSpacing: {
        tighter: '-0.04em', // -0.8px for a 20px font
      },
    },
  },
  plugins: [],
}
