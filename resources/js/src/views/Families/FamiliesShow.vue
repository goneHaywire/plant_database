<template>
    <div>
        <the-breadcrumbs
            :paths="[
                { name: 'Families', route: 'families.index' },
                { name: 'Display Family', route: 'families.show' }
            ]"
        ></the-breadcrumbs>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ family.name }} Information
                            </h5>
                            <hr />

                            <template v-if="family.description">
                                <h6>Family Description:</h6>
                                <p>{{ family.description }}</p>
                            </template>
                            <p v-else class="text-muted">
                                This family has no description.
                            </p>

                            <template v-if="family.leaves">
                                <h6>Family Leaves Description:</h6>
                                <p>{{ family.leaves }}</p>
                            </template>
                            <p v-else class="text-muted">
                                This family has no leaves description.
                            </p>

                            <template v-if="family.flowers">
                                <h6>Family Flowers Description:</h6>
                                <p>{{ family.flowers }}</p>
                            </template>
                            <p v-else class="text-muted">
                                This family has no flowers description.
                            </p>

                            <template v-if="family.seeds">
                                <h6>Family Seeds Description:</h6>
                                <p>{{ family.seeds }}</p>
                            </template>
                            <p v-else class="text-muted">
                                This family has no seeds description.
                            </p>

                            <template v-if="family.characteristics">
                                <h6>Family Characteristics:</h6>
                                <p>{{ family.characteristics }}</p>
                            </template>
                            <p v-else class="text-muted">
                                This family has no characteristics information.
                            </p>

                            <h6>
                                Genera for {{ family.name }} ({{ generaCount }})
                            </h6>
                            <li v-for="genus in genera" :key="genus.id">
                                {{ genus.name }}
                            </li>
                            <!-- <genera-for-family-table
                                family="{{ $family->id }}"
                            ></genera-for-family-table -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import familyService from "../../services/FamilyService";

export default {
    name: "FamiliesShow",
    props: {
        family: {
            type: Object,
            required: true
        },
        genera: {
            type: Array,
            required: true
        }
    },
    computed: {
        generaCount() {
            return this.genera.length;
        }
    },
    beforeRouteEnter(to, from, next) {
        familyService
            .getGeneraOfFamily(to.params.id)
            .then(resp => {
                to.params.genera = resp.data;
                next();
            })
            .catch(err => console.log(err));
    }
};
</script>

<style></style>
