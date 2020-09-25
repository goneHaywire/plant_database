<template>
  <nav class="breadcrumb-container navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <div class="page-breadcrumb">
        <h4 class="page-title">{{ title ? title : current.name }}</h4>

        <slot name="createBtn" class="ml-4"></slot>

        <div class="ml-auto text-right">
          <nav aria-label="breadcrumb" class="breadcrumbs">
            <ol class="breadcrumb">
              <li
                class="breadcrumb-item"
                v-for="path in paths"
                :key="path.route"
                :class="{
                  active: path.route === current.route,
                }"
              >
                <template v-if="path.route === current.route">
                  {{ path.name }}
                </template>
                <template v-else>
                  <router-link :to="{ name: path.route }">
                    {{ path.name }}
                  </router-link>
                </template>
              </li>
            </ol>
          </nav>

          <button
            @click="toggleSidebar"
            class="navbar-toggler ml-3"
            type="button"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheBreadcrumbs",
  props: {
    paths: {
      type: Array,
      required: true,
    },
    title: String,
  },
  data() {
    return {
      length: this.paths.length,
    };
  },
  computed: {
    current() {
      return this.paths[this.length - 1];
    },
  },
  methods: {
    toggleSidebar() {
      document.querySelector(".sidebar-container").classList.add("show");
      document.body.classList.add("overflow-hidden");
    },
  },
};
</script>

<style></style>
