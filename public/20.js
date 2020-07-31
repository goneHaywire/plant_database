(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/Pagination */ "./resources/js/src/components/Pagination.vue");
/* harmony import */ var _services_GeneraService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/GeneraService */ "./resources/js/src/services/GeneraService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "GeneraIndex",
  methods: {
    fetchGenera: function fetchGenera() {
      var _this = this;

      _services_GeneraService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchGenera(this.pagination.current_page).then(function (data) {
        return _this.genera = data.data.data;
      })["catch"](function (err) {
        return console.log(err);
      }); // axios
      //     .get("/genera?page=" + this.pagination.current_page)
      //     .then(response => {
      //         this.genera = response.data.data.data;
      //         this.pagination = response.data.pagination;
      //     })
      //     .catch(error => {
      //         console.log(error.response.data);
      //     });
    }
  },
  data: function data() {
    return {
      genera: [],
      pagination: {
        current_page: 1
      }
    };
  },
  props: {
    generaProp: {
      type: Array,
      required: true
    }
  },
  created: function created() {
    this.genera = this.generaProp;
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    _services_GeneraService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchGenera(1).then(function (resp) {
      to.params.generaProp = resp.data.data;
      next();
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  components: {
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          paths: [{ name: "Genera", route: "genera.index" }],
          createBtn: { name: "Create Genre", route: "genera.create" }
        }
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
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v("All Genera")
                  ]),
                  _vm._v(" "),
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
                          _vm._l(_vm.genera, function(genus) {
                            return _c("tr", { key: genus.id }, [
                              _c("td", [_vm._v(_vm._s(genus.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/dashboard/genera/" + genus.id
                                    }
                                  },
                                  [_vm._v(_vm._s(genus.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/dashboard/families/" + genus.family.id
                                    }
                                  },
                                  [_vm._v(_vm._s(genus.family.name))]
                                )
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
                            return _vm.fetchGenera()
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Family")])
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Family")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/services/GeneraService.js":
/*!****************************************************!*\
  !*** ./resources/js/src/services/GeneraService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/src/services/Api.js");

var generaService = {
  fetchGenera: function fetchGenera() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/genera?page=".concat(page));
  },
  fetchGenre: function fetchGenre(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/genera/".concat(id));
  },
  createGenre: function createGenre(genre) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/genera', genre);
  },
  updateGenera: function updateGenera(genre) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put('/genera', genera);
  },
  deleteGenre: function deleteGenre(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/genera/".concat(id));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (generaService);

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraIndex.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraIndex.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneraIndex.vue?vue&type=template&id=d309d6a6& */ "./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6&");
/* harmony import */ var _GeneraIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneraIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneraIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Genera/GeneraIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneraIndex.vue?vue&type=template&id=d309d6a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Genera/GeneraIndex.vue?vue&type=template&id=d309d6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneraIndex_vue_vue_type_template_id_d309d6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);