export default {
  head: {
    title: 'Austromiautas',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    host: process.env.APP_HOST | '0.0.0.0',
    port: process.env.APP_PORT | 3000,
  },

  css: [],

  plugins: [],

  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/toast'],

  axios: {
    baseURL: `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`,
    headers: {
      common: {
        'X-API-TOKEN': process.env.X_API_TOKEN,
      },
    },
  },
}
