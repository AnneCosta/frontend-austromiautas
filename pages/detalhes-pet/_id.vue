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
    <main class="container m-auto mb-16">
      <section class="flex justify-between mx-2 md:mx-0">
        <h1
          class="text-4xl text-center md:text-left font-bold text-primary-100 py-4"
        >
          Detalhes do pet
        </h1>
        <section v-if="user.isLoggedIn" class="flex">
          <nuxt-link class="flex items-center" :to="`/edit-pet/${pet.id}`">
            <button class="text-lg my-4 mr-4">
              <img
                src="https://img.icons8.com/fluent-systems-regular/30/000000/edit--v1.png"
              />
            </button>
          </nuxt-link>
          <button class="text-lg my-4" @click="toggleModal()">
            <img
              src="https://img.icons8.com/fluent-systems-regular/30/000000/delete-forever.png"
            />
          </button>
        </section>
      </section>
      <section
        class="w-full flex flex-col md:flex-row flex-wrap justify-around items-center m-auto mt-5"
      >
        <section class="flex md:w-2/5 flex-col">
          <section class="flex justify-center mx-2 md:mx-0">
            <img
              class="object-cover w-full rounded-3xl"
              :src="
                pet.avatar
                  ? `http://localhost:3001/static/images/${pet.avatar}`
                  : 'https://i.imgur.com/VmCQnLK.png'
              "
              alt=""
              style="height: 500px"
            />
          </section>
        </section>
        <section class="flex md:w-1/2 flex-col">
          <section class="mx-4 md:mx-0">
            <section class="flex flex-wrap justify-between items-center">
              <section>
                <p class="text-4xl">{{ pet.name }}</p>
              </section>
              <section class="flex">
                <p class="text-3xl mr-2">≈ {{ pet.approximatedAge }}</p>
                <p v-if="pet.gender == 'male'" class="text-3xl">&#9794;</p>
                <p v-else class="text-3xl">&#9792;</p>
              </section>
            </section>
            <section class="text-center my-2">
              <p>
                <span v-if="pet.type == 'dog'" class="text-2xl">Cachorro</span>
                <span v-else class="text-2xl">Gato</span>
                <span class="text-2xl mx-2">•</span>
                <span v-if="pet.isCastrated" class="text-2xl">Castrado</span>
                <span v-else class="text-2xl">Não castrado</span>
                <span class="text-2xl mx-2">•</span>
                <span v-if="pet.isVaccinated" class="text-2xl">Vacinado</span>
                <span v-else class="text-2xl"> Não vacinado </span>
              </p>
            </section>
            <section>
              <p class="text-lg text-justify break-all">
                {{ pet.adoptionReason }}
              </p>
            </section>
            <section class="mt-3">
              <p class="text-lg font-bold">Informações extras:</p>
              <p class="text-lg text-justify break-all">
                {{ pet.extraInformations }}
              </p>
            </section>
            <section v-if="doador" class="mt-10 mb-6 flex">
              <section>
                <img
                  class="rounded-full w-24"
                  :src="
                    doador.avatar
                      ? `http://localhost:3001/static/images/${doador.avatar}`
                      : 'https://i.imgur.com/sbDUqps.png'
                  "
                  alt=""
                />
              </section>
              <section class="ml-5">
                <p class="text-2xl">
                  <span> {{ doador.name }} </span>
                </p>
                <nuxt-link :to="`/perfil/${pet.id}`">
                  <a-outline-button class="mt-4" size="sm" color="secondary">
                    Ver mais detalhes
                  </a-outline-button>
                </nuxt-link>
              </section>
            </section>
            <nuxt-link
              v-if="!user.isLoggedIn"
              :to="`/confirmar-dados/${$route.params.id}`"
            >
              <a-button fluid size="md" class="w-full my-6">Adote-me</a-button>
            </nuxt-link>
          </section>
        </section>
      </section>
    </main>
    <div>
      <div
        v-if="showModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none mx-2 focus:outline-none justify-center items-center flex"
      >
        <div class="relative w-auto my-6 mx-auto max-w-6xl md:w-1/2">
          <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <h3 class="text-3xl font-semibold">Deletar pet</h3>
            </div>
            <div class="relative p-6 flex-auto">
              <p class="my-4 text-blueGray-500 text-xl leading-relaxed">
                Você tem certeza que deseja apagar esse animal do sistema?
                <br />
                <strong>Esta ação é irreversível!</strong>
              </p>
            </div>
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="toggleModal()"
              >
                Cancelar
              </button>
              <button
                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="handleDelete"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
  </div>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      pet: null,
      doador: null,
      dropdownOpen: false,
      showModal: false,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  mounted() {
    this.handleFetchPet()
    this.handleGetOwner()
  },

  methods: {
    ...mapActions({
      fetchPet: 'user/fetchPet',
      logout: 'user/logout',
      delete: 'user/petDelete',
      donatorPet: 'user/petGetOwner',
    }),
    toggleModal() {
      this.showModal = !this.showModal
    },
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
    async handleDelete() {
      try {
        await this.delete(this.$route.params.id)
        this.$router.push('/meus-pets')
      } catch (error) {
        console.log(error)
      }
    },

    async handleGetOwner() {
      try {
        const doador = await this.donatorPet(this.$route.params.id)
        this.doador = doador
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
