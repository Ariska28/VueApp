<script setup>
import RepositoriesList from '../components/RepositoriesList'
import PaginationPages from '../components/PaginationPages'
import { useRepositories } from '../hooks/useRepositories.js'
import { ref, watchEffect, computed } from 'vue'
import * as repositories from '../services/repositories'

const repositoriesList = ref([])
const loading = ref(false)
const totalItems = ref(0)
const totalPages = ref(0)
const currentPage = ref(1)
const perPage = 2

function updateCurrentPage (someData) {
  currentPage.value = someData
  repositoriesList.value = []
}

const fetchReposts = async () => {
  loading.value = true

  const result = await repositories.getRepositoriesWithParams('javascript', perPage, currentPage.value)

  result.items.forEach((item) => {
    repositoriesList.value.push({
      id: item.id,
      title: item.name,
      login: item.owner.login,
      description: item.description,
      avatar_url: item.owner.avatar_url,
      languages_url: item.languages_url,
      comments_url: item.comments_url,
      issues_url: item.issues_url,
      topics: item.topics
    })
  })

  totalItems.value = result.total_count
  totalPages.value = Math.ceil(totalItems.value / perPage)
  loading.value = false
}

watchEffect(fetchReposts)
</script>

<template>
  <div class="home">
    <RepositoriesList v-if="!loading"
                      :repositories="repositoriesList"
    />

    <span v-else
          class="loader"
    >
    </span>

    <PaginationPages :totalPages="totalPages"
                     @getCurrentPage="updateCurrentPage"
    />
  </div>
</template>

<style lang="scss" scoped>
  .home {
    text-align: center;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    margin: auto;
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
