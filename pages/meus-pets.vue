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
            v-if="
              pet.adoptionStatus == 'waiting' ||
              pet.adoptionStatus == 'in_progress'
            "
            class="w-64 mr-0 mb-4 my-4 sm:mr-4 md:mr-16 md:mb-0 text-white"
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
                class="flex justify-between pl-4 pr-4 customDetailsUp"
                style="height: 50%"
              >
                <p>
                  <button
                    class="text-2xl pt-3 textShadow"
                    @click="toggleModal(pet.id)"
                  >
                    <img src="/image/camera.svg" alt="" class="w-8" />
                  </button>
                </p>
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
      </article>
      <!---->
      <h2
        class="text-4xl text-center md:text-left pb-5 font-bold text-primary-100"
      >
        Pets adotados
      </h2>
      <article class="flex flex-wrap">
        <section v-for="pet in pets" :key="pet.id">
          <section v-if="pet.adoptionStatus == 'adopted'" class="flex py-6">
            <section
              class="w-48 mr-0 mb-4 md:my-2 sm:mr-4 md:mr-16 md:mb-0 text-white"
              style="height: 220px"
            >
              <a-animal-card
                :bg="
                  pet.avatar
                    ? `http://localhost:3001/static/images/${pet.avatar}`
                    : 'https://i.imgur.com/VmCQnLK.png'
                "
              >
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
                          @click="handleRejectAdoption(pet.id)"
                          >x</a-button
                        >
                      </section>
                    </section>
                  </section>
                </section>
              </a-animal-card>
            </section>
          </section>
        </section>
      </article>
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
              <h3 v-if="pets.avatar != null" class="text-3xl font-semibold">
                Editar imagem
              </h3>
              <h3 v-else class="text-3xl font-semibold">Adicionar imagem</h3>
            </div>
            <div class="relative p-6 flex-auto">
              <section class="flex justify-center">
                <form
                  class="w-full text-center"
                  @submit.prevent="uploadPetImage(petId)"
                >
                  <section class="mb-6">
                    <section class="flex justify-center items-center">
                      <section class="mx-2 md:w-1/2 md:mx-0">
                        <img
                          :src="url"
                          class="object-cover w-full h-64 rounded-3xl"
                        />
                      </section>
                    </section>
                    <div
                      class="flex w-full items-center justify-center bg-grey-lighter"
                    >
                      <label
                        class="flex flex-col items-center justify-center space-y-4 text-primary hover:text-primary-500 cursor-pointer"
                      >
                        <span class="mt-2 text-base leading-normal">
                          Selecione um arquivo...
                        </span>
                        <input
                          type="file"
                          class="hidden"
                          @change="handleFileChange"
                        />
                      </label>
                    </div>
                  </section>
                  <div
                    class="flex items-center justify-end pt-3 border-t border-solid border-blueGray-200 rounded-b"
                  >
                    <button
                      class="text-gray-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      @click="toggleModal()"
                    >
                      Cancelar
                    </button>
                    <button
                      class="text-success-200 bg-transparent border border-solid border-success-200 hover:bg-success-200 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>

    <div>
      <div
        v-if="showModal2"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none mx-2 focus:outline-none justify-center items-center flex"
      >
        <div class="relative w-auto my-6 mx-auto max-w-6xl md:w-1/2">
          <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <h3 class="text-3xl font-semibold">Status da adoção</h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                @click="toggle2Modal()"
              >
                <span
                  class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>
            <div class="relative p-6 flex-auto">
              <section class="flex justify-center">
                <section>
                  <h1 class="text-lg">
                    O adotante <strong>Maria da Silva</strong> de CPF/CNPJ
                    <strong>123.456.789-00</strong> solicitou a adoção deste
                    pet!<br />
                    Você confirma a adoção?
                  </h1>
                </section>
              </section>
            </div>
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="handleRejectAdoption(optId)"
              >
                Rejeitar adoção
              </button>
              <button
                class="text-success-200 bg-transparent border border-solid border-success-200 hover:bg-success-200 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="handleConfirmAdoption(optId)"
              >
                Aceitar adoção
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal2"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  // middleware: ['authenticated'],
  data() {
    return {
      pets: [],
      pett: {},
      dropdownOpen: false,
      showModal: false,
      showModal2: false,
      image: null,
      url: null,
      petId: null,
      optId: null,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
    filteredInProgressPets() {
      return this.pets.filter((pet) => pet.adoptionStatus === 'in_progress')
    },
    filteredAdoptedPets() {
      return this.pets.filter((pet) => pet.adoptionStatus === 'adopted')
    },
  },

  mounted() {
    this.handleFetchPets()
    this.handleFetchPet(this.optId)
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
      fetchPets: 'user/fetchPets',
      fetchPet: 'user/fetchPet',
      confirmAdopt: 'user/petAdoptAccept',
      rejectAdopt: 'user/petAdoptRefuse',
      uploadAvatar: 'user/uploadPetAvatar',
    }),

    toggleModal(id) {
      this.showModal = !this.showModal
      this.petId = id
    },

    toggle2Modal(ids) {
      this.showModal2 = !this.showModal2
      this.optId = ids
    },

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

    async handleFetchPet(optId) {
      try {
        const pett = await this.fetchPet(optId)
        this.pett = pett
      } catch (error) {
        console.log(error.response)
        this.$toast.error('Houve um erro ao buscar pet', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },
    getPetImage(img) {
      if (img == null) {
        return 'https://i.imgur.com/VmCQnLK.png'
      } else {
        return `/static/image/${img}`
      }
    },

    handleConfirmAdoption(petId) {
      try {
        this.confirmAdopt(petId)
        this.$toast.success('Adoção confirmada!', { position: 'top-center' })
        this.showModal2 = !this.showModal2
        this.$router.go('/meus-pets')
      } catch (error) {
        this.$toast.error('Houve um erro ao confirmar adoção', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },

    handleRejectAdoption(petId) {
      try {
        this.rejectAdopt(petId)
        this.$toast.success('Adoção recusada!', { position: 'top-center' })
        this.showModal2 = !this.showModal2
        this.$router.go('/meus-pets')
      } catch (error) {
        this.$toast.error('Houve um erro ao recusar adoção', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
      }
    },

    handleFileChange(e) {
      this.image = e.target.files[0]
      this.url = URL.createObjectURL(this.image)
    },

    async uploadPetImage(petId) {
      try {
        const imgFormData = new FormData()
        imgFormData.append('avatar', this.image)
        await this.uploadAvatar({
          petId,
          avatar: imgFormData,
        })
        this.$router.go('/meus-pets')
      } catch (error) {
        this.$toast.error('Houve um erro ao fazer o upload da imagem.', {
          position: 'top-center',
        })
      } finally {
        setTimeout(() => this.$toast.clear(), 7000)
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
