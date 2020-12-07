const files = require.context('@/assets/icons', false, /\.svg$/);
const modules: any = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  modules[key.replace(/(\.\/|\.svg)/g, '')] = files(key).default;
});

export default modules;
