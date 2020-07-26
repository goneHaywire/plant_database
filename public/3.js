(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoginPage"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark"
        },
        [
          _c(
            "div",
            { staticClass: "auth-box bg-dark border-top border-secondary" },
            [
              _c("div", { attrs: { id: "loginform" } }, [
                _c("div", { staticClass: "text-center p-t-20 p-b-20" }, [
                  _c("span", { staticClass: "db" })
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "form-horizontal m-t-20",
                    attrs: { id: "loginform", action: "index.html" }
                  },
                  [
                    _c("div", { staticClass: "row p-b-30" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "input-group-text bg-success text-white",
                                attrs: { id: "basic-addon1" }
                              },
                              [_c("i", { staticClass: "ti-user" })]
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control form-control-lg",
                            attrs: {
                              type: "text",
                              placeholder: "Username",
                              "aria-label": "Username",
                              "aria-describedby": "basic-addon1",
                              required: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group mb-3" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "input-group-text bg-warning text-white",
                                attrs: { id: "basic-addon2" }
                              },
                              [_c("i", { staticClass: "ti-pencil" })]
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control form-control-lg",
                            attrs: {
                              type: "text",
                              placeholder: "Password",
                              "aria-label": "Password",
                              "aria-describedby": "basic-addon1",
                              required: ""
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row border-top border-secondary" },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("div", { staticClass: "p-t-20" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: { id: "to-recover", type: "button" }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-lock m-r-5" }),
                                  _vm._v(" Lost password?\n                  ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success float-right",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Login")]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "recoverform" } }, [
                _c("div", { staticClass: "text-center" }, [
                  _c("span", { staticClass: "text-white" }, [
                    _vm._v(
                      "Enter your e-mail address below and we will send you instructions how to recover a password."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row m-t-20" }, [
                  _c(
                    "form",
                    { staticClass: "col-12", attrs: { action: "index.html" } },
                    [
                      _c("div", { staticClass: "input-group mb-3" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "input-group-text bg-danger text-white",
                              attrs: { id: "basic-addon1" }
                            },
                            [_c("i", { staticClass: "ti-email" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control form-control-lg",
                          attrs: {
                            type: "text",
                            placeholder: "Email Address",
                            "aria-label": "Username",
                            "aria-describedby": "basic-addon1"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "row m-t-20 p-t-20 border-top border-secondary"
                        },
                        [
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-success",
                                attrs: {
                                  href: "#",
                                  id: "to-login",
                                  name: "action"
                                }
                              },
                              [_vm._v("Back To Login")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info float-right",
                                attrs: { type: "button", name: "action" }
                              },
                              [_vm._v("Recover")]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/LoginPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/pages/LoginPage.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=template&id=f1a88e98& */ "./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/LoginPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginPage.vue?vue&type=template&id=f1a88e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/LoginPage.vue?vue&type=template&id=f1a88e98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_f1a88e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);