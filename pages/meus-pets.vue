<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="/image/logo_no_bg.png" alt="" width="150" />
        <span v-if="user.isLoggedIn" class="md:mr-5 mt-4 md:mt-0 text-white">
          <div class="flex justify-center">
            <div class="relative">
              <div class="flex">
                <button
                  class="flex z-10 rounded-md bg-primary p-2 focus:outline-none"
                  @click="dropdownOpen = !dropdownOpen"
                >
                  <p class="pr-2">
                    Bem vindo(a), <strong>{{ user.name }}</strong
                    >!
                  </p>
                  <svg
                    class="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                v-show="dropdownOpen"
                class=""
                @click="dropdownOpen = false"
              ></div>

              <div
                v-show="dropdownOpen"
                class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
              >
                <button
                  class="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-secondary-100 hover:text-white"
                  @click="handleLogout()"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </span>
      </nav>
      <img src="/image/wave.png" alt="" width="100%" />
    </header>
    <main v-if="pets" class="container m-auto">
      <section class="flex justify-between items-center">
        <h1
          class="text-4xl text-center md:text-left font-bold text-primary-100 py-4"
        >
          Meus pets
        </h1>
        <nuxt-link to="/cadastro-pet">
          <a-button size="md">Cadastrar animal</a-button>
        </nuxt-link>
      </section>
      <!---->
      <article class="flex pb-12 flex-wrap justify-center md:justify-start">
        <div v-for="pet in pets" :key="pet.id">
          <section
            class="w-64 mr-0 mb-4 my-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
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
                <p v-else class="text-4xl textShadow">&#9792;</p>
              </section>
              <section class="flex items-end" style="height: 50%">
                <section class="pl-2 pb-2 w-full customDetailsBottom">
                  <h1 class="text-2xl textShadow">{{ pet.name }}</h1>
                  <p class="pb-2 textShadow">≈ {{ pet.approximatedAge }}</p>
                  <section class="flex justify-between">
                    <section>
                      <nuxt-link :to="'/detalhes-pet/' + pet.id">
                        <a-button color="secondary" size="sm"
                          >Ver detalhes</a-button
                        >
                      </nuxt-link>
                    </section>
                    <section
                      v-if="pet.adoptionStatus == 'in_progress'"
                      class="mr-2"
                    >
                      <a-button
                        color="success"
                        size="sm"
                        @click="handleConfirmAdoption(pet.id)"
                        >v</a-button
                      >

                      <a-button
                        color="danger"
                        size="sm"
                        @click="handleRejectAdoption"
                        >x</a-button
                      >
                    </section>
                  </section>
                </section>
              </section>
            </a-animal-card>
          </section>
        </div>
      </article>
      <!---->
      <h2
        v-if="pets.adoptionStatus == 'adopted'"
        class="text-4xl text-center md:text-left pb-5 font-bold text-primary-100"
      >
        Pets adotados
      </h2>
      <article v-if="pets" class="flex flex-wrap justify-around">
        <section v-for="pet in pets" :key="pet.id">
          <section v-if="pet.adoptionStatus == 'adopted'" class="flex py-6">
            <img
              class="rounded-xl petsadotados"
              src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
              alt=""
              width="120"
            />
            <section class="pl-4">
              <p class="text-xl">{{ pet.name }}</p>
              <p class="pb-2">≈ {{ pet.approximatedAge }} <br /></p>
              <nuxt-link :to="'/detalhes-pet/' + pet.id">
                <a-button color="secondary" size="sm">Ver detalhes</a-button>
              </nuxt-link>
            </section>
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
    filteredInProgressPets() {
      return this.pets.filter((pet) => pet.adoptionStatus === 'in progress')
    },
    filteredAdoptedPets() {
      return this.pets.filter((pet) => pet.adoptionStatus === 'adopted')
    },
  },

  mounted() {
    this.handleFetchPets()
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
      fetchPets: 'user/fetchPets',
      confirmAdopt: 'user/petAdoptAccept',
      rejectAdopt: 'user/petAdoptRefuse',
    }),

    handleLogout() {
      try {
        this.logout(this.user)
        this.$router.push('/entrar')
      } catch (error) {
        this.$toast.error('Houve um erro ao deslogar', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },

    async handleFetchPets() {
      try {
        const pets = await this.fetchPets()
        this.pets = pets
      } catch (error) {
        this.$toast.error('Houve um erro ao buscar pets', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },

    handleConfirmAdoption(petId) {
      try {
        const confirm = this.confirmAdopt(petId)
        this.confirm = confirm
        console.log(confirm)
      } catch (error) {
        console.log(error.response)
        this.$toast.error('Houve um erro ao confirmar adoção', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },

    handleRejectAdoption() {
      return (id) => {
        //
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
