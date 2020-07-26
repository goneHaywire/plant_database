<template>
  <aside class="left-sidebar" data-sidebarbg="skin5">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav" class="p-t-30">
          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'home'}"
              aria-expanded="false"
            >
              <i class="mdi mdi-view-dashboard"></i>
              <span class="hide-menu">Home</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'families'}"
              aria-expanded="false"
            >
              <i class="fas fa-tree"></i>
              <span class="hide-menu">Families</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'genera'}"
              aria-expanded="false"
            >
              <i class="far fa-list-alt"></i>
              <span class="hide-menu">Genera</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'species'}"
              aria-expanded="false"
            >
              <i class="fas fa-leaf"></i>
              <span class="hide-menu">Species</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'albanian'}"
              aria-expanded="false"
            >
              <i class="fas fa-map-marker-alt"></i>
              <span class="hide-menu">Albanian species</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'favourites'}"
              aria-expanded="false"
            >
              <i class="far fa-star"></i>
              <span class="hide-menu">Favourites</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'filter'}"
              aria-expanded="false"
            >
              <i class="fas fa-search"></i>
              <span class="hide-menu">Filter</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link waves-effect waves-dark sidebar-link"
              :to="{name: 'users'}"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
              <span class="hide-menu">Users</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",
};
</script>

<style>
</style>