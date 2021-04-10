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
    <main v-if="pet" class="container m-auto mb-16">
      <section class="w-full flex flex-col flex-wrap items-center m-auto mt-5">
        <form class="mx-2 md:w-1/2 md:mx-0" action="">
          <section class="flex justify-between mx-2 md:w-full md:mx-0">
            <h1 class="text-3xl font-bold text-center my-4">Editar pet</h1>
            <section class="flex items-center">
              <a-button size="md" color="success"> Salvar </a-button>
            </section>
          </section>
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
          <section class="mx-4 md:w-full md:mx-0">
            <section class="flex flex-wrap justify-between items-center">
              <section class="md:w-32 w-full">
                <a-input v-model="pet.name" label="Nome do pet" />
              </section>
              <section class="w-full md:flex md:w-1/2 flex-wrap">
                <section class="flex w-full md:w-40">
                  <p class="text-3xl mr-2 flex items-center">≈</p>
                  <a-input
                    v-model="pet.approximatedAge"
                    label="Idade aproximada"
                    fluid
                    class="w-full"
                  />
                </section>
                <section class="ml-5">
                  <div class="flex items-center justify-center md:flex-col">
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
                    <div class="text-gray-600 flex items-center mb-2 md:w-full">
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
              </section>
            </section>
            <section class="justify-center my-2 flex flex-wrap">
              <span
                class="flex flex-col w-full items-center md:items-start md:w-1/2"
              >
                <span>aaa</span>
                <span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="dog"
                      v-model="pet.type"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      name="type"
                      value="dog"
                      type="radio"
                    />
                    <label class="mr-4" for="dog">Cachorro</label>
                  </span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="cat"
                      v-model="pet.type"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      type="radio"
                      name="type"
                      value="cat"
                    />
                    <label for="cat">Gato</label>
                  </span>
                </span>
              </span>
              <span class="text-2xl mx-2">•</span>
              <span class="flex flex-col">
                <span>aaa</span>
                <span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="castrated"
                      v-model="pet.isCastrated"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      name="castrated"
                      :value="true"
                      type="radio"
                    />
                    <label class="mr-4" for="castrated">Sim</label>
                  </span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="noCastrated"
                      v-model="pet.isCastrated"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      name="castrated"
                      :value="false"
                      type="radio"
                    />
                    <label for="noCastrated">Não</label>
                  </span>
                </span>
              </span>
              <span class="text-2xl mx-2">•</span>
              <span class="flex flex-col">
                <span>aaa</span>
                <span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="vaccinated"
                      v-model="pet.isVaccinated"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      name="vaccinated"
                      :value="true"
                      type="radio"
                    />
                    <label class="mr-4" for="vaccinated">Sim</label>
                  </span>
                  <span class="text-gray-600 items-center mb-2">
                    <input
                      id="noVaccinated"
                      v-model="pet.isVaccinated"
                      class="h-4 w-4 px-3 py-3 border rounded mr-2"
                      name="vaccinate"
                      :value="false"
                      type="radio"
                    />
                    <label for="noVaccinated">Não</label>
                  </span>
                </span>
              </span>
            </section>
            <section>
              <p class="text-lg text-justify">
                <textarea
                  id="adoptreason"
                  v-model="pet.adoptionReason"
                  class="w-full text-gray-600 px-2 py-2 border border-gray-500 focus:outline-none resize-none rounded-lg focus:border-gray-600"
                  name="Razão da adoção"
                  placeholder="Razão da adoção"
                  cols="4"
                  rows="3"
                ></textarea>
              </p>
            </section>
            <section class="mt-3">
              <p class="text-lg font-bold">Informações extras:</p>
              <p class="text-lg text-justify">
                <textarea
                  id="extrainfo"
                  v-model="pet.extraInformations"
                  class="w-full text-gray-600 px-3 py-2 border border-gray-500 mb-4 focus:outline-none resize-none rounded-lg focus:border-gray-600"
                  name="Informações extras"
                  placeholder="Informações extras"
                  cols="4"
                  rows="3"
                ></textarea>
              </p>
            </section>
          </section>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
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
      image: null,
      url: null,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
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
    handleFileChange(e) {
      this.image = e.target.files[0]
      this.url = URL.createObjectURL(this.image)
    },
    async handleUploadAvatar(e) {
      const formData = new FormData()
      formData.append('avatar', this.image)
      try {
        await this.uploadAvatar(formData)
        this.$router.push('/meus-pets')
      } catch {
        this.$toast.error('Houve um erro durante o upload do arquivo!', {
          position: 'top-center',
        })
      }
    },
  },
}
</script>
