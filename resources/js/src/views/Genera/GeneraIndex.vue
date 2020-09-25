<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Genera', route: 'genera.index' }]">
      <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{ name: 'genera.form' }"
          class="btn btn-success ml-3"
        >
          Create Genus
        </router-link>
      </template>
    </the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h5>Search</h5>
            <form class="search-form" @submit.prevent="searchGenera()">
              <div
                class="form-group d-flex justify-content-between align-items-center"
              >
                <input
                  type="text"
                  v-model="search.query"
                  placeholder="Search Genera"
                  class="form-control"
                />
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-sm btn-success ml-3"
                />
              </div>
            </form>
            <h5>
              {{ tableTitle }}
              <span
                v-show="justSearched"
                class="btn btn-danger"
                @click="clearSearch()"
                >Clear Search</span
              >
            </h5>
            <div class="table-responsive">
              <table
                id="zero_config"
                class="table table-striped table-bordered"
                v-show="genera.length"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Species Amount</th>
                    <th>Family</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="genus in genera" :key="genus.id">
                    <td class="icon-col">{{ genus.id }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'genera.show',
                          params: {
                            id: genus.id,
                            genus: genus,
                          },
                        }"
                      >
                        {{ genus.name }}
                      </router-link>
                    </td>
                    <td>{{ genus.species_count }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'families.show',
                          params: {
                            id: genus.family.id,
                            family: genus.family,
                          },
                        }"
                      >
                        {{ genus.family.name }}
                      </router-link>
                    </td>
                    <td class="icon-col">
                      <inline-svg
                        :src="require('../../../../svgs/trash.svg')"
                        width="25"
                        height="25"
                        @click="deleteGenera(genus.id)"
                        class="trash-icon icon"
                      >
                      </inline-svg>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Species Amount</th>
                    <th>Family</th>
                    <th>Delete</th>
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
                  justSearched ? searchGenera() : fetchGenera();
                }
              "
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./../../components/Pagination";
import generaService from "../../services/GeneraService";
import Vue from "vue";

export default {
  name: "GeneraIndex",
  methods: {
    fetchGenera() {
      generaService
        .fetchGenera(this.pagination.current_page)
        .then((resp) => {
          this.genera = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot fetch genera"));
    },
    deleteGenera(id) {
      this.$helpers.handleError(
        {},
        "Genus deletion disabled during demonstration"
      );
      // generaService
      //   .deleteGenre(id)
      //   .then((resp) => {
      //     this.genera = this.genera.filter(
      //       (genre) => genre.id !== parseInt(resp.data)
      //     );
      //     this.$helpers.handleSuccess("Genus deleted successfully");
      //   })
      //   .catch((err) => this.$helpers.handleError(err, "Cannot delete genus"));
    },
    searchGenera() {
      generaService
        .searchGenera(this.search, this.pagination.current_page)
        .then((resp) => {
          if (!resp.data.data.length)
            this.tableTitle = `No Genera found for: ${this.search.query}`;
          else this.tableTitle = `Search results for: ${this.search.query}`;

          this.justSearched = true;
          this.genera = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) =>
          this.$helpers.handleError(err, "Cannot fetch search results")
        );
    },
    clearSearch() {
      this.justSearched = false;
      this.search = { query: null };
      this.tableTitle = "All Genera";
      generaService
        .fetchGenera()
        .then((resp) => {
          this.genera = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot fetch genera"));
    },
  },
  props: {
    generaProp: {
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
      genera: [],
      justSearched: false,
      tableTitle: "All Genera",
      search: { query: null },
    };
  },
  watch: {
    "search.query"() {
      this.pagination.current_page = 1;
    },
  },
  created() {
    this.genera = this.generaProp;
  },
  beforeRouteEnter: (to, from, next) => {
    generaService
      .fetchGenera()
      .then((resp) => {
        to.params.generaProp = resp.data.data;
        to.params.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page,
        };
        next();
      })
      .catch((err) =>
        Vue.prototype.$helpers.handleError(err, "Cannot fetch genera")
      );
  },
  components: { Pagination },
};
</script>

<style></style>
