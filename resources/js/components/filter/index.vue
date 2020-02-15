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

        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchResults()"></pagination>
    </div>
</template>

<script>
    import pagination from './../Pagination';

    export default {
        name: "filter-index",
        props: {
            results: {
                required: true
            },
            // pagination: {
            //     required: true
            // }
        },
        methods: {
            fetchResults() {
                axios.get(this.url + "&page=" + this.pagination.current_page)
                    .then(response => {
                        this.plants = response.data.data.data;
                        this.pagination = response.data.pagination;
                        this.url = response.data.url;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            }
        },
        data() {
            return {
                url: JSON.parse(this.results).url,
                plants: JSON.parse(this.results).data.data,
                pagination: JSON.parse(this.results).pagination,
            }
        },
        mounted() {
            console.log(this.results.url)
            // this.fetchResults();
        },
        components: {pagination}
    }
</script>

<style scoped>

</style>
