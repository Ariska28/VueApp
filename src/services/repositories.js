import api from './api'

export async function getRepositoriesWithParams (languale, perPage, page) {
  const response = await api.get(`/search/repositories?q=language=${languale}`, {
    params: {
      per_page: perPage,
      page: page
    }
  })

  return response.data
}

export async function getRepository (owner, repo) {
  const response = await api.get(`/repos/${owner}/${repo}`)

  return response.data
}
