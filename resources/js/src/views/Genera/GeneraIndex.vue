<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Genera', route: 'genera.index' }]"
            :createBtn="{ name: 'Create Genre', route: 'genera.form' }"
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
                                            <th>Actions</th>
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
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'genera.form',
                                                        params: {
                                                            editing: true,
                                                            genus
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
                                            <th>Name</th>
                                            <th>Family</th>
                                            <th>Actions</th>
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
                .then(resp => {
                    this.genera = resp.data.data;
                    this.pagination = {
                        current_page: resp.data.current_page,
                        last_page: resp.data.last_page
                    };
                })
                .catch(err => console.log(err));
        }
    },
    props: {
        genera: {
            type: Array,
            required: true
        },
        pagination: {
            type: Object,
            required: true
        }
    },
    // created() {
    //     this.genera = this.generaProp;
    //     this.pagination = this.paginationProp;
    // },
    beforeRouteEnter: (to, from, next) => {
        generaService
            .fetchGenera()
            .then(resp => {
                to.params.genera = resp.data.data;
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
