export default {
  content: [
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
    `/app.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        'dim-gray': '#494a4b',
        'dark-blue': '#4b5566',
        main: {
          DEFAULT: '#312C82',
          50: '#928DD8',
          100: '#837ED3',
          200: '#665FC9',
          300: '#4841BF',
          400: '#3C36A0',
          500: '#312C82',
          600: '#211E58',
          700: '#11102E',
          800: '#020104',
          900: '#000000',
          950: '#000000'
        },
        'accent': "#d79f4d"
      },
      transitionProperty: {
        'height': 'height'
      }
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  }
}