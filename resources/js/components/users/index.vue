<template>
    <div>
        <div class="table-responsive">
            <table id="zero_config" class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
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

        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchUsers()"></pagination>
    </div>
</template>

<script>
    import pagination from './../Pagination';

    export default {
        name: "users-index",
        methods: {
            fetchUsers() {
                axios.get('/users?page=' + this.pagination.current_page)
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
                    'current_page': 1
                }
            }
        },
        mounted() {
            this.fetchUsers();
        },
        components: {pagination}
    }
</script>

<style scoped>

</style>
