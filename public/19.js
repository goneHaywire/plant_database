(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Pagination */ "./resources/js/src/components/Pagination.vue");
/* harmony import */ var _services_FamilyService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FamilyService.js */ "./resources/js/src/services/FamilyService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FamiliesIndex",
  methods: {
    fetchFamilies: function fetchFamilies() {
      var _this = this;

      _services_FamilyService_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchFamilies(this.pagination.current_page).then(function (data) {
        console.log(data);
        _this.families = data.data.data; // this.
      })["catch"](function (err) {
        return console.log(err);
      }); // axios
      //     .get("/families?page=" + this.pagination.current_page)
      //     .then(response => {
      //         this.families = response.data.data.data;
      //         this.pagination = response.data.pagination;
      //     })
      //     .catch(error => {
      //         console.log(error.response.data);
      //     });
    }
  },
  data: function data() {
    return {
      // families: [],
      pagination: {
        current_page: 1
      }
    };
  },
  props: {
    familiesProp: {
      type: Array,
      required: true
    }
  },
  created: function created() {
    this.families = this.familiesProp;
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    _services_FamilyService_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchFamilies(1).then(function (resp) {
      to.params.familiesProp = resp.data.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          paths: [{ name: "Families", route: "families.index" }],
          createBtn: { name: "Create Family", route: "families.create" }
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
                    _vm._v("All Families")
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
                          _vm._l(_vm.families, function(family) {
                            return _c("tr", { key: family.id }, [
                              _c("td", [_vm._v(_vm._s(family.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/dashboard/families/" + family.id
                                    }
                                  },
                                  [_vm._v(_vm._s(family.name))]
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
                            return _vm.fetchFamilies()
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
        _c("th", [_vm._v("Name")])
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
        _c("th", [_vm._v("Name")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/services/FamilyService.js":
/*!****************************************************!*\
  !*** ./resources/js/src/services/FamilyService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/src/services/Api.js");

var familyService = {
  fetchFamilies: function fetchFamilies() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/families?page=".concat(page));
  },
  fetchFamily: function fetchFamily(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/families/".concat(id));
  },
  createFamily: function createFamily(family) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/families", family);
  },
  updateFamily: function updateFamily(family) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put('/families', family);
  },
  deleteFamily: function deleteFamily(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/family/".concat(id));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (familyService);

/***/ }),

/***/ "./resources/js/src/views/Families/FamiliesIndex.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesIndex.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FamiliesIndex.vue?vue&type=template&id=c94bd6a6& */ "./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6&");
/* harmony import */ var _FamiliesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FamiliesIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FamiliesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Families/FamiliesIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FamiliesIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FamiliesIndex.vue?vue&type=template&id=c94bd6a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Families/FamiliesIndex.vue?vue&type=template&id=c94bd6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FamiliesIndex_vue_vue_type_template_id_c94bd6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);