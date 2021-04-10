<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <nuxt-link to="/pets">
          <img src="/image/logo_no_bg.png" alt="" width="150" />
        </nuxt-link>
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
        Obrigada por adotar um pet! Mas ainda é necessário mais um passo.
      </h1>
      <section class="mx-4 md:mx-auto md:w-1/2">
        <p>
          Pedimos que você entre em contato com o doador para que seja possível
          prosseguir com a adoção e você possa levar o seu pet pra casa. O
          número que você pode entrar em contato é: {{ user.name }} !
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  methods: {
    ...mapActions({
      registerPets: 'user/registerPets',
      donator: 'user/fetchGetDonators',
    }),
    async handleRegisterPet() {
      try {
        await this.registerPets(this.newPet)
        this.$router.push('/meus-pets')
      } catch (error) {
        this.$toast.error('Houve problemas no cadastro', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>
