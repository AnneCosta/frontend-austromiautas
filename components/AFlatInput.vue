<template>
  <div :class="computedWrapperClasses">
    <input :class="computedInputClasses" v-bind="$attrs" @input="handleInput" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    color: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  prop: ['value'],
  data() {
    return {
      colors: {
        default: {
          enabled: ['border-gray-600', 'text-gray-500', 'border-opacity-25'],
          disabled: ['border-gray-600', 'text-gray-300', 'border-opacity-25'],
        },
      },

      wrapper: {
        enabled: ['w-full'],
        disabled: ['cursor-not-allowed', 'w-full'],
      },

      input: {
        enabled: [
          'border-b',
          'pt-2',
          'pb-1',
          'border-solid',
          'focus:outline-none',
          'text-base',
          'bg-transparent',
          'w-full',
        ],
        disabled: [
          'border-b',
          'pt-2',
          'pb-1',
          'border-solid',
          'focus:outline-none',
          'text-base',
          'bg-transparent',
          'pointer-events-none',
          'w-full',
        ],
      },
    }
  },
  computed: {
    computedInputClasses() {
      return [...this.computedInput, ...this.computedColor]
    },
    computedWrapperClasses() {
      return [...this.computedWrapper]
    },
    computedColor() {
      const color = this.colors[this.color]
        ? this.colors[this.color]
        : this.colors.default

      return this.disabled === true ? color.disabled : color.enabled
    },

    computedInput() {
      return this.disabled === true ? this.input.disabled : this.input.enabled
    },

    computedWrapper() {
      return this.disabled === true
        ? this.wrapper.disabled
        : this.wrapper.enabled
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
