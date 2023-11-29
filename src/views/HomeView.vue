<script setup>
import RepositoriesList from '../components/RepositoriesList'
import PaginationPages from '../components/PaginationPages'
import { ref, watchEffect, computed } from 'vue'
import * as repositories from '../services/repositories'
import _ from 'lodash'

const repositoriesList = ref([])
const loading = ref(false)
const totalItems = ref(0)
const totalPages = ref(0)
const currentPage = ref(0)
const perPage = 10
const searchingQuery = ref('')

const TOTAL_COUNT = 100

function updateCurrentPage (someData) {
  currentPage.value = someData - 1
}

const fetchReposts = async () => {
  loading.value = true

  const result = await repositories.getRepositoriesWithParams('javascript', TOTAL_COUNT)

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

  loading.value = false
}
totalItems.value = TOTAL_COUNT
totalPages.value = Math.ceil(totalItems.value / perPage)

const searchingList = computed(() => {
  const smth = repositoriesList.value.filter((item) => item.title.includes(searchingQuery.value))
  return { arr: _.chunk(smth, 10), length: smth.length }
})

watchEffect(fetchReposts)
</script>

<template>
  <div class="home">
    <my-input placeholder="Searching"
              v-model="searchingQuery"
    />
    <RepositoriesList v-if="!loading"
                      :repositories="searchingList.arr[currentPage]"
    />

    <span v-else
          class="loader"
    >
    </span>

    <PaginationPages :totalPages="Math.ceil(searchingList.length/perPage)"
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

</style>
