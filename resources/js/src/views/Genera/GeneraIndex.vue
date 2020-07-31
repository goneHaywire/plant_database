<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Genera', route: 'genera.index' }]"
            :createBtn="{ name: 'Create Genre', route: 'genera.create' }"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">All Genera</h5>
                            <div class="table-responsive">
                                <table
                                    id="zero_config"
                                    class="table table-striped table-bordered"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Family</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="genus in genera"
                                            :key="genus.id"
                                        >
                                            <td>{{ genus.id }}</td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'genera.show',
                                                        params: {
                                                            id: genus.id,
                                                            genus: genus
                                                        }
                                                    }"
                                                >
                                                    {{ genus.name }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'families.show',
                                                        params: {
                                                            id: genus.family.id,
                                                            family: genus.family
                                                        }
                                                    }"
                                                >
                                                    {{ genus.family.name }}
                                                </router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Family</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <pagination
                                v-if="pagination.last_page > 1"
                                :pagination="pagination"
                                :offset="5"
                                @paginate="fetchGenera()"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "./../../components/Pagination";
import generaService from "../../services/GeneraService";

export default {
    name: "GeneraIndex",
    methods: {
        fetchGenera() {
            generaService
                .fetchGenera(this.pagination.current_page)
                .then(data => (this.genera = data.data.data))
                .catch(err => console.log(err));
        }
    },
    data() {
        return {
            genera: [],
            pagination: {
                current_page: 1
            }
        };
    },
    props: {
        generaProp: {
            type: Array,
            required: true
        }
    },
    created() {
        this.genera = this.generaProp;
    },
    beforeRouteEnter: (to, from, next) => {
        generaService
            .fetchGenera(1)
            .then(resp => {
                to.params.generaProp = resp.data.data;
                next();
            })
            .catch(err => console.log(err));
    },
    components: { Pagination }
};
</script>

<style></style>
