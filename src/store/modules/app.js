import Cookies from 'js-cookie'

const state = {
  newTargetId:'',
}

const mutations = {
  NEWTARGETID: (state, data) => {
    state.newTargetId = data
  },

}

const actions = {
  set_newtargetid({ commit }, data) {
    commit('NEWTARGETID', data)
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
