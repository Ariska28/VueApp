import { onMounted, ref } from 'vue'
import * as repositories from '../services/repositories'

export function useRepositories (language = 'javascript', perPage, page) {
  const repositoriesList = ref([])
  const loading = ref(false)

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

    loading.value = false
  }

  onMounted(fetchReposts)

  return {
    repositoriesList,
    loading
  }
}

export function useRepository (owner, repo) {
  const repository = ref([])

  const fetchRepo = async () => {
    const result = await repositories.getRepository(owner, repo)

    repository.value = {
      id: result.id,
      title: result.name
    }
  }

  onMounted(fetchRepo)

  return {
    repository
  }
}
