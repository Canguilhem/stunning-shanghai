const pkg = require('./package')
const webpack = require("webpack");


module.exports = {
  buildDir : 'nuxt-dist',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Suez+One'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif+Caption'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Baloo+Da'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' }
    ],
    script: [ ]
  },
  
  router: {
    // middleware: 'auth',
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/fontello.css'
    // {src:'_nuxt/assets/css/fontello.css'},
    // {src:'assets/css/fontello.css'},
    // {src:'@/assets/css/fontello.css'},
    // {src:'@assets/css/fontello.css'},
    // {src:'static/css/fontello.css'},
    // {src:'@static/css/fontello.css'},
    // {src:'~assets/css/fontello.css'},
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   {src:'~/plugins/directives.js', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },


  /*
  ** Build configuration
  */
  build: {

    plugins: [
    //   new webpack.ProvidePlugin({
    //     jQuery: 'jquery',
    //     '$': 'jquery',
    //     jquery: 'jquery'
    // })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 102400
      }
      
      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        bImg: 'src',
        'b-img': ['src', ':src'],
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    },
    // vendors have been deprecated
    // vendor : ["aos"]
  },
  generate: {
    fallback: true
  }
}
