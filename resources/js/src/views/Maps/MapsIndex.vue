<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Map', route: 'maps.index' }]">
      <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{
            name: 'maps.create',
            params: {
              specieProp: selectedSpecie,
              polygonsProp: polygons,
            },
          }"
          class="btn btn-success ml-3"
        >
          Create Polygon
        </router-link>
      </template>
    </the-breadcrumbs>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Map</h5>
              <div class="row">
                <div class="col-md-5">
                  <div id="map" style="height: 600px; width: 100%;">
                    <l-map
                      :zoom="zoom"
                      :center="center"
                      :options="mapOptions"
                      style="height: 90%;"
                      @update:center="centerUpdate"
                      @update:zoom="zoomUpdate"
                      ref="map"
                    >
                      <l-tile-layer :url="url" :attribution="attribution" />

                      <l-polygon
                        v-for="polygon in polygons"
                        :key="polygon.id"
                        :visible="layers[polygon.area.name]"
                        :lat-lngs="JSON.parse(polygon.coordinates)"
                        :color="polygon.area.color"
                      >
                      </l-polygon>
                    </l-map>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12">
                      <h5>Search</h5>
                      <form class="search-form" @submit.prevent="null">
                        <div class="form-group d-flex justify-content-between">
                          <div
                            class="show-filters btn border"
                            @click="
                              search.searchFilters = !search.searchFilters
                            "
                          >
                            <inline-svg
                              width="25"
                              height="25"
                              :src="require('../../../../svgs/filter.svg')"
                            ></inline-svg>
                          </div>
                          <vue-autosuggest
                            :suggestions="species"
                            :renderSuggestion="renderSuggestion"
                            :get-suggestion-value="renderSuggestion"
                            @input="searchSpecies()"
                            @selected="onSelected"
                            :input-props="inputProps"
                            v-model="search.query"
                            class="w-100"
                          ></vue-autosuggest>
                        </div>
                        <div class="filters" v-show="search.searchFilters">
                          <div class="row align-items-center">
                            <div class="col-6 col-md-4">
                              <div class="form-group">
                                <select
                                  name="family"
                                  class="form-control"
                                  v-model="search.family_id"
                                >
                                  <option selected :value="null"
                                    >Select Family</option
                                  >
                                  <option
                                    v-for="family in families"
                                    :key="family.id"
                                    :value="family.id"
                                    >{{ family.name }}</option
                                  >
                                </select>
                              </div>
                            </div>
                            <div class="col-6 col-md-4">
                              <div class="form-group">
                                <select
                                  name="genera"
                                  class="form-control"
                                  v-model="search.genera_id"
                                >
                                  <option selected :value="null"
                                    >Select Genus</option
                                  >
                                  <option
                                    v-for="genus in genera"
                                    :key="genus.id"
                                    :value="genus.id"
                                    >{{ genus.name }}</option
                                  >
                                </select>
                              </div>
                            </div>
                            <div class="col-md-2">
                              <div class="form-group">
                                <input
                                  type="checkbox"
                                  name="in_albania"
                                  id="in_albania"
                                  v-model="search.in_albania"
                                />
                                <label class="mb-0" for="in_albania"
                                  >In Albania</label
                                >
                              </div>
                            </div>
                            <div class="col-md-2">
                              <div class="form-group">
                                <input
                                  type="checkbox"
                                  name="favourite"
                                  id="favourite"
                                  v-model="search.favourite"
                                />
                                <label class="mb-0" for="favourite"
                                  >Favorite</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <h5>
                        {{ selectedStatus }}
                        <span
                          v-if="selectedSpecie"
                          class="ml-1"
                          style="cursor: pointer;"
                        >
                          <inline-svg
                            :src="require('../../../../svgs/close.svg')"
                            width="18"
                            height="18"
                            @click="clearSearch()"
                          ></inline-svg>
                        </span>
                      </h5>
                      <hr />
                    </div>
                    <div class="col-md-6">
                      <h4>Soil Types</h4>
                      <hr />
                      <template v-for="soil in areas.soils">
                        <div
                          :key="soil.name"
                          class="d-flex align-items-center justify-content-start mb-2"
                        >
                          <inline-svg
                            class="icon icon-checkbox eye-icon"
                            name="eye"
                            width="20"
                            height="20"
                            :src="
                              layers[soil.name]
                                ? require('../../../../svgs/eye-closed.svg')
                                : require('../../../../svgs/eye-open.svg')
                            "
                            :id="soil.name"
                            @click="layers[soil.name] = !layers[soil.name]"
                          ></inline-svg>
                          <label :for="soil.name" class="mb-0">{{
                            soil.name
                          }}</label>
                        </div>
                      </template>
                    </div>
                    <div class="col-md-6">
                      <h4>Specie Status</h4>
                      <hr />
                      <template v-for="specie_status in areas.specie_status">
                        <div
                          :key="specie_status.name"
                          class="d-flex align-items-center justify-content-start mb-2"
                        >
                          <inline-svg
                            class="icon icon-checkbox eye-icon"
                            name="eye"
                            width="20"
                            height="20"
                            :src="
                              layers[specie_status.name]
                                ? require('../../../../svgs/eye-closed.svg')
                                : require('../../../../svgs/eye-open.svg')
                            "
                            :id="specie_status.name"
                            @click="
                              selectedSpecie
                                ? (layers[specie_status.name] = !layers[
                                    specie_status.name
                                  ])
                                : null
                            "
                            :style="
                              selectedSpecie
                                ? { cursor: 'pointer' }
                                : { cursor: 'default' }
                            "
                          ></inline-svg>
                          <label
                            :for="specie_status.name"
                            class="mb-0"
                            :class="{ 'text-muted': !selectedSpecie }"
                            >{{ specie_status.name }}</label
                          >
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapService from "../../services/MapService";
import familyService from "../../services/FamilyService";
import speciesService from "../../services/SpeciesService";
import store from "../../store/store";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LPolygon } from "vue2-leaflet";
import { VueAutosuggest } from "vue-autosuggest";
import { mapGetters } from "vuex";

