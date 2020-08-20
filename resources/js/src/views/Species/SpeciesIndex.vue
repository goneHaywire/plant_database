<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Species', route: 'species.index' }]">
      <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{ name: 'species.form' }"
          class="btn btn-success ml-3"
        >
          Create Species
        </router-link>
      </template>
    </the-breadcrumbs>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">All Plants</h5>
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
                      <th>In Albania</th>
                      <th>Map</th>
                      <th>Favourite</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="specie in species" :key="specie.id">
                      <td>{{ specie.id }}</td>

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

                      <td>
                        {{ specie.in_albania ? "True" : "False" }}
                      </td>

                      <td>
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
                            :src="require('../../../../svgs/pin.svg')"
                          ></inline-svg>
                        </router-link>
                      </td>

                      <td>
                        <div class="centerize" @click="favourite(specie.id)">
                          <inline-svg
                          class="icon star-icon"
                            name="star-solid"
                            width="25"
                            height="25"
                            :src="
                              specie.favourites_count
                                ? require('../../../../svgs/star-solid.svg')
                                : require('../../../../svgs/star-regular.svg')
                            "
                          ></inline-svg>
                        </div>
                      </td>

                      <td>
                        <router-link
                          :to="{
                            name: 'species.form',
                            params: {
                              editing: true,
                              specieProp: specie,
                            },
                          }"
                          class="btn btn-primary"
                        >
                          Update
                        </router-link>
                        <div
                          @click="deleteSpecie(specie.id)"
                          class="btn btn-danger"
                        >
                          Delete
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
                      <th>In Albania</th>
                      <th>Map</th>
                      <th>Favourite</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <pagination
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="fetchSpecies()"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination";
import speciesService from "../../services/SpeciesService";

export default {
  name: "SpeciesIndex",
  methods: {
    fetchSpecies() {
      speciesService
        .fetchSpecies(this.pagination.current_page)
        .then((resp) => {
          this.species = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) => console.log(err));
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
        .catch((err) => console.log(err));
    },
    deleteSpecie(id) {
      speciesService
        .deleteSpecie(id)
        .then((resp) => {
          this.species = this.species.filter((specie) => specie.id !== id);
        })
        .catch((err) => console.log(err));
    },
  },
  data() {
    return {
      species: [],
    };
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
  created() {
    this.species = this.speciesProp;
  },
  beforeRouteEnter: (to, from, next) => {
    speciesService.fetchSpecies().then((resp) => {
      to.params.speciesProp = resp.data.data;
      to.params.pagination = {
        current_page: resp.data.current_page,
        last_page: resp.data.last_page,
      };
      next();
    });
  },
  components: {
    Pagination,
  },
};
</script>

<style></style>
