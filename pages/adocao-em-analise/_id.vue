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
      <section class="flex justify-center mt-4">
        <img src="/image/friends.svg" alt="" class="w-48" />
      </section>
      <h1 class="text-3xl text-center font-bold mt-4 my-4 mx-4 md:mx-0">
        Obrigada por adotar um pet conosco! <br />
        Mas ainda é necessário cumprir mais um passo.
      </h1>
      <section class="mx-4 md:mx-auto md:w-1/2 flex">
        <p
          v-for="(contact, index) in donator.contacts"
          :key="index"
          class="text-lg text-center"
        >
          Pedimos que você entre em contato com o doador para que seja possível
          prosseguir com a adoção e você possa levar o seu pet pra casa. <br />O
          número que você pode entrar em contato com o doador é:
          <strong>{{ contact.contact }}</strong>
        </p>
      </section>
      <nuxt-link class="flex justify-center mt-5 mb-5" to="/pets">
        <a-button size="md" color="primary">Voltar ao início</a-button>
      </nuxt-link>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      donator: '',
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  mounted() {
    this.handleGetOwner()
  },

  methods: {
    ...mapActions({
      petGetOwner: 'user/petGetOwner',
    }),
    async handleGetOwner() {
      try {
        const donator = await this.petGetOwner(this.$route.params.id)
        this.donator = donator
      } catch (error) {
        console.log(error.response)
        this.$toast.error('Houve problemas na exibição de contato do doador', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>
