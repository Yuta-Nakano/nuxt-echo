export default {
  generate: {
    dir: '../client',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    // '@nuxtjs/vuetify',
    '@nuxtjs/laravel-echo',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['@nuxtjs/moment', ['ja']],
  ],

  /**
   *  laravel-echo module configration
   */
  echo: {
    broadcaster: 'socket.io',
    wsHost: process.env.SOCKETIO_URL || '',
    authModule: false,
    connectOnLogin: false,
    disconnectOnLogout: false,
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || '',
  },
  /*
   ** Auth configuration
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
      callback: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/login',
            method: 'post',
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
          },
          logout: false,
          user: {
            url: '/api/v1/user',
            method: 'get',
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
            propertyName: false,
          },
        },
        tokenRequired: false,
        tokenType: false,
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    // middleware: ['auth'],
    mode: 'history',
  },
}
