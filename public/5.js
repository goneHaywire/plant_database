(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_FamilyService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/FamilyService */ "./resources/js/src/services/FamilyService.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FamiliesShow",
  props: {
    family: {
      type: Object
    },
    id: Number,
    genera: {
      type: Array,
      required: true
    }
  },
  computed: {
    generaCount: function generaCount() {
      return this.genera.length;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.family) _services_FamilyService__WEBPACK_IMPORTED_MODULE_0__["default"].getGeneraOfFamily(to.params.id).then(function (resp) {
      to.params.genera = resp.data;
      next();
    })["catch"](function (err) {
      return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch family's genera");
    });else _services_FamilyService__WEBPACK_IMPORTED_MODULE_0__["default"].fetchFamily(to.params.id).then(function (resp) {
      to.params.family = resp.data;
      _services_FamilyService__WEBPACK_IMPORTED_MODULE_0__["default"].getGeneraOfFamily(to.params.id).then(function (resp) {
        to.params.genera = resp.data;
        next();
      })["catch"](function (err) {
        return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch family's genera");
      });
    })["catch"](function (err) {
      return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch family");
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c& ***!
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
            { name: "Families", route: "families.index" },
            { name: "Display Family", route: "families.show" }
          ],
          title: _vm.family.name + " Information"
        },
        scopedSlots: _vm._u([
          {
            key: "createBtn",
            fn: function() {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary ml-3",
                    attrs: {
                      to: {
                        name: "families.form",
                        params: {
                          editing: true,
                          family: _vm.family
                        }
                      }
                    }
                  },
                  [_vm._v("\n        Update\n      ")]
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _vm.family.description
                  ? [
                      _c("h6", [_vm._v("Family Description:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.family.description))])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no description.\n          "
                      )
                    ]),
                _vm._v(" "),
                _vm.family.leaves
                  ? [
                      _c("h6", [_vm._v("Family Leaves Description:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.family.leaves))])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no leaves description.\n          "
                      )
                    ]),
                _vm._v(" "),
                _vm.family.flowers
                  ? [
                      _c("h6", [_vm._v("Family Flowers Description:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.family.flowers))])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no flowers description.\n          "
                      )
                    ]),
                _vm._v(" "),
                _vm.family.seeds
                  ? [
                      _c("h6", [_vm._v("Family Seeds Description:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.family.seeds))])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no seeds description.\n          "
                      )
                    ]),
                _vm._v(" "),
                _vm.family.characteristics
                  ? [
                      _c("h6", [_vm._v("Family Characteristics:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.family.characteristics))])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no characteristics information.\n          "
                      )
                    ]),
                _vm._v(" "),
                _vm.family.soil
                  ? [
                      _c("h6", [
                        _vm._v(
                          "Family Soil Type: " + _vm._s(_vm.family.soil.name)
                        )
                      ])
                    ]
                  : _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n            This family has no associated soil type information.\n          "
                      )
                    ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("h6", [
                  _vm._v(
                    "Genera for " +
                      _vm._s(_vm.family.name) +
                      " (" +
                      _vm._s(_vm.generaCount) +
                      ")"
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.genera, function(genus) {
                  return _c(
                    "router-link",
                    {
                      key: genus.id,
                      staticClass: "d-block",
                      attrs: {
                        to: { name: "genera.show", params: { id: genus.id } }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(genus.name) + "\n          "
                      )
                    ]
                  )
                })
              ],
              2
            )
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

/***/ "./resources/js/src/views/Families/FamiliesShow.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesShow.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FamiliesShow.vue?vue&type=template&id=d111ff1c& */ "./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c&");
/* harmony import */ var _FamiliesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FamiliesShow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FamiliesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Families/FamiliesShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FamiliesShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FamiliesShow.vue?vue&type=template&id=d111ff1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesShow.vue?vue&type=template&id=d111ff1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesShow_vue_vue_type_template_id_d111ff1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);