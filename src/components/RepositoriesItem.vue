<template>
  <li class="item">
    <div class="item-content">
      <h2 class="item-title">
        {{ repository.title }}
      </h2>

      <figure class="item-avatar">
        <img :src="repository.avatar_url">
      </figure>

      <p class="item-text">
        {{ repository.description }}
      </p>
    </div>

    <div class="item-functional">
      <my-btn @click="$router.push(`/repo/${repository.login}/${repository.title}`)">
        Read more
      </my-btn>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .item {
    border-radius: 20px;
    background-color: var(--main-bg-color);
    padding: 20px 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .item-content {
    width: 50%;
  }

  .item-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px 0;

    img {
      width: 100%;
      height: 80px;
      object-fit: cover;
    }
  }
</style>
