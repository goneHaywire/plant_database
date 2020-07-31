<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Families', route: 'families.index' }]"
            :createBtn="{ name: 'Create Family', route: 'families.create' }"
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
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
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
import Pagination from "../../components/Pagination";
import familyService from "../../services/FamilyService.js";

export default {
    name: "FamiliesIndex",
    methods: {
        fetchFamilies() {
            familyService
                .fetchFamilies(this.pagination.current_page)
                .then(data => {
                    console.log(data);
                    this.families = data.data.data;
                })
                .catch(err => console.log(err));
        }
    },
    data() {
        return {
            families: [],
            pagination: {
                current_page: 1
            }
        };
    },
    props: {
        familiesProp: {
            type: Array,
            required: true
        }
    },
    created() {
        this.families = this.familiesProp;
    },
    beforeRouteEnter: (to, from, next) => {
        familyService
            .fetchFamilies(1)
            .then(resp => {
                to.params.familiesProp = resp.data.data;
                next();
            })
            .catch(err => console.log(err));
    },
    components: { Pagination }
};
</script>

<style></style>
