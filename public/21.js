(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./resources/js/src/components/Pagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FavouritesView",
  methods: {
    fetchFavourites: function fetchFavourites() {
      var _this = this;

      axios.get("/favourites?page=" + this.pagination.current_page).then(function (response) {
        console.log(response);
        _this.favourites = response.data.data.data;
        _this.pagination = response.data.pagination;
      })["catch"](function (err) {
        console.log(error.response.data);
      });
    },
    Favourite: function Favourite(specie_id) {
      var _this2 = this;

      axios.post("/dashboard/favourites/".concat(specie_id)).then(function (data) {
        console.log(data);

        for (var i = 0; i < _this2.favourites.length; i++) {
          if (_this2.favourites[i].specie_id === specie_id) {
            _this2.favourites.splice(_this2.favourites.indexOf(_this2.favourites[i]), 1);

            break;
          }
        }
      });
    }
  },
  data: function data() {
    return {
      favourites: {},
      pagination: {
        current_page: 1
      }
    };
  },
  mounted: function mounted() {
    this.fetchFavourites();
  },
  components: {
    pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"] // svgIcon

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e& ***!
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
        attrs: { paths: [{ name: "Favourites", route: "favourites.index" }] }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass: "table table-striped table-bordered",
                        attrs: { id: "zero_config" }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.favourites, function(favourite) {
                            return _c("tr", { key: favourite.specie.id }, [
                              _c("td", [_vm._v(_vm._s(favourite.specie.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/dashboard/species/" +
                                        favourite.specie.id
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(favourite.specie.genera.name) +
                                        "\n                                                " +
                                        _vm._s(favourite.specie.specie_name)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/dashboard/genera/" +
                                        favourite.specie.genera.id
                                    }
                                  },
                                  [_vm._v(_vm._s(favourite.specie.genera.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/dashboard/families/" +
                                        favourite.specie.genera.family.id
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        favourite.specie.genera.family.name
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(favourite.specie.common_name) +
                                    "\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(
                                      favourite.specie.in_albania
                                        ? "True"
                                        : "False"
                                    ) +
                                    "\n                                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("div", { staticClass: "star-container" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "stary",
                                      on: {
                                        click: function($event) {
                                          return _vm.Favourite(
                                            favourite.specie.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("inline-svg", {
                                        attrs: { name: "star-solid" }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.pagination.last_page > 1
                    ? _c("pagination", {
                        attrs: { pagination: _vm.pagination, offset: 5 },
                        on: {
                          paginate: function($event) {
                            return _vm.fetchFavourites()
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Full Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Genus")]),
        _vm._v(" "),
        _c("th", [_vm._v("Family")]),
        _vm._v(" "),
        _c("th", [_vm._v("Common Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("In Albania")]),
        _vm._v(" "),
        _c("th", [_vm._v("Favourite")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Full Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Genus")]),
        _vm._v(" "),
        _c("th", [_vm._v("Family")]),
        _vm._v(" "),
        _c("th", [_vm._v("Common Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("In Albania")]),
        _vm._v(" "),
        _c("th", [_vm._v("Favourite")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/FavouritesView.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/FavouritesView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavouritesView.vue?vue&type=template&id=14c5464e& */ "./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e&");
/* harmony import */ var _FavouritesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavouritesView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FavouritesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/FavouritesView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavouritesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FavouritesView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/FavouritesView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavouritesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FavouritesView.vue?vue&type=template&id=14c5464e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/FavouritesView.vue?vue&type=template&id=14c5464e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavouritesView_vue_vue_type_template_id_14c5464e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);