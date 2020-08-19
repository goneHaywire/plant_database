<template>
  <div>
    <the-breadcrumbs
      :paths="[
        { name: 'Map', route: 'maps.index' },
        { name: 'Create Polygons', route: 'maps.create' },
      ]"
    ></the-breadcrumbs>

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
export default {};
</script>

<style>
</style>