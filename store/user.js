export const state = () => ({
  name: '',
  email: '',
  contacts: [],
  avatar: null,
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

  setContacts(state, contacts) {
    state.contacts = contacts
  },

  setAvatar(state, avatar) {
    state.avatar = avatar
  },
}

export const getters = {
  userHasWhatsappContacts(state) {
    return state.contacts.filter(({ type }) => type === 'whatsapp').length > 0
  },
  userHasFinishedProfile(state) {
    return state.contacts.filter(({ type }) => type === 'whatsapp').length > 0
  },
  getAvatar(state) {
    return state.avatar
  },
}

export const actions = {
  async fetchUser({ state, dispatch }) {
    const user = await this.$axios.$get('/donators', {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
    const contacts = await dispatch('fetchContacts')
    return { ...user, contacts }
  },

  async uploadAvatar({ state, commit }, avatar) {
    const { path } = await this.$axios.$post('/donators/avatar', avatar, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
    commit('setAvatar', path)
    return path
  },

  registerContact({ state }, contact) {
    return this.$axios.$post('/donators/contacts ', contact, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  fetchContacts({ state }) {
    return this.$axios.$get('/donators/contacts', {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  updateContacts({ state }, { donatorId, updateInfo }) {
    return this.$axios.$put(`'/donators/contacts/${donatorId}'`, updateInfo, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  registerAddress({ state }, formInfo) {
    return this.$axios.$post('/donators/addresses', formInfo, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  updateAddress({ state }, updateInfo) {
    return this.$axios.$put('/donators/addresses', updateInfo, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  deleteAddress({ state }) {
    return this.$axios.$delete('/donators/addresses', {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  fetchPets(ctx) {
    return this.$axios.$get('/pets')
  },

  fetchPet(ctx, petId) {
    return this.$axios.$get(`/pets/${petId}`)
  },

  registerPets({ state }, pets) {
    return this.$axios.$post('/pets', pets, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  updatePet({ state }, { petId, formInfo }) {
    return this.$axios.$put(`/pets/${petId}`, formInfo, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  async uploadPetAvatar({ state }, { petId, avatar }) {
    return await this.$axios.$put(`/pets/${petId}/avatar`, avatar, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  petDelete({ state }, petId) {
    return this.$axios.$delete(`/pets/${petId}`, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  petAdopt(ctx, { petId, formInfo }) {
    return this.$axios.$post(`/pets/${petId}/adopt`, formInfo)
  },

  petAdoptAccept({ state }, petId) {
    return this.$axios.$put(`/pets/${petId}/adopt/confirm`, undefined, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  petAdoptRefuse({ state }, petId) {
    return this.$axios.$put(`/pets/${petId}/adopt/reject`, undefined, {
      headers: {
        authorization: `Bearer ${state.accessToken}`,
      },
    })
  },

  petGetOwner(ctx, petId) {
    return this.$axios.$get(`/pets/${petId}/owner`)
  },

  async getUser({ state }) {
    return await this.$axios.$get('/donators', {
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

    commit('setAccessToken', accessToken)
    commit('setLoginStatus', true)
    const { name, email, avatar } = await dispatch('fetchUser')
    commit('setUserName', name)
    commit('setUserEmail', email)
    commit('setAvatar', avatar)
    const contacts = await dispatch('fetchContacts')
    commit('setContacts', contacts)
    localStorage.setItem('token', accessToken)
    return { accessToken }
  },

  logout({ commit }) {
    commit('setAccessToken', '')
    commit('setLoginStatus', false)
    commit('setUserName', '')
    commit('setUserEmail', '')
    commit('setContacts', [])
    localStorage.removeItem('token')
  },
}
