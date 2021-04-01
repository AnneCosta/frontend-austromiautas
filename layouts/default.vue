<template>
  <div :class="computedDisabledClasses">
    <Nuxt />
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
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
    ...mapGetters({ userHasFinishedProfile: 'user/userHasFinishedProfile' }),
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
          this.setContacts(user.contacts)
          this.setAvatar(user.avatar)
          this.$router.push('/meus-pets')
          await this.checkProfileAndRedirect()
        } catch {
          this.logout()
          this.$toast.error('Houve um erro ao verificar usuário', {
            position: 'top-center',
          })
        }
      }
      this.loaded = true
    },

    checkProfileAndRedirect() {
      if (!this.userHasFinishedProfile) {
        this.$router.push('/completar-perfil')
      }
    },

    ...mapMutations({
      setAccessToken: 'user/setAccessToken',
      setLoginStatus: 'user/setLoginStatus',
      setUserName: 'user/setUserName',
      setUserEmail: 'user/setUserEmail',
      setContacts: 'user/setContacts',
      setAvatar: 'user/setAvatar',
    }),
    ...mapActions({
      fetchUser: 'user/fetchUser',
      fetchContacts: 'user/fetchContacts',
      logout: 'user/logout',
    }),
  },
}
</script>

<style></style>
