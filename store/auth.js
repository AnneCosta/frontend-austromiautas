export const state = () => ({
  accessToken: '',
  isLoggedIn: false,
})

export const mutations = {
  setAccessToken(state, token) {
    state.accessToken = token
  },

  setLoginStatus(state, status) {
    state.isLoggedIn = status
  },
}

export const actions = {
  async login({ commit }, user) {
    const response = await this.$axios.$post('/auth/login', user)
    commit('setAccessToken', response.accessToken)
    commit('setLoginStatus', true)
    return response
  },

  logout({ commit }) {
    commit('setAccessToken', '')
    commit('setLoginStatus', false)
  },
}
