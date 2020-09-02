(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/GeneraService */ "./resources/js/src/services/GeneraService.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GeneraShow",
  props: {
    id: Number,
    genus: {
      type: Object
    },
    species: {
      type: Array,
      required: true
    }
  },
  computed: {
    speciesCount: function speciesCount() {
      return this.species.length;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.genera) _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__["default"].getSpeciesOfGenera(to.params.id).then(function (resp) {
      to.params.species = resp.data;
      next();
    })["catch"](function (err) {
      return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch genus' species");
    });else _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__["default"].fetchGenre(to.params.id).then(function (resp) {
      to.params.genus = resp.data;
      _services_GeneraService__WEBPACK_IMPORTED_MODULE_0__["default"].getSpeciesOfGenera(to.params.id).then(function (resp) {
        to.params.species = resp.data;
        next();
      })["catch"](function (err) {
        return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch genus' species");
      });
    })["catch"](function (err) {
      return vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$helpers.handleError(err, "Cannot fetch genera");
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072& ***!
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
            { name: "Display Genre", route: "genera.show" }
          ],
          title: _vm.genus.name + " Information"
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
                        name: "genera.form",
                        params: {
                          editing: true,
                          genus: _vm.genus
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
                _c("h6", [_vm._v("Family Name:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.genus.family.name))]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v(
                    "Species for " +
                      _vm._s(_vm.genus.name) +
                      " (" +
                      _vm._s(_vm.speciesCount) +
                      ")"
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.species, function(specie) {
                  return _c(
                    "router-link",
                    {
                      key: specie.id,
                      staticClass: "d-block",
                      attrs: {
                        to: { name: "species.show", params: { id: specie.id } }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(specie.name) + "\n          "
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

/***/ "./resources/js/src/views/Genera/GeneraShow.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraShow.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneraShow.vue?vue&type=template&id=34360072& */ "./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072&");
/* harmony import */ var _GeneraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneraShow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Genera/GeneraShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraShow.vue?vue&type=template&id=34360072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraShow.vue?vue&type=template&id=34360072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraShow_vue_vue_type_template_id_34360072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);