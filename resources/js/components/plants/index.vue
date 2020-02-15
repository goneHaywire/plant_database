<template>
    <div>
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
                </tr>
                </thead>
                <tbody>
                <tr v-for="plant in plants">
                    <td>{{ plant.id }}</td>
                    <td><a :href="'/dashboard/plants/'+plant.id">{{ plant.genera.name }} {{ plant.specie_name }}</a></td>
                    <td><a :href="'/dashboard/genera/'+plant.genera.id">{{ plant.genera.name }}</a></td>
                    <td><a :href="'/dashboard/families/'+plant.genera.family.id">{{ plant.genera.family.name }}</a></td>
                    <td>{{ plant.common_name }}</td>
                    <td>{{ plant.in_albania ? "True" : "False" }}</td>
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
                </tr>
                </tfoot>
            </table>
        </div>

        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchPlants()"></pagination>
    </div>
</template>

<script>
    import pagination from './../Pagination';

    export default {
        name: "plants-index",
        methods: {
            fetchPlants() {
                axios.get('/plants?page=' + this.pagination.current_page)
                    .then(response => {
                        this.plants = response.data.data.data;
                        this.pagination = response.data.pagination;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            },
        },
        data() {
            return {
                plants: {},
                pagination: {
                    current_page: 1
                }
            }
        },
        mounted() {
            this.fetchPlants();
        },
        components: {
            pagination,
        }
    }
</script>

<style scoped>

</style>
