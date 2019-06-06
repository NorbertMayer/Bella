import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Work+Sans:400,600,800"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
      }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      },
      {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        id: "snipcart",
        "data-api-key":
          "ZWM1ZGEzMjQtZjgzNy00YTMwLWFjMTctNDFiODNiYjEwOTgzNjM2ODg3Njg3NzkyMzYyMzcx"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ffe4e1" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    ["nuxt-sass-resources-loader", "@/assets/css/main.scss"],
    [
      "storyblok-nuxt",
      {
        accessToken: "eXtMT9oROQQSFiZKSTXuiwtt",
        cacheProvider: "memory"
      }
    ]
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
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
