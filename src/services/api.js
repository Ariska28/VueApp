import axios from 'axios'

const gitHubToken = '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'

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { Authorization: gitHubToken }
})

export default instance
