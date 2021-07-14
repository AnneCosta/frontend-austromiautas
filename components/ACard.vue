<template>
  <div :class="computedCardClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String,
      default: 'base',
    },
    shadow: {
      type: String,
      default: 'base',
    },
  },

  data() {
    return {
      cardClasses: [
        'bg-white',
        'flex',
        'items-center',
        'justify-center',
        'p-8',
      ],

      roundedOptions: {
        none: ['rounded-none'],
        sm: ['rounded-lg'],
        base: ['rounded-xl'],
        lg: ['rounded-3xl'],
      },

      shadowOptions: {
        none: ['shadow-none'],
        sm: ['shadow-md'],
        base: ['shadow-lg'],
        lg: ['shadow-2xl'],
      },
    }
  },

  computed: {
    computedFluidClasses() {
      return this.fluid === true ? [] : ['max-w-max-content']
    },

    computedRoundedClasses() {
      return this.roundedOptions[this.rounded]
        ? this.roundedOptions[this.rounded]
        : this.roundedOptions.base
    },

    computedShadowClasses() {
      return this.shadowOptions[this.shadow]
        ? this.shadowOptions[this.shadow]
        : this.shadowOptions.base
    },

    computedCardClasses() {
      return [
        ...this.cardClasses,
        ...this.computedFluidClasses,
        ...this.computedRoundedClasses,
        ...this.computedShadowClasses,
      ]
    },
  },
}
</script>
