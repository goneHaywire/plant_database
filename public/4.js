(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_MapService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/MapService */ "./resources/js/src/services/MapService.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "./resources/js/src/store/store.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { mapGetters } from "vuex";




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MapsIndex",
  props: {
    specieProp: {
      type: Object
    },
    polygons: {
      type: Array,
      required: true
    },
    areas: {
      type: Object,
      required: true
    },
    layersProp: {
      type: Object,
      required: true
    }
  },
  computed: {// ...mapGetters(["getSoilPolygons"]),
  },
  data: function data() {
    return {
      layers: {},
      selectedSpecie: undefined,
      zoom: 7,
      center: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(41.09591205639546, 20.026783401808004),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate: function zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate: function centerUpdate(center) {
      this.currentCenter = center;
    }
  },
  created: function created() {
    this.selectedSpecie = this.specieProp;
    this.layers = this.layersProp;
  },
  beforeRouteEnter: function () {
    var _beforeRouteEnter = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Object.keys(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getAreas).length) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getAreas().then(function (resp) {
                var areas = {};
                var layers = {}; // separate areas

                areas.soils = resp.data.filter(function (area) {
                  return area.type === "soils";
                });
                areas.specie_status = resp.data.filter(function (area) {
                  return area.type === "specie_status";
                }); // create layers object

                resp.data.forEach(function (area) {
                  return layers[area.name] = false;
                });
                _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("setAreasArray", layers);
                _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("setAreas", areas);
                to.params.areas = areas;
                to.params.layersProp = layers;
              });

            case 3:
              _context.next = 7;
              break;

            case 5:
              to.params.areas = _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getAreas;
              to.params.layersProp = Object.assign({}, _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getAreasArray);

            case 7:
              if (_store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getSoilPolygons.length) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getSoilPolygons().then(function (resp) {
                _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("setSoilPolygons", resp.data);
                to.params.polygons = resp.data;
              });

            case 10:
              _context.next = 13;
              break;

            case 12:
              to.params.polygons = _store_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getSoilPolygons;

            case 13:
              if (!to.params.specieProp) {
                _context.next = 16;
                break;
              }

              _context.next = 16;
              return _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getSpecieStatusPolygons(to.params.specieProp.id).then(function (resp) {
                to.params.polygons = to.params.polygons.concat(resp.data);
              });

            case 16:
              next();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function beforeRouteEnter(_x, _x2, _x3) {
      return _beforeRouteEnter.apply(this, arguments);
    }

    return beforeRouteEnter;
  }(),
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LMarker"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LPopup"],
    LTooltip: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LTooltip"],
    LPolygon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LPolygon"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("the-breadcrumbs", {
        attrs: { paths: [{ name: "Map", route: "maps.index" }] },
        scopedSlots: _vm._u([
          {
            key: "createBtn",
            fn: function() {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success ml-3",
                    attrs: {
                      tag: "div",
                      to: {
                        name: "maps.create",
                        params: {
                          specieProp: _vm.selectedSpecie,
                          polygonsProp: _vm.polygons
                        }
                      }
                    }
                  },
                  [_vm._v("\n        Create Polygon\n      ")]
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Map")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c(
                      "div",
                      {
                        staticStyle: { height: "600px", width: "100%" },
                        attrs: { id: "map" }
                      },
                      [
                        _c(
                          "l-map",
                          {
                            ref: "map",
                            staticStyle: { height: "90%" },
                            attrs: {
                              zoom: _vm.zoom,
                              center: _vm.center,
                              options: _vm.mapOptions
                            },
                            on: {
                              "update:center": _vm.centerUpdate,
                              "update:zoom": _vm.zoomUpdate
                            }
                          },
                          [
                            _c("l-tile-layer", {
                              attrs: {
                                url: _vm.url,
                                attribution: _vm.attribution
                              }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.polygons, function(polygon) {
                              return _c("l-polygon", {
                                key: polygon.id,
                                attrs: {
                                  visible: _vm.layers[polygon.area.name],
                                  "lat-lngs": JSON.parse(polygon.coordinates),
                                  color: polygon.area.color
                                }
                              })
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("h4", [_vm._v("Soil Types")]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _vm._l(_vm.areas.soils, function(soil) {
                            return [
                              _c(
                                "div",
                                {
                                  key: soil.name,
                                  staticClass:
                                    "d-flex align-items-center justify-content-start mb-2"
                                },
                                [
                                  _c("inline-svg", {
                                    staticClass: "icon icon-checkbox eye-icon",
                                    attrs: {
                                      name: "eye",
                                      width: "20",
                                      height: "20",
                                      src: _vm.layers[soil.name]
                                        ? __webpack_require__(/*! ../../../../svgs/eye-closed.svg */ "./resources/svgs/eye-closed.svg")
                                        : __webpack_require__(/*! ../../../../svgs/eye-open.svg */ "./resources/svgs/eye-open.svg"),
                                      id: soil.name
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.layers[soil.name] = !_vm.layers[
                                          soil.name
                                        ]
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "mb-0",
                                      attrs: { for: soil.name }
                                    },
                                    [_vm._v(_vm._s(soil.name))]
                                  )
                                ],
                                1
                              )
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("h4", [_vm._v("Specie Status")]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _vm._l(_vm.areas.specie_status, function(
                            specie_status
                          ) {
                            return [
                              _c(
                                "div",
                                {
                                  key: specie_status.name,
                                  staticClass:
                                    "d-flex align-items-center justify-content-start mb-2"
                                },
                                [
                                  _c("inline-svg", {
                                    staticClass: "icon icon-checkbox eye-icon",
                                    style: _vm.selectedSpecie
                                      ? { cursor: "pointer" }
                                      : { cursor: "default" },
                                    attrs: {
                                      name: "eye",
                                      width: "20",
                                      height: "20",
                                      src: _vm.layers[specie_status.name]
                                        ? __webpack_require__(/*! ../../../../svgs/eye-closed.svg */ "./resources/svgs/eye-closed.svg")
                                        : __webpack_require__(/*! ../../../../svgs/eye-open.svg */ "./resources/svgs/eye-open.svg"),
                                      id: specie_status.name
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.selectedSpecie
                                          ? (_vm.layers[
                                              specie_status.name
                                            ] = !_vm.layers[specie_status.name])
                                          : null
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "mb-0",
                                      class: {
                                        "text-muted": !_vm.selectedSpecie
                                      },
                                      attrs: { for: specie_status.name }
                                    },
                                    [_vm._v(_vm._s(specie_status.name))]
                                  )
                                ],
                                1
                              )
                            ]
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/services/MapService.js":
/*!*************************************************!*\
  !*** ./resources/js/src/services/MapService.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/src/services/Api.js");

var mapService = {
  getAreas: function getAreas() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/areas');
  },
  getSoilPolygons: function getSoilPolygons() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/polygons/soil');
  },
  getSpecieStatusPolygons: function getSpecieStatusPolygons(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/polygons/specie/".concat(id));
  },
  createPolygon: function createPolygon(polygon) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/polygons', polygon);
  },
  deletePolygon: function deletePolygon(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/polygons/".concat(id));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mapService);

/***/ }),

/***/ "./resources/js/src/views/Maps/MapsIndex.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsIndex.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapsIndex.vue?vue&type=template&id=645d170d& */ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d&");
/* harmony import */ var _MapsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapsIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MapsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Maps/MapsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsIndex.vue?vue&type=template&id=645d170d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=template&id=645d170d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_template_id_645d170d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/svgs/eye-closed.svg":
/*!***************************************!*\
  !*** ./resources/svgs/eye-closed.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/eye-closed.svg?37228d13df56ec65af6ac55c1798b24a";

/***/ }),

/***/ "./resources/svgs/eye-open.svg":
/*!*************************************!*\
  !*** ./resources/svgs/eye-open.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/eye-open.svg?4b4cf493f88fb594bc1a7072e5b52902";

/***/ })

}]);