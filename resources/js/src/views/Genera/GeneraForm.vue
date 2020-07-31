<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Genera', route: 'genera.index' },
                { name: 'Create Genre', route: 'genera.form' }
            ]"
        ></the-breadcrumbs>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <form
                            class="form-horizontal"
                            @submit.prevent="postGenus()"
                        >
                            <div class="card-body">
                                <h4 class="card-title">Genera Data</h4>
                                <div class="form-group row">
                                    <label
                                        for="fname"
                                        class="col-sm-3 text-right control-label col-form-label"
                                        >Genera Name</label
                                    >
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Genera Name Here"
                                        />
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
                                        >
                                            <!-- <option selected disabled>Select Family</option>@foreach($families as $family) -->
                                            <!-- <option value="{{ $family->id }}">{{ $family->name }}</option>@endforeach -->
                                        </select>
                                    </div>
                                </div>
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
import generaService from "../../services/GeneraService";
export default {
    name: "GeneraForm",
    props: {
        genus: {
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
        postGenus() {
            if (!this.editing) {
                generaService
                    .createGenre(this.genus)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));
            } else {
                generaService
                    .updateGenera(this.genus)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));
            }
        }
    }
};
</script>

<style></style>
