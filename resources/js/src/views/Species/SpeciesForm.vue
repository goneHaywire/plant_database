<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Species', route: 'species.index' },
                { name: 'Create Species', route: 'species.form' }
            ]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <form
                            class="form-horizontal"
                            @submit.prevent="postSpecie()"
                        >
                            <div class="card-body">
                                <h4 class="card-title">Species Data</h4>
                                <div class="form-group row">
                                    <label
                                        for="name"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Species Name</label
                                    >
                                    <div class="col-sm-9">
                                        <input
                                            v-model="specie.name"
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Species Name Here"
                                        />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label
                                        for="cname"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Common Name</label
                                    >
                                    <div class="col-sm-9">
                                        <input
                                            v-model="specie.common_name"
                                            type="text"
                                            class="form-control"
                                            id="cname"
                                            name="common_name"
                                            placeholder="Common Name Here"
                                        />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >In Albania</label
                                    >
                                    <div
                                        class="col-md-9 d-flex align-items-center"
                                    >
                                        <div
                                            class="custom-control custom-checkbox mr-sm-2 pl-1"
                                        >
                                            <input
                                                v-model="specie.in_albania"
                                                type="checkbox"
                                                class="custom-control-input"
                                                name="in_albania"
                                                id="in_albania"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="in_albania"
                                            ></label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Family Name</label
                                    >
                                    <div class="col-md-9">
                                        <select
                                            name="family"
                                            class="select2 form-control custom-select"
                                            style="width: 100%; height:36px;"
                                            required
                                            v-model="specie.genera.family.id"
                                        >
                                            <option selected disabled>
                                                Select Family
                                            </option>
                                            <template v-if="editing">
                                                <option
                                                    :value="family.id"
                                                    v-for="family in families"
                                                    :key="family.id"
                                                    :selected="
                                                        family.id ===
                                                            specie.genera.family
                                                                .id
                                                    "
                                                >
                                                    {{ family.name }}
                                                </option>
                                            </template>
                                            <template v-else>
                                                <option
                                                    :value="family.id"
                                                    v-for="family in families"
                                                    :key="family.id"
                                                >
                                                    {{ family.name }}
                                                </option>
                                            </template>
                                        </select>
                                    </div>
                                </div>

                                <div
                                    class="form-group row"
                                    v-if="specie.genera.family.id"
                                >
                                    <label
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Genera Name</label
                                    >
                                    <div class="col-md-9">
                                        <select
                                            name="genera"
                                            class="select2 form-control custom-select"
                                            style="width: 100%; height:36px;"
                                            required
                                            v-model="specie.genera.id"
                                        >
                                            <option selected disabled>
                                                Select Genus
                                            </option>
                                            <template v-if="editing">
                                                <option
                                                    :value="genus.id"
                                                    v-for="genus in genera"
                                                    :key="genus.id"
                                                    :selected="
                                                        genus.id ===
                                                            specie.genera.id
                                                    "
                                                >
                                                    {{ genus.name }}
                                                </option>
                                            </template>
                                            <template v-else>
                                                <option
                                                    :value="genus.id"
                                                    v-for="genus in genera"
                                                    :key="genus.id"
                                                >
                                                    {{ genus.name }}
                                                </option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                                <!-- <genera-for-family></genera-for-family> -->
                            </div>

                            <div class="border-top">
                                <div class="card-body">
                                    <input
                                        type="submit"
                                        class="btn"
                                        :class="
                                            editing
                                                ? 'btn-primary'
                                                : 'btn-success'
                                        "
                                        :value="editing ? 'Update' : 'Create'"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import speciesService from "../../services/SpeciesService";
import familyService from "../../services/FamilyService";

export default {
    name: "SpeciesForm",
    props: {
        specieProp: {
            type: Object,
            default: () => {
                return {
                    genera: {
                        family: {}
                    }
                };
            }
        },
        editing: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            families: [],
            genera: [],
            selected_family: 0,
            specie: {
                genera: {
                    family: {}
                }
            }
        };
    },
    methods: {
        postSpecie() {
            if (!this.editing) {
                speciesService
                    .createSpecie(this.specie)
                    .then(resp => {
                        this.$router.push({
                            name: "species.show",
                            params: {
                                id: resp.data.id,
                                specie: resp.data
                            }
                        });
                    })
                    .catch(err => console.log(err));
            } else {
                speciesService.updateSpecie(this.specie).then(resp => {
                    this.$router.push({
                        name: "species.show",
                        params: {
                            id: resp.data.id,
                            specie: resp.data
                        }
                    });
                });
            }
        }
    },
    created() {
        this.specie = this.specieProp;
        familyService.getAllFamilies().then(resp => {
            this.families = resp.data;
        });
        if (this.editing) {
            familyService
                .getGeneraOfFamily(this.specie.genera.family.id)
                .then(resp => (this.genera = resp.data));
        }
    },
    watch: {
        "specie.genera.family.id": function() {
            // this.specie.genera.family.id = this.selected_family;
            familyService
                .getGeneraOfFamily(this.specie.genera.family.id)
                .then(resp => (this.genera = resp.data));
        }
    }
};
</script>

<style></style>
