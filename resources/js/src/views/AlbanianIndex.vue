<template>
  <div>
    <the-breadcrumbs
      :paths="[{ name: 'Albanian Species', route: 'albanian.index' }]"
    ></the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table
                id="zero_config"
                class="table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Genus</th>
                    <th>Family</th>
                    <th>Common Name</th>
                    <th>Map</th>
                    <th>Favourite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="specie in species" :key="specie.id">
                    <td class="icon-col">{{ specie.id }}</td>

                    <td>
                      <router-link
                        :to="{
                          name: 'species.show',
                          params: {
                            specie,
                            id: specie.id,
                          },
                        }"
                      >
                        {{ specie.genera.name }}
                        {{ specie.name }}
                      </router-link>
                    </td>

                    <td>
                      <router-link
                        :to="{
                          name: 'genera.show',
                          params: {
                            genus: specie.genera,
                            id: specie.genera.id,
                          },
                        }"
                        >{{ specie.genera.name }}
                      </router-link>
                    </td>

                    <td>
                      <router-link
                        :to="{
                          name: 'families.show',
                          params: {
                            family: specie.genera.family,
                            id: specie.genera.family.id,
                          },
                        }"
                      >
                        {{ specie.genera.family.name }}
                      </router-link>
                    </td>

                    <td>{{ specie.common_name }}</td>

                    <td class="icon-col">
                      <router-link
                        :to="{
                          name: 'maps.index',
                          params: {
                            specieProp: specie,
                          },
                        }"
                      >
                        <inline-svg
                          class="icon pin-icon"
                          width="25"
                          height="25"
                          :src="require('../../../svgs/pin.svg')"
                        ></inline-svg>
                      </router-link>
                    </td>

                    <td class="icon-col">
                      <div @click="favourite(specie.id)">
                        <inline-svg
                          class="icon star-icon"
                          name="star-solid"
                          width="25"
                          height="25"
                          :src="
                            specie.favourites_count
                              ? require('../../../svgs/star-solid.svg')
                              : require('../../../svgs/star-regular.svg')
                          "
                        ></inline-svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Genus</th>
                    <th>Family</th>
                    <th>Common Name</th>
                    <th>Map</th>
                    <th>Favourite</th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <pagination
              v-if="pagination.last_page > 1"
              :pagination="pagination"
              :offset="5"
              @paginate="fetchPlants()"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination";
import speciesService from "../services/SpeciesService";
import Vue from "vue";

export default {
  name: "AlbanianIndex",
  methods: {
    fetchPlants() {
      speciesService
        .fetchAlbanianSpecies(this.pagination.current_page)
        .then((resp) => {
          this.species = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot fetch species"));
    },
    favourite(id) {
      speciesService
        .favourite(id)
        .then((resp) => {
          if (resp.status === 200) {
            let fav_index = this.species.findIndex(
              (specie) => specie.id === id
            );
            this.species[fav_index].favourites_count
              ? (this.species[fav_index].favourites_count = 0)
              : (this.species[fav_index].favourites_count = 1);
          }
        })
        .catch((err) =>
          this.$helpers.handleError(err, "Cannot favourite/unfavourite specie")
        );
    },
  },
  props: {
    speciesProp: {
      type: Array,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      species: [],
    };
  },
  created() {
    this.species = this.speciesProp;
  },
  beforeRouteEnter: (to, from, next) => {
    speciesService
      .fetchAlbanianSpecies()
      .then((resp) => {
        to.params.speciesProp = resp.data.data;
        to.params.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page,
        };
        next();
      })
      .catch((err) =>
        Vue.prototype.$helpers.handleError(err, "Cannot fetch species")
      );
  },
  components: { Pagination },
};
</script>

<style></style>
