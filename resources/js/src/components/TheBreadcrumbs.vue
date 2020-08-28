<template>
  <div class="breadcrumb-container">
    <div class="container-fluid">
      <div class="page-breadcrumb">
        <h4 class="page-title">{{ title ? title : current.name }}</h4>

        <slot name="createBtn" class="ml-3"></slot>

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
        </div>
      </div>
    </div>
  </div>
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
};
</script>

<style></style>
