<template>
  <div class="home">
    <h1>
      Github repositories:
    </h1>

    <ul class="git-list">
      <li class="git-list__item"
          v-for="repository in repositories"
          :key="repository.name"
      >
        <h2 class="git-list__item-title">
          {{ repository.title }}
        </h2>

        <p class="git-list__item-text">
          {{ repository.description }}
        </p>

        <figure class="git-list__item-avatar">
          <img :src="repository.avatar_url">
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
import * as repositories from '../services/repositories'
export default {
  name: 'HomeView',
  data () {
    return {
      repositories: []
    }
  },
  methods: {
    async getInfo () {
      const result = await repositories.getRepositoriesWithParams()

      result.forEach((item) => {
        this.repositories.push({
          title: item.name,
          description: item.description,
          avatar_url: item.owner.avatar_url
        })
      })
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
  .git-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .git-list__item {
    border-radius: 20px;
    background-color: #E6F2FF;
    padding: 20px;
    margin-bottom: 20px;
  }

  .git-list__item-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;

    img {
      width: 100%;
      height: 80px;
      object-fit: cover;
    }
  }
</style>
