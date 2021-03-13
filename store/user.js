export const state = () => ({
  name: '',
  email: '',
})

export const actions = {
  register(ctx, user) {
    return this.$axios.$post('/donators', user)
  },
  activate(ctx, token) {
    return this.$axios.$put(`/users/activate/?token=${token}`)
  },
}
