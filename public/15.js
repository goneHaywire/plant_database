(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            { name: "Create Species", route: "species.create" }
          ]
        }
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "form",
              {
                staticClass: "form-horizontal",
                attrs: { method: "post", action: "" }
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
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "name",
                          name: "name",
                          required: "",
                          placeholder: "Species Name Here"
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
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "cname",
                          name: "common_name",
                          placeholder: "Common Name Here"
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
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "checkbox",
                                name: "in_albania",
                                id: "in_albania"
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "border-top" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("input", {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", value: "Create" }
                    })
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesCreate.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesCreate.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesCreate.vue?vue&type=template&id=4449b26b& */ "./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b&");
/* harmony import */ var _SpeciesCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesCreate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Species/SpeciesCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesCreate.vue?vue&type=template&id=4449b26b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesCreate.vue?vue&type=template&id=4449b26b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesCreate_vue_vue_type_template_id_4449b26b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);