webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-position */ "./node_modules/use-position/dist/usePosition.min.js");
/* harmony import */ var use_position__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_position__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SignModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignModal */ "./components/SignModal.js");

var _jsxFileName = "/Users/hasubin/Desktop/C&C/CafeAndConquer-client/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var useInput = function useInput(initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(event) {
    // Destructuring assignment
    // evnt.target.value
    var value = event.target.value;
    setValue(value);
  };

  return {
    value: value,
    onChange: onChange
  };
}; // 이런 형태로 리펙토링
// const useSign = () => {
//   const [show, setShow] = useState(false);
//   console.log(show);
//   const showSign = () => {
//     setShow(!show);
//   };
//   return { showSign };
// };
// 문제2. 현재 위치를 어떻게 넘겨줄 것인가?


var searchBtnHandler = function searchBtnHandler(value, current) {
  if (value === '') {
    console.log(current);
  }
};

var Header = function Header() {
  var useSearch = useInput('');

  var _usePosition = Object(use_position__WEBPACK_IMPORTED_MODULE_2__["usePosition"])(),
      latitude = _usePosition.latitude,
      longitude = _usePosition.longitude,
      error = _usePosition.error;

  var position = {
    lat: latitude,
    lng: longitude,
    err: error
  };
  var searchAddress = useSearch.value;

  if (useSearch.value === '') {
    searchAddress = '[id]';
  }

  var handleKeyPress = function handleKeyPress(e) {
    if (e.charCode === 13) {
      if (useSearch.value !== '') {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/search/".concat(useSearch.value));
      }
    }
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var showSign = function showSign() {
    setShow(!show);
  };

  return __jsx(MainFrame, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "C&C")), __jsx(SearchFrame, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(Search, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onKeyPress: handleKeyPress
  }, useSearch, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/search/[id]",
    as: "/search/".concat(searchAddress),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(Button, {
    onClick: function onClick() {
      return searchBtnHandler(useSearch.value, position);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\uD0D0\uC0C9"))), __jsx(TopMenuBtton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return showSign();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "sign"), __jsx(_SignModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: showSign,
    show: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uD658\uC601\uD569\uB2C8\uB2E4"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    style: {
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "login"))));
};

var MainFrame = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__MainFrame",
  componentId: "sc-1yui16o-0"
})(["position:fixed;height:100px;max-width:100%;width:100%;top:0;left:0;background-color:lightgray;z-index:10;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1yui16o-1"
})(["position:relative;top:18%;left:3%;font-family:Monospace,Helvetica,sans-serif;position:absolute;font-size:3.4rem;text-decoration:none;"]);
var SearchFrame = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__SearchFrame",
  componentId: "sc-1yui16o-2"
})(["position:relative;top:10%;left:25%;width:50%;height:70px;"]);
var Search = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.attrs({
  placeholder: '지역 또는 카페 탐색하기',
  type: 'text'
}).withConfig({
  displayName: "Header__Search",
  componentId: "sc-1yui16o-3"
})(["position:relative;top:20%;width:70%;padding-left:45px;height:44px;border:0px;border:3px solid #ff7f00;font-size:18px;color:#ff7f00;background:url(https://s3-ap-northeast-1.amazonaws.com/dcicons/new/images/web/common/search@2x.png) no-repeat left;background-size:40px;outline:none;&:focus{border-color:blue;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.attrs({}).withConfig({
  displayName: "Header__Button",
  componentId: "sc-1yui16o-4"
})(["position:relative;top:15%;width:40px;height:50px;"]);
var TopMenuBtton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__TopMenuBtton",
  componentId: "sc-1yui16o-5"
})(["position:absolute;top:35%;left:70%;height:30px;width:25%;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.78ab3e2f6daa83a7128c.hot-update.js.map