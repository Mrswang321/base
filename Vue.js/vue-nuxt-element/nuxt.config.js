export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vue-nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [
  //   { src: '@/plugins/element-ui', ssr: true }
  // ],

  // plugins: [{ src: '@/plugins/element-ui', ssr: true }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  router: {
    middleware: 'auth',
    extendRoutes(routes, resolve) {
      console.log(routes)
      const index = routes.findIndex(route => route.path === '/user')
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          top: resolve(__dirname, 'components/OtherComponent.vue')
        },
        chunkNames: {
          top: 'components/OtherComponent'
        }
      }
    }
  }
}
