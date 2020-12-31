module.exports = {
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
