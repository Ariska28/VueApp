<template>
  <input class="input"
         type = "text"
         :value="modelValue"
         @input="updateModelValue"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: String
  },
  methods: {
    updateModelValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    margin-top: 20px;
    border: 1px solid var(--nav-bg-color);
    border-radius: 6px;
    padding: 5px 10px;
    width: 200px;

    &:focus,
    &:focus-visible {
      border: 1px solid var(--accent-color)
    }
  }
</style>
