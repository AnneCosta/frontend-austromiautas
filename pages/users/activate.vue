<template>
  <div class="min-h-screen bg-primary flex justify-center items-center">
    <a-card class="flex flex-col relative z-10 space-y-4">
      <img src="/image/friends.svg" alt="friends" class="w-48" />
      <h1 class="font-bold text-primary text-2xl text-center">
        {{ title[status] }}
      </h1>
      <div>
        <p class="text-md text-center">
          {{ body1[status] }}
        </p>
        <p class="text-md text-center">
          {{ body2[status] }}
        </p>
      </div>

      <nuxt-link v-if="status === 'activated'" to="/entrar">
        <a-button>Começar</a-button>
      </nuxt-link>
    </a-card>
    <a-footer class="absolute bottom-0" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      status: 'in progress',
      title: {
        'in progress': 'Estamos ativando sua conta, aguarde um momento...',
        activated: 'Sua conta foi ativada!',
        error: 'Houve um erro ao ativar sua conta!',
      },

      body1: {
        'in progress':
          'Ao terminar o processo de ativação você estará pronto para utilizar o nosso sistema!',
        activated:
          'Você está pronto(a) para começar a utilizar o nosso sistema!',
        error:
          'Verifique se você copiou o código correto ou se está ativando uma conta já ativada',
      },

      body2: {
        'in progress': '',
        activated:
          'Clicando no botão abaixo você será redicionado para a página de login!',
        error: '',
      },
    }
  },

  computed: {
    computedTitle() {
      return this.title[this.status]
    },
  },

  mounted() {
    const token = this.$route.query.token
    if (!token) {
      this.$toast.error('Código de ativação não fornecido', {
        position: 'top-center',
      })
      this.$router.push('/')
    }
    this.handleActivation(token)
  },
  methods: {
    ...mapActions({ activate: 'user/activate' }),
    async handleActivation(token) {
      try {
        await this.activate(token)
        this.status = 'activated'
      } catch (error) {
        this.status = 'error'
        console.log(error.response.status)
        console.log(error.response.data)
      }
    },
  },
}
</script>
