/*!

 =========================================================
 * Nuxt Black Dashboard PRO - v1.0.0
 =========================================================


 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'SEOJS App',
    meta: [
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
    ],
    bodyAttrs: {
      class: 'sidebar-mini' // delete the class to have the sidebar expanded by default. Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard-pro.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    { src: '~/plugins/full-calendar.js', ssr: false },
    { src: '~/plugins/world-map.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/axios',
      '~/io',
  ],
  axios: {
    proxy: true
  },
serverMiddleware: [
'~/api/index.js'
],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  }
}
