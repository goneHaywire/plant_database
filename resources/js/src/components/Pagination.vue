<template>
  <ul class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
    <li class="page-item">
      <a
        class="page-link"
        @click.prevent="changePage(pagination.current_page - 1)"
        :disabled="pagination.current_page <= 1"
      >&lt;</a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        @click.prevent="changePage(1)"
        :disabled="pagination.current_page <= 1"
        v-if="pagination.current_page >= 4"
      >1</a>
    </li>
    <li class="page-item">
      <div
        class="page-link"
        :disabled="pagination.current_page <= 1"
        v-if="pagination.current_page >= 5"
      >...</div>
    </li>
    <li v-for="page in pages" class="page-item">
      <a
        class="page-link"
        :class="isCurrentPage(page) ? 'is-current' : ''"
        @click.prevent="changePage(page)"
      >{{ page }}</a>
    </li>
    <li class="page-item">
      <div
        class="page-link"
        :disabled="pagination.current_page <= 1"
        v-if="pagination.current_page <= pagination.last_page - 4"
      >...</div>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        @click.prevent="changePage(pagination.last_page)"
        :disabled="pagination.current_page >= pagination.last_page"
        v-if="pagination.current_page <= pagination.last_page - 3"
      >{{ pagination.last_page }}</a>
    </li>
    <li class="page-item">
      <a
        class="page-link"
        @click.prevent="changePage(pagination.current_page + 1)"
        :disabled="pagination.current_page >= pagination.last_page"
      >&gt;</a>
    </li>
  </ul>
</template>

<style scoped>
.pagination {
  margin-top: 40px;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #7460ee !important;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.page-link:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.page-link:hover {
  z-index: 2;
  color: #381be7 !important;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link.is-current {
  z-index: 1;
  color: #fff !important;
  background-color: #2962ff !important;
  border-color: #2962ff !important;
}
/*.page-link[disabled="disabled"]{*/
/*    cursor: normal !important;*/
/*}*/
.page-link[disabled="disabled"] {
  color: #6c757d !important;
  pointer-events: none;
  cursor: auto;
  background-color: #fff !important;
  border-color: #dee2e6 !important;
}
</style>

<script>
export default {
  props: ["pagination", "offset"],
  methods: {
    isCurrentPage(page) {
      return this.pagination.current_page === page;
    },
    changePage(page) {
      if (page > this.pagination.last_page) {
        page = this.pagination.last_page;
      }
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
  computed: {
    pages() {
      let pages = [];
      let from = this.pagination.current_page - Math.floor(this.offset / 2);
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset - 1;
      if (to > this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      while (from <= to) {
        pages.push(from);
        from++;
      }
      return pages;
    },
  },
};
</script>
