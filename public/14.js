(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/HomeView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/HomeView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HomeView"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 col-lg-2 col-xlg-3" }, [
          _c(
            "a",
            { staticClass: "card card-hover", attrs: { to: { name: "home" } } },
            [_vm._m(1)]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-4 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "families" } }
              },
              [
                _c("div", { staticClass: "box bg-success text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "fas fa-tree" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [_vm._v("Families")])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-2 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "genera" } }
              },
              [
                _c("div", { staticClass: "box bg-warning text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "far fa-list-alt" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [_vm._v("Genera")])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-4 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "species" } }
              },
              [
                _c("div", { staticClass: "box bg-danger text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "fas fa-leaf" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [_vm._v("Species")])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-4 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "favourites" } }
              },
              [
                _c("div", { staticClass: "box bg-info text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "far fa-star" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [
                    _vm._v("Favourites")
                  ])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-2 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "users" } }
              },
              [
                _c("div", { staticClass: "box bg-danger text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "fas fa-user" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [_vm._v("Users")])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-4 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "albanian" } }
              },
              [
                _c("div", { staticClass: "box bg-info text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "fas fa-map-marker-alt" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [
                    _vm._v("Albanian Species")
                  ])
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 col-lg-2 col-xlg-3" },
          [
            _c(
              "router-link",
              {
                staticClass: "card card-hover",
                attrs: { to: { name: "filter" } }
              },
              [
                _c("div", { staticClass: "box bg-cyan text-center" }, [
                  _c("h1", { staticClass: "font-light text-white" }, [
                    _c("i", { staticClass: "fas fa-search" })
                  ]),
                  _vm._v(" "),
                  _c("h6", { staticClass: "text-white" }, [_vm._v("Filter")])
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$family_count))
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$genera_count))
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$species_count))
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$albanian_count))
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$user_count))
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card m-t-0" }, [
            _c("div", { staticClass: "row py-2 align-items-center" }, [
              _vm._m(7),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 border-left text-center p-t-10" },
                [
                  _c("h3", { staticClass: "mb-0 font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$favourites_count))
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(8)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-breadcrumb" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 d-flex no-block align-items-center" },
          [
            _c("h4", { staticClass: "page-title" }, [_vm._v("Home")]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-auto text-right" }, [
              _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v("Library")]
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box bg-cyan text-center" }, [
      _c("h1", { staticClass: "font-light text-white" }, [
        _c("i", { staticClass: "mdi mdi-view-dashboard" })
      ]),
      _vm._v(" "),
      _c("h6", { staticClass: "text-white" }, [_vm._v("Home")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Families")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Genera")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Species")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Albanian")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Users")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6 d-flex align-items-center justify-content-center"
      },
      [_c("h3", { staticClass: "mb-0" }, [_vm._v("Favourites")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v("Families with most species in Albania")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pie", staticStyle: { height: "800px" } })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/HomeView.vue":
/*!*********************************************!*\
  !*** ./resources/js/src/views/HomeView.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=d9756564& */ "./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564&");
/* harmony import */ var _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/HomeView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/HomeView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/HomeView.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/HomeView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/HomeView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=template&id=d9756564& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/HomeView.vue?vue&type=template&id=d9756564&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_d9756564___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);