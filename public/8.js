(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/GeneraService */ "./resources/js/src/services/GeneraService.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GeneraForm",
  props: {
    genus: {
      type: Object,
      "default": function _default() {
        return {};
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
      families: []
    };
  },
  methods: {
    postGenus: function postGenus() {
      var _this = this;

      if (!this.editing) {
        _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__["default"].createGenre(this.genus).then(function (resp) {
          _this.$router.push({
            name: "genera.show",
            params: {
              genus: resp.data,
              id: resp.data.id
            }
          });
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__["default"].updateGenera(this.genus).then(function (resp) {
          _this.$router.push({
            name: "genera.show",
            params: {
              genus: resp.data,
              id: resp.data.id
            }
          });
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  },
  created: function created() {
    var _this2 = this;

    _services_FamilyService__WEBPACK_IMPORTED_MODULE_1__["default"].getAllFamilies().then(function (resp) {
      _this2.families = resp.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
            { name: "Genera", route: "genera.index" },
            { name: "Create Genre", route: "genera.form" }
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
                      return _vm.postGenus()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h4", { staticClass: "card-title" }, [
                      _vm._v("Genera Data")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-sm-3 text-right control-label col-form-label",
                          attrs: { for: "fname" }
                        },
                        [_vm._v("Genera Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.genus.name,
                              expression: "genus.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "name",
                            name: "name",
                            required: "",
                            placeholder: "Genera Name Here"
                          },
                          domProps: { value: _vm.genus.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.genus, "name", $event.target.value)
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
                                value: _vm.genus.family_id,
                                expression: "genus.family_id"
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
                                  _vm.genus,
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
                                          family.id === _vm.genus.family_id
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
                    ])
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

/***/ "./resources/js/src/views/Genera/GeneraForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneraForm.vue?vue&type=template&id=64a3f6b9& */ "./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9&");
/* harmony import */ var _GeneraForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneraForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneraForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Genera/GeneraForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraForm.vue?vue&type=template&id=64a3f6b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraForm.vue?vue&type=template&id=64a3f6b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraForm_vue_vue_type_template_id_64a3f6b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);