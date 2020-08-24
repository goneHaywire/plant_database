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
              <h5>Search</h5>
              <form class="search-form" @submit.prevent="searchSpecies()">
                <div class="form-group d-flex justify-content-between">
                  <div
                    class="show-filters btn border"
                    @click="search.searchFilters = !search.searchFilters"
                  >
                    <inline-svg
                      width="25"
                      height="25"
                      :src="require('../../../../svgs/filter.svg')"
                    ></inline-svg>
                  </div>
                  <input
                    type="text"
                    v-model="search.query"
                    placeholder="Search Species"
                    class="form-control"
                  />
                </div>
                <div class="filters" v-show="search.searchFilters">
                  <div class="row align-items-center">
                    <div class="col-6 col-md-4">
                      <div class="form-group">
                        <select
                          name="family"
                          class="form-control"
                          v-model="search.family_id"
                        >
                          <option selected :value="null">Select Family</option>
                          <option
                            v-for="family in families"
                            :key="family.id"
                            :value="family.id"
                            >{{ family.name }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <div class="col-6 col-md-4">
                      <div class="form-group">
                        <select
                          name="genera"
                          class="form-control"
                          v-model="search.genera_id"
                        >
                          <option selected :value="null">Select Genus</option>
                          <option
                            v-for="genus in genera"
                            :key="genus.id"
                            :value="genus.id"
                            >{{ genus.name }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <input
                          type="checkbox"
                          name="in_albania"
                          id="in_albania"
                          v-model="search.in_albania"
                        />
                        <label class="mb-0" for="in_albania">In Albania</label>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <input
                          type="checkbox"
                          name="favourite"
                          id="favourite"
                          v-model="search.favourite"
                        />
                        <label class="mb-0" for="favourite">Favorite</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <hr />
              <h5>
                {{ tableTitle }}
                <span
                  v-show="justSearched"
                  class="btn btn-danger"
                  @click="clearSearch()"
                  >Clear Search</span
                >
              </h5>
              <div class="table-responsive" v-if="species.length > 0">
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
                @paginate="
                  {
                    justSearched ? searchSpecies() : fetchSpecies();
                  }
                "
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
import familyService from "../../services/FamilyService";

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
    searchSpecies() {
      speciesService
        .searchSpecies(this.search, this.pagination.current_page)
        .then((resp) => {
          if (!resp.data.data.length)
            this.tableTitle = `No Species found for: ${this.search.query}`;
          else this.tableTitle = `Search results for: ${this.search.query}`;

          this.justSearched = true;
          this.species = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        });
    },
    clearSearch() {
      this.justSearched = false;
      this.search = {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "species",
      };
      this.tableTitle = "All Species";
      speciesService.fetchSpecies().then((resp) => {
        this.species = resp.data.data;
        this.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page,
        };
      });
    },
  },
  data() {
    return {
      tableTitle: "All Species",
      species: [],
      pagination: {},
      search: {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "species",
      },
      justSearched: false,
      families: [],
      genera: [],
    };
  },
  props: {
    speciesProp: {
      type: Array,
      required: true,
    },
    paginationProp: {
      type: Object,
      required: true,
    },
  },
  watch: {
    "search.searchFilters"(newValue, oldValue) {
      if (!this.families.length) {
        familyService
          .getAllFamilies()
          .then((resp) => (this.families = resp.data))
          .catch((err) => console.log("Error: ", err));
      }
    },
    "search.family_id"(newValue, oldValue) {
      if (newValue) {
        familyService.getGeneraOfFamily(newValue).then((resp) => {
          this.genera = resp.data;
        });
      }
    },
    search: {
      handler(newValue, oldValue) {
        this.pagination.current_page = 1;
      },
      deep: true,
    },
  },
  created() {
    this.species = this.speciesProp;
    this.pagination = this.paginationProp;
  },
  beforeRouteEnter: (to, from, next) => {
    speciesService.fetchSpecies().then((resp) => {
      to.params.speciesProp = resp.data.data;
      to.params.paginationProp = {
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

<style>
.show-filters {
  margin-right: 1rem;
  width: 50px;
}
</style>
