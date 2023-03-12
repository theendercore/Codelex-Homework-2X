/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      height: {
        'full-d': '100dvh',
      }
    }
  },
  plugins: []
}
