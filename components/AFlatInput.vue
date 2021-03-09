<template>
  <input
    class="border-b border-solid border-gray-500 pt-2 pb-1 focus:outline-none border-opacity-25 text-lg w-full"
    v-bind="$attrs"
    :v-on="$listeners"
    @input="handleInput"
  />
</template>

<script>
export default {
  prop: ['value'],
  model: {
    prop: 'value',
    event: 'input',
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