export default {
  name: "MapsIndex",
  props: {
    specieProp: {
      type: Object,
    },
    polygonsProp: {
      type: Array,
      required: true,
    },
    areas: {
      type: Object,
      required: true,
    },
    layersProp: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getLayers: "getAreasArray",
    }),
    selectedStatus() {
      return this.selectedSpecie
        ? `Selected specie: ${this.selectedSpecie.genera.name} ${this.selectedSpecie.name}`
        : "No specie selected.";
    },
  },
  data() {
    return {
      layers: {},

      zoom: 7,
      center: latLng(41.09591205639546, 20.026783401808004),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5,
      },

      selectedSpecie: undefined,
      species: [
        {
          data: [],
        },
      ],
      search: {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "map",
      },

      families: [],
      genera: [],

      inputProps: {
        id: "autosuggest__input",
        placeholder: "Enter species name",
        class: "form-control border",
      },
    };
  },
  methods: {
    renderSuggestion(suggestion) {
      return `${suggestion.item.genera.name} ${suggestion.item.name}`;
    },
    onSelected(item) {
      this.selectedSpecie = item.item;
      this.search.query = "";
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },

    searchSpecies() {
      speciesService.searchSpecies(this.search).then((resp) => {
        this.species[0].data = resp.data;
      });
    },
    clearSearch() {
      this.selectedSpecie = null;
      this.search = {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "map",
      };
    },
  },
  watch: {
    selectedSpecie(newValue, oldValue) {
      // hiqen layerat e species
      this.polygons = this.polygons.filter(
        (polygon) => polygon.area.type === "soils"
      );
      // ben reset layers
      this.layers = Object.assign({}, store.getters.getAreasArray);

      if (newValue) {
        // shtohene layerat e species se re
        mapService.getSpecieStatusPolygons(newValue.id).then((resp) => {
          this.polygons = this.polygons.concat(resp.data);
        });
      }
    },
    "search.searchFilters"(newValue, oldValue) {
      if (!this.families.length) {
        familyService
          .getAllFamilies()
          .then((resp) => (this.families = resp.data))
          .catch((err) => console.log("Error: ", err));
      }
    },
    "search.family_id"(newValue, oldValue) {
      if (newValue) {
        familyService.getGeneraOfFamily(newValue).then((resp) => {
          this.genera = resp.data;
        });
      } else {
        this.genera = [];
        this.search.genera_id = null;
      }
    },
    search: {
      handler(newValue, oldValue) {
        this.species = [
          {
            data: [],
          },
        ];
      },
      deep: true,
    },
  },
  created() {
    this.selectedSpecie = this.specieProp;
    this.layers = this.layersProp;
    this.polygons = this.polygonsProp;
  },
  beforeRouteEnter: async (to, from, next) => {
    // fetch areas if not already in vuex
    if (!Object.keys(store.getters.getAreas).length) {
      await mapService.getAreas().then((resp) => {
        let areas = {};
        let layers = {};

        // separate areas
        areas.soils = resp.data.filter((area) => area.type === "soils");
        areas.specie_status = resp.data.filter(
          (area) => area.type === "specie_status"
        );

        // create layers object
        resp.data.forEach((area) => (layers[area.name] = false));

        store.dispatch("setAreasArray", layers);
        store.dispatch("setAreas", areas);
        to.params.areas = areas;
        to.params.layersProp = layers;
      });
    } else {
      to.params.areas = store.getters.getAreas;
      to.params.layersProp = Object.assign({}, store.getters.getAreasArray);
    }

    // fetch soil polygons if not already in vuex
    if (!store.getters.getSoilPolygons.length) {
      await mapService.getSoilPolygons().then((resp) => {
        store.dispatch("setSoilPolygons", resp.data);
        to.params.polygonsProp = resp.data;
      });
    } else {
      to.params.polygonsProp = store.getters.getSoilPolygons;
    }

    // fetch plant polygons if plant selected
    if (to.params.specieProp) {
      await mapService
        .getSpecieStatusPolygons(to.params.specieProp.id)
        .then((resp) => {
          to.params.polygonsProp = to.params.polygonsProp.concat(resp.data);
        });
    }

    next();
  },
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    VueAutosuggest,
  },
};
</script>

<style>
#autosuggest__input {
  outline: none;
  position: relative;
  display: block;
  font-family: monospace;
  font-size: 20px;
  border: 1px solid #616161;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  position: relative;
  width: 100%;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0px;
  overflow: scroll;
  max-height: 200px;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
  padding: 15px;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results_title {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 15px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results_item:active,
.autosuggest__results .autosuggest__results_item:hover,
.autosuggest__results .autosuggest__results_item:focus,
.autosuggest__results
  .autosuggest__results_item.autosuggest__results_item-highlighted {
  background-color: #ddd;
}
</style>
