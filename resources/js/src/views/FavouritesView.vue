<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Favourites', route: 'favourites.index' }]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <!-- <h5 class="card-title">Favourites for {{ user.name }}</h5> -->
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
                                            v-for="favourite in favourites"
                                            :key="favourite.specie.id"
                                        >
                                            <td>{{ favourite.specie.id }}</td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'species.show',
                                                        params: {
                                                            specie:
                                                                favourite.specie,
                                                            id:
                                                                favourite.specie
                                                                    .id
                                                        }
                                                    }"
                                                >
                                                    {{
                                                        favourite.specie.genera
                                                            .name
                                                    }}
                                                    {{ favourite.specie.name }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'genera.show',
                                                        params: {
                                                            genus:
                                                                favourite.specie
                                                                    .genera,
                                                            id:
                                                                favourite.specie
                                                                    .genera.id
                                                        }
                                                    }"
                                                    >{{
                                                        favourite.specie.genera
                                                            .name
                                                    }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'families.show',
                                                        params: {
                                                            family:
                                                                favourite.specie
                                                                    .genera
                                                                    .family,
                                                            id:
                                                                favourite.specie
                                                                    .genera
                                                                    .family.id
                                                        }
                                                    }"
                                                >
                                                    {{
                                                        favourite.specie.genera
                                                            .family.name
                                                    }}
                                                </router-link>
                                            </td>
                                            <td>
                                                {{
                                                    favourite.specie.common_name
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    favourite.specie.in_albania
                                                        ? "True"
                                                        : "False"
                                                }}
                                            </td>
                                            <td>
                                                <div class="star-container">
                                                    <div
                                                        class="stary"
                                                        @click="
                                                            removeFavourite(
                                                                favourite.specie
                                                                    .id
                                                            )
                                                        "
                                                    >
                                                        <inline-svg
                                                            name="star-solid"
                                                            width="30"
                                                            height="30"
                                                            :src="
                                                                require('../../../svgs/star-solid.svg')
                                                            "
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
                                @paginate="fetchFavourites()"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from "../components/Pagination";
import speciesService from "../services/SpeciesService";

export default {
    name: "FavouritesView",
    methods: {
        fetchFavourites() {
            speciesService.fetchFavourites().then(resp => {
                this.favourites = resp.data.data;
                this.pagination = {
                    current_page: resp.data.current_page,
                    last_page: resp.data.last_page
                };
            });
        },
        removeFavourite(id) {
            speciesService
                .favourite(id)
                .then(resp => {
                    if (resp.status === 200) {
                        let fav_index = this.favourites.findIndex(
                            specie => specie.specie_id === id
                        );
                        this.favourites.splice(fav_index, 1);
                    }
                })
                .catch(err => console.log(err));
        }
    },
    props: {
        favouritesProp: {
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
            favourites: []
        };
    },
    created() {
        this.favourites = this.favouritesProp;
    },
    beforeRouteEnter: (to, from, next) => {
        speciesService
            .fetchFavourites()
            .then(resp => {
                to.params.favouritesProp = resp.data.data;
                to.params.pagination = {
                    current_page: resp.data.current_page,
                    last_page: resp.data.last_page
                };
                next();
            })
            .catch(err => console.log(err));
    },
    components: { pagination }
};
</script>

<style></style>
