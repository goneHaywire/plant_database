<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Map', route: 'maps.index' }]">
      <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{ name: 'maps.create' }"
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
                <div class="col-md-4">
                  <div id="map" style="height: 600px; width: 100%;">
                    <l-map
                      :zoom="zoom"
                      :center="center"
                      :options="mapOptions"
                      style="height: 90%;"
                      @update:center="centerUpdate"
                      @update:zoom="zoomUpdate"
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
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <h4>Soil Types</h4>
                      <hr />
                      <template v-for="soil in areas.soils">
                        <div :key="soil.name">
                          <input
                            type="checkbox"
                            :name="soil.name"
                            v-model="layers[soil.name]"
                            :id="soil.name"
                          />
                          <label :for="soil.name">{{ soil.name }}</label>
                        </div>
                      </template>
                    </div>
                    <div class="col-md-6">
                      <template>
                        <h4>Specie Status</h4>
                        <hr />
                        <template v-for="specie_status in areas.specie_status">
                          <div :key="specie_status.name">
                            <input
                              type="checkbox"
                              :name="specie_status.name"
                              v-model="layers[specie_status.name]"
                              :id="specie_status.name"
                              :disabled="!selectedSpecie"
                            />
                            <label
                              :for="specie_status.name"
                              :class="{ 'text-muted': !selectedSpecie }"
                              >{{ specie_status.name }}</label
                            >
                          </div>
                        </template>
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
import MapService from "../../services/MapService";
// import { mapGetters } from "vuex";
import store from "../../store/store";
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LPolygon,
} from "vue2-leaflet";

export default {
  name: "MapsIndex",
  props: {
    specieProp: {
      type: Object,
    },
    polygons: {
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
    // ...mapGetters(["getSoilPolygons"]),
  },
  data() {
    return {
      layers: {},
      selectedSpecie: undefined,
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
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
  created() {
    this.selectedSpecie = this.specieProp;
    this.layers = this.layersProp;
  },
  beforeRouteEnter: async (to, from, next) => {
    // fetch areas if not already in vuex
    if (!Object.keys(store.getters.getAreas).length) {
      await MapService.getAreas().then((resp) => {
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
      await MapService.getSoilPolygons().then((resp) => {
        store.dispatch("setSoilPolygons", resp.data);
        to.params.polygons = resp.data;
      });
    } else {
      to.params.polygons = store.getters.getSoilPolygons;
    }

    // fetch plant polygons if plant selected
    if (to.params.specieProp) {
      await MapService.getSpecieStatusPolygons(to.params.specieProp.id).then(
        (resp) => {
          to.params.polygons = to.params.polygons.concat(resp.data);
        }
      );
    }

    next();
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LPolygon,
  },
};
</script>

<style></style>
