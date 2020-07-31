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

                                <!-- <genera-for-family></genera-for-family> -->
                            </div>
                            <div class="border-top">
                                <div class="card-body">
                                    <input
                                        type="submit"
                                        class="btn btn-primary"
                                        value="Create"
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

export default {
    name: "SpeciesForm",
    props: {
        specie: {
            type: Object,
            default: () => {
                return {};
            }
        },
        editing: {
            type: Boolean,
            default: () => false
        }
    },
    methods: {
        postSpecie() {
            if (!this.editing) {
                speciesService
                    .createSpecie(this.specie)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));
            } else {
                speciesService
                    .updateSpecie(this.specie)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));
            }
        }
    }
};
</script>

<style></style>
