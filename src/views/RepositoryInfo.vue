<template>
  <div>
    {{ $route.params.repo }}
  </div>

  <div>
    {{repository.title}}
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
    console.log()
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

</style>
