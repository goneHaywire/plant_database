(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony import */ var _services_FamilyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/FamilyService */ "./resources/js/src/services/FamilyService.js");
/* harmony import */ var _services_SpeciesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/SpeciesService */ "./resources/js/src/services/SpeciesService.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/store */ "./resources/js/src/store/store.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MapsIndex",
  props: {
    specieProp: {
      type: Object
    },
    polygonsProp: {
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])({
    getLayers: "getAreasArray"
  })), {}, {
    selectedStatus: function selectedStatus() {
      return this.selectedSpecie ? "Selected specie: ".concat(this.selectedSpecie.genera.name, " ").concat(this.selectedSpecie.name) : "No specie selected.";
    }
  }),
  data: function data() {
    return {
      layers: {},
      polygons: [],
      zoom: 7,
      center: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLng"])(41.09591205639546, 20.026783401808004),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLng"])(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5
      },
      selectedSpecie: undefined,
      species: [{
        data: []
      }],
      search: {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "map"
      },
      families: [],
      genera: [],
      inputProps: {
        id: "autosuggest__input",
        placeholder: "Enter species name",
        "class": "form-control border"
      }
    };
  },
  methods: {
    renderSuggestion: function renderSuggestion(suggestion) {
      return "".concat(suggestion.item.genera.name, " ").concat(suggestion.item.name);
    },
    onSelected: function onSelected(item) {
      this.selectedSpecie = item.item;
      this.search.query = "";
    },
    zoomUpdate: function zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate: function centerUpdate(center) {
      this.currentCenter = center;
    },
    searchSpecies: function searchSpecies() {
      var _this = this;

      _services_SpeciesService__WEBPACK_IMPORTED_MODULE_3__["default"].searchSpecies(this.search).then(function (resp) {
        _this.species[0].data = resp.data;
      });
    },
    clearSearch: function clearSearch() {
      this.selectedSpecie = null;
      this.search = {
        query: null,
        family_id: null,
        genera_id: null,
        favourite: false,
        in_albania: false,
        searchFilters: false,
        view: "map"
      };
    }
  },
  watch: {
    selectedSpecie: function selectedSpecie(newValue, oldValue) {
      var _this2 = this;

      // hiqen layerat e species
      this.polygons = this.polygons.filter(function (polygon) {
        return polygon.area.type === "soils";
      }); // ben reset layers

      this.layers = Object.assign({}, _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getAreasArray);

      if (newValue) {
        // shtohene layerat e species se re
        _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getSpecieStatusPolygons(newValue.id).then(function (resp) {
          _this2.polygons = _this2.polygons.concat(resp.data);
        });
      }
    },
    "search.searchFilters": function searchSearchFilters(newValue, oldValue) {
      var _this3 = this;

      if (!this.families.length) {
        _services_FamilyService__WEBPACK_IMPORTED_MODULE_2__["default"].getAllFamilies().then(function (resp) {
          return _this3.families = resp.data;
        })["catch"](function (err) {
          return console.log("Error: ", err);
        });
      }
    },
    "search.family_id": function searchFamily_id(newValue, oldValue) {
      var _this4 = this;

      if (newValue) {
        _services_FamilyService__WEBPACK_IMPORTED_MODULE_2__["default"].getGeneraOfFamily(newValue).then(function (resp) {
          _this4.genera = resp.data;
        });
      } else {
        this.genera = [];
        this.search.genera_id = null;
      }
    },
    search: {
      handler: function handler(newValue, oldValue) {
        this.species = [{
          data: []
        }];
      },
      deep: true
    }
  },
  created: function created() {
    this.selectedSpecie = this.specieProp;
    this.layers = this.layersProp;
    this.polygons = this.polygonsProp;
  },
  beforeRouteEnter: function () {
    var _beforeRouteEnter = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Object.keys(_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getAreas).length) {
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
                _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("setAreasArray", layers);
                _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("setAreas", areas);
                to.params.areas = areas;
                to.params.layersProp = layers;
              });

            case 3:
              _context.next = 7;
              break;

            case 5:
              to.params.areas = _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getAreas;
              to.params.layersProp = Object.assign({}, _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getAreasArray);

            case 7:
              if (_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getSoilPolygons.length) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getSoilPolygons().then(function (resp) {
                _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("setSoilPolygons", resp.data);
                to.params.polygonsProp = resp.data;
              });

            case 10:
              _context.next = 13;
              break;

            case 12:
              to.params.polygonsProp = _store_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters.getSoilPolygons;

            case 13:
              if (!to.params.specieProp) {
                _context.next = 16;
                break;
              }

              _context.next = 16;
              return _services_MapService__WEBPACK_IMPORTED_MODULE_1__["default"].getSpecieStatusPolygons(to.params.specieProp.id).then(function (resp) {
                to.params.polygonsProp = to.params.polygonsProp.concat(resp.data);
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
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_6__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_6__["LTileLayer"],
    LPolygon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_6__["LPolygon"],
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_7__["VueAutosuggest"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#autosuggest__input {\n  outline: none;\n  position: relative;\n  display: block;\n  font-family: monospace;\n  font-size: 20px;\n  border: 1px solid #616161;\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n#autosuggest__input.autosuggest__input-open {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.autosuggest__results-container {\n  position: relative;\n  width: 100%;\n}\n.autosuggest__results {\n  font-weight: 300;\n  margin: 0;\n  position: absolute;\n  z-index: 10000001;\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background: white;\n  padding: 0px;\n  overflow: scroll;\n  max-height: 200px;\n}\n.autosuggest__results ul {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.autosuggest__results .autosuggest__results-item {\n  cursor: pointer;\n  padding: 15px;\n}\n#autosuggest ul:nth-child(1) > .autosuggest__results_title {\n  border-top: none;\n}\n.autosuggest__results .autosuggest__results_title {\n  color: gray;\n  font-size: 11px;\n  margin-left: 0;\n  padding: 15px 13px 5px;\n  border-top: 1px solid lightgray;\n}\n.autosuggest__results .autosuggest__results_item:active,\n.autosuggest__results .autosuggest__results_item:hover,\n.autosuggest__results .autosuggest__results_item:focus,\n.autosuggest__results\n  .autosuggest__results_item.autosuggest__results_item-highlighted {\n  background-color: #ddd;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("h5", [_vm._v("Search")]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            staticClass: "search-form",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return null($event)
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group d-flex justify-content-between"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "show-filters btn border",
                                    on: {
                                      click: function($event) {
                                        _vm.search.searchFilters = !_vm.search
                                          .searchFilters
                                      }
                                    }
                                  },
                                  [
                                    _c("inline-svg", {
                                      attrs: {
                                        width: "25",
                                        height: "25",
                                        src: __webpack_require__(/*! ../../../../svgs/filter.svg */ "./resources/svgs/filter.svg")
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("vue-autosuggest", {
                                  staticClass: "w-100",
                                  attrs: {
                                    suggestions: _vm.species,
                                    renderSuggestion: _vm.renderSuggestion,
                                    "get-suggestion-value":
                                      _vm.renderSuggestion,
                                    "input-props": _vm.inputProps
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.searchSpecies()
                                    },
                                    selected: _vm.onSelected
                                  },
                                  model: {
                                    value: _vm.search.query,
                                    callback: function($$v) {
                                      _vm.$set(_vm.search, "query", $$v)
                                    },
                                    expression: "search.query"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.search.searchFilters,
                                    expression: "search.searchFilters"
                                  }
                                ],
                                staticClass: "filters"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row align-items-center" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "col-6 col-md-4" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.search.family_id,
                                                    expression:
                                                      "search.family_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: { name: "family" },
                                                on: {
                                                  change: function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.$set(
                                                      _vm.search,
                                                      "family_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { selected: "" },
                                                    domProps: { value: null }
                                                  },
                                                  [_vm._v("Select Family")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(_vm.families, function(
                                                  family
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: family.id,
                                                      domProps: {
                                                        value: family.id
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(family.name)
                                                      )
                                                    ]
                                                  )
                                                })
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-6 col-md-4" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.search.genera_id,
                                                    expression:
                                                      "search.genera_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: { name: "genera" },
                                                on: {
                                                  change: function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.$set(
                                                      _vm.search,
                                                      "genera_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { selected: "" },
                                                    domProps: { value: null }
                                                  },
                                                  [_vm._v("Select Genus")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(_vm.genera, function(
                                                  genus
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: genus.id,
                                                      domProps: {
                                                        value: genus.id
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(genus.name))]
                                                  )
                                                })
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-2" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.search.in_albania,
                                              expression: "search.in_albania"
                                            }
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            name: "in_albania",
                                            id: "in_albania"
                                          },
                                          domProps: {
                                            checked: Array.isArray(
                                              _vm.search.in_albania
                                            )
                                              ? _vm._i(
                                                  _vm.search.in_albania,
                                                  null
                                                ) > -1
                                              : _vm.search.in_albania
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.search.in_albania,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = null,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.search,
                                                      "in_albania",
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.search,
                                                      "in_albania",
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.search,
                                                  "in_albania",
                                                  $$c
                                                )
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "mb-0",
                                            attrs: { for: "in_albania" }
                                          },
                                          [_vm._v("In Albania")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-2" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.search.favourite,
                                              expression: "search.favourite"
                                            }
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            name: "favourite",
                                            id: "favourite"
                                          },
                                          domProps: {
                                            checked: Array.isArray(
                                              _vm.search.favourite
                                            )
                                              ? _vm._i(
                                                  _vm.search.favourite,
                                                  null
                                                ) > -1
                                              : _vm.search.favourite
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.search.favourite,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = null,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.search,
                                                      "favourite",
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.search,
                                                      "favourite",
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.search,
                                                  "favourite",
                                                  $$c
                                                )
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "mb-0",
                                            attrs: { for: "favourite" }
                                          },
                                          [_vm._v("Favorite")]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("h5", [
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.selectedStatus) +
                              "\n                      "
                          ),
                          _vm.selectedSpecie
                            ? _c(
                                "span",
                                {
                                  staticClass: "ml-1",
                                  staticStyle: { cursor: "pointer" }
                                },
                                [
                                  _c("inline-svg", {
                                    attrs: {
                                      src: __webpack_require__(/*! ../../../../svgs/close.svg */ "./resources/svgs/close.svg"),
                                      width: "18",
                                      height: "18"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.clearSearch()
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("hr")
                      ]),
                      _vm._v(" "),
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
/* empty/unused harmony star reexport *//* harmony import */ var _MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapsIndex.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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