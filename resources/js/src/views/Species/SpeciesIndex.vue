<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Species', route: 'species.index' }]"
            :createBtn="{ name: 'Create Species', route: 'species.form' }"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">All Plants</h5>
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
                                            <th>In Albania</th>
                                            <th>Favourite</th>
                                            <th>Actions</th>
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
                                                    {{ specie.specie_name }}
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
                                                {{
                                                    specie.in_albania
                                                        ? "True"
                                                        : "False"
                                                }}
                                            </td>
                                            <td>
                                                <div class="star-container">
                                                    <div
                                                        class="stary"
                                                        @click="
                                                            favSpecies(
                                                                specie.id
                                                            )
                                                        "
                                                    >
                                                        <!-- <inline-svg
                                                            v-if="
                                                                specie
                                                                    .favourites
                                                                    .length > 0
                                                            "
                                                            name="star-solid"
                                                        ></inline-svg> -->
                                                        <!-- <inline-svg
                                                            v-else
                                                            name="star-regular"
                                                        ></inline-svg> -->
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'species.form',
                                                        params: {
                                                            editing: true,
                                                            specie
                                                        }
                                                    }"
                                                    class="btn btn-primary"
                                                >
                                                    Update
                                                </router-link>
                                                <div class="btn btn-danger">
                                                    Delete
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
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <pagination
                                v-if="pagination.last_page > 1"
                                :pagination="pagination"
                                :offset="5"
                                @paginate="fetchSpecies()"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "../../components/Pagination";
import speciesService from "../../services/SpeciesService";

export default {
    name: "SpeciesIndex",
    methods: {
        fetchSpecies() {
            speciesService
                .fetchSpecies(this.pagination.current_page)
                .then(resp => {
                    this.species = resp.data.data;
                    this.pagination = {
                        current_page: resp.data.current_page,
                        last_page: resp.data.last_page
                    };
                })
                .catch(err => console.log(err));
        },
        favSpecies(specie_id) {
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
            pagination: {}
        };
    },
    props: {
        speciesProp: {
            type: Array,
            required: true
        },
        paginationProp: {
            type: Object,
            required: true
        }
    },
    created() {
        this.species = this.speciesProp;
        this.pagination = this.paginationProp;
    },
    beforeRouteEnter: (to, from, next) => {
        speciesService.fetchSpecies(1).then(resp => {
            to.params.speciesProp = resp.data.data;
            to.params.paginationProp = {
                current_page: resp.data.current_page,
                last_page: resp.data.last_page
            };
            next();
        });
    },
    components: {
        Pagination
    }
};
</script>

<style></style>
