<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import * as repositories from '../services/repositories'

const route = useRoute()
const loading = ref(false)
const repository = ref([])

const fetchRepo = async () => {
  loading.value = true

  const result = await repositories.getRepository(route.params.owner, route.params.repo)

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

  loading.value = false
}

watchEffect(fetchRepo)

</script>

<template>
  <div class="info">
    <div class="info-content" v-if="!loading">
      <h1 class="info-title">
        {{ repository.name }}
      </h1>

      <p class="info-text">
      <strong> Description: </strong> {{ repository.description }}
      </p>

      <p class="info-text">
        <strong>Visibility: </strong> {{ repository.visibility }}
      </p>

      <p class="info-text">
        <strong> Count of forks: </strong> {{ repository.forks_count }}
      </p>

      <p class="info-text">
        <strong> Main language of repository: </strong> {{ repository.language }}
      </p>

      <div class="info-text">
        <strong> Owner:</strong> {{ repository.owner }}
      </div>

      <div class="info-text">
        Do you interest it?
        <a v-if="repository.homepage_url"
          :href="repository.homepage_url"
          target="_blank"
        >
          Click here
        </a>
      </div>
    </div>

    <span v-else
        class="loader"
    >
  </span>
  </div>
</template>

<style lang="scss" scoped>
  .info {
    background-color: var(--main-bg-color);
    padding: 40px;
    border-radius: 20px;
    margin-top: 50px;
  }

  .info-title {
    text-align: center;
    text-transform: uppercase;
  }

  .loader {
    margin: auto;
    display: block;
    border: 5px solid #fff;
    border-bottom-color: var(--accent-color);
  }

  .info-text {
    margin-top: 20px;
    strong {
      font-weight: 600;
    }
  }
</style>
