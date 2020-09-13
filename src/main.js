import Vue from 'vue';
import Vuex from 'vuex';
import {store} from './store';
import Route from './router';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  routes : Route
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
