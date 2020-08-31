<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Map', route: 'maps.index' },
        { name: 'Create Polygons', route: 'maps.create' },
      ]"
    ></the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-5">
                <div id="map">
                  <l-map
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
                    @update:center="centerUpdate"
                    @update:zoom="zoomUpdate"
                    ref="map"
                  >
                    <l-tile-layer :url="url" :attribution="attribution" />
                    <!-- <l-draw-toolbar position="topright" /> -->

                    <l-polygon
                      v-for="polygon in polygons"
                      :key="polygon.id"
                      :visible="polygon.visible"
                      :lat-lngs="JSON.parse(polygon.coordinates)"
                      :color="polygon.area.color"
                      :opacity="0.4"
                    >
                    </l-polygon>
                  </l-map>
                </div>
              </div>
              <div class="col-md-7">
                <form @submit.prevent="createPolygon()">
                  <div class="row">
                    <div class="col-6 col-md-4">
                      <h4>Soil Types</h4>
                      <hr />
                      <template v-for="soil in areas.soils">
                        <div :key="soil.name">
                          <input
                            type="radio"
                            :value="soil.id"
                            name="area"
                            v-model="activePolygon.area_id"
                            :id="soil.name"
                            required
                          />
                          <label :for="soil.name">{{ soil.name }}</label>
                        </div>
                      </template>
                    </div>
                    <div class="col-6 col-md-4">
                      <h4>Specie Status</h4>
                      <hr />
                      <template v-for="specie_status in areas.specie_status">
                        <div :key="specie_status.name">
                          <input
                            type="radio"
                            :value="specie_status.id"
                            name="area"
                            v-model="activePolygon.area_id"
                            :id="specie_status.name"
                            :disabled="!activePolygon.specie_id"
                            required
                          />
                          <label
                            :for="specie_status.name"
                            :class="{
                              'text-muted': !activePolygon.specie_id,
                            }"
                            >{{ specie_status.name }}</label
                          >
                        </div>
                      </template>
                    </div>
                    <div class="col-12 col-md-4">
                      <h4>District</h4>
                      <hr />
                      <label for="district">Select Polygon District</label>
                      <select
                        name="district"
                        id="district"
                        v-model="activePolygon.district_id"
                      >
                        <option :value="null" selected disabled
                          >Select district</option
                        >
                        <option
                          :value="district.id"
                          v-for="district in districts"
                          :key="district.id"
                          >{{ district.name }}</option
                        >
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Add Polygon"
                      class="btn btn-success"
                    />
                  </div>
                  <hr />
                  <table class="table table-striped table-bordered">
                    <thead>
                      <td>ID</td>
                      <td>Toggle</td>
                      <td>Name</td>
                      <td>Type</td>
                      <td>District</td>
                      <td>Remove</td>
                    </thead>
                    <tr v-for="polygon in polygons" :key="polygon.id">
                      <td class="icon-col">{{ polygon.id }}</td>
                      <td class="icon-col">
                        <inline-svg
                          class="icon eye-icon"
                          :name="polygon.visible ? 'eye-closed' : 'eye-open'"
                          width="25"
                          height="25"
                          :src="
                            polygon.visible
                              ? require('../../../../svgs/eye-closed.svg')
                              : require('../../../../svgs/eye-open.svg')
                          "
                          @click="polygon.visible = !polygon.visible"
                        ></inline-svg>
                      </td>
                      <td>{{ polygon.area.name }}</td>
                      <td>{{ polygon.area.type | cleanType }}</td>
                      <td>{{ polygon.district.name }}</td>
                      <td class="icon-col">
                        <inline-svg
                          class="icon trash-icon"
                          name="trash"
                          width="25"
                          height="25"
                          :src="require('../../../../svgs/trash.svg')"
                          @click="deletePolygon(polygon.id)"
                        ></inline-svg>
                      </td>
                    </tr>
                  </table>
                </form>
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
import "leaflet-draw";
import { mapGetters } from "vuex";

export default {
  name: "MapsCreate",
  props: {
    specieProp: {
      type: Object,
    },
    polygonsProp: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      areas: "getAreas",
      soilPolygons: "getSoilPolygons",
      districts: "getDistricts",
    }),
  },
  data() {
    return {
      activePolygon: {
        coordinates: [],
        area_id: null,
        specie_id: null,
        district_id: null,
      },
      polygons: [],
      editableLayers: undefined,
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
    createPolygon() {
      MapService.createPolygon(this.activePolygon).then((resp) => {
        console.log(resp.data);
        if (resp.data.area.type === "soils")
          this.$store.dispatch("addSoilPolygon", {
            ...resp.data,
            visible: false,
          });
        else
          this.polygons.push({
            ...resp.data,
            visible: false,
          });
        this.activePolygon.coordinates = [];
        this.activePolygon.area_id = null;
        this.activePolygon.district_id = null;
        const oldLayer = Object.values(this.editableLayers._layers)[0];
        this.editableLayers.removeLayer(oldLayer);
        this.editableLayers._map.removeLayer(oldLayer);
      });
    },
    deletePolygon(id) {
      MapService.deletePolygon(id).then((resp) => {
        this.$store.dispatch("removeSoilPolygon", id);
        this.polygons = this.polygons.filter((polygon) => polygon.id !== id);
      });
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const map = this.$refs.map.mapObject;
      const drawControl = new window.L.Control.Draw({
        position: "topright",
        draw: {
          polyline: false,
          polygon: true,
          rectangle: false,
          circle: false,
          marker: false,
        },
      });

      map.addControl(drawControl);

      const editableLayers = new window.L.FeatureGroup().addTo(map);
      this.editableLayers = editableLayers;
      console.log("map: ", this.$refs.map.mapObject);
      window.map = this.$refs.map.mapObject;
      //   console.log();

      map.on(window.L.Draw.Event.CREATED, (e) => {
        console.log("drawing complete");
        const layer = e.layer;
        console.log("layer:", layer);
        // this.$set(this);
        this.activePolygon.coordinates = layer._latlngs[0];
        editableLayers.addLayer(layer);
        window.editable = editableLayers;
        console.log("current val: ", this.activePolygon.coordinates);
      });
      map.on(window.L.Draw.Event.DRAWSTART, (e) => {
        console.log("started drawing");
        const all_layers = Object.keys(editableLayers._layers);
        if (all_layers.length) {
          console.log("all_layers,", all_layers);
          editableLayers.removeLayer(editableLayers._layers[all_layers[0]]);
          this.activePolygon.coordinates = [];
          console.log(
            "current val after drawstart: ",
            this.activePolygon.coordinates
          );
        }
      });
    });
  },
  filters: {
    cleanType: function (value) {
      return _.capitalize(value).replace("_", " ");
    },
  },
  created() {
    if (this.specieProp)
      this.activePolygon.specie_id = this.specieProp.id || null;
    this.polygons = this.polygonsProp;
    this.polygons.forEach((polygon) => this.$set(polygon, "visible", false));
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LPolygon,
    // LDrawToolbar,
  },
};
</script>

<style></style>