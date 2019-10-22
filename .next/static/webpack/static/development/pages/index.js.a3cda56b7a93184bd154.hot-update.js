webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SignModal.js":
/*!*********************************!*\
  !*** ./components/SignModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/hasubin/Desktop/C&C/CafeAndConquer-client/components/SignModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgba(0, 0, 0, 0.25);\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SignModal = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

var modal = function modal(props) {
  var onClose = function onClose(e) {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return __jsx("div", {
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(SignModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4020727298" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "My Modal"), __jsx("p", {
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.children), __jsx("button", {
    onClick: function onClick(e) {
      onClose(e);
    },
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Close"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4020727298",
    __self: this
  }, ".MyModal.jsx-4020727298{background:rgba(0,0,0,0.25);position:fixed;left:0;top:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.MyModal.jsx-4020727298 .content.jsx-4020727298{background:white;padding:1rem;width:400px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXN1YmluL0Rlc2t0b3AvQyZDL0NhZmVBbmRDb25xdWVyLWNsaWVudC9jb21wb25lbnRzL1NpZ25Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBRzBDLEFBWWQsaUJBQ0osV0FaRSxFQWFILFlBQ0EsQ0FiTCxPQUNELElBYVIsRUFaYyxZQUNELFdBQ0UsMEVBQ00sNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9oYXN1YmluL0Rlc2t0b3AvQyZDL0NhZmVBbmRDb25xdWVyLWNsaWVudC9jb21wb25lbnRzL1NpZ25Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU2lnbk1vZGFsID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgbW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb25DbG9zZSA9IChlKSA9PiB7XG4gICAgcHJvcHMub25DbG9zZSAmJiBwcm9wcy5vbkNsb3NlKGUpO1xuICB9O1xuICBpZiAoIXByb3BzLnNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2lnbk1vZGFsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDM+TXkgTW9kYWw8L2gzPlxuICAgICAgICAgIDxwPntwcm9wcy5jaGlsZHJlbn08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NpZ25Nb2RhbD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLk15TW9kYWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuTXlNb2RhbCAuY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/hasubin/Desktop/C&C/CafeAndConquer-client/components/SignModal.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ })

})
//# sourceMappingURL=index.js.a3cda56b7a93184bd154.hot-update.js.map