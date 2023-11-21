import api from './api'

export async function getRepositoriesWithParams (page, perPage) {
  const response = await api.get('/repositories', {
    page,
    perPage
  })
  return response.data
}
