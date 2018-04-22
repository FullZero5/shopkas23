module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    titleTemplate: '%s - Маяк Кубани онлайн кассы под ключ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Маяк Кубани - вы можете купить онлайн кассу под ключить по выгодной цене!!!' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Маяк Кубани, онлайн кассы, ККМ, ККТ, кассовый аппарат, каталог касс, купить кассу, магазин касс'
      }, 
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Маяк Кубани - онлайн кассы '
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: 'mayk.png'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Купить онлайн кассу в Краснодаре, по выгодной цене, под ключ, настройка, регистрация в ОФД, автоматизация торговли'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  cache: true,
  css: ['~/assets/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f6a90b' },
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '48438065',
        webvisor: true,
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'firebase'
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
