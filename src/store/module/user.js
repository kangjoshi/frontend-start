import UserService from '../../service/UserService'

const state = {
  users : [],
};

const mutations = {
  getUsers(state, payload) {
    state.users = payload
  }
};

const getters = {

};

const actions = {
  getUsers(store, payload) {
    let data = UserService.getUsers(payload)
    store.commit('getUsers', data)
  },
  getUserObservable(store, payload) {
    let data = UserService.getUserObservable(payload)
    //store.commit('getUsers', data)
  }
}

export default {
  namespaced : true,
  state,
  mutations,
  getters,
  actions
}
