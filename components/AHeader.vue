<template>
  <div class="relative w-full top-0 z-0">
    <div class="h-8 bg-primary-400 sm:hidden -m-px"></div>
    <img src="/image/wave_bottom.svg" alt="wave" />
    <div
      class="absolute top-0 z-10 flex justify-between items-center space-x-4 w-full px-4"
    >
      <div>
        <nuxt-link to="/">
          <img src="/image/logo.svg" alt="logo" class="w-12 sm:w-20 lg:w-24" />
        </nuxt-link>
      </div>
      <div>
        <a-input
          label="Pesquisar"
          aria-autocomplete="off"
          autocomplete="off"
          class="w-full md:w-64"
        />
      </div>
      <div>
        <img
          :src="`http://localhost:3001/static/images/${avatar}`"
          alt=""
          class="rounded-full w-8 sm:w-12 lg:w-16"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ avatar: 'user/getAvatar' }),
  },
}
</script>
