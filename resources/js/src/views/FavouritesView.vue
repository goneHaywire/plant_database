<template>
  <div>
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Favourites</h4>
          <div class="ml-auto text-right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Favourites</li>
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
              <!-- <h5 class="card-title">Favourites for {{ user.name }}</h5> -->
              <div class="table-responsive">
                <table id="zero_config" class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Genus</th>
                      <th>Family</th>
                      <th>Common Name</th>
                      <th>In Albania</th>
                      <th>Favourite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="favourite in favourites" :key="favourite.specie.id">
                      <td>{{ favourite.specie.id }}</td>
                      <td>
                        <a
                          :href="'/dashboard/species/'+favourite.specie.id"
                        >{{ favourite.specie.genera.name }} {{ favourite.specie.specie_name }}</a>
                      </td>
                      <td>
                        <a
                          :href="'/dashboard/genera/'+favourite.specie.genera.id"
                        >{{ favourite.specie.genera.name }}</a>
                      </td>
                      <td>
                        <a
                          :href="'/dashboard/families/'+favourite.specie.genera.family.id"
                        >{{ favourite.specie.genera.family.name }}</a>
                      </td>
                      <td>{{ favourite.specie.common_name }}</td>
                      <td>{{ favourite.specie.in_albania ? "True" : "False" }}</td>
                      <td>
                        <div class="star-container">
                          <div class="stary" @click="Favourite(favourite.specie.id)">
                            <inline-svg name="star-solid"></inline-svg>
                          </div>
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
                      <th>Favourite</th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <pagination
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="fetchFavourites()"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "../components/Pagination";

export default {
  name: "FavouritesView",
  methods: {
    fetchFavourites() {
      axios
        .get("/favourites?page=" + this.pagination.current_page)
        .then((response) => {
          console.log(response);
          this.favourites = response.data.data.data;
          this.pagination = response.data.pagination;
        })
        .catch((err) => {
          console.log(error.response.data);
        });
    },
    Favourite(specie_id) {
      axios.post(`/dashboard/favourites/${specie_id}`).then((data) => {
        console.log(data);
        for (let i = 0; i < this.favourites.length; i++) {
          if (this.favourites[i].specie_id === specie_id) {
            this.favourites.splice(
              this.favourites.indexOf(this.favourites[i]),
              1
            );
            break;
          }
        }
      });
    },
  },
  data() {
    return {
      favourites: {},
      pagination: {
        current_page: 1,
      },
    };
  },
  mounted() {
    this.fetchFavourites();
  },
  components: {
    pagination,
    // svgIcon
  },
};
</script>

<style></style>
