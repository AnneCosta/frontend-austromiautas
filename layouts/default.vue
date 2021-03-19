<template>
  <div :class="computedDisabledClasses">
    <Nuxt />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      loaded: false,
      disabledPageClasses: [
        'h-screen',
        'bg-gray',
        'opacity-75',
        'pointer-events-none',
        'relative',
        'z-40',
      ],
    }
  },
  computed: {
    computedDisabledClasses() {
      return this.loaded === true ? [] : this.disabledPageClasses
    },
  },
  mounted() {
    this.initialize()
  },
  methods: {
    async initialize() {
      const token = localStorage.getItem('token')
      if (typeof token === 'string') {
        this.setAccessToken(token)
        this.setLoginStatus(true)
        try {
          const user = await this.fetchUser()
          this.setUserName(user.name)
          this.setUserEmail(user.email)
          this.$router.push('/meus-pets')
        } catch {
          this.$toast.error('Houve um erro ao verificar usuário', {
            position: 'top-center',
          })
        }
      }
      this.loaded = true
    },
    ...mapMutations({
      setAccessToken: 'user/setAccessToken',
      setLoginStatus: 'user/setLoginStatus',
      setUserName: 'user/setUserName',
      setUserEmail: 'user/setUserEmail',
    }),
    ...mapActions({
      fetchUser: 'user/fetchUser',
    }),
  },
}
</script>

<style></style>
