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
            <li v-for="specie in species" :key="specie.id">
              {{ specie.name }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generaService from "../../services/GeneraService";

export default {
  name: "GeneraShow",
  props: {
    genus: {
      type: Object,
      required: true,
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
    generaService
      .getSpeciesOfGenera(to.params.id)
      .then((resp) => {
        to.params.species = resp.data;
        next();
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
