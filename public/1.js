(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Pagination */ "./resources/js/src/components/Pagination.vue");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/UserService */ "./resources/js/src/services/UserService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "users-index",
  methods: {
    fetchUsers: function fetchUsers() {
      var _this = this;

      _services_UserService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchUsers().then(function (resp) {
        _this.users = resp.data.data;
        _this.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page
        };
      });
    } //     axios
    //         .get("/users?page=" + this.pagination.current_page)
    //         .then(response => {
    //             this.users = response.data.data.data;
    //             this.pagination = response.data.pagination;
    //         })
    //         .catch(error => {
    //             console.log(error.response.data);
    //         });
    // }

  },
  props: {
    users: {
      type: Array,
      required: true
    },
    pagination: {
      type: Array,
      required: true
    }
  },
  // created() {
  //     this.users = this.usersProp;
  // },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    _services_UserService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchUsers().then(function (resp) {
      to.params.users = resp.data.data;
      to.params.pagination = {
        current_page: resp.data.current_page,
        last_page: resp.data.last_page
      };
      next();
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  components: {
    pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        attrs: { paths: [{ name: "Users", route: "users.index" }] },
        scopedSlots: _vm._u([
          {
            key: "createBtn",
            fn: function() {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success ml-3",
                    attrs: { tag: "div", to: { name: "users.create" } }
                  },
                  [_vm._v("\n        Create User\n      ")]
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
                        _vm._l(_vm.users, function(user) {
                          return _c("tr", { key: user.id }, [
                            _c("td", { staticClass: "icon-col" }, [
                              _vm._v(_vm._s(user.id))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))])
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
                          return _vm.fetchUsers()
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
        _c("th", [_vm._v("Email")])
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
        _c("th", [_vm._v("Email")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/services/UserService.js":
/*!**************************************************!*\
  !*** ./resources/js/src/services/UserService.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/src/services/Api.js");

var userService = {
  fetchUsers: function fetchUsers() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/users?page=".concat(page));
  },
  getUsersCount: function getUsersCount() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/users/count');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userService);

/***/ }),

/***/ "./resources/js/src/views/Users/UsersIndex.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/Users/UsersIndex.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersIndex.vue?vue&type=template&id=88bf2a4a& */ "./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a&");
/* harmony import */ var _UsersIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Users/UsersIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Users/UsersIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersIndex.vue?vue&type=template&id=88bf2a4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Users/UsersIndex.vue?vue&type=template&id=88bf2a4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersIndex_vue_vue_type_template_id_88bf2a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);