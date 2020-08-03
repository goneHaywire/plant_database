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
                                                            favourite(specie.id)
                                                        "
                                                    >
                                                        <inline-svg
                                                            v-if="
                                                                specie.favourites_count
                                                            "
                                                            name="star-solid"
                                                            width="30"
                                                            height="30"
                                                            :src="
                                                                require('../../../svgs/star-solid.svg')
                                                            "
                                                        ></inline-svg>
                                                        <inline-svg
                                                            v-else
                                                            :src="
                                                                require('../../../svgs/star-regular.svg')
                                                            "
                                                            width="30"
                                                            height="30"
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
            speciesService
                .fetchAlbanianSpecies(this.pagination.current_page)
                .then(resp => {
                    this.species = resp.data.data;
                    this.pagination = {
                        current_page: resp.data.current_page,
                        last_page: resp.data.last_page
                    };
                })
                .catch(err => console.log(err));
        },
        favourite(id) {
            speciesService
                .favourite(id)
                .then(resp => {
                    if (resp.status === 200) {
                        let fav_index = this.species.findIndex(
                            specie => specie.id === id
                        );
                        this.species[fav_index].favourites_count
                            ? (this.species[fav_index].favourites_count = 0)
                            : (this.species[fav_index].favourites_count = 1);
                    }
                })
                .catch(err => console.log(err));
        }
    },
    props: {
        speciesProp: {
            type: Array,
            required: true
        },
        pagination: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            species: []
        };
    },
    created() {
        this.species = this.speciesProp;
    },
    beforeRouteEnter: (to, from, next) => {
        speciesService
            .fetchAlbanianSpecies()
            .then(resp => {
                to.params.speciesProp = resp.data.data;
                to.params.pagination = {
                    current_page: resp.data.current_page,
                    last_page: resp.data.last_page
                };
                next();
            })
            .catch(err => console.log(err));
    },
    components: { Pagination }
};
</script>

<style></style>
