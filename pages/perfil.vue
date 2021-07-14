<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <nuxt-link to="/meus-pets">
          <img src="/image/logo_no_bg.png" alt="" width="150" />
        </nuxt-link>
        <nuxt-link v-if="!user.isLoggedIn" to="/entrar">
          <a-button class="md:mr-5 mt-4 md:mt-0 text-white" size="lg">
            Entrar
          </a-button>
        </nuxt-link>
        <span v-if="user.isLoggedIn" class="md:mr-5 mt-4 md:mt-0 text-white">
          <div class="flex justify-center">
            <div class="relative">
              <div class="flex">
                <button
                  class="flex items-center z-10 rounded-md bg-primary p-2 focus:outline-none"
                  @click="dropdownOpen = !dropdownOpen"
                >
                  <img
                    class="rounded-full mr-2"
                    :src="
                      user.avatar
                        ? `http://localhost:3001/static/images/${user.avatar}`
                        : 'https://i.imgur.com/sbDUqps.png'
                    "
                    alt=""
                    width="40"
                  />
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
                <nuxt-link to="/perfil">
                  <button
                    class="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-secondary-100 hover:text-white"
                  >
                    Perfil
                  </button>
                </nuxt-link>
                <button
                  class="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-secondary-100 hover:text-white"
                  @click="handleLogout"
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
    <main class="">
      <section
        v-if="doador"
        class="flex flex-wrap justify-center md:justify-start pt-5"
      >
        <section
          class="flex flex-col items-center justify-center md:mr-10 md:ml-10"
          style="height: 35%"
        >
          <section class="shadow-lg rounded-md p-6 flex flex-col">
            <nuxt-link v-if="user.isLoggedIn" class="flex justify-end" to="">
              <img
                src="https://img.icons8.com/fluent-systems-regular/30/000000/edit--v1.png"
                alt=""
                class="w-5"
              />
            </nuxt-link>
            <span>
              <img
                class="rounded-full w-64"
                :src="
                  doador.avatar
                    ? `http://localhost:3001/static/images/${doador.avatar}`
                    : 'https://i.imgur.com/sbDUqps.png'
                "
                alt=""
              />
            </span>
            <span class="text-center">
              <h2 class="text-3xl mb-1">Nome teste</h2>
              <p class="flex text-lg justify-center">
                <span class="flex">
                  <img src="/image/pin.svg" alt="" class="w-5 mr-2" />
                  Rua das Maravilhas, n° 123
                </span>
              </p>
              <a-button class="mt-3" size="md" color="primary">
                <section class="flex">
                  <img
                    class="mr-2"
                    src="/image/whatsapp.svg"
                    alt=""
                    width="20"
                  />
                  <span>Whatsapp</span>
                </section>
              </a-button>
            </span>
          </section>
          <section
            v-if="user.isLoggedIn"
            class="shadow-lg rounded-md mt-12 w-full p-3"
          >
            <section class="flex justify-between">
              <span>
                <h2 class="text-2xl mb-1">Endereço</h2>
              </span>
              <span class="flex items-center">
                <nuxt-link class="mr-3" :to="`/add-address`">
                  <img src="/image/mapAdd.svg" alt="" class="w-5" />
                </nuxt-link>
                <button>
                  <img src="/image/delete.svg" alt="" class="w-5" />
                </button>
              </span>
            </section>
            <section class="flex justify-between">
              <span>
                <h2 class="text-2xl mb-1">Contato</h2>
              </span>
              <span class="flex items-center">
                <button>
                  <img src="/image/delete.svg" alt="" class="w-5" />
                </button>
              </span>
            </section>
          </section>
        </section>
        <section class="mt-6 mx-4 md:mt-0 md:w-8/12 sm:w-3/12 w-full">
          <h1
            class="text-4xl text-center md:text-left font-bold text-primary-100 pb-4"
          >
            Pets em adoção
          </h1>
          <section class="flex flex-wrap">
            <div v-for="pet in pets" :key="pet.id">
              <section
                v-if="pet.adoptionStatus == 'waiting'"
                class="m-auto w-64 mr-0 mb-4 my-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
                style="height: 320px"
              >
                <a-animal-card
                  :bg="
                    pet.avatar
                      ? `http://localhost:3001/static/images/${pet.avatar}`
                      : 'https://i.imgur.com/VmCQnLK.png'
                  "
                >
                  <section
                    class="flex justify-end pl-4 pr-4 customDetailsUp"
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
                            color="info"
                            size="sm"
                            @click="toggle2Modal(pet.id)"
                            >Status</a-button
                          >
                        </section>
                      </section>
                    </section>
                  </section>
                </a-animal-card>
              </section>
            </div>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      doador: null,
      dropdownOpen: false,
      pets: [],
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  mounted() {
    this.handleFetchPets()
    this.handleFetchUser()
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
      fetchPets: 'user/fetchPets',
      fetchUser: 'user/fetchUser',
    }),

    handleLogout() {
      try {
        this.logout(this.user)
        this.$router.push('/entrar')
      } catch (error) {
        this.$toast.error('Houve um erro ao deslogar', {
          position: 'top-center',
        })
        this.$router.push('/')
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

    handleFetchUser() {
      try {
        const doador = this.fetchUser()
        this.doador = doador
      } catch (error) {
        this.$toast.error('Houve um erro ao buscar pets', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
  },
}
</script>
