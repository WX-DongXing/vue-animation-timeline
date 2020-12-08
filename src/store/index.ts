import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const Mutations: Record<string, any> = {
  SET_STATE: 'SET_STATE[设置状态全局方法]',
  SET_MAXTIME: 'SET_MAXTIME[设置最大时长]',
};

export default new Vuex.Store({
  state: {
    time: 0,
    startTime: 1000,
    endTime: 5000,
    maxTime: 10000,
  },
  mutations: {
    // 设置状态全局方法
    [Mutations.SET_STATE]: (state, payload) => {
      Object.assign(state, payload);
    },
    // 设置最大时长
    [Mutations.SET_MAXTIME]: (state, payload) => {
      state.maxTime = payload.maxTime;
    },
  },
  actions: {
  },
  modules: {
  },
});
