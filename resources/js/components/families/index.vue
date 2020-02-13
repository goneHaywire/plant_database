<template>
    <div>
        <div class="table-responsive">
            <table id="zero_config" class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="family in families" :key="family.id">
                    <td>{{ family.id }}</td>
                    <td><a :href="'/dashboard/families/'+family.id">{{ family.name }}</a></td>
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

        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchFamilies()"></pagination>
    </div>
</template>

<script>
    import pagination from './../Pagination';

    export default {
        name: "families-index",
        methods: {
            fetchFamilies() {
                axios.get('/families?page=' + this.pagination.current_page)
                    .then(response => {
                        this.families = response.data.data.data;
                        this.pagination = response.data.pagination;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            }
        },
        data() {
            return {
                families: {},
                pagination: {
                    'current_page': 1
                }
            }
        },
        mounted() {
            this.fetchFamilies();
        },
        components: {pagination}
    }
</script>

<style scoped>

</style>
