import { onMounted, watchEffect, ref } from 'vue'
import * as repositories from '../services/repositories'

export function useRepositories (language = 'javascript', perPage, page) {
  const repositoriesList = ref([])
  const loading = ref(false)
  const totalItems = ref(0)
  const totalPages = ref(0)

  const fetchReposts = async () => {
    loading.value = true

    const result = await repositories.getRepositoriesWithParams(language, perPage, page)

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

  return {
    repositoriesList,
    totalItems,
    totalPages,
    loading
  }
}

export function useRepository (owner, repo) {
  const repository = ref([])

  const fetchRepo = async () => {
    const result = await repositories.getRepository(owner, repo)

    repository.value = {
      id: result.id,
      name: result.name,
      description: result.description,
      owner: result.owner.login,
      homepage_url: result.homepage,
      visibility: result.visibility,
      forks_count: result.forks_count,
      language: result.language
    }
  }

  onMounted(fetchRepo)

  return {
    repository
  }
}
