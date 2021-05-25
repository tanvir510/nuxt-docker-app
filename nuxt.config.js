export default {
  /* Rendering Config */
  ssr: false,

  /* Nuxt target */
  target: "static",

  /* Headers Config */
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /* Global Css */
  css: ["@/assets/css/normalize.css", "@/assets/scss/global/app.scss"],

  /* Plugin load before mounting */
  plugins: ["~/plugins/axios"],

  /* Component Config */
  components: true,

  /* Nuxt Js dev module */
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/moment"],

  /* Nuxt Js Module */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "cookie-universal-nuxt"],

  /* Axios Config */
  axios: {
    proxy: true
  },

  /* Proxy Config */
  proxy: {
    "/api": process.env.ApiUrl
  },

  /* Build config */
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          test: /\.worker\.js$/,
          loader: "worker-loader",
          exclude: /(node_modules)/
        });
        config.devtool =
          process.env.NODE_ENV === "development" ? "#source-map" : "";
      }
    }
  },

  /* Style Resources */
  styleResources: {
    scss: ["assets/scss/includes/_includes.scss"]
  },

  /* Moment Js Config */
  moment: {
    defaultLocale: "ja",
    locales: ["ja"]
  },

  /* Router Config */
  router: {
    // middleware: ["auth-cookie", "authentication"],
  }
};
