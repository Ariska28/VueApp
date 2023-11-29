<template>
  <div>
    <h2>
      Github repositories list:
    </h2>

    <ul class="git-list"
        v-if="repositories?.length > 0"
    >
      <RepositoriesItem v-for="repository in repositories"
                        :repository="repository"
                        :key="repository.id"
      />
    </ul>

    <div v-else>
      List is empty
    </div>
  </div>
</template>

<script>
import RepositoriesItem from './RepositoriesItem'

export default {
  components: {
    RepositoriesItem
  },
  props: {
    repositories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .git-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
