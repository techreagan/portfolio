import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // titleTemplate: '%s - portfolio',
    titleTemplate: 'Tech Reagan - Full Stack Software Engineer',
    title: 'Tech Reagan - Full Stack Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Tech Reagan - Full Stack Software Engineer',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'A world class full stack software and network engineer (CCNA); passionate about changing the world by solving problems.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://techreagan.com' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Tech Reagan - Full Stack Software Engineer',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A world class full stack software and network engineer (CCNA); passionate about changing the world by solving problems.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://techreagan/img/tech-reagan-logo.jpg',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', property: 'twitter:site', content: '@techreagan' },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://techreagan.com',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Tech Reagan - Full Stack Software Engineer',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'A world class full stack software and network engineer (CCNA); passionate about changing the world by solving problems.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://techreagan/img/tech-reagan-logo.jpg',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'canonical', href: 'https://techreagan.com' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap',
        rel: 'stylesheet',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scrollactive.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  publicRuntimeConfig: {
    apiSecret: process.env.GOOGLE_API_KEY,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Poppins',
      },
      icons: 'mdi',
    },
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          background: '#101024',
          primary: '#f3bc17',
          // primary: '#f0d13b',
          // 'bg-secondary': '#121227',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          secondary: '#121227',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,
        // },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
