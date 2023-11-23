<template>
  <div class="pagination"
  >
    <button  v-for="item in 10"
             :key="item"
             class="pagination-btn"
             :class="{'is-active': page === item}"
             @click="getCurrentPage(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number
    }
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    getCurrentPage (page) {
      this.page = page
      this.$emit('getCurrentPage', page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
  }

  .pagination-btn {
    margin-right: 10px;
    padding: 10px;
    width: 40px;
    border: none;
    border-radius: 6px;
    background-color: var(--nav-bg-color);
    color: #fff;
    font-size: 18px;

    &:last-child {
      matgin-right: 0;
    }

    &.is-active {
      background-color: #fff;
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
    }
  }

</style>
