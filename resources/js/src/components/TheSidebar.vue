<template>
  <aside class="left-sidebar" data-sidebarbg="skin5">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav" class="p-t-30">
          <sidebar-link route-name="home" icon="home">Home</sidebar-link>

          <sidebar-link route-name="families.index" icon="tree"
            >Families</sidebar-link
          >

          <sidebar-link route-name="genera.index" icon="list-alt"
            >Genera</sidebar-link
          >

          <sidebar-link route-name="species.index" icon="leaf"
            >Species</sidebar-link
          >

          <sidebar-link route-name="albanian.index" icon="map-marker-alt"
            >Albanian Species</sidebar-link
          >

          <sidebar-link route-name="favourites.index" icon="star"
            >Favourites</sidebar-link
          >

          <sidebar-link route-name="maps.index" icon="map">
            Map
          </sidebar-link>

          <sidebar-link route-name="users.index" icon="user"
            >Users</sidebar-link
          >
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>

<script>
import SidebarLink from "./SidebarLink";

export default {
  name: "TheSidebar",
  components: {
    SidebarLink,
  },
};
</script>

<style></style>
