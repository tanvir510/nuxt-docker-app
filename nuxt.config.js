export default {
    /*
    ** Nuxt rendering mode
    */
    // mode: process.env.NUXT_MODE || "spa",
    ssr: false,
    /*
    ** Nuxt target
    */
    target: 'static',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/css/normalize.css',
        '@/assets/scss/global/app.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~/plugins/axios",
    ],
    /*
    ** Auto import components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/moment',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'cookie-universal-nuxt',
        'portal-vue/nuxt',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyAdItbj4BMpivbLUEfjV0I2Fj3qu_4RTXw',
                    authDomain: 'hrm-test-ade2c.firebaseapp.com',
                    databaseURL: 'https://hrm-test-ade2c.firebaseio.com',
                    projectId: 'hrm-test-ade2c',
                    storageBucket: 'hrm-test-ade2c.appspot.com',
                    messagingSenderId: '414660146125',
                    appId: '1:414660146125:web:1f065a1915d5086b360a84',
                },
                services: {
                    auth: true // Just as example. Can be any other service.
                }
            }
        ],
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // baseURL: process.env.ApiUrl,
        proxy: true,
    },
    proxy: {
        "/api": process.env.ApiUrl,
    },
    /*
    ** Build configuration
    */
    build: {
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    test: /\.worker\.js$/,
                    loader: 'worker-loader',
                    exclude: /(node_modules)/
                });
                config.devtool = process.env.NODE_ENV === 'development' ? '#source-map' : '';
            }
        }
    },
    styleResources: {
        scss: [
            'assets/scss/includes/_includes.scss',
        ]
    },
    moment: {
        defaultLocale: 'ja',
        locales: ['ja']
    },
    router: {
        // middleware: ["auth-cookie", "authentication"],
    },
}
