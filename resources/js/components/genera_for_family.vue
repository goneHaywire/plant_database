<template>
    <div>
        <div class="form-group row">
            <label class="col-sm-3 text-right control-label col-form-label">Family Name</label>
            <div class="col-md-9">
                <select name="family_id" class="select2 form-control custom-select" style="width: 100%; height:36px;"
                        required @change="fetchGenera()" v-model="selected_family">
                    <option>Select Family</option>
                    <option v-for="family in families" :value="family.id">{{ family.name }}</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 text-right control-label col-form-label">Family Name</label>
            <div class="col-md-9">
                <select name="genera_id" class="select2 form-control custom-select" style="width: 100%; height:36px;"
                        required>
                    <option selected disabled>Select Genera</option>
                    <option v-for="genus in genera" :value="genus.id">{{ genus.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "generas-for-family",
        data() {
            return {
                families: undefined,
                selected_family: undefined,
                genera: undefined
            }
        },
        methods: {
            fetchFamilies() {
                axios.get('/all_families')
                    .then(response => {
                        console.log(response)
                        this.families = response.data;
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            },
            fetchGenera(){
                axios.get(`/genera_of_family/${this.selected_family}`)
                .then(response => {
                    console.log(response)
                    this.genera = response.data;
                })
                    .catch(error => {
                        console.log(error.response.data);
                    });
            }
        },
        mounted() {
            this.fetchFamilies();
        }
    }
</script>

<style scoped>

</style>
