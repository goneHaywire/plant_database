<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Albanian Species', route: 'albanian.index' }]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Albanian Species</h5>
                            <div class="table-responsive">
                                <table
                                    id="zero_config"
                                    class="table table-striped table-bordered"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Full Name</th>
                                            <th>Genus</th>
                                            <th>Family</th>
                                            <th>Common Name</th>
                                            <th>Favourite</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="specie in species"
                                            :key="specie.id"
                                        >
                                            <td>{{ specie.id }}</td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'species.show',
                                                        params: {
                                                            specie,
                                                            id: specie.id
                                                        }
                                                    }"
                                                >
                                                    {{ specie.genera.name }}
                                                    {{ specie.name }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'genera.show',
                                                        params: {
                                                            genus:
                                                                specie.genera,
                                                            id: specie.genera.id
                                                        }
                                                    }"
                                                    >{{ specie.genera.name }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'families.show',
                                                        params: {
                                                            family:
                                                                specie.genera
                                                                    .family,
                                                            id:
                                                                specie.genera
                                                                    .family.id
                                                        }
                                                    }"
                                                >
                                                    {{
                                                        specie.genera.family
                                                            .name
                                                    }}
                                                </router-link>
                                            </td>
                                            <td>{{ specie.common_name }}</td>
                                            <td>
                                                <div class="star-container">
                                                    <div
                                                        class="stary"
                                                        @click="
                                                            Favourite(specie.id)
                                                        "
                                                    >
                                                        <inline-svg
                                                            v-if="
                                                                specie
                                                                    .favourites
                                                                    .length > 0
                                                            "
                                                            name="star-solid"
                                                        ></inline-svg>
                                                        <inline-svg
                                                            v-else
                                                            name="star-regular"
                                                        ></inline-svg>
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
                                            <th>Favourite</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <pagination
                                v-if="pagination.last_page > 1"
                                :pagination="pagination"
                                :offset="5"
                                @paginate="fetchPlants()"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "../components/Pagination";
import speciesService from "../services/SpeciesService";
export default {
    name: "AlbanianIndex",
    methods: {
        fetchPlants() {
            axios
                .get("/albanian?page=" + this.pagination.current_page)
                .then(response => {
                    this.species = response.data.data.data;
                    this.pagination = response.data.pagination;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        Favourite(specie_id) {
            axios.post(`/dashboard/favourites/${specie_id}`).then(data => {
                console.log(data);
                for (let i = 0; i < this.species.length; i++) {
                    if (this.species[i].id === specie_id) {
                        if (this.species[i].favourites.length)
                            this.species[i].favourites = [];
                        else this.species[i].favourites.push(1);
                        break;
                    }
                }
            });
        }
    },
    data() {
        return {
            species: [],
            pagination: {
                current_page: 1
            }
        };
    },
    props: {
        speciesProp: {
            type: Array,
            required: true
        }
    },
    created() {
        this.species = this.speciesProp;
    },
    beforeRouteEnter: (to, from, next) => {
        speciesService
            .fetchAlbanianSpecies(1)
            .then(resp => {
                to.params.speciesProp = resp.data.data;
                next();
            })
            .catch(err => console.log(err));
    },
    components: { Pagination }
};
</script>

<style></style>
