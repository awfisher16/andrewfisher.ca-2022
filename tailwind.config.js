module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
