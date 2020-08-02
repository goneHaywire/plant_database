<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Filter Species', route: 'filter.index' }]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Filter Results</h5>
                            <!-- <h6>{{ json_decode($response)->pagination->total }} species found.</h6> -->
                            <hr />
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
                                                    {{ specie.name }}</a
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
                                @paginate="fetchResults()"
                            ></pagination>
                            <hr />
                            <h3>No species found.</h3>
                            @
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from "../components/Pagination";

export default {
    name: "FilterIndex",
    props: {
        results: {
            required: false,
            default: function() {
                return {};
            }
        }
        // pagination: {
        //     required: true
        // }
    },
    methods: {
        fetchResults() {
            axios
                .get(this.url + "&page=" + this.pagination.current_page)
                .then(response => {
                    this.species = response.data.data.data;
                    this.pagination = response.data.pagination;
                    this.url = response.data.url;
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
            url: JSON.parse(this.results).url,
            species: JSON.parse(this.results).data.data,
            pagination: JSON.parse(this.results).pagination
        };
    },
    mounted() {
        console.log(this.results.url);
        // this.fetchResults();
    },
    components: { pagination }
};
</script>

<style></style>
