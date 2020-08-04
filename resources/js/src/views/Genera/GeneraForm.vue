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
                                            v-model="genus.name"
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
                                            v-model="genus.family_id"
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
                                                            genus.family_id
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
import generaService from "../../services/GeneraService";
import familyService from "../../services/FamilyService";

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
    data() {
        return {
            families: []
        };
    },
    methods: {
        postGenus() {
            if (!this.editing) {
                generaService
                    .createGenre(this.genus)
                    .then(resp => {
                        this.$router.push({
                            name: "genera.show",
                            params: {
                                genus: resp.data,
                                id: resp.data.id
                            }
                        });
                    })
                    .catch(err => console.log(err));
            } else {
                generaService
                    .updateGenera(this.genus)
                    .then(resp => {
                        this.$router.push({
                            name: "genera.show",
                            params: {
                                genus: resp.data,
                                id: resp.data.id
                            }
                        });
                    })
                    .catch(err => console.log(err));
            }
        }
    },
    created() {
        familyService.getAllFamilies().then(resp => {
            this.families = resp.data;
        });
    }
};
</script>

<style></style>
