<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap justify-center pb-4 md:justify-between md:pb-0 items-center bg-primary pt-4"
      >
        <img src="/image/logo_no_bg.png" alt="" width="150" />
        <span class="md:mr-5 mt-4 md:mt-0 text-white">
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
                  class="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
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
    <main v-if="pet" class="container m-auto">
      <h1 class="text-2xl text-center font-bold mt-4 mx-4 md:mx-0">
        <nuxt-link to="/meus-pets">
          <button class="float-left text-md font-bold">&#9001;</button>
        </nuxt-link>
        Editar pet
      </h1>
      <section class="mx-4 md:mx-auto md:w-1/2">
        <form @submit.prevent="handleUpdatePet">
          <section
            class="flex justify-center items-center mx-2 md:w-full md:mx-0"
          >
            <img
              :src="url"
              class="object-cover w-full rounded-3xl"
              style="height: 500px"
            />
          </section>
          <div class="flex w-full items-center justify-center bg-grey-lighter">
            <label
              class="flex flex-col items-center justify-center space-y-4 text-primary hover:text-primary-500 cursor-pointer"
            >
              <span class="mt-2 text-base leading-normal">
                Selecione um arquivo...
              </span>
              <input type="file" class="hidden" @change="handleFileChange" />
            </label>
          </div>
          <a-input v-model="pet.name" label="Nome do pet" />
          <section class="flex justify-between flex-wrap">
            <section class="w-full my-2 md:w-1/2">
              <p class="text-lg mb-2 text-gray-800">Tipo de pet</p>
              <div class="flex">
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="dog"
                    v-model="pet.type"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="type"
                    value="dog"
                    type="radio"
                  />
                  <label class="mr-4" for="dog">Cachorro</label>
                </div>
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="cat"
                    v-model="pet.type"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    type="radio"
                    name="type"
                    value="cat"
                  />
                  <label for="cat">Gato</label>
                </div>
              </div>
            </section>
            <section class="w-full my-2 md:w-1/2">
              <p class="text-lg mb-2 text-gray-800">Gênero</p>
              <div class="flex">
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="male"
                    v-model="pet.gender"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="gender"
                    value="male"
                    type="radio"
                  />
                  <label class="mr-4" for="male">Macho</label>
                </div>
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="female"
                    v-model="pet.gender"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="gender"
                    value="female"
                    type="radio"
                  />
                  <label for="female">Fêmea</label>
                </div>
              </div>
            </section>
            <section class="w-full my-2 md:w-1/2">
              <p class="text-lg mb-2 text-gray-800">É castrado?</p>
              <div class="flex">
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="castrated"
                    v-model="pet.isCastrated"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="castrated"
                    :value="true"
                    type="radio"
                  />
                  <label class="mr-4" for="castrated">Sim</label>
                </div>
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="noCastrated"
                    v-model="pet.isCastrated"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="castrated"
                    :value="false"
                    type="radio"
                  />
                  <label for="noCastrated">Não</label>
                </div>
              </div>
            </section>
            <section class="w-full my-2 md:w-1/2">
              <p class="text-lg mb-2 text-gray-800">É vacinado?</p>
              <div class="flex">
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="vaccinated"
                    v-model="pet.isVaccinated"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="vaccinated"
                    :value="true"
                    type="radio"
                  />
                  <label class="mr-4" for="vaccinated">Sim</label>
                </div>
                <div class="text-gray-600 flex items-center mb-2">
                  <input
                    id="noVaccinated"
                    v-model="pet.isVaccinated"
                    class="h-4 w-4 px-3 py-3 border rounded mr-2"
                    name="vaccinate"
                    :value="false"
                    type="radio"
                  />
                  <label for="noVaccinated">Não</label>
                </div>
              </div>
            </section>
          </section>
          <section class="flex"></section>
          <a-input v-model="pet.approximatedAge" label="Idade aproximada" />
          <textarea
            id="adoptreason"
            v-model="pet.adoptionReason"
            class="w-full text-gray-600 px-2 py-2 border border-gray-500 focus:outline-none resize-none rounded-lg focus:border-gray-600"
            name="Razão da adoção"
            placeholder="Razão da adoção"
            cols="4"
            rows="3"
          ></textarea>
          <textarea
            id="extrainfo"
            v-model="pet.extraInformations"
            class="w-full text-gray-600 px-3 py-2 border border-gray-500 mb-4 focus:outline-none resize-none rounded-lg focus:border-gray-600"
            name="Informações extras"
            placeholder="Informações extras"
            cols="4"
            rows="3"
          ></textarea>
          <a-button class="mb-4 md:mb-0" fluid size="md">Atualizar</a-button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  middleware: ['authenticated'],
  data() {
    return {
      dropdownOpen: false,
      pet: {
        name: '',
        type: '',
        gender: '',
        isCastrated: true,
        isVaccinated: true,
        approximatedAge: '',
        adoptionReason: '',
        extraInformations: '',
      },
      image: undefined,
      url: undefined,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
    formIsValid() {
      if (
        this.pet.name &&
        this.pet.type &&
        this.pet.gender &&
        this.pet.isCastrated &&
        this.pet.isVaccinated &&
        this.pet.approximatedAge &&
        this.pet.adoptionReason &&
        this.pet.extraInformations
      ) {
        return true
      }
      return false
    },

    formUpdate() {
      return {
        name: this.pet.name,
        type: this.pet.type,
        gender: this.pet.gender,
        isCastrated: Boolean(this.pet.isCastrated),
        isVaccinated: Boolean(this.pet.isVaccinated),
        approximatedAge: this.pet.approximatedAge,
        adoptionReason: this.pet.adoptionReason,
        extraInformations: this.pet.extraInformations,
      }
    },
  },

  mounted() {
    this.handleFetchPet()
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
      fetchPet: 'user/fetchPet',
      update: 'user/updatePet',
      uploadImage: 'user/uploadPetAvatar',
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
    async handleUpdatePet() {
      try {
        const updatePet = await this.update({
          petId: this.$route.params.id,
          formInfo: this.formUpdate,
        })

        if (this.url) {
          const imgFormData = new FormData()
          imgFormData.append('avatar', this.image)
          await this.uploadImage({
            petId: updatePet.id,
            avatar: imgFormData,
          })
        }

        this.$router.push('/meus-pets')
      } catch (error) {
        console.log(error.response)
        this.$toast.error('Houve problemas no cadastro', {
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
  },
}
</script>
