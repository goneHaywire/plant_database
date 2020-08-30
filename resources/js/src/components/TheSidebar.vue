<template>
  <div class="sidebar-container">
    <aside class="left-sidebar" data-sidebarbg="skin5">
      <router-link class="logo-container" tag="div" :to="{ name: 'home' }">
        <img src="images/logo.png" alt="Logo" width="15%" />
        <span class="title">
          Herbarium
        </span>
      </router-link>

      <div class="scroll-sidebar">
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
      </div>
    </aside>
  </div>
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
