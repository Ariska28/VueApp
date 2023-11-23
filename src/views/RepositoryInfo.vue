<template>
  <div class="info">
    <h1 class="info-title">
      {{ repository.name }}
    </h1>

    <p class="info-text">
     <strong> Description: </strong> {{ repository.description }}
    </p>

    <p class="info-text">
      <strong>Visibility: </strong> {{ repository.visibility }}
    </p>

    <p class="info-text">
      <strong> Count of forks: </strong> {{ repository.forks_count }}
    </p>

    <p class="info-text">
      <strong> Main language of repository: </strong> {{ repository.language }}
    </p>

    <div class="info-text">
      <strong> Owner:</strong> {{ repository.owner }}
    </div>

    <div class="info-text">
      Do you interest it?
      <a v-if="repository.homepage_url"
       :href="repository.homepage_url"
       target="_blank"
    >
      Click here
    </a>

    </div>
  </div>
</template>

<script>
import { useRepositories, useRepository } from '../hooks/useRepositories.js'
import { useRoute } from 'vue-router'

export default {
  data () {
    return {
      owner: this.$route.params.repo
    }
  },
  setup () {
    const route = useRoute()
    const { repositoriesList, loading } = useRepositories('javascript')
    const { repository } = useRepository(route.params.owner, route.params.repo)
    return {
      repositoriesList,
      loading,
      repository
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    background-color: var(--main-bg-color);
    padding: 40px;
    border-radius: 20px;
    margin-top: 50px;
  }

  .info-title {
    text-align: center;
    text-transform: uppercase;
  }

  .info-text {
    margin-top: 20px;
    strong {
      font-weight: 600;
    }
  }
</style>
