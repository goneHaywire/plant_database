<template>
  <div>
    <p>This genus has {{ species.length }} species</p>
    <div class="table-responsive">
      <table id="zero_config" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Species ID</th>
            <th>Species Name</th>
            <th>Common Name</th>
            <th>In Albania</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="specie in species" :key="specie.id">
            <td>{{ specie.id }}</td>
            <td>
              <a :href="'/dashboard/species/'+specie.id">{{ genus_name+' '+specie.specie_name }}</a>
            </td>
            <td>{{ specie.common_name }}</td>
            <td>{{ specie.in_albania ? "True" : "False" }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Species ID</th>
            <th>Species Name</th>
            <th>Common Name</th>
            <th>In Albania</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "species-for-genera-table",
  slots: {
    genus: {
      required: true,
    },
    genus_name: {
      required: true,
    },
  },
  methods: {
    fetchSpecies() {
      axios
        .get(`/species_of_genera/${this.$attrs.genus}`)
        .then((response) => {
          console.log(response);
          this.species = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  data() {
    return {
      species: [],
      genus_name: this.$attrs.genus_name,
    };
  },
  created() {
    this.fetchSpecies();
  },
};
</script>

<style scoped>
</style>
