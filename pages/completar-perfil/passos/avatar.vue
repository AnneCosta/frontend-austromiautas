<template>
  <div class="min-h-screen bg-primary flex justify-center items-center px-4">
    <a-card fluid class="flex flex-col relative z-10 max-w-lg space-y-6">
      <h1 class="text-primary text-xl font-bold">Avatar</h1>

      <p v-if="!image" class="text-sm text-center">
        dica: Usar um avatar pode melhorar suas chances de achar um adotante
        para o seu pet!
      </p>

      <div v-else>
        <img :src="url" class="w-full" />
      </div>

      <form class="w-full space-y-6" @submit.prevent="handleUploadAvatar">
        <div class="flex w-full items-center justify-center bg-grey-lighter">
          <label
            class="flex flex-col items-center justify-center space-y-4 text-primary hover:text-primary-500 cursor-pointer"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">
              Selecione um arquivo...
            </span>
            <input type="file" class="hidden" @change="handleFileChange" />
          </label>
        </div>
        <div class="flex justify-end w-full">
          <a-button>Finalizar</a-button>
        </div>
      </form>
    </a-card>

    <a-footer class="absolute bottom-0" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      image: null,
      url: null,
    }
  },
  methods: {
    ...mapActions({ uploadAvatar: 'user/uploadAvatar' }),
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
