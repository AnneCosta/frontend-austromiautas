<template>
  <div v-if="pet">
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
    <main class="container m-auto mb-16">
      <h1 class="text-3xl font-bold text-center my-4">Detalhes do pet</h1>
      <section class="w-full flex flex-col flex-wrap items-center m-auto mt-5">
        <section class="flex justify-center mx-2 md:w-1/2 md:mx-0">
          <img
            class="object-cover w-full rounded-3xl"
            src="https://i.imgur.com/VmCQnLK.png"
            alt=""
            style="height: 500px"
          />
        </section>
        <section class="mx-4 md:w-1/2 md:mx-0">
          <section class="flex flex-wrap justify-between items-center">
            <section>
              <p class="text-4xl">{{ pet.name }}</p>
            </section>
            <section class="flex">
              <p class="text-3xl mr-2">≈ {{ pet.approximatedAge }}</p>
              <p v-if="pet.gender == 'male'" class="text-3xl">&#9794;</p>
              <p v-if="pet.gender == 'female'" class="text-3xl">&#9792;</p>
            </section>
          </section>
          <section class="text-center my-2">
            <p>
              <span v-if="pet.type == 'dog'" class="text-2xl">Cachorro</span>
              <span v-if="pet.type == 'cat'" class="text-2xl">Gato</span>
              <span class="text-2xl mx-2">•</span>
              <span v-if="pet.isCastrated" class="text-2xl">Castrado</span>
              <span v-if="!pet.isCastrated" class="text-2xl">Não castrado</span>
              <span class="text-2xl mx-2">•</span>
              <span v-if="pet.isVaccinated" class="text-2xl">Vacinado</span>
              <span v-if="!pet.isVaccinated" class="text-2xl">
                Não vacinado
              </span>
            </p>
          </section>
          <section>
            <p class="text-lg text-justify">
              {{ pet.adoptionReason }}
            </p>
          </section>
          <section class="mt-3">
            <p class="text-lg font-bold">Informações extras:</p>
            <p class="text-lg text-justify">
              {{ pet.extraInformations }}
            </p>
          </section>
          <nuxt-link
            v-if="!user.isLoggedIn"
            :to="`/confirmar-dados/${$route.params.id}`"
          >
            <a-button fluid size="md" class="w-full my-6">Adote-me</a-button>
          </nuxt-link>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      pet: null,
      dropdownOpen: false,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  mounted() {
    this.handleFetchPet()
  },

  methods: {
    ...mapActions({
      fetchPet: 'user/fetchPet',
      logout: 'user/logout',
    }),
    async handleFetchPet() {
      try {
        const pet = await this.fetchPet(this.$route.params.id)
        this.pet = pet
      } catch (error) {
        this.$toast.error('Houve um erro ao buscar pet', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
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
  },
}
</script>
