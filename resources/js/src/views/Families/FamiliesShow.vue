<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Families', route: 'families.index' },
        { name: 'Display Family', route: 'families.show' },
      ]"
      :title="family.name + ' Information'"
    >
      <template v-slot:createBtn>
        <router-link
          :to="{
            name: 'families.form',
            params: {
              editing: true,
              family,
            },
          }"
          class="btn btn-primary ml-3"
        >
          Update
        </router-link>
      </template></the-breadcrumbs
    >

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
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

            <template v-if="family.soil">
              <h6>Family Soil Type: {{ family.soil.name }}</h6>
            </template>
            <p v-else class="text-muted">
              This family has no associated soil type information.
            </p>

            <hr />

            <h6>Genera for {{ family.name }} ({{ generaCount }})</h6>
            <router-link
              class="d-block"
              :to="{ name: 'genera.show', params: { id: genus.id } }"
              v-for="genus in genera"
              :key="genus.id"
            >
              {{ genus.name }}
            </router-link>
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
    },
    id: Number,
    genera: {
      type: Array,
      required: true,
    },
  },
  computed: {
    generaCount() {
      return this.genera.length;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.family)
      familyService
        .getGeneraOfFamily(to.params.id)
        .then((resp) => {
          to.params.genera = resp.data;
          next();
        })
        .catch((err) => console.log(err));
    else
      familyService.fetchFamily(to.params.id).then((resp) => {
        to.params.family = resp.data;
        familyService.getGeneraOfFamily(to.params.id).then((resp) => {
          to.params.genera = resp.data;
          next();
        });
      });
  },
};
</script>

<style></style>
