module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-animation-timeline'
    : '/',
  productionSourceMap: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
