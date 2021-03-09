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
    size: {
      type: String,
      default: 'base',
    },
    shape: {
      type: String,
      default: 'pill',
    },
  },
  data() {
    return {
      colors: {
        primary: ['bg-primary', 'text-white'],
        secondary: ['bg-secondary', 'text-white'],
      },
      sizes: {
        sm: ['py-1', 'px-4', 'text-sm'],
        base: ['py-2', 'px-6', 'text-base'],
        lg: ['py-3', 'px-8', 'text-lg'],
      },
      shapes: {
        square: ['rounded-xl'],
        pill: ['rounded-full'],
      },

      buttonClasses: ['focus:outline-none'],
    }
  },
  computed: {
    computedColor() {
      return this.colors[this.color ?? 'primary']
    },
    computedSize() {
      return this.sizes[this.size ?? 'base']
    },
    computedShape() {
      return this.shapes[this.shape ?? 'pill']
    },
    computedClasses() {
      return [
        ...this.buttonClasses,
        ...this.computedColor,
        ...this.computedSize,
        ...this.computedShape,
      ]
    },
  },
}
</script>
