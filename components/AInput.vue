<template>
  <div class="relative my-5">
    <input
      :id="_uid"
      :class="computedInput"
      v-bind="$attrs"
      @focus="hasFocus = true"
      @blur="hasFocus = false"
      @input="handleInput"
    />
    <label :class="computedLabel" :for="_uid"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  prop: ['value'],
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    color: {
      type: String,
      default: 'light',
    },
    label: {
      type: String,
      default: '',
    },
    elevateLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: '',
      hasFocus: false,
      input: [
        'border-b',
        'border-solid',
        'relative',
        'z-10',
        'bg-transparent',
        'border-gray-500',
      ],
      colors: {
        light: {
          input: {
            focus: [
              'border-gray-600',
              'focus:border-gray-600',
              'focus:text-gray-600',
            ],
            blur: [],
            filled: ['text-gray-600', 'border-gray-600'],
          },
          label: {
            focus: ['text-gray-600'],
            blur: ['text-gray-600'],
            filled: ['text-gray-600', 'elevate'],
          },
        },

        primary: {
          input: {
            focus: [
              'border-primary',
              'focus:border-primary',
              'focus:text-primary',
            ],
            blur: [],
            filled: ['text-primary', 'border-primary'],
          },
          label: {
            focus: ['text-primary'],
            blur: ['text-gray-600'],
            filled: ['text-primary', 'elevate'],
          },
        },

        secondary: {
          input: {
            focus: [
              'border-secondary',
              'focus:border-secondary',
              'focus:text-secondary',
            ],
            blur: [],
            filled: ['text-secondary', 'border-secondary'],
          },
          label: {
            focus: ['text-secondary'],
            blur: ['text-gray-600'],
            filled: ['text-secondary', 'elevate'],
          },
        },

        success: {
          input: {
            focus: [
              'border-success',
              'focus:border-success',
              'focus:text-success',
            ],
            blur: [],
            filled: ['text-success', 'border-success'],
          },
          label: {
            focus: ['text-success'],
            blur: ['text-gray-600'],
            filled: ['text-success', 'elevate'],
          },
        },

        danger: {
          input: {
            focus: [
              'border-danger',
              'focus:border-danger',
              'focus:text-danger',
            ],
            blur: [],
            filled: ['text-danger', 'border-danger'],
          },
          label: {
            focus: ['text-danger'],
            blur: ['text-gray-600'],
            filled: ['text-danger', 'elevate'],
          },
        },

        warning: {
          input: {
            focus: [
              'border-warning',
              'focus:border-warning',
              'focus:text-warning',
            ],
            blur: [],
            filled: ['text-warning', 'border-warning'],
          },
          label: {
            focus: ['text-warning'],
            blur: ['text-gray-600'],
            filled: ['text-warning', 'elevate'],
          },
        },

        info: {
          input: {
            focus: ['border-info', 'focus:border-info', 'focus:text-info'],
            blur: [],
            filled: ['text-info', 'border-info'],
          },
          label: {
            focus: ['text-info'],
            blur: ['text-gray-600'],
            filled: ['text-info', 'elevate'],
          },
        },
      },
    }
  },
  computed: {
    computedState() {
      if (this.hasFocus === true) return 'focus'
      if (this.$attrs.value.length > 0) return 'filled'
      return 'blur'
    },

    computedInput() {
      const classes = this.colors[this.color]
        ? this.colors[this.color].input[this.computedState]
        : this.colors.light.input[this.computedState]
      return [...this.input, ...classes]
    },

    computedLabel() {
      const classes = this.colors[this.color]
        ? this.colors[this.color].label[this.computedState]
        : this.colors.light.label[this.computedState]
      return [...classes, this.elevateLabel === true ? 'elevate' : '']
    },
  },

  methods: {
    handleInput(e) {
      return this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

label {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  cursor: text;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

input,
label {
  width: 100%;
  height: 2rem;
  font-size: 1rem;
}

input:focus + label {
  @apply elevate;
}

.elevate {
  font-size: 0.9rem;
  top: -25px;
}
</style>
