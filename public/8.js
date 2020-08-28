(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_PhotoService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/PhotoService */ "./resources/js/src/services/PhotoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SpeciesShow",
  props: {
    specie: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      photos: []
    };
  },
  created: function created() {
    var _this = this;

    _services_PhotoService__WEBPACK_IMPORTED_MODULE_0__["default"].getPhotos(this.specie.id).then(function (resp) {
      return _this.photos = resp.data;
    })["catch"](function (err) {
      return console.log("Err: ".concat(err));
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac& ***!
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
            { name: "Display Species", route: "species.show" }
          ],
          title: _vm.specie.genera.name + " " + _vm.specie.name + " Information"
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
                        name: "species.form",
                        params: {
                          editing: true,
                          specieProp: _vm.specie
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
                _vm.photos.length
                  ? [
                      _c("h5", [_vm._v("Gallery")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "img-grid" },
                        _vm._l(_vm.photos, function(photo) {
                          return _c(
                            "div",
                            { key: photo.id, staticClass: "img-box" },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src: "/storage/" + photo.path,
                                  alt: photo.path
                                }
                              })
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  : _vm._e()
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

/***/ "./resources/js/src/views/Species/SpeciesShow.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesShow.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesShow.vue?vue&type=template&id=49c24dac& */ "./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac&");
/* harmony import */ var _SpeciesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesShow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Species/SpeciesShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesShow.vue?vue&type=template&id=49c24dac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Species/SpeciesShow.vue?vue&type=template&id=49c24dac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesShow_vue_vue_type_template_id_49c24dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);