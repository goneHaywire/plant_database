<template>
  <div>
    <the-breadcrumbs
      :paths="[{ name: 'Home', route: 'home' }]"
    ></the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xlg-3">
            <router-link
              :to="{ name: 'families.index' }"
              class="card card-hover"
            >
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="fas fa-tree"></i>
                </h1>
                <h6 class="text-white">Families</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-2 col-xlg-3">
            <router-link class="card card-hover" :to="{ name: 'genera.index' }">
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="far fa-list-alt"></i>
                </h1>
                <h6 class="text-white">Genera</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-4 col-xlg-3">
            <router-link
              class="card card-hover"
              :to="{ name: 'species.index' }"
            >
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="fas fa-leaf"></i>
                </h1>
                <h6 class="text-white">Species</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-2 col-xlg-3">
            <router-link
              class="card card-hover"
              :to="{ name: 'albanian.index' }"
            >
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="fas fa-map-marker-alt"></i>
                </h1>
                <h6 class="text-white">Albanian Species</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-4 col-xlg-3">
            <router-link
              class="card card-hover"
              :to="{ name: 'favourites.index' }"
            >
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="far fa-star"></i>
                </h1>
                <h6 class="text-white">Favourites</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-4 col-xlg-3">
            <router-link class="card card-hover" :to="{ name: 'maps.index' }">
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="fas fa-map"></i>
                </h1>
                <h6 class="text-white">Map</h6>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-4 col-xlg-3">
            <router-link class="card card-hover" :to="{ name: 'users.index' }">
              <div class="box bg-success text-center">
                <h1 class="font-light text-white">
                  <i class="fas fa-user"></i>
                </h1>
                <h6 class="text-white">Users</h6>
              </div>
            </router-link>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4" v-for="(stat, i) in stats" :key="i">
            <div class="card m-t-0">
              <div class="row py-2 align-items-center">
                <div
                  class="col-md-6 d-flex align-items-center justify-content-center text-center"
                >
                  <h3 class="mb-0">{{ stat.text }}</h3>
                </div>
                <div class="col-md-6 border-left text-center p-t-10">
                  <h3 class="mb-0 font-weight-bold">
                    {{ stat.count }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clientApi from "../services/Api";
import store from "../store/store";
import Vue from "vue";

export default {
  name: "HomeView",
  props: {
    stats: {
      required: true,
      type: Array,
    },
  },
  created() {
    this.token = JSON.parse(localStorage.getItem("user")).access_token;
  },
  beforeRouteEnter: (to, from, next) => {
    if (store.getters.getStats.length) {
      to.params.stats = store.getters.getStats;
      next();
    } else {
      clientApi
        .get("/stats")
        .then((resp) => {
          to.params.stats = resp.data;
          store.dispatch("setStats", resp.data);
          next();
        })
        .catch((err) =>
          Vue.prototype.$helpers.handleError(err, "Cannot fetch stats")
        );
    }
  },
};
</script>

<style></style>
