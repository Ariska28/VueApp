<template>
  <button class="button">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'my-btn'
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: var(--accent-color);
    border: none;
    padding: 20px 30px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
</style>
