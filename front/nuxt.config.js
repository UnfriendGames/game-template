require('dotenv').config()
export default {
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Game Nexos',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' },

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'nuxt-socket-io', '@unfriends/front-module'],

  fontawesome: {
    icons: {
      solid: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  io: {
    // module options
    sockets: [
      {
        name: 'game',
        default: true,
        url: process.env.GAME_SOCKET,
      },
    ],
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    authUrl: process.env.AUTH_URL,
    matchmakerUrl: process.env.MATCHMAKER_URL,
    appName: process.env.APP_NAME,
    dev: process.env.ENV === 'dev',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
