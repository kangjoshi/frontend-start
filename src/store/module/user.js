import axios from 'axios'

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
    axios.get('https://jsonplaceholder.typicode.com/users', {})
      .then((response) => {
        store.commit('getUsers', response.data)
      })
  }
}

export default {
  namespaced : true,
  state,
  mutations,
  getters,
  actions
}
