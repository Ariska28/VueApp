<template>
  <div class="pagination"
  >
   <button class="pagination-arrows"
           @click="goBackPagination()"
           v-if="limitPagination > 6"
    >
      &#8592;
    </button>

    <button  v-for="item in createArray(startPagination, limitPagination > totalPages ? totalPages + 1 : limitPagination)"
             :key="item"
             class="pagination-btn"
             :class="{'is-active': currentPage === item}"
             @click="getCurrentPage(item)"
    >
      {{ item }}
    </button>

    <button class="pagination-arrows"
            @click="goAheadPagination()"
            v-if="limitPagination < totalPages"
    >
      &#8594;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    searchingList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      totalPages: this.searchingList.length,
      currentPage: 1,
      startPagination: 1,
      limitPagination: 6
    }
  },
  methods: {
    getCurrentPage (page) {
      this.currentPage = page
      this.$emit('getCurrentPage', page)
    },

    goAheadPagination () {
      this.startPagination = this.startPagination + 5
      this.limitPagination = this.limitPagination + 5
    },

    goBackPagination () {
      this.startPagination = this.startPagination - 5
      this.limitPagination = this.limitPagination - 5
    },

    createArray (start, end) {
      return Array.from(
        { length: end - start },
        (_, i) => start + i
      )
    }
  },
  watch: {
    searchingList: function (newVal) {
      this.totalPages = newVal.length
      this.getCurrentPage(1)
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
