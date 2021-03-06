<template>
  <button :class="computedClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      colors: {
        primary: ['bg-dark-custom', 'text-white'],
        secondary: ['bg-pink-custom', 'text-white'],
      },
      buttonClasses: [
        'text-sm',
        'py-2',
        'px-6',
        'rounded-full',
        'focus:outline-none',
      ],
    }
  },
  computed: {
    computedColor() {
      return this.colors[this.color ?? 'primary']
    },
    computedClasses() {
      return [...this.buttonClasses, ...this.computedColor]
    },
  },
}
</script>
