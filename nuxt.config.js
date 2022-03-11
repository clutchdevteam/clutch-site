const axios = require('axios')

const isPreview = process.env.NODE_ENV === 'development'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',

  env: {
    STORYBLOK_PREVIEW_API_KEY: process.env.STORYBLOK_PREVIEW_API_KEY,
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Clutch | Creative JAMstack Web Solutions',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://theclutch.dev',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Clutch | A JAMstack Development Agency',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Affordable JAMstack solutions for modern day small businesses',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://theclutch.dev/og-image.png',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://theclutch.dev',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Clutch | A JAMstack Development Agency',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Affordable JAMstack solutions for modern day small businesses',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://theclutch.dev/og-image.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap',
      },
    ],
  },

  router: {
    trailingSlash: false,
  },

  generate: {
    concurrency: 25,
    fallback: true,
    crawler: false, // Revisit in the future
    routes: function (callback) {
      const token = isPreview
        ? process.env.STORYBLOK_PREVIEW_API_KEY
        : process.env.STORYBLOK_API_KEY
      const version = isPreview ? 'draft' : 'published'
      // ignore these files and folders
      const ignoreFiles = ['home', 'global']
      const ignoreFolders = ['case-studies']
      let cacheVersion = 0

      const routes = ['/']

      const getRoutes = async (ignoreFiles, ignoreFolders) => {
        axios
          .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
          /* eslint-disable-next-line camelcase */
          .then((space_res) => {
            // timestamp of latest publish
            cacheVersion = space_res.data.space.version
            // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
            axios
              .get(
                `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`
              )
              .then((res) => {
                Object.keys(res.data.links).forEach((key) => {
                  if (
                    !ignoreFiles.includes(res.data.links[key].slug) &&
                    !ignoreFolders.includes(
                      res.data.links[key].slug.split('/')[0]
                    )
                  ) {
                    if (
                      !(
                        res.data.links[key].is_folder &&
                        !res.data.links[key].is_startpage
                      )
                    ) {
                      routes.push('/' + res.data.links[key].slug)
                    }
                  }
                })

                callback(null, routes)
              })
          })
      }

      getRoutes(ignoreFiles, ignoreFolders)

      return routes
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/rich-text-renderer.js',
    '~/plugins/formRoute.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_PREVIEW_API_KEY,
        cacheProvider: 'memory',
      },
    ],
    'portal-vue/nuxt',
    '@nuxtjs/composition-api/module',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    transpile: ['gsap'],
  },
}
