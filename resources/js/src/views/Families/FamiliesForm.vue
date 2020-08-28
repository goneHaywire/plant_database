<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Families', route: 'families.index' },
        { name: 'Create Family', route: 'families.form' },
      ]"
      :title="
        editing ? `Updating ${family.name}` : 'Create Family'
      "
    ></the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <form class="form-horizontal" @submit.prevent="postFamily()">
              <div class="form-group row">
                <label
                  for="fname"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Family Name</label
                >
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Family Name Here"
                    v-model="family.name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="cono1"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Family Description</label
                >
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    name="desc"
                    v-model="family.description"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="cono1"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Leaves Description</label
                >
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    name="leaves"
                    v-model="family.leaves"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="cono1"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Flowers Description</label
                >
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    name="flowers"
                    v-model="family.flowers"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="cono1"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Seeds Description</label
                >
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    name="seeds"
                    v-model="family.seeds"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="cono1"
                  class="col-sm-3 text-right control-label col-form-label"
                  >Family Characteristics</label
                >
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    name="characteristics"
                    v-model="family.characteristics"
                  ></textarea>
                </div>
              </div>
              <div class="border-top">
                <input
                  type="submit"
                  class="btn"
                  :class="editing ? 'btn-primary' : 'btn-success'"
                  :value="editing ? 'Update' : 'Create'"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import familyService from "../../services/FamilyService";

export default {
  name: "FamiliesForm",
  props: {
    family: {
      type: Object,
      default: () => {
        return {};
      },
    },
    editing: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    postFamily() {
      if (!this.editing) {
        familyService
          .createFamily(this.family)
          .then((resp) => {
            this.$router.push({
              name: "families.show",
              params: {
                family: resp.data,
                id: resp.data.id,
              },
            });
          })
          .catch((err) => console.log(err));
      } else {
        familyService
          .updateFamily(this.family)
          .then((resp) =>
            this.$router.push({
              name: "families.show",
              params: {
                family: resp.data,
                id: resp.data.id,
              },
            })
          )
          .catch((err) => console.log(err));
      }
    },
  },
  // data() {
  //     return {
  //         family: {
  //             name: ""
  //         }
  //     };
  // },
  created() {
    // this.family = this.familyProp;
  },
};
</script>

<style></style>
