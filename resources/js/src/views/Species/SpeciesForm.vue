<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Species', route: 'species.index' },
        { name: 'Create Species', route: 'species.form' },
      ]"
    ></the-breadcrumbs>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <form class="form-horizontal" @submit.prevent="postSpecie()">
              <div class="card-body">
                <h4 class="card-title">Species Data</h4>
                <div class="form-group row">
                  <label
                    for="name"
                    class="col-sm-3 text-right control-label col-form-label"
                    >Species Name</label
                  >
                  <div class="col-sm-9">
                    <input
                      v-model="specie.name"
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Species Name Here"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="cname"
                    class="col-sm-3 text-right control-label col-form-label"
                    >Common Name</label
                  >
                  <div class="col-sm-9">
                    <input
                      v-model="specie.common_name"
                      type="text"
                      class="form-control"
                      id="cname"
                      name="common_name"
                      placeholder="Common Name Here"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    class="col-sm-3 text-right control-label col-form-label"
                    >In Albania</label
                  >
                  <div class="col-sm-9 d-flex align-items-center">
                    <div class="custom-control custom-checkbox mr-sm-2 pl-1">
                      <input
                        v-model="specie.in_albania"
                        type="checkbox"
                        class="custom-control-input"
                        name="in_albania"
                        id="in_albania"
                      />
                      <label
                        class="custom-control-label"
                        for="in_albania"
                      ></label>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    class="col-sm-3 text-right control-label col-form-label"
                    >Family Name</label
                  >
                  <div class="col-md-9">
                    <select
                      name="family"
                      class="select2 form-control custom-select"
                      style="width: 100%; height: 36px;"
                      required
                      v-model="specie.genera.family.id"
                    >
                      <option selected disabled>
                        Select Family
                      </option>
                      <template v-if="editing">
                        <option
                          :value="family.id"
                          v-for="family in families"
                          :key="family.id"
                          :selected="family.id === specie.genera.family.id"
                        >
                          {{ family.name }}
                        </option>
                      </template>
                      <template v-else>
                        <option
                          :value="family.id"
                          v-for="family in families"
                          :key="family.id"
                        >
                          {{ family.name }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>

                <div class="form-group row" v-if="specie.genera.family.id">
                  <label
                    class="col-sm-3 text-right control-label col-form-label"
                    >Genera Name</label
                  >
                  <div class="col-md-9">
                    <select
                      name="genera"
                      class="select2 form-control custom-select"
                      style="width: 100%; height: 36px;"
                      required
                      v-model="specie.genera.id"
                    >
                      <option selected disabled>
                        Select Genus
                      </option>
                      <template v-if="editing">
                        <option
                          :value="genus.id"
                          v-for="genus in genera"
                          :key="genus.id"
                          :selected="genus.id === specie.genera.id"
                        >
                          {{ genus.name }}
                        </option>
                      </template>
                      <template v-else>
                        <option
                          :value="genus.id"
                          v-for="genus in genera"
                          :key="genus.id"
                        >
                          {{ genus.name }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    class="col-sm-3 text-right control-label col-form-label"
                    >Photos</label
                  >
                  <div class="col-md-9">
                    <input
                      type="file"
                      @change="onFileChange"
                      multiple
                      ref="images"
                    />
                    <br />
                    <br />
                    <div class="img-grid">
                      <div
                        v-for="image in old_images"
                        :key="image.id"
                        class="img-box"
                      >
                        <inline-svg
                          :src="require('../../../../svgs/close.svg')"
                          width="20"
                          height="20"
                          class="close"
                          @click="removePhoto(image.id, 'id')"
                        >
                        </inline-svg>
                        <img
                          v-if="editing"
                          :src="'/storage/' + image.path"
                          class="preview img-fluid"
                          :alt="image.path"
                        />
                      </div>
                      <div
                        v-for="image in images"
                        :key="Object.keys(image)[0]"
                        class="img-box"
                      >
                        <inline-svg
                          :src="require('../../../../svgs/close.svg')"
                          width="20"
                          height="20"
                          class="close"
                          @click="removePhoto(Object.keys(image)[0], 'index')"
                        >
                        </inline-svg>
                        <img
                          class="preview img-fluid"
                          :ref="'image' + parseInt(Object.keys(image)[0])"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group row"></div>
              </div>

              <div class="border-top">
                <div class="card-body">
                  <input
                    type="submit"
                    class="btn"
                    :class="editing ? 'btn-primary' : 'btn-success'"
                    :value="editing ? 'Update' : 'Create'"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import speciesService from "../../services/SpeciesService";
import familyService from "../../services/FamilyService";
import photoService from "../../services/PhotoService";

export default {
  name: "SpeciesForm",
  props: {
    specieProp: {
      type: Object,
      default: () => {
        return {
          genera: {
            family: {},
          },
        };
      },
    },
    editing: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      families: [],
      genera: [],
      selected_family: 0,
      specie: {
        genera: {
          family: {},
        },
      },
      old_images: [],
      images: [],
      image_id: 0,
    };
  },
  methods: {
    postSpecie() {
      let specie = new FormData();
      specie.append("name", this.specie.name);
      specie.append("common_name", this.specie.common_name);
      specie.append("in_albania", this.specie.in_albania);
      specie.append("genera_id", this.specie.genera.id);

      for (var i = 0; i < this.images.length; i++) {
        specie.append("photo[" + i + "]", Object.values(this.images[i])[0]);
      }

      if (!this.editing) {
        speciesService
          .createSpecie(specie)
          .then((resp) => {
            this.$router.push({
              name: "species.show",
              params: {
                id: resp.data.id,
                specie: resp.data,
              },
            });
          })
          .catch((err) => console.log(err));
      } else {
        specie.append("id", this.specie.id);
        speciesService.updateSpecie(specie).then((resp) => {
          this.$router.push({
            name: "species.show",
            params: {
              id: resp.data.id,
              specie: resp.data,
            },
          });
        });
      }
    },
    onFileChange(e) {
      var selectedFiles = e.target.files;
     
      for (let i = 0; i < selectedFiles.length; i++) {
        let image = {};
        image[this.image_id] = selectedFiles[i];
        this.images.push(image);
        this.image_id++;
      }

      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader(); //instantiate a new file reader
        reader.addEventListener(
          "load",
          function () {
            this.$refs["image" + parseInt(i)][0].src = reader.result;
          }.bind(this),
          false
        ); //add event listener

        reader.readAsDataURL(Object.values(this.images[i])[0]);
      }
    },
    removePhoto(i, type) {
      if (type === "id") {
        photoService.deletePhoto(i).then((resp) => {
          this.old_images = this.old_images.filter(
            (image) => parseInt(resp.data) !== image.id
          );
        });
      } else {
        this.images = this.images.filter((image) => Object.keys(image)[0] != i);
      }
    },
  },
  created() {
    this.specie = this.specieProp;
    familyService.getAllFamilies().then((resp) => {
      this.families = resp.data;
    });
    if (this.editing) {
      familyService
        .getGeneraOfFamily(this.specie.genera.family.id)
        .then((resp) => (this.genera = resp.data));
      photoService.getPhotos(this.specie.id).then((resp) => {
        this.old_images = resp.data;
      });
    }
  },
  watch: {
    "specie.genera.family.id": function () {
      // this.specie.genera.family.id = this.selected_family;
      familyService
        .getGeneraOfFamily(this.specie.genera.family.id)
        .then((resp) => (this.genera = resp.data));
    },
  },
};
</script>

<style>
.custom-control-label::before,
.custom-control-label::after {
  left: 0;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

.img-grid .img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.img-grid .img-box .close {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
