<template>
    <div>
        <p>This family has {{ genera.length }} genera</p>
        <div class="table-responsive">
            <table id="zero_config" class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Genus ID</th>
                    <th>Genus Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="genus in genera" :key="genus.id">
                    <td>{{ genus.id }}</td>
                    <td><a :href="'/dashboard/genera/'+genus.id">{{ genus.name }}</a></td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Genus ID</th>
                    <th>Genus Name</th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
    import pagination from './Pagination';

    export default {
        name: "genera-for-family-table",
        slots: {
          family: {
              required: true
          }
        },
        methods: {
            fetchGenera(){
                axios.get(`/genera_of_family/${this.$attrs.family}`)
                    .then(response => {
                        console.log(response)
                        this.genera = response.data;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            }
        },
        data() {
            return {
                genera: [],
            }
        },
        created() {
            this.fetchGenera();
        },
        components: {pagination}
    }
</script>

<style scoped>

</style>
