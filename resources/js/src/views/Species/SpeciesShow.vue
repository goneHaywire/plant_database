<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Species', route: 'species.index' },
        { name: 'Display Species', route: 'species.show' },
      ]"
      :title="`${specie.genera.name} ${specie.name} Information`"
    >
      <template v-slot:createBtn>
        <router-link
          :to="{
            name: 'species.form',
            params: {
              editing: true,
              specieProp: specie,
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
            <template v-if="specie.common_name">
              <h6>Common Name: {{ specie.common_name }}</h6>
            </template>
            <h6 v-else class="text-muted">
              This specie has no common name.
            </h6>

            <h6>In Albania: {{ specie.in_albania ? "True" : "False" }}</h6>

            <template v-if="specie.ipni">
              <h6>IPNI: {{ specie.ipni }}</h6>
            </template>
            <h6 v-else class="text-muted">
              This specie has no IPNI information.
            </h6>

            <template v-if="specie.year">
              <h6>Year: {{ specie.year }}</h6>
            </template>
            <h6 v-else class="text-muted">
              This specie has no year information.
            </h6>

            <template v-if="photos.length">
              <h5>Gallery</h5>
              <div class="img-grid">
                <div class="img-box" v-for="photo in photos" :key="photo.id">
                  <img
                    :src="'/storage/' + photo.path"
                    :alt="photo.path"
                    class="img-fluid"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photoService from "../../services/PhotoService";
import speciesService from "../../services/SpeciesService";

export default {
  name: "SpeciesShow",
  props: {
    specie: {
      type: Object,
    },
    id: Number,
  },
  data() {
    return {
      photos: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.specie) next();
    else
      speciesService.fetchSpecie(to.params.id).then((resp) => {
        to.params.specie = resp.data;
        next();
      });
  },
  created() {
    photoService
      .getPhotos(this.specie.id)
      .then((resp) => (this.photos = resp.data))
      .catch((err) => console.log(`Err: ${err}`));
  },
};
</script>

<style></style>
