<template>
  <div></div>
</template>

<script>
import LDraw from "leaflet-draw";

export default {
  name: "LDrawToolbar",
  mounted() {
    this.$nextTick(() => {
      console.log(this.$parent);
      const map = this.$parent.mapObject;
      const drawControl = new window.L.Control.Draw({
        position: "topright",
        draw: {
          polygon: true,
          polyline: false,
          rectangle: false,
          circle: false,
          marker: false,
        },
      });

      map.addControl(drawControl);

      const editableLayers = new window.L.FeatureGroup().addTo(map);
      map.on(window.L.Draw.Event.CREATED, (e) => {
        // const type = e.layerType;
        const layer = e.layer;
        console.log("layer:", layer);

        // Do whatever else you need to. (save to db, add to map etc)
        editableLayers.addLayer(layer);
      });
    });
    // this.$nextTick(() => {
    //   const map = this.$parent.mapObject;
    //   let editActions = [
    //     L.Toolbar2.EditAction.Popup.Edit,
    //     L.Toolbar2.EditAction.Popup.Delete,
    //     L.Toolbar2.Action.extendOptions({
    //       toolbarIcon: {
    //         className: "leaflet-color-picker",
    //         html: '<i class="fas fa-fill-drip"></i>',
    //       },
    //       subToolbar: new L.Toolbar2({
    //         actions: [
    //           L.ColorPicker.extendOptions({ color: "#db1d0f" }),
    //           L.ColorPicker.extendOptions({ color: "#025100" }),
    //           L.ColorPicker.extendOptions({ color: "#ffff00" }),
    //           L.ColorPicker.extendOptions({ color: "#0000ff" }),
    //         ],
    //       }),
    //     }),
    //   ];
    //   new window.L.Toolbar2.DrawToolbar({
    //     position: this.position,
    //   }).addTo(map);
    //   map.on("draw:created", function (e) {
    //     var type = e.layerType,
    //       layer = e.layer;
    //     layer.on("click", function (event) {
    //       this.editMode = true;
    //       new window.L.Toolbar2.EditToolbar.Popup(event.latlng, {
    //         actions: editActions,
    //       }).addTo(map, layer);
    //     });

    //     layer.addTo(map);
    //   });
    // });
  },
};
</script>

<style lang="scss">
@import "/node_modules/leaflet-draw/dist/leaflet.draw.css";
@import "/node_modules/leaflet-toolbar/dist/leaflet.toolbar.css";
.leaflet-draw-toolbar.leaflet-control-toolbar {
  margin-top: 12px;
  margin-top: 12px;
}
// NOTE: This is bad because it makes it impossible to use Leaflet.draw and Leaflet.toolbar on the same page.
.leaflet-draw-toolbar a {
  background-image: none;
  background-repeat: no-repeat;
}
.leaflet-retina .leaflet-draw-toolbar a {
  background-image: none;
  background-size: 300px 30px;
}
.leaflet-draw-toolbar {
  .leaflet-draw-edit-edit,
  .leaflet-draw-edit-remove,
  .leaflet-draw-draw-polygon,
  .leaflet-draw-draw-polyline,
  .leaflet-draw-draw-circle,
  .leaflet-draw-draw-marker,
  .leaflet-draw-draw-rectangle {
    background-image: url("/node_modules/leaflet-draw/dist/images/spritesheet.png");
    background-repeat: no-repeat;
  }
}
.leaflet-retina {
  .leaflet-draw-toolbar {
    .leaflet-draw-edit-edit,
    .leaflet-draw-edit-remove,
    .leaflet-draw-draw-polygon,
    .leaflet-draw-draw-polyline,
    .leaflet-draw-draw-circle,
    .leaflet-draw-draw-marker,
    .leaflet-draw-draw-rectangle {
      background-image: url("/node_modules/leaflet-draw/dist/images/spritesheet-2x.png");
      background-size: 300px 30px;
    }
  }
}
</style>