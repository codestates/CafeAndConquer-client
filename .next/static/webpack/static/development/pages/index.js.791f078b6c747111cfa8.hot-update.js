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



var MyModal = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

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
  }, __jsx("div", {
    className: "jsx-4020727298" + " " + "MyModal",
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
  }, "\uC2E0\uADDC \uD68C\uC6D0\uAC00\uC785"), __jsx("p", {
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.children), __jsx("button", {
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\uCE74\uCE74\uC624\uD1A1 \uD68C\uC6D0\uAC00\uC785"), __jsx("button", {
    onClick: function onClick(e) {
      onClose(e);
    },
    className: "jsx-4020727298",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Close"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4020727298",
    __self: this
  }, ".MyModal.jsx-4020727298{background:rgba(0,0,0,0.25);position:fixed;left:0;top:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.MyModal.jsx-4020727298 .content.jsx-4020727298{background:white;padding:1rem;width:400px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXN1YmluL0Rlc2t0b3AvQyZDL0NhZmVBbmRDb25xdWVyLWNsaWVudC9jb21wb25lbnRzL1NpZ25Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBRzBDLEFBWWQsaUJBQ0osV0FaRSxFQWFILFlBQ0EsQ0FiTCxPQUNELElBYVIsRUFaYyxZQUNELFdBQ0UsMEVBQ00sNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9oYXN1YmluL0Rlc2t0b3AvQyZDL0NhZmVBbmRDb25xdWVyLWNsaWVudC9jb21wb25lbnRzL1NpZ25Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTXlNb2RhbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IG1vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9uQ2xvc2UgPSAoZSkgPT4ge1xuICAgIHByb3BzLm9uQ2xvc2UgJiYgcHJvcHMub25DbG9zZShlKTtcbiAgfTtcbiAgaWYgKCFwcm9wcy5zaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJNeU1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMz7si6Dqt5wg7ZqM7JuQ6rCA7J6FPC9oMz5cbiAgICAgICAgICA8cD57cHJvcHMuY2hpbGRyZW59PC9wPlxuICAgICAgICAgIDxidXR0b24+7Lm07Lm07Jik7YahIO2ajOybkOqwgOyehTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5NeU1vZGFsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLk15TW9kYWwgLmNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Users/hasubin/Desktop/C&C/CafeAndConquer-client/components/SignModal.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ })

})
//# sourceMappingURL=index.js.791f078b6c747111cfa8.hot-update.js.map