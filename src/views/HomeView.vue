<template>
  <div class="home">
    <RepositoriesList v-if="!loading"
                      :repositories="repositoriesList"
    />

    <span class="loader" v-else>
    </span>
  </div>
</template>

<script>
import RepositoriesList from '../components/RepositoriesList'
import { useRepositories } from '../hooks/useRepositories.js'

export default {
  name: 'HomeView',
  components: {
    RepositoriesList
  },
  methods: {
  },
  setup () {
    const { repositoriesList, loading } = useRepositories('javascript', 10, 1)

    return {
      repositoriesList,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--main-bg-color);
    border-bottom-color: var(--accent-color);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin-top: 20%;
  }

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
</style>
