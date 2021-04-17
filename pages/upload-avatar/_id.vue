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
    <main class="container m-auto">
      <h1>Adicionar imagem</h1>
      <section class="flex justify-center">
        <form class="w-1/2 text-center" @submit.prevent="uploadPetImage">
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
          <a-button class="mt-4">Salvar</a-button>
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
      image: null,
      url: null,
      dropdownOpen: false,
    }
  },

  computed: {
    ...mapState({ user: 'user' }),
  },

  methods: {
    ...mapActions({
      uploadAvatar: 'user/uploadPetAvatar',
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

    async uploadPetImage() {
      const imgFormData = new FormData()
      imgFormData.append('avatar', this.image)
      try {
        await this.uploadAvatar({
          petId: this.$route.params.id,
          avatar: imgFormData,
        })
        this.$router.push('/meus-pets')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
