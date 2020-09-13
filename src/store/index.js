import Vue from 'vue';
import Vuex from 'vuex';

import userStore from './module/user';

Vue.use(Vuex);

const state = {

};

const mutations = {

};

const getters = {

};

const actions = {
  getUsers : (store, payload) => {
    console.log("== getUsers");
  }



};

const modules = {
  userStore
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
});

export { store };
