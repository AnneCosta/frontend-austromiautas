<template>
  <div class="min-h-screen bg-primary">
    <div class="min-h-screen min-w-full flex justify-center items-center px-8">
      <a-card class="flex flex-col login-container relative z-10" fluid>
        <h1 class="text-primary font-bold text-3xl">Entrar</h1>

        <form class="space-y-6 w-full" @submit.prevent="handleLogin">
          <div class="space-y-6">
            <a-input v-model="credentials.email" type="email" label="E-mail" />
            <a-input
              v-model="credentials.password"
              type="password"
              label="Senha"
            />
          </div>
          <nuxt-link to="/recuperar-senha">
            <p class="text-primary font-thin mt-3">esqueci minha senha</p>
          </nuxt-link>
          <div>
            <a-button
              fluid
              size="sm"
              :disabled="
                credentials.email === '' || credentials.password === ''
              "
              class="w-full"
              >Entrar</a-button
            >
            <a-dividor>ou</a-dividor>
            <nuxt-link to="/cadastrar">
              <a-outline-button fluid size="sm" class="w-full">
                Cadastrar
              </a-outline-button>
            </nuxt-link>
          </div>
        </form>
      </a-card>
      <a-footer class="absolute bottom-0 z-0" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['redirect-dashboard'],
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters({ userHasFinishedProfile: 'user/userHasFinishedProfile' }),
  },
  methods: {
    ...mapActions({ login: 'user/login' }),
    async handleLogin() {
      try {
        await this.login(this.credentials)
        if (!this.userHasFinishedProfile) {
          this.$router.push('/completar-perfil')
        } else this.$router.push('/meus-pets')
      } catch (error) {
        const status = error.response.status
        if (status === 401) {
          this.$toast.error('Credenciais não combinam', {
            position: 'top-center',
          })
        } else {
          this.$toast.error('Houve um erro ao fazer login', {
            position: 'top-center',
          })
        }
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: $bp-xs) {
  .login-container {
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

@media (max-width: $bp-sm) {
  .login-container {
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

@media (max-width: $bp-md) {
  .login-container {
    width: 360px;
  }
}

@media (max-width: $bp-lg) {
  .login-container {
    width: 380px;
  }
}

@media (max-width: $bp-xl) {
  .login-container {
    width: 420px;
  }
}

@media (max-width: $bp-2xl) {
  .login-container {
    width: 480px;
  }
}
</style>
