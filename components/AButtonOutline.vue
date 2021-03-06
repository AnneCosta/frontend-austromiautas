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
        primary: ['border-primary', 'text-primary'],
        secondary: ['border-secondary', 'text-secondary'],
      },
      buttonClasses: [
        'text-sm',
        'border-2',
        'p-2',
        'mb-10',
        'rounded-full',
        'w-full',
        'whitespace-no-wrap',
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
