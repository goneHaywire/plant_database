(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_SpeciesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/SpeciesService */ "./resources/js/src/services/SpeciesService.js");
/* harmony import */ var _services_FamilyService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FamilyService */ "./resources/js/src/services/FamilyService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SpeciesForm",
  props: {
    specie: {
      type: Object,
      "default": function _default() {
        return {
          genera: {
            family: {}
          }
        };
      }
    },
    editing: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      families: [],
      genera: [],
      selected_family: 0
    };
  },
  methods: {
    postSpecie: function postSpecie() {
      if (!this.editing) {
        _services_SpeciesService__WEBPACK_IMPORTED_MODULE_0__["default"].createSpecie(this.specie).then(function (resp) {
          return console.log(resp);
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        _services_SpeciesService__WEBPACK_IMPORTED_MODULE_0__["default"].updateSpecie(this.specie).then(function (resp) {
          return console.log(resp);
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  },
  created: function created() {
    var _this = this;

    _services_FamilyService__WEBPACK_IMPORTED_MODULE_1__["default"].getAllFamilies().then(function (resp) {
      _this.families = resp.data;
    });

    if (this.editing) {
      _services_FamilyService__WEBPACK_IMPORTED_MODULE_1__["default"].getGeneraOfFamily(this.specie.genera.family.id).then(function (resp) {
        return _this.genera = resp.data;
      });
    }
  },
  watch: {
    "specie.genera.family.id": function specieGeneraFamilyId() {
      var _this2 = this;

      // this.specie.genera.family.id = this.selected_family;
      _services_FamilyService__WEBPACK_IMPORTED_MODULE_1__["default"].getGeneraOfFamily(this.specie.genera.family.id).then(function (resp) {
        return _this2.genera = resp.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            { name: "Species", route: "species.index" },
            { name: "Create Species", route: "species.form" }
          ]
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "form",
                {
                  staticClass: "form-horizontal",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.postSpecie()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h4", { staticClass: "card-title" }, [
                      _vm._v("Species Data")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-sm-3 text-right control-label col-form-label",
                          attrs: { for: "name" }
                        },
                        [_vm._v("Species Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.specie.name,
                              expression: "specie.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "name",
                            name: "name",
                            required: "",
                            placeholder: "Species Name Here"
                          },
                          domProps: { value: _vm.specie.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.specie, "name", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-sm-3 text-right control-label col-form-label",
                          attrs: { for: "cname" }
                        },
                        [_vm._v("Common Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.specie.common_name,
                              expression: "specie.common_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "cname",
                            name: "common_name",
                            placeholder: "Common Name Here"
                          },
                          domProps: { value: _vm.specie.common_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.specie,
                                "common_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-sm-3 text-right control-label col-form-label"
                        },
                        [_vm._v("In Albania")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-9 d-flex align-items-center" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox mr-sm-2 pl-1"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.specie.in_albania,
                                    expression: "specie.in_albania"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  name: "in_albania",
                                  id: "in_albania"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.specie.in_albania)
                                    ? _vm._i(_vm.specie.in_albania, null) > -1
                                    : _vm.specie.in_albania
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.specie.in_albania,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.specie,
                                            "in_albania",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.specie,
                                            "in_albania",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.specie, "in_albania", $$c)
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", {
                                staticClass: "custom-control-label",
                                attrs: { for: "in_albania" }
                              })
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-sm-3 text-right control-label col-form-label"
                        },
                        [_vm._v("Family Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-9" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.specie.genera.family.id,
                                expression: "specie.genera.family.id"
                              }
                            ],
                            staticClass: "select2 form-control custom-select",
                            staticStyle: { width: "100%", height: "36px" },
                            attrs: { name: "family", required: "" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.specie.genera.family,
                                  "id",
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
                              { attrs: { selected: "", disabled: "" } },
                              [
                                _vm._v(
                                  "\n                                            Select Family\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.editing
                              ? _vm._l(_vm.families, function(family) {
                                  return _c(
                                    "option",
                                    {
                                      key: family.id,
                                      domProps: {
                                        value: family.id,
                                        selected:
                                          family.id ===
                                          _vm.specie.genera.family.id
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(family.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              : _vm._l(_vm.families, function(family) {
                                  return _c(
                                    "option",
                                    {
                                      key: family.id,
                                      domProps: { value: family.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(family.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.specie.genera.family.id
                      ? _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-sm-3 text-right control-label col-form-label"
                            },
                            [_vm._v("Genera Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.specie.genera.id,
                                    expression: "specie.genera.id"
                                  }
                                ],
                                staticClass:
                                  "select2 form-control custom-select",
                                staticStyle: { width: "100%", height: "36px" },
                                attrs: { name: "genera", required: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.specie.genera,
                                      "id",
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
                                  { attrs: { selected: "", disabled: "" } },
                                  [
                                    _vm._v(
                                      "\n                                            Select Genus\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.editing
                                  ? _vm._l(_vm.genera, function(genus) {
                                      return _c(
                                        "option",
                                        {
                                          key: genus.id,
                                          domProps: {
                                            value: genus.id,
                                            selected:
                                              genus.id === _vm.specie.genera.id
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(genus.name) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    })
                                  : _vm._l(_vm.genera, function(genus) {
                                      return _c(
                                        "option",
                                        {
                                          key: genus.id,
                                          domProps: { value: genus.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(genus.name) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    })
                              ],
                              2
                            )
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border-top" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("input", {
                        staticClass: "btn",
                        class: _vm.editing ? "btn-primary" : "btn-success",
                        attrs: { type: "submit" },
                        domProps: { value: _vm.editing ? "Update" : "Create" }
                      })
                    ])
                  ])
                ]
              )
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

/***/ "./resources/js/src/views/Species/SpeciesForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesForm.vue?vue&type=template&id=7a3043f3& */ "./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3&");
/* harmony import */ var _SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Species/SpeciesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesForm.vue?vue&type=template&id=7a3043f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesForm.vue?vue&type=template&id=7a3043f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesForm_vue_vue_type_template_id_7a3043f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);