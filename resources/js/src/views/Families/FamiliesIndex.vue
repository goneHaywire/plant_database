<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Families', route: 'families.index' }]"
            :createBtn="{ name: 'Create Family', route: 'families.form' }"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">All Families</h5>
                            <!-- <button @click="getFamilies()">tesg</button> -->
                            <div class="table-responsive">
                                <table
                                    id="zero_config"
                                    class="table table-striped table-bordered"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="family in families"
                                            :key="family.id"
                                        >
                                            <td>{{ family.id }}</td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'families.show',
                                                        params: {
                                                            family: family,
                                                            id: family.id
                                                        }
                                                    }"
                                                >
                                                    {{ family.name }}
                                                </router-link>
                                            </td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'families.form',
                                                        params: {
                                                            editing: true,
                                                            family
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
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <pagination
                                v-if="pagination.last_page > 1"
                                :pagination="pagination"
                                :offset="5"
                                @paginate="fetchFamilies()"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from "../../components/Pagination";
import familyService from "../../services/FamilyService.js";

export default {
    name: "FamiliesIndex",
    methods: {
        fetchFamilies() {
            familyService
                .fetchFamilies(this.pagination.current_page)
                .then(resp => {
                    console.log(resp);
                    this.families = resp.data.data;
                    this.pagination = {
                        ...this.pagination,
                        last_page: resp.data.last_page
                    };
                })
                .catch(err => console.log(err));
        }
    },
    props: {
        families: {
            type: Array,
            required: true
        },
        pagination: {
            type: Object,
            required: true
        }
    },
    // created() {
    //     this.pagination = this.paginationProp;
    //     this.families = this.familiesProp;
    // },
    beforeRouteEnter: (to, from, next) => {
        familyService
            .fetchFamilies()
            .then(resp => {
                to.params.families = resp.data.data;
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
