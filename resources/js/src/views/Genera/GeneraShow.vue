<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Genera', route: 'genera.index' },
        { name: 'Display Genre', route: 'genera.show' },
      ]"
      :title="genus.name + ' Information'"
    >
      <template v-slot:createBtn>
        <router-link
          :to="{
            name: 'genera.form',
            params: {
              editing: true,
              genus,
            },
          }"
          class="btn btn-primary ml-3"
        >
          Update
        </router-link>
      </template></the-breadcrumbs
    >

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h6>Family Name:</h6>
            <p>{{ genus.family.name }}</p>

            <h6>Species for {{ genus.name }} ({{ speciesCount }})</h6>
            <router-link
              class="d-block"
              :to="{ name: 'species.show', params: { id: specie.id } }"
              v-for="specie in species"
              :key="specie.id"
            >
              {{ specie.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generaService from "../../services/GeneraService";
import Vue from "vue";

export default {
  name: "GeneraShow",
  props: {
    id: Number,
    genus: {
      type: Object,
    },
    species: {
      type: Array,
      required: true,
    },
  },
  computed: {
    speciesCount() {
      return this.species.length;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.genera)
      generaService
        .getSpeciesOfGenera(to.params.id)
        .then((resp) => {
          to.params.species = resp.data;
          next();
        })
        .catch((err) =>
          Vue.prototype.$helpers.handleError(err, "Cannot fetch genus' species")
        );
    else
      generaService
        .fetchGenre(to.params.id)
        .then((resp) => {
          to.params.genus = resp.data;
          generaService
            .getSpeciesOfGenera(to.params.id)
            .then((resp) => {
              to.params.species = resp.data;
              next();
            })
            .catch((err) =>
              Vue.prototype.$helpers.handleError(
                err,
                "Cannot fetch genus' species"
              )
            );
        })
        .catch((err) =>
          Vue.prototype.$helpers.handleError(err, "Cannot fetch genera")
        );
  },
};
</script>

<style></style>
