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
                    <th>Favourite</th>
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
                    <td>
                        <div class="star-container">
                            <div class="stary" @click="Favourite(plant.id)">
                                <inline-svg v-if="plant.favourites.length > 0" name="star-solid"></inline-svg>
                                <inline-svg v-else name="star-regular"></inline-svg>
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
            },
            Favourite(plant_id){
                axios.post(`/dashboard/favourites/${plant_id}`)
                    .then(data => {
                        console.log(data)
                        for (let i = 0; i<this.plants.length; i++) {
                            if (this.plants[i].id === plant_id){
                                if (this.plants[i].favourites.length)
                                    this.plants[i].favourites = [];
                                else
                                    this.plants[i].favourites.push(1);
                                break;
                            }
                        }
                    })
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
