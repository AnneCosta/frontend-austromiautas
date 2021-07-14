<template>
  <section
    class="bg-center bg-cover h-full rounded-xl"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      required: true,
    },
  },
}
</script>
