import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import wechat from './modules/wechat';

const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    wechat
  }
});
