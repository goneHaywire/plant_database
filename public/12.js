(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        attrs: {
          paths: [
            { name: "Map", route: "maps.index" },
            { name: "Create Polygons", route: "maps.create" }
          ]
        }
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
                  _c("div", { staticClass: "col-md-4" }, [
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
                  _c("div", { staticClass: "col-md-8" }, [
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
                              _c("div", { key: soil.name }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.layers[soil.name],
                                      expression: "layers[soil.name]"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    name: soil.name,
                                    id: soil.name
                                  },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.layers[soil.name]
                                    )
                                      ? _vm._i(_vm.layers[soil.name], null) > -1
                                      : _vm.layers[soil.name]
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.layers[soil.name],
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.layers,
                                              soil.name,
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.layers,
                                              soil.name,
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.layers, soil.name, $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: soil.name } }, [
                                  _vm._v(_vm._s(soil.name))
                                ])
                              ])
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
                          [
                            _c("h4", [_vm._v("Specie Status")]),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(" "),
                            _vm._l(_vm.areas.specie_status, function(
                              specie_status
                            ) {
                              return [
                                _c("div", { key: specie_status.name }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.layers[specie_status.name],
                                        expression: "layers[specie_status.name]"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      name: specie_status.name,
                                      id: specie_status.name,
                                      disabled: !_vm.selectedSpecie
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.layers[specie_status.name]
                                      )
                                        ? _vm._i(
                                            _vm.layers[specie_status.name],
                                            null
                                          ) > -1
                                        : _vm.layers[specie_status.name]
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a =
                                            _vm.layers[specie_status.name],
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.layers,
                                                specie_status.name,
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.layers,
                                                specie_status.name,
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.layers,
                                            specie_status.name,
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
                                      class: {
                                        "text-muted": !_vm.selectedSpecie
                                      },
                                      attrs: { for: specie_status.name }
                                    },
                                    [_vm._v(_vm._s(specie_status.name))]
                                  )
                                ])
                              ]
                            })
                          ]
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

/***/ "./resources/js/src/views/Maps/MapsCreate.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsCreate.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapsCreate.vue?vue&type=template&id=4efa1551& */ "./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551&");
/* harmony import */ var _MapsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapsCreate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MapsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Maps/MapsCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapsCreate.vue?vue&type=template&id=4efa1551& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Maps/MapsCreate.vue?vue&type=template&id=4efa1551&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapsCreate_vue_vue_type_template_id_4efa1551___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);