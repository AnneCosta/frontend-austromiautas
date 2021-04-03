<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="../static/image/logo_no_bg.png" alt="" width="150" />
        <!-- <input
          class="w-1/3 rounded-full focus:outline-none pl-6"
          type="text"
          placeholder="Pesquisar..."
          style="height: 40px"
        /> -->
        <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg"
          >Entrar</a-button
        >
      </nav>
      <img src="../static/image/wave.png" alt="" width="100%" />
    </header>
    <main class="container m-auto">
      <h1 class="text-4xl font-bold text-primary-100">
        Pets procurando um lar
      </h1>
      <section class="flex flex-wrap pb-6 pt-3">
        <nuxt-link to="/listar-pets">
          <button
            class="w-32 mr-4 py-1 text-black border border-gray-500 rounded-lg"
          >
            🐶 Cachorro
          </button>
        </nuxt-link>
        <nuxt-link to="/listar-pets">
          <button class="w-32 text-black border border-gray-500 rounded-lg">
            🐱 Gato
          </button>
        </nuxt-link>
      </section>
      <!---->
      <article class="flex pb-12">
        <section
          class="w-64 mr-0 mb-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
          style="height: 320px"
        >
          <a-animal-card
            bg="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
          >
            <section
              class="flex justify-end pr-4 customDetailsUp"
              style="height: 50%"
            >
              <p class="text-4xl textShadow">&#9794;</p>
            </section>
            <section class="flex items-end" style="height: 50%">
              <section class="pl-2 pb-2 w-full customDetailsBottom">
                <h1 class="text-2xl textShadow">Doguinho</h1>
                <p class="pb-2 textShadow">≈ 1 ano</p>
                <a-button color="secondary" size="sm">Adote-me</a-button>
              </section>
            </section>
          </a-animal-card>
        </section>
        <section
          class="w-64 mr-0 mb-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
          style="height: 320px"
        >
          <a-animal-card
            bg="https://timesofindia.indiatimes.com/photo/67586673.cms"
          >
            <section
              class="flex justify-end pr-4 customDetailsUp"
              style="height: 50%"
            >
              <p class="text-4xl textShadow">&#9792;</p>
            </section>
            <section class="flex items-end" style="height: 50%">
              <section class="pl-2 pb-2 w-full customDetailsBottom">
                <h1 class="text-2xl textShadow">Catinha</h1>
                <p class="pb-2 textShadow">≈ 6 meses</p>
                <a-button color="secondary" size="sm">Adote-me</a-button>
              </section>
            </section>
          </a-animal-card>
        </section>
      </article>
      <!---->
      <h2
        class="text-4xl text-center md:text-left pb-5 font-bold text-primary-100"
      >
        ONGs próximas a você
      </h2>
      <article class="flex flex-wrap justify-around">
        <section class="flex py-6">
          <img
            class="rounded-xl"
            src="https://i.pinimg.com/236x/80/a0/97/80a09701f662a1ac3af18ebf98b6fdba.jpg"
            alt=""
            width="120"
          />
          <section class="pl-2">
            <p class="text-xl">Nome Ong</p>
            <p class="pb-2">
              Rua das Laranjeiras, 355 <br />
              Senhor do Bonfim - BA <br />
            </p>
            <a-button color="secondary" size="sm">Visite o perfil</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl"
            src="https://i.pinimg.com/236x/aa/33/51/aa33517396da6c11ee80129ad9d3f537.jpg"
            alt=""
            width="120"
          />
          <section class="pl-2">
            <p class="text-xl">Nome Ong</p>
            <p class="pb-2">
              Rua das Laranjeiras, 355 <br />
              Senhor do Bonfim - BA <br />
            </p>
            <a-button color="secondary" size="sm">Visite o perfil</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl"
            src="https://png.pngtree.com/png-clipart/20190120/ourlarge/pngtree-dog-cat-pet-shovel-officer-png-image_494987.jpg"
            alt=""
            width="120"
          />
          <section class="pl-2">
            <p class="text-xl">Nome Ong</p>
            <p class="pb-2">
              Rua das Laranjeiras, 355 <br />
              Senhor do Bonfim - BA <br />
            </p>
            <a-button color="secondary" size="sm">Visite o perfil</a-button>
          </section>
        </section>
        <section class="flex py-6">
          <img
            class="rounded-xl"
            src="https://www.ubatuba.sp.gov.br/wp-content/uploads/sites/2/2017/04/0425-adocao-CCZ-ubatuba-logo-770x689.png"
            alt=""
            width="120"
          />
          <section class="pl-2">
            <p class="text-xl">Nome Ong</p>
            <p class="pb-2">
              Rua das Laranjeiras, 355 <br />
              Senhor do Bonfim - BA <br />
            </p>
            <a-button color="secondary" size="sm">Visite o perfil</a-button>
          </section>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  middleware: ['authenticated'],
  data() {
    return {
      pets: [],
      dropdownOpen: false,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  mounted() {
    this.handleFetchPets()
  },

  methods: {
    ...mapActions({ fetchPets: 'user/fetchPets' }),

    async handleFetchPets() {
      try {
        const pets = await this.fetchPets()
        this.pets = pets
      } catch (error) {
        this.$toast.error('Houve um erro ao buscar animais', {
          position: 'top-center',
        })
      }
    },
  },
}
</script>

<style>
.customDetailsUp {
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  border-radius: 10px 10px 0px 0px;
}
.customDetailsBottom {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  border-radius: 0px 0px 10px 10px;
}
.textShadow {
  text-shadow: 1px 1px 3px #000;
}
</style>
