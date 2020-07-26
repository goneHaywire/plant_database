(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
  name: "TheSidebar"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheSidebar.vue */ "./resources/js/src/components/TheSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DashboardPage",
  components: {
    TheSidebar: _components_TheSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b& ***!
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
    "aside",
    { staticClass: "left-sidebar", attrs: { "data-sidebarbg": "skin5" } },
    [
      _c("div", { staticClass: "scroll-sidebar" }, [
        _c("nav", { staticClass: "sidebar-nav" }, [
          _c("ul", { staticClass: "p-t-30", attrs: { id: "sidebarnav" } }, [
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: { to: { name: "home" }, "aria-expanded": "false" }
                  },
                  [
                    _c("i", { staticClass: "mdi mdi-view-dashboard" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [_vm._v("Home")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: {
                      to: { name: "families" },
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-tree" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [
                      _vm._v("Families")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: { to: { name: "genera" }, "aria-expanded": "false" }
                  },
                  [
                    _c("i", { staticClass: "far fa-list-alt" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [_vm._v("Genera")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: { to: { name: "species" }, "aria-expanded": "false" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-leaf" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [
                      _vm._v("Species")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: {
                      to: { name: "albanian" },
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-map-marker-alt" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [
                      _vm._v("Albanian species")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: {
                      to: { name: "favourites" },
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("i", { staticClass: "far fa-star" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [
                      _vm._v("Favourites")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: { to: { name: "filter" }, "aria-expanded": "false" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-search" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [_vm._v("Filter")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "sidebar-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "sidebar-link waves-effect waves-dark sidebar-link",
                    attrs: { to: { name: "users" }, "aria-expanded": "false" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-user" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "hide-menu" }, [_vm._v("Users")])
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "main-wrapper" } },
    [
      _c("the-sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page-wrapper" },
        [
          _c("router-view"),
          _vm._v(" "),
          _c("footer", { staticClass: "footer text-center" }, [
            _vm._v("Designed and Developed by Emiljan Dusha.")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/TheSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/components/TheSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=template&id=5d92bf6b& */ "./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b&");
/* harmony import */ var _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/TheSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/TheSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSidebar.vue?vue&type=template&id=5d92bf6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/TheSidebar.vue?vue&type=template&id=5d92bf6b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSidebar_vue_vue_type_template_id_5d92bf6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/DashboardPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/pages/DashboardPage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=b3d71242& */ "./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/DashboardPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/DashboardPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardPage.vue?vue&type=template&id=b3d71242& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/DashboardPage.vue?vue&type=template&id=b3d71242&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_b3d71242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);