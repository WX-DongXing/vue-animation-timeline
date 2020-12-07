import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './plugins';
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
