<template>
  <div>
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
              <a :href="'/dashboard/genera/'+genus.id">{{ genus.name }}</a>
            </td>
            <td>
              <a :href="'/dashboard/families/'+genus.family.id">{{ genus.family.name }}</a>
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
</template>

<script>
import pagination from "./../Pagination";

export default {
  name: "genera-index",
  methods: {
    fetchGenera() {
      axios
        .get("/genera?page=" + this.pagination.current_page)
        .then(response => {
          this.genera = response.data.data.data;
          this.pagination = response.data.pagination;
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },
  data() {
    return {
      genera: {},
      pagination: {
        current_page: 1
      }
    };
  },
  mounted() {
    this.fetchGenera();
  },
  components: { pagination }
};
</script>

<style scoped>
</style>
