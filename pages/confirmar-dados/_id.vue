<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="/image/logo_no_bg.png" alt="" width="150" />
        <nuxt-link to="/entrar">
          <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg">
            Entrar
          </a-button>
        </nuxt-link>
      </nav>
      <img src="/image/wave.png" alt="" width="100%" />
    </header>
    <main class="container m-auto">
      <h1 class="text-2xl text-center font-bold mt-4 mx-4 md:mx-0">
        Informe seus dados
      </h1>
      <section class="mx-4 md:mx-auto md:w-1/2">
        <form>
          <section>
            <a-input v-model="adopter.adopterName" label="Nome completo" />
          </section>
          <section>
            <a-input v-model="adopter.adopterCPF" label="CPF" />
          </section>
          <section class="my-8">
            <a-input
              id="birth"
              v-model="adopter.adopterBirth"
              label="Data de nascimento"
              type="date"
              elevate-label
            />
          </section>

          <a-button
            class="mb-4 md:mb-0 w-full my-4"
            fluid
            :disabled="!formIsValid"
            size="md"
            @click.prevent="handleAdopt()"
          >
            Confirmar adoção
          </a-button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      adopter: {
        adopterName: '',
        adopterCPF: '',
        adopterBirth: null,
      },
    }
  },
  computed: {
    formIsValid() {
      if (
        this.adopter.adopterName &&
        this.adopter.adopterCPF &&
        this.adopter.adopterBirth
      ) {
        return true
      }
      return false
    },
  },
  methods: {
    ...mapActions({ petAdopt: 'user/fetchPetAdopt' }),
    async handleAdopt() {
      try {
        await this.petAdopt({
          petId: this.$route.params.id,
          formInfo: this.adopter,
        })
        this.$toast.success('')
        this.$router.push('/pets')
      } catch (error) {
        this.$toast.error('Houve um erro ao adotar', { position: 'top-center' })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>
