<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="../static/image/logo_no_bg.png" alt="" width="150" />
        <nuxt-link to="/entrar">
          <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg">
            Entrar
          </a-button>
        </nuxt-link>
      </nav>
      <img src="../static/image/wave.png" alt="" width="100%" />
    </header>
    <main v-if="pets" class="container m-auto">
      <section class="flex justify-between items-center">
        <h1
          class="text-4xl text-center md:text-left font-bold text-primary-100 py-4"
        >
          Todos os pets
        </h1>
      </section>
      <article class="flex pb-12 flex-wrap justify-center md:justify-start">
        <div v-for="pet in pets" :key="pet.id">
          <section
            class="w-64 mr-0 mb-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
            style="height: 320px"
          >
            <a-animal-card bg="https://i.imgur.com/VmCQnLK.png">
              <section
                class="flex justify-end pr-4 customDetailsUp"
                style="height: 50%"
              >
                <p v-if="pet.gender == 'male'" class="text-4xl textShadow">
                  &#9794;
                </p>
                <p v-if="pet.gender == 'female'" class="text-4xl textShadow">
                  &#9792;
                </p>
              </section>
              <section class="flex items-end" style="height: 50%">
                <section class="pl-2 pb-2 w-full customDetailsBottom">
                  <h1 class="text-2xl textShadow">{{ pet.name }}</h1>
                  <p class="pb-2 textShadow">≈ {{ pet.approximatedAge }}</p>
                  <nuxt-link :to="'/detalhes-pet/' + pet.id">
                    <a-button color="secondary" size="sm"
                      >Ver detalhes</a-button
                    >
                  </nuxt-link>
                </section>
              </section>
            </a-animal-card>
          </section>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      pets: [],
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
        console.log(error.response)
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

.petsadotados {
  height: 120px !important;
  border-radius: 20px;
  object-fit: cover;
}
</style>
