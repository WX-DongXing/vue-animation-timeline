module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-animation-timeline'
    : '/',
  css: {
    extract: false,
  },
};
