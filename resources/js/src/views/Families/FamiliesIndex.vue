<template>
  <div>
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Families</h4>
          <router-link :to="{ name: 'families.create' }" class="btn btn-success ml-4">Add Family</router-link>
          <div class="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Families</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">All Families</h5>
              <div class="table-responsive">
                <table id="zero_config" class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="family in families" :key="family.id">
                      <td>{{ family.id }}</td>
                      <td>
                        <a
                          :href="
                                                        '/dashboard/families/' +
                                                            family.id
                                                    "
                        >{{ family.name }}</a>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <pagination
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="fetchFamilies()"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "../../components/Pagination";

export default {
  name: "FamiliesIndex",
  methods: {
    fetchFamilies() {
      axios
        .get("/families?page=" + this.pagination.current_page)
        .then((response) => {
          this.families = response.data.data.data;
          this.pagination = response.data.pagination;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  data() {
    return {
      families: {},
      pagination: {
        current_page: 1,
      },
    };
  },
  mounted() {
    this.fetchFamilies();
  },
  components: { pagination },
};
</script>

<style></style>
