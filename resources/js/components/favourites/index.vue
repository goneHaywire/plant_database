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
                <tr v-for="favourite in favourites">
                    <td>{{ favourite.plant.id }}</td>
                    <td><a :href="'/dashboard/plants/'+favourite.plant.id">{{ favourite.plant.genera.name }} {{ favourite.plant.specie_name }}</a></td>
                    <td><a :href="'/dashboard/genera/'+favourite.plant.genera.id">{{ favourite.plant.genera.name }}</a></td>
                    <td><a :href="'/dashboard/families/'+favourite.plant.genera.family.id">{{ favourite.plant.genera.family.name }}</a></td>
                    <td>{{ favourite.plant.common_name }}</td>
                    <td>{{ favourite.plant.in_albania ? "True" : "False" }}</td>
                    <td>
                        <div class="star-container">
                            <div class="stary" @click="Favourite(favourite.plant.id)">
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

        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchFavourites()"></pagination>
    </div>
</template>

<script>
    import pagination from './../Pagination';

    export default {
        name: "favourites-index",
        methods: {
            fetchFavourites() {
                axios.get('/favourites?page=' + this.pagination.current_page)
                    .then(response => {
                        console.log(response)
                        this.favourites = response.data.data.data;
                        this.pagination = response.data.pagination;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            },
            Favourite(plant_id){
                axios.post(`/dashboard/favourites/${plant_id}`)
                    .then(data => {
                        console.log(data)
                        for (let i = 0; i<this.favourites.length; i++) {
                            if (this.favourites[i].plant_id === plant_id){
                                this.favourites.splice(this.favourites.indexOf(this.favourites[i]), 1);
                                break;
                            }
                        }
                    })
            }
        },
        data() {
            return {
                favourites: {},
                pagination: {
                    'current_page': 1
                }
            }
        },
        mounted() {
            this.fetchFavourites();
        },
        components: {
            pagination,
            // svgIcon
        }
    }
</script>

<style scoped>

</style>
