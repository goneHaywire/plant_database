<template>
    <div>
        <the-breadcrumbs
            :paths="[{ name: 'Users', route: 'users.index' }]"
            :createBtn="{ name: 'Create User', route: 'users.create' }"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">All Users</h5>
                            <div class="table-responsive">
                                <table
                                    id="zero_config"
                                    class="table table-striped table-bordered"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="user in users"
                                            :key="user.id"
                                        >
                                            <td>{{ user.id }}</td>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <pagination
                                v-if="pagination.last_page > 1"
                                :pagination="pagination"
                                :offset="5"
                                @paginate="fetchUsers()"
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
import userService from "../../services/UserService";

export default {
    name: "users-index",
    methods: {
        fetchUsers() {
            axios
                .get("/users?page=" + this.pagination.current_page)
                .then(response => {
                    this.users = response.data.data.data;
                    this.pagination = response.data.pagination;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    },
    data() {
        return {
            users: {},
            pagination: {
                current_page: 1
            }
        };
    },
    props: {
        usersProp: {
            type: Array,
            required: true
        }
    },
    created() {
        this.users = this.usersProp;
    },
    beforeRouteEnter: (to, from, next) => {
        userService
            .fetchUsers(1)
            .then(resp => {
                to.params.usersProp = resp.data.data;
                next();
            })
            .catch(err => console.log(err));
    },
    components: { pagination }
};
</script>

<style></style>
