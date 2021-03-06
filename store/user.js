export const state = () => ({
  name: '',
  email: '',
})

export const actions = {
  register(ctx, user) {
    return this.$axios.$post('/donators', user)
  },
}
