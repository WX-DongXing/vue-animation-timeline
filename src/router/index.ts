import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from '@/views/Example.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Example },
  ],
});

export default router;
