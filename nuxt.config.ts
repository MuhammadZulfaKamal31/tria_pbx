export default defineNuxtConfig({
  css: ['~/assets/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});