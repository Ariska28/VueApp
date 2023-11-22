<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <router-view/>
</template>

<script>
import { provide, ref } from 'vue'

export default {
  setup () {
    provide(/* key */ 'message', /* value */ 'hello!')
  }
}
</script>

<style lang="scss">

nav {
  padding: 30px;
  background-color: var(--nav-bg-color);
  border-radius: 20px;

  a {
    font-weight: bold;
    color: var(--text-color);
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}

.container {
  max-width: 1224px;
  margin: auto;
  padding: 25px;
}
</style>
