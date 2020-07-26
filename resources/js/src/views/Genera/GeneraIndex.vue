<template>
  <div>
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Genera</h4>
          <router-link :to="{name: 'genera.create'}" class="btn btn-success ml-4">Add Genus</router-link>
          <div class="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Genera</li>
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
              <h5 class="card-title">All Genera</h5>
              <div class="table-responsive">
                <table id="zero_config" class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Family</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="genus in genera" :key="genus.id">
                      <td>{{ genus.id }}</td>
                      <td>
                        <a
                          :href="
                                                        '/dashboard/genera/' +
                                                            genus.id
                                                    "
                        >{{ genus.name }}</a>
                      </td>
                      <td>
                        <a
                          :href="
                                                        '/dashboard/families/' +
                                                            genus.family.id
                                                    "
                        >{{ genus.family.name }}</a>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Family</th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <pagination
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="fetchGenera()"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./../../components/Pagination";

export default {
  name: "GeneraIndex",
  methods: {
    fetchGenera() {
      axios
        .get("/genera?page=" + this.pagination.current_page)
        .then((response) => {
          this.genera = response.data.data.data;
          this.pagination = response.data.pagination;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  data() {
    return {
      genera: {},
      pagination: {
        current_page: 1,
      },
    };
  },
  mounted() {
    this.fetchGenera();
  },
  components: { Pagination },
};
</script>

<style></style>
