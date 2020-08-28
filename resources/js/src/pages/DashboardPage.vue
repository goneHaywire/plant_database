<template>
  <div id="main-wrapper">
    <the-sidebar></the-sidebar>

    <div class="view-wrapper">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container-fluid">
        Designed and Developed by Emiljan Dusha.
      </div>
    </footer>
  </div>
</template>

<script>
import TheSidebar from "../components/TheSidebar.vue";

export default {
  name: "DashboardPage",
  components: {
    TheSidebar,
  },
};
</script>

<style>
</style>