<template>
  <div class="pagination"
  >
   <button class="pagination-arrows"
           @click="goBackPagination()"
           v-if="this.limit > 6"
    >
      &#8592;
    </button>

    <button  v-for="item in createArray(start, totalPages < limit ? totalPages + 1 : limit + 1)"
             :key="item"
             class="pagination-btn"
             :class="{'is-active': currentPage === item}"
             @click="getCurrentPage(item)"
    >
      {{ item }}
    </button>

    <button class="pagination-arrows"
            @click="goAheadPagination()"
            v-if="this.limit < this.totalPages"
    >
      &#8594;
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
      currentPage: 1,
      start: 1,
      limit: 6,
      array: this.createArray(1, 6)
    }
  },
  methods: {
    getCurrentPage (page) {
      this.currentPage = page
      this.$emit('getCurrentPage', page)
    },

    goAheadPagination () {
      this.start = this.start + 5
      this.limit = this.limit + 5

      this.array = this.createArray(this.start, this.limit)
    },

    goBackPagination () {
      this.start = this.start - 5
      this.limit = this.limit - 5

      this.array = this.createArray(this.start, this.limit)
    },

    createArray (start, end) {
      return Array.from(
        { length: end - start },
        (_, i) => start + i
      )
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

  .pagination-arrows {
    background-color: transparent;
    border: none;
  }

</style>
