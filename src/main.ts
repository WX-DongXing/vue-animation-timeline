import Vue from 'vue';
import { provide } from 'vue-demi';
import App from './App.vue';
import store from './store';
import './plugins';
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  setup() {
    provide('store', store);
  },
  store,
  render: (h) => h(App),
}).$mount('#app');
