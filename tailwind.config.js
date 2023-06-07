/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ui-orange': 'hsl(26, 100%, 55%)',
        'ui-pale-orange': 'hsl(25, 100%, 94%)',
        'ui-very-dark-blue': 'hsl(220, 13%, 13%)',
        'ui-dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'ui-grayish-blue': 'hsl(220, 14%, 75%)',
        'ui-light-grayish-blue': 'hsl(223, 64%, 98%)',
        'ui-white': 'hsl(0, 0%, 100%)',
        'ui-black': 'hsl(0, 0%, 0%)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

