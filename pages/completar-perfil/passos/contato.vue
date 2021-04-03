<template>
  <div class="min-h-screen bg-primary flex justify-center items-center">
    <a-card fluid class="flex flex-col relative z-10 max-w-lg">
      <h1 class="text-primary text-xl font-bold">Contato do Whatsapp</h1>

      <p class="text-center my-3">
        Durante o processo de adoção, é importante sempre manter contato, por
        isso utilizamos o whatsapp para mediar essa conversa entre doador e
        adotante!
      </p>

      <form class="w-full space-y-6" @submit.prevent="handleRegisterContact">
        <a-input v-model="contact" label="Número do whatsapp" />
        <div class="flex justify-end w-full">
          <a-button>Próximo</a-button>
        </div>
      </form>
    </a-card>

    <a-footer class="absolute bottom-0" />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      contact: '',
    }
  },
  mounted() {},
  methods: {
    ...mapActions({ registerContact: 'user/registerContact' }),
    ...mapMutations({ setContacts: 'user/setContacts' }),

    async handleRegisterContact() {
      try {
        const contact = await this.registerContact({
          type: 'whatsapp',
          contact: this.contact,
        })

        this.setContacts([contact])

        this.$router.push('/completar-perfil/passos/avatar')
      } catch (error) {
        this.$toast.error('Houve um erro ao cadastrar contato', {
          position: 'top-center',
        })
      }
    },
  },
}
</script>
