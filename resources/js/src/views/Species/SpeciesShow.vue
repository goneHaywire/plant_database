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

export default {
  name: "SpeciesShow",
  props: {
    specie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photos: [],
    };
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
