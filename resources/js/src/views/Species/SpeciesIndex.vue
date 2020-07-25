<template>
    <div>
        <div class="page-breadcrumb">
            <div class="row">
                <div class="col-12 d-flex no-block align-items-center">
                    <h4 class="page-title">All Species</h4>
                    <router-link
                        :to="'/add_specie'"
                        class="btn btn-success ml-4"
                        >Add Species
                    </router-link>
                    <div class="ml-auto text-right">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    All Species
                                </li>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="specie in species"
                                            :key="specie.id"
                                        >
                                            <td>{{ specie.id }}</td>
                                            <td>
                                                <a
                                                    :href="
                                                        '/dashboard/species/' +
                                                            specie.id
                                                    "
                                                    >{{ specie.genera.name }}
                                                    {{ specie.specie_name }}</a
                                                >
                                            </td>
                                            <td>
                                                <a
                                                    :href="
                                                        '/dashboard/genera/' +
                                                            specie.genera.id
                                                    "
                                                    >{{ specie.genera.name }}</a
                                                >
                                            </td>
                                            <td>
                                                <a
                                                    :href="
                                                        '/dashboard/families/' +
                                                            specie.genera.family
                                                                .id
                                                    "
                                                    >{{
                                                        specie.genera.family
                                                            .name
                                                    }}</a
                                                >
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
import Pagination from "../../components/Pagination";

export default {
    name: "SpeciesIndex",
    methods: {
        fetchPlants() {
            axios
                .get("/species?page=" + this.pagination.current_page)
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
            species: {},
            pagination: {
                current_page: 1
            }
        };
    },
    mounted() {
        this.fetchPlants();
    },
    components: {
        Pagination
    }
};
</script>

<style></style>
