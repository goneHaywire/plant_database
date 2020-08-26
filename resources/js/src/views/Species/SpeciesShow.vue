<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Species', route: 'species.index' },
        { name: 'Display Species', route: 'species.show' },
      ]"
    ></the-breadcrumbs>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ specie.genera.name }}
                {{ specie.name }}
              </h5>
              <template v-if="specie.photos.length">
                <hr />
                <h5>Gallery</h5>
                <div class="img-grid">
                  <div
                    class="img-box"
                    v-for="photo in specie.photos"
                    :key="photo.id"
                  >
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
