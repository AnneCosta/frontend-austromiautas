export const state = () => ({
  name: '',
  email: '',
  accessToken: '',
  isLoggedIn: false,
})

export const mutations = {
  setUserName(state, userName) {
    state.name = userName
  },
  setUserEmail(state, userEmail) {
    state.email = userEmail
  },
  setAccessToken(state, token) {
    state.accessToken = token
  },

  setLoginStatus(state, status) {
    state.isLoggedIn = status
  },
}

export const actions = {
  fetchUser({ state }) {
    return this.$axios.$get('/donators', {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  register(ctx, user) {
    return this.$axios.$post('/donators', user)
  },

  activate(ctx, token) {
    return this.$axios.$put(`/users/activate/?token=${token}`)
  },

  async login({ commit, dispatch }, user) {
    const { accessToken } = await this.$axios.$post('/auth/login', user)
    const { name, email } = await dispatch('fetchUser')
    commit('setAccessToken', accessToken)
    commit('setLoginStatus', true)
    commit('setUserName', name)
    commit('setUserEmail', email)
    localStorage.setItem('token', accessToken)
    return { accessToken }
  },

  logout({ commit }) {
    commit('setAccessToken', '')
    commit('setLoginStatus', false)
    commit('setUserName', '')
    commit('setUserEmail', '')
    localStorage.removeItem('token')
  },
}
