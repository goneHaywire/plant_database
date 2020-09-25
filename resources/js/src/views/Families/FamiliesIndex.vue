<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Families', route: 'families.index' }]">
      <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{ name: 'families.form' }"
          class="btn btn-success ml-3"
        >
          Create Family
        </router-link>
      </template>
    </the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h5>Search</h5>
            <form class="search-form" @submit.prevent="searchFamilies()">
              <div
                class="form-group d-flex justify-content-between align-items-center"
              >
                <input
                  type="text"
                  v-model="search.query"
                  placeholder="Search Families"
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
                v-show="families.length"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Genera Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="family in families" :key="family.id">
                    <td class="icon-col">{{ family.id }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'families.show',
                          params: {
                            family: family,
                            id: family.id,
                          },
                        }"
                      >
                        {{ family.name }}
                      </router-link>
                    </td>
                    <td>
                      {{ family.genera_count }}
                    </td>
                    <td class="icon-col">
                      <inline-svg
                        :src="require('../../../../svgs/trash.svg')"
                        width="25"
                        height="25"
                        @click="deleteFamily(family.id)"
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
                    <th>Genera Amount</th>
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
                  justSearched ? searchFamilies() : fetchFamilies();
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
import pagination from "../../components/Pagination";
import familyService from "../../services/FamilyService.js";
import store from "../../store/store";
import Vue from "vue";

export default {
  name: "FamiliesIndex",
  methods: {
    fetchFamilies() {
      familyService
        .fetchFamilies(this.pagination.current_page)
        .then((resp) => {
          this.families = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) =>
          this.$helpers.handleError(err, "Cannot fetch families")
        );
    },
    deleteFamily(id) {
      this.$helpers.handleError(
        {},
        "Family deletion disabled during demonstration"
      );
      // familyService
      //   .deleteFamily(id)
      //   .then((resp) => {
      //     this.families = this.families.filter(
      //       (family) => family.id !== parseInt(resp.data)
      //     );
      //     this.$helpers.handleSuccess("Family deleted successfully");
      //   })
      //   .catch((err) => this.$helpers.handleError(err, "Cannot delete family"));
    },
    searchFamilies() {
      familyService
        .searchFamilies(this.search, this.pagination.current_page)
        .then((resp) => {
          if (!resp.data.data.length)
            this.tableTitle = `No Families found for: ${this.search.query}`;
          else this.tableTitle = `Search results for: ${this.search.query}`;

          this.justSearched = true;
          this.families = resp.data.data;
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
      this.tableTitle = "All Families";
      familyService
        .fetchFamilies()
        .then((resp) => {
          this.families = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) =>
          this.$helpers.handleError(err, "Cannot fetch families")
        );
    },
  },
  props: {
    familiesProp: {
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
      families: [],
      justSearched: false,
      tableTitle: "All Families",
      search: { query: null },
    };
  },
  watch: {
    "search.query"() {
      this.pagination.current_page = 1;
    },
  },
  created() {
    this.families = this.familiesProp;
  },
  beforeRouteEnter: (to, from, next) => {
    familyService
      .fetchFamilies()
      .then((resp) => {
        to.params.familiesProp = resp.data.data;
        to.params.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page,
        };
        next();
      })
      .catch((err) =>
        Vue.prototype.$helpers.handleError(err, "Cannot fetch families")
      );
  },
  components: { pagination },
};
</script>

<style></style>
