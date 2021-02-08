/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demos/js/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demos/js/editor.js":
/*!****************************!*\
  !*** ./demos/js/editor.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_data_sd_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mock-data/sd-mock */ "./mock-data/sd-mock.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./demos/js/layout.js");
/*
*  dag-editor
*  author: liupeidong@gmail.com
*/


Object(_layout__WEBPACK_IMPORTED_MODULE_1__["default"])({
  page: '#editor',
  data: _mock_data_sd_mock__WEBPACK_IMPORTED_MODULE_0__["mock_data_6"],
  nodeSelected: function nodeSelected(node) {
    return console.log(node);
  },
  edgeSelected: function edgeSelected(edge) {
    return console.log(edge);
  }
});

/***/ }),

/***/ "./demos/js/layout.js":
/*!****************************!*\
  !*** ./demos/js/layout.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/layout */ "./src/layout.ts");
/* harmony import */ var _src_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_layout__WEBPACK_IMPORTED_MODULE_1__);
/*
*  dag-editor
*  author: liupeidong@gmail.com
*/



function createLayout(_ref) {
  var page = _ref.page,
      data = _ref.data,
      nodeSelected = _ref.nodeSelected,
      edgeSelected = _ref.edgeSelected;
  var editor = new _src__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
    page: page
  });
  editor.setData(_src_layout__WEBPACK_IMPORTED_MODULE_1___default()(data));
  nodeSelected && editor.on('selectedNodeChange', nodeSelected);
  edgeSelected && editor.on('selectedEdgeChange', edgeSelected);
}

/* harmony default export */ __webpack_exports__["default"] = (createLayout);

/***/ }),

/***/ "./mock-data/sd-mock.js":
/*!******************************!*\
  !*** ./mock-data/sd-mock.js ***!
  \******************************/
/*! exports provided: mock_data_1, mock_data_2, mock_data_3, mock_data_4, mock_data_5, mock_data_6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_1", function() { return mock_data_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_2", function() { return mock_data_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_3", function() { return mock_data_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_4", function() { return mock_data_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_5", function() { return mock_data_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_data_6", function() { return mock_data_6; });
var mock_data_1 = {
  "nodes": [{
    "id": "AUD_MATCHED",
    "name": "AUD_MATCHED",
    "color": "blue"
  }, {
    "id": "BEGIN_CONVERT_CALC",
    "name": "BEGIN_CONVERT_CALC",
    "color": "blue"
  }, {
    "id": "CONVERT_END",
    "name": "CONVERT_END"
  }, {
    "id": "MSG_SEND",
    "name": "MSG_SEND",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK",
    "name": "MSG_SEND_CHECK",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK_FAILED",
    "name": "MSG_SEND_CHECK_FAILED"
  }, {
    "id": "MSG_SEND_CHECK_PASSED",
    "name": "MSG_SEND_CHECK_PASSED"
  }, {
    "id": "MSG_SEND_FAILED",
    "name": "MSG_SEND_FAILED"
  }, {
    "id": "MSG_SEND_PASSED",
    "name": "MSG_SEND_PASSED"
  }, {
    "id": "ROOT",
    "name": "ROOT",
    "color": "red"
  }],
  "edges": [{
    "source": "AUD_MATCHED",
    "target": "MSG_SEND_CHECK",
    "name": "0",
    "color": "black"
  }, {
    "source": "BEGIN_CONVERT_CALC",
    "target": "CONVERT_END",
    "name": "1",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_FAILED",
    "name": "2",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_PASSED",
    "name": "3",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_FAILED",
    "name": "4",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_PASSED",
    "name": "5",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK_PASSED",
    "target": "MSG_SEND",
    "name": "6",
    "color": "black"
  }, {
    "source": "MSG_SEND_PASSED",
    "target": "BEGIN_CONVERT_CALC",
    "name": "7",
    "color": "black"
  }, {
    "source": "ROOT",
    "target": "AUD_MATCHED",
    "name": "8",
    "color": "black"
  }]
};
var mock_data_2 = {
  "nodes": [{
    "id": "CV_CONVERTED_C1",
    "name": "CV_CONVERTED_C1",
    "color": "blue"
  }, {
    "id": "CV_CONVERTING_C1",
    "name": "CV_CONVERTING_C1"
  }, {
    "id": "CV_CONVERT_END_C1",
    "name": "CV_CONVERT_END_C1",
    "color": "blue"
  }, {
    "id": "CV_CONVERT_TIMEOUT_C1",
    "name": "CV_CONVERT_TIMEOUT_C1"
  }, {
    "id": "CV_ROOT_C1",
    "name": "CV_ROOT_C1",
    "color": "red"
  }],
  "edges": [{
    "source": "CV_CONVERTED_C1",
    "target": "CV_CONVERT_END_C1",
    "name": "0",
    "color": "black"
  }, {
    "source": "CV_CONVERTING_C1",
    "target": "CV_CONVERTED_C1",
    "name": "1",
    "color": "black"
  }, {
    "source": "CV_CONVERTING_C1",
    "target": "CV_CONVERT_TIMEOUT_C1",
    "name": "2",
    "color": "black"
  }, {
    "source": "CV_CONVERT_END_C1",
    "target": "CV_ROOT_C1",
    "name": "3",
    "color": "black"
  }, {
    "source": "CV_CONVERT_TIMEOUT_C1",
    "target": "CV_CONVERT_END_C1",
    "name": "4",
    "color": "black"
  }, {
    "source": "CV_ROOT_C1",
    "target": "CV_CONVERTING_C1",
    "name": "5",
    "color": "black"
  }]
};
var mock_data_3 = {
  "nodes": [{
    "id": "CC_ALL_CONVERT_END",
    "name": "CC_ALL_CONVERT_END",
    "color": "blue"
  }, {
    "id": "CC_CONVERTING",
    "name": "CC_CONVERTING",
    "color": "blue"
  }, {
    "id": "CC_ROOT",
    "name": "CC_ROOT",
    "color": "red"
  }],
  "edges": [{
    "source": "CC_ALL_CONVERT_END",
    "target": "CC_ROOT",
    "name": "0",
    "color": "black"
  }, {
    "source": "CC_CONVERTING",
    "target": "CC_ALL_CONVERT_END",
    "name": "1",
    "color": "black"
  }, {
    "source": "CC_ROOT",
    "target": "CC_CONVERTING",
    "name": "2",
    "color": "black"
  }]
};
var mock_data_4 = {
  "nodes": [{
    "id": "AUD_MATCHED",
    "name": "AUD_MATCHED",
    "color": "blue"
  }, {
    "id": "BEGIN_CONVERT_CALC",
    "name": "BEGIN_CONVERT_CALC",
    "color": "blue"
  }, {
    "id": "CONVERT_END",
    "name": "CONVERT_END"
  }, {
    "id": "MSG_SEND",
    "name": "MSG_SEND",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK",
    "name": "MSG_SEND_CHECK",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK_FAILED",
    "name": "MSG_SEND_CHECK_FAILED"
  }, {
    "id": "MSG_SEND_CHECK_PASSED",
    "name": "MSG_SEND_CHECK_PASSED"
  }, {
    "id": "MSG_SEND_FAILED",
    "name": "MSG_SEND_FAILED"
  }, {
    "id": "MSG_SEND_PASSED",
    "name": "MSG_SEND_PASSED"
  }, {
    "id": "RECYCLE_BIN",
    "name": "RECYCLE_BIN"
  }, {
    "id": "RE_ENTER_CHECK",
    "name": "RE_ENTER_CHECK",
    "color": "blue"
  }, {
    "id": "RE_ENTER_FAILED",
    "name": "RE_ENTER_FAILED"
  }, {
    "id": "RE_ENTER_PASSED",
    "name": "RE_ENTER_PASSED"
  }, {
    "id": "ROOT",
    "name": "ROOT",
    "color": "red"
  }],
  "edges": [{
    "source": "AUD_MATCHED",
    "target": "RE_ENTER_CHECK",
    "name": "0",
    "color": "black"
  }, {
    "source": "BEGIN_CONVERT_CALC",
    "target": "CONVERT_END",
    "name": "1",
    "color": "black"
  }, {
    "source": "BEGIN_CONVERT_CALC",
    "target": "RECYCLE_BIN",
    "name": "2",
    "color": "black"
  }, {
    "source": "CONVERT_END",
    "target": "RECYCLE_BIN",
    "name": "3",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_FAILED",
    "name": "4",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_PASSED",
    "name": "5",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_FAILED",
    "name": "6",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_PASSED",
    "name": "7",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK_FAILED",
    "target": "RECYCLE_BIN",
    "name": "8",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK_PASSED",
    "target": "MSG_SEND",
    "name": "9",
    "color": "black"
  }, {
    "source": "MSG_SEND_FAILED",
    "target": "RECYCLE_BIN",
    "name": "10",
    "color": "black"
  }, {
    "source": "MSG_SEND_PASSED",
    "target": "BEGIN_CONVERT_CALC",
    "name": "11",
    "color": "black"
  }, {
    "source": "RECYCLE_BIN",
    "target": "ROOT",
    "name": "12",
    "color": "black"
  }, {
    "source": "RE_ENTER_CHECK",
    "target": "RE_ENTER_FAILED",
    "name": "13",
    "color": "black"
  }, {
    "source": "RE_ENTER_CHECK",
    "target": "RE_ENTER_PASSED",
    "name": "14",
    "color": "black"
  }, {
    "source": "RE_ENTER_FAILED",
    "target": "RECYCLE_BIN",
    "name": "15",
    "color": "black"
  }, {
    "source": "RE_ENTER_PASSED",
    "target": "MSG_SEND_CHECK",
    "name": "16",
    "color": "black"
  }, {
    "source": "ROOT",
    "target": "AUD_MATCHED",
    "name": "17",
    "color": "LightGrey"
  }]
};
var mock_data_5 = {
  "nodes": [{
    "id": "AUD_MATCHED",
    "name": "AUD_MATCHED",
    "color": "blue"
  }, {
    "id": "BEGIN_CONVERT_CALC",
    "name": "BEGIN_CONVERT_CALC",
    "color": "blue"
  }, {
    "id": "CONVERT_END",
    "name": "CONVERT_END"
  }, {
    "id": "DELAY_BEGIN",
    "name": "DELAY_BEGIN"
  }, {
    "id": "DELAY_END",
    "name": "DELAY_END"
  }, {
    "id": "MSG_SEND",
    "name": "MSG_SEND",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK",
    "name": "MSG_SEND_CHECK",
    "color": "blue"
  }, {
    "id": "MSG_SEND_CHECK_FAILED",
    "name": "MSG_SEND_CHECK_FAILED"
  }, {
    "id": "MSG_SEND_CHECK_PASSED",
    "name": "MSG_SEND_CHECK_PASSED"
  }, {
    "id": "MSG_SEND_FAILED",
    "name": "MSG_SEND_FAILED"
  }, {
    "id": "MSG_SEND_PASSED",
    "name": "MSG_SEND_PASSED"
  }, {
    "id": "RECYCLE_BIN",
    "name": "RECYCLE_BIN"
  }, {
    "id": "RE_ENTER_CHECK",
    "name": "RE_ENTER_CHECK",
    "color": "blue"
  }, {
    "id": "RE_ENTER_FAILED",
    "name": "RE_ENTER_FAILED"
  }, {
    "id": "RE_ENTER_PASSED",
    "name": "RE_ENTER_PASSED"
  }, {
    "id": "ROOT",
    "name": "ROOT",
    "color": "red"
  }, {
    "id": "TRIGGER_A_MATCHED",
    "name": "TRIGGER_A_MATCHED"
  }, {
    "id": "TRIGGER_B_MATCHED",
    "name": "TRIGGER_B_MATCHED",
    "color": "blue"
  }],
  "edges": [{
    "source": "AUD_MATCHED",
    "target": "RECYCLE_BIN",
    "name": "0",
    "color": "black"
  }, {
    "source": "AUD_MATCHED",
    "target": "TRIGGER_A_MATCHED",
    "name": "1",
    "color": "LightGrey"
  }, {
    "source": "BEGIN_CONVERT_CALC",
    "target": "CONVERT_END",
    "name": "2",
    "color": "black"
  }, {
    "source": "BEGIN_CONVERT_CALC",
    "target": "RECYCLE_BIN",
    "name": "3",
    "color": "black"
  }, {
    "source": "CONVERT_END",
    "target": "RECYCLE_BIN",
    "name": "4",
    "color": "black"
  }, {
    "source": "DELAY_BEGIN",
    "target": "DELAY_END",
    "name": "5",
    "color": "black"
  }, {
    "source": "DELAY_END",
    "target": "MSG_SEND_CHECK",
    "name": "6",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_FAILED",
    "name": "7",
    "color": "black"
  }, {
    "source": "MSG_SEND",
    "target": "MSG_SEND_PASSED",
    "name": "8",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_FAILED",
    "name": "9",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK",
    "target": "MSG_SEND_CHECK_PASSED",
    "name": "10",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK_FAILED",
    "target": "RECYCLE_BIN",
    "name": "11",
    "color": "black"
  }, {
    "source": "MSG_SEND_CHECK_PASSED",
    "target": "MSG_SEND",
    "name": "12",
    "color": "black"
  }, {
    "source": "MSG_SEND_FAILED",
    "target": "RECYCLE_BIN",
    "name": "13",
    "color": "black"
  }, {
    "source": "MSG_SEND_PASSED",
    "target": "BEGIN_CONVERT_CALC",
    "name": "14",
    "color": "black"
  }, {
    "source": "RECYCLE_BIN",
    "target": "ROOT",
    "name": "15",
    "color": "black"
  }, {
    "source": "RE_ENTER_CHECK",
    "target": "RE_ENTER_FAILED",
    "name": "16",
    "color": "black"
  }, {
    "source": "RE_ENTER_CHECK",
    "target": "RE_ENTER_PASSED",
    "name": "17",
    "color": "black"
  }, {
    "source": "RE_ENTER_FAILED",
    "target": "RECYCLE_BIN",
    "name": "18",
    "color": "black"
  }, {
    "source": "RE_ENTER_PASSED",
    "target": "DELAY_BEGIN",
    "name": "19",
    "color": "black"
  }, {
    "source": "ROOT",
    "target": "AUD_MATCHED",
    "name": "20",
    "color": "black"
  }, {
    "source": "TRIGGER_A_MATCHED",
    "target": "TRIGGER_B_MATCHED",
    "name": "21",
    "color": "LightGrey"
  }, {
    "source": "TRIGGER_B_MATCHED",
    "target": "MSG_SEND",
    "name": "22",
    "color": "black"
  }, {
    "source": "TRIGGER_B_MATCHED",
    "target": "RE_ENTER_CHECK",
    "name": "23",
    "color": "black"
  }]
};
var mock_data_6 = {
  "nodes": [{
    "id": "AUD_MATCHED",
    "name": "AUD_MATCHED",
    "color": "blue"
  }, {
    "id": "RECYCLE_BIN",
    "name": "RECYCLE_BIN"
  }, {
    "id": "ROOT",
    "name": "ROOT",
    "color": "red"
  }, {
    "id": "SU_DELAY_BEGIN_S100",
    "name": "SU_DELAY_BEGIN_S100",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S101",
    "name": "SU_DELAY_BEGIN_S101",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S102",
    "name": "SU_DELAY_BEGIN_S102",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S103",
    "name": "SU_DELAY_BEGIN_S103",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S104",
    "name": "SU_DELAY_BEGIN_S104",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S105",
    "name": "SU_DELAY_BEGIN_S105",
    "color": "blue"
  }, {
    "id": "SU_DELAY_BEGIN_S106",
    "name": "SU_DELAY_BEGIN_S106",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S100",
    "name": "SU_DELAY_END_S100",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S101",
    "name": "SU_DELAY_END_S101",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S102",
    "name": "SU_DELAY_END_S102",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S103",
    "name": "SU_DELAY_END_S103",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S104",
    "name": "SU_DELAY_END_S104",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S105",
    "name": "SU_DELAY_END_S105",
    "color": "blue"
  }, {
    "id": "SU_DELAY_END_S106",
    "name": "SU_DELAY_END_S106",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S100",
    "name": "SU_MATCHED_S100",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S101",
    "name": "SU_MATCHED_S101",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S102",
    "name": "SU_MATCHED_S102",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S103",
    "name": "SU_MATCHED_S103",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S104",
    "name": "SU_MATCHED_S104",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S105",
    "name": "SU_MATCHED_S105",
    "color": "blue"
  }, {
    "id": "SU_MATCHED_S106",
    "name": "SU_MATCHED_S106",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S100",
    "name": "SU_MSG_SEND_CHECK_FAILED_S100"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S101",
    "name": "SU_MSG_SEND_CHECK_FAILED_S101"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S102",
    "name": "SU_MSG_SEND_CHECK_FAILED_S102"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S103",
    "name": "SU_MSG_SEND_CHECK_FAILED_S103"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S104",
    "name": "SU_MSG_SEND_CHECK_FAILED_S104"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S105",
    "name": "SU_MSG_SEND_CHECK_FAILED_S105"
  }, {
    "id": "SU_MSG_SEND_CHECK_FAILED_S106",
    "name": "SU_MSG_SEND_CHECK_FAILED_S106"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S100",
    "name": "SU_MSG_SEND_CHECK_PASSED_S100"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S101",
    "name": "SU_MSG_SEND_CHECK_PASSED_S101"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S102",
    "name": "SU_MSG_SEND_CHECK_PASSED_S102"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S103",
    "name": "SU_MSG_SEND_CHECK_PASSED_S103"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S104",
    "name": "SU_MSG_SEND_CHECK_PASSED_S104"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S105",
    "name": "SU_MSG_SEND_CHECK_PASSED_S105"
  }, {
    "id": "SU_MSG_SEND_CHECK_PASSED_S106",
    "name": "SU_MSG_SEND_CHECK_PASSED_S106"
  }, {
    "id": "SU_MSG_SEND_CHECK_S100",
    "name": "SU_MSG_SEND_CHECK_S100",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S101",
    "name": "SU_MSG_SEND_CHECK_S101",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S102",
    "name": "SU_MSG_SEND_CHECK_S102",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S103",
    "name": "SU_MSG_SEND_CHECK_S103",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S104",
    "name": "SU_MSG_SEND_CHECK_S104",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S105",
    "name": "SU_MSG_SEND_CHECK_S105",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_CHECK_S106",
    "name": "SU_MSG_SEND_CHECK_S106",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_FAILED_S100",
    "name": "SU_MSG_SEND_FAILED_S100"
  }, {
    "id": "SU_MSG_SEND_FAILED_S101",
    "name": "SU_MSG_SEND_FAILED_S101"
  }, {
    "id": "SU_MSG_SEND_FAILED_S102",
    "name": "SU_MSG_SEND_FAILED_S102"
  }, {
    "id": "SU_MSG_SEND_FAILED_S103",
    "name": "SU_MSG_SEND_FAILED_S103"
  }, {
    "id": "SU_MSG_SEND_FAILED_S104",
    "name": "SU_MSG_SEND_FAILED_S104"
  }, {
    "id": "SU_MSG_SEND_FAILED_S105",
    "name": "SU_MSG_SEND_FAILED_S105"
  }, {
    "id": "SU_MSG_SEND_FAILED_S106",
    "name": "SU_MSG_SEND_FAILED_S106"
  }, {
    "id": "SU_MSG_SEND_PASSED_S100",
    "name": "SU_MSG_SEND_PASSED_S100"
  }, {
    "id": "SU_MSG_SEND_PASSED_S101",
    "name": "SU_MSG_SEND_PASSED_S101"
  }, {
    "id": "SU_MSG_SEND_PASSED_S102",
    "name": "SU_MSG_SEND_PASSED_S102"
  }, {
    "id": "SU_MSG_SEND_PASSED_S103",
    "name": "SU_MSG_SEND_PASSED_S103"
  }, {
    "id": "SU_MSG_SEND_PASSED_S104",
    "name": "SU_MSG_SEND_PASSED_S104"
  }, {
    "id": "SU_MSG_SEND_PASSED_S105",
    "name": "SU_MSG_SEND_PASSED_S105"
  }, {
    "id": "SU_MSG_SEND_PASSED_S106",
    "name": "SU_MSG_SEND_PASSED_S106"
  }, {
    "id": "SU_MSG_SEND_S100",
    "name": "SU_MSG_SEND_S100",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S101",
    "name": "SU_MSG_SEND_S101",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S102",
    "name": "SU_MSG_SEND_S102",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S103",
    "name": "SU_MSG_SEND_S103",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S104",
    "name": "SU_MSG_SEND_S104",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S105",
    "name": "SU_MSG_SEND_S105",
    "color": "blue"
  }, {
    "id": "SU_MSG_SEND_S106",
    "name": "SU_MSG_SEND_S106",
    "color": "blue"
  }, {
    "id": "SU_RECYCLE_BIN",
    "name": "SU_RECYCLE_BIN"
  }],
  "edges": [{
    "source": "AUD_MATCHED",
    "target": "SU_MATCHED_S100",
    "name": "0",
    "color": "LightGrey"
  }, {
    "source": "AUD_MATCHED",
    "target": "SU_MATCHED_S101",
    "name": "1",
    "color": "LightGrey"
  }, {
    "source": "RECYCLE_BIN",
    "target": "ROOT",
    "name": "2",
    "color": "black"
  }, {
    "source": "ROOT",
    "target": "AUD_MATCHED",
    "name": "3",
    "color": "LightGrey"
  }, {
    "source": "SU_DELAY_BEGIN_S100",
    "target": "SU_DELAY_END_S100",
    "name": "4",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S100",
    "target": "SU_RECYCLE_BIN",
    "name": "5",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S101",
    "target": "SU_DELAY_END_S101",
    "name": "6",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S101",
    "target": "SU_RECYCLE_BIN",
    "name": "7",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S102",
    "target": "SU_DELAY_END_S102",
    "name": "8",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S102",
    "target": "SU_RECYCLE_BIN",
    "name": "9",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S103",
    "target": "SU_DELAY_END_S103",
    "name": "10",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S103",
    "target": "SU_RECYCLE_BIN",
    "name": "11",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S104",
    "target": "SU_DELAY_END_S104",
    "name": "12",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "13",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S105",
    "target": "SU_DELAY_END_S105",
    "name": "14",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "15",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S106",
    "target": "SU_DELAY_END_S106",
    "name": "16",
    "color": "black"
  }, {
    "source": "SU_DELAY_BEGIN_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "17",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S100",
    "target": "SU_MSG_SEND_CHECK_S100",
    "name": "18",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S101",
    "target": "SU_MSG_SEND_CHECK_S101",
    "name": "19",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S102",
    "target": "SU_MSG_SEND_CHECK_S102",
    "name": "20",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S103",
    "target": "SU_MSG_SEND_CHECK_S103",
    "name": "21",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S104",
    "target": "SU_MSG_SEND_CHECK_S104",
    "name": "22",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S105",
    "target": "SU_MSG_SEND_CHECK_S105",
    "name": "23",
    "color": "black"
  }, {
    "source": "SU_DELAY_END_S106",
    "target": "SU_MSG_SEND_CHECK_S106",
    "name": "24",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S100",
    "target": "SU_DELAY_BEGIN_S100",
    "name": "25",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S101",
    "target": "SU_DELAY_BEGIN_S101",
    "name": "26",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S102",
    "target": "SU_DELAY_BEGIN_S102",
    "name": "27",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S103",
    "target": "SU_DELAY_BEGIN_S103",
    "name": "28",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S104",
    "target": "SU_DELAY_BEGIN_S104",
    "name": "29",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S105",
    "target": "SU_DELAY_BEGIN_S105",
    "name": "30",
    "color": "black"
  }, {
    "source": "SU_MATCHED_S106",
    "target": "SU_DELAY_BEGIN_S106",
    "name": "31",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S100",
    "target": "SU_RECYCLE_BIN",
    "name": "32",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S101",
    "target": "SU_RECYCLE_BIN",
    "name": "33",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S102",
    "target": "SU_RECYCLE_BIN",
    "name": "34",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S103",
    "target": "SU_RECYCLE_BIN",
    "name": "35",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "36",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "37",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_FAILED_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "38",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S100",
    "target": "SU_MSG_SEND_S100",
    "name": "39",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S101",
    "target": "SU_MSG_SEND_S101",
    "name": "40",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S102",
    "target": "SU_MSG_SEND_S102",
    "name": "41",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S103",
    "target": "SU_MSG_SEND_S103",
    "name": "42",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S104",
    "target": "SU_MSG_SEND_S104",
    "name": "43",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S105",
    "target": "SU_MSG_SEND_S105",
    "name": "44",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_PASSED_S106",
    "target": "SU_MSG_SEND_S106",
    "name": "45",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S100",
    "target": "SU_MSG_SEND_CHECK_FAILED_S100",
    "name": "46",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S100",
    "target": "SU_MSG_SEND_CHECK_PASSED_S100",
    "name": "47",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S100",
    "target": "SU_RECYCLE_BIN",
    "name": "48",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S101",
    "target": "SU_MSG_SEND_CHECK_FAILED_S101",
    "name": "49",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S101",
    "target": "SU_MSG_SEND_CHECK_PASSED_S101",
    "name": "50",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S101",
    "target": "SU_RECYCLE_BIN",
    "name": "51",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S102",
    "target": "SU_MSG_SEND_CHECK_FAILED_S102",
    "name": "52",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S102",
    "target": "SU_MSG_SEND_CHECK_PASSED_S102",
    "name": "53",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S102",
    "target": "SU_RECYCLE_BIN",
    "name": "54",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S103",
    "target": "SU_MSG_SEND_CHECK_FAILED_S103",
    "name": "55",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S103",
    "target": "SU_MSG_SEND_CHECK_PASSED_S103",
    "name": "56",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S103",
    "target": "SU_RECYCLE_BIN",
    "name": "57",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S104",
    "target": "SU_MSG_SEND_CHECK_FAILED_S104",
    "name": "58",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S104",
    "target": "SU_MSG_SEND_CHECK_PASSED_S104",
    "name": "59",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "60",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S105",
    "target": "SU_MSG_SEND_CHECK_FAILED_S105",
    "name": "61",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S105",
    "target": "SU_MSG_SEND_CHECK_PASSED_S105",
    "name": "62",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "63",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S106",
    "target": "SU_MSG_SEND_CHECK_FAILED_S106",
    "name": "64",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S106",
    "target": "SU_MSG_SEND_CHECK_PASSED_S106",
    "name": "65",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_CHECK_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "66",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S100",
    "target": "SU_RECYCLE_BIN",
    "name": "67",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S101",
    "target": "SU_RECYCLE_BIN",
    "name": "68",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S102",
    "target": "SU_RECYCLE_BIN",
    "name": "69",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S103",
    "target": "SU_RECYCLE_BIN",
    "name": "70",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "71",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "72",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_FAILED_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "73",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_PASSED_S100",
    "target": "SU_MATCHED_S102",
    "name": "74",
    "color": "LightGrey"
  }, {
    "source": "SU_MSG_SEND_PASSED_S100",
    "target": "SU_MATCHED_S103",
    "name": "75",
    "color": "LightGrey"
  }, {
    "source": "SU_MSG_SEND_PASSED_S101",
    "target": "SU_MATCHED_S106",
    "name": "76",
    "color": "LightGrey"
  }, {
    "source": "SU_MSG_SEND_PASSED_S102",
    "target": "SU_MATCHED_S105",
    "name": "77",
    "color": "LightGrey"
  }, {
    "source": "SU_MSG_SEND_PASSED_S103",
    "target": "SU_MATCHED_S104",
    "name": "78",
    "color": "LightGrey"
  }, {
    "source": "SU_MSG_SEND_PASSED_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "79",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_PASSED_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "80",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_PASSED_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "81",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S100",
    "target": "SU_MSG_SEND_FAILED_S100",
    "name": "82",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S100",
    "target": "SU_MSG_SEND_PASSED_S100",
    "name": "83",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S100",
    "target": "SU_RECYCLE_BIN",
    "name": "84",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S101",
    "target": "SU_MSG_SEND_FAILED_S101",
    "name": "85",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S101",
    "target": "SU_MSG_SEND_PASSED_S101",
    "name": "86",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S101",
    "target": "SU_RECYCLE_BIN",
    "name": "87",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S102",
    "target": "SU_MSG_SEND_FAILED_S102",
    "name": "88",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S102",
    "target": "SU_MSG_SEND_PASSED_S102",
    "name": "89",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S102",
    "target": "SU_RECYCLE_BIN",
    "name": "90",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S103",
    "target": "SU_MSG_SEND_FAILED_S103",
    "name": "91",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S103",
    "target": "SU_MSG_SEND_PASSED_S103",
    "name": "92",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S103",
    "target": "SU_RECYCLE_BIN",
    "name": "93",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S104",
    "target": "SU_MSG_SEND_FAILED_S104",
    "name": "94",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S104",
    "target": "SU_MSG_SEND_PASSED_S104",
    "name": "95",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S104",
    "target": "SU_RECYCLE_BIN",
    "name": "96",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S105",
    "target": "SU_MSG_SEND_FAILED_S105",
    "name": "97",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S105",
    "target": "SU_MSG_SEND_PASSED_S105",
    "name": "98",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S105",
    "target": "SU_RECYCLE_BIN",
    "name": "99",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S106",
    "target": "SU_MSG_SEND_FAILED_S106",
    "name": "100",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S106",
    "target": "SU_MSG_SEND_PASSED_S106",
    "name": "101",
    "color": "black"
  }, {
    "source": "SU_MSG_SEND_S106",
    "target": "SU_RECYCLE_BIN",
    "name": "102",
    "color": "black"
  }, {
    "source": "SU_RECYCLE_BIN",
    "target": "RECYCLE_BIN",
    "name": "103",
    "color": "black"
  }]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/editor.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/editor.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor-container {\n    position: relative;\n}\n/* editor */\n.editor-page {\n    position: relative;\n    flex: 1;\n    z-index: 1;\n    background-color: #f9f9f9;\n}\n.editor-page > canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    cursor: default;\n}\n\n/* contextmenu */\n.editor-contextmenu {\n    display: none;\n    position: fixed;\n    width: 100px;\n    padding: 5px 0;\n    background-color: #fff;\n    z-index: 9;\n    flex-direction: column;\n    border-radius: 2px;\n    overflow: hidden;\n}\n.editor-contextmenu.show {\n    display: flex;\n}\n.editor-contextmenu-item {\n    padding: 5px 10px;\n    cursor: default;\n    transition: color .2s ease;\n}\n.editor-contextmenu-item:hover {\n    color: #03a9f4;\n}\n", "",{"version":3,"sources":["webpack://style/editor.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;AACA,WAAW;AACX;IACI,kBAAkB;IAClB,OAAO;IACP,UAAU;IACV,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,OAAO;IACP,MAAM;IACN,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,0BAA0B;AAC9B;AACA;IACI,cAAc;AAClB","sourcesContent":[".editor-container {\n    position: relative;\n}\n/* editor */\n.editor-page {\n    position: relative;\n    flex: 1;\n    z-index: 1;\n    background-color: #f9f9f9;\n}\n.editor-page > canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    cursor: default;\n}\n\n/* contextmenu */\n.editor-contextmenu {\n    display: none;\n    position: fixed;\n    width: 100px;\n    padding: 5px 0;\n    background-color: #fff;\n    z-index: 9;\n    flex-direction: column;\n    border-radius: 2px;\n    overflow: hidden;\n}\n.editor-contextmenu.show {\n    display: flex;\n}\n.editor-contextmenu-item {\n    padding: 5px 10px;\n    cursor: default;\n    transition: color .2s ease;\n}\n.editor-contextmenu-item:hover {\n    color: #03a9f4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const color_1 = __webpack_require__(/*! ./color */ "./src/color.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const gw = 10;
class Canvas {
    constructor(cvs, { ratio = 1, fillStyle = color_1.default.white, strokeStyle = color_1.default.line, hasStore, hasBg, config, }) {
        this.canvas = cvs;
        this.ratio = ratio;
        this.config = config;
        this.hasBg = hasBg;
        const ctx = cvs.getContext('2d');
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = strokeStyle;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${Math.max(ratio * 10, 12)}px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif`;
        this.ctx = ctx;
        this.hasStore = hasStore;
        this.paths = {
            nodes: {},
            edges: {},
            anchors: {},
            activeAnchors: {},
        };
        // translate
        this.translateInfo = {
            x: 0,
            y: 0,
            tx: 0,
            ty: 0,
        };
    }
    translate(dx, dy) {
        const { ratio: r, ctx } = this;
        this.translateInfo.tx += dx; // origin translate x & y
        this.translateInfo.ty += dy;
        dx *= r;
        dy *= r;
        ctx.translate(dx, dy);
        this.translateInfo.x += dx;
        this.translateInfo.y += dy;
        utils_1.logger(`===translate: (${this.translateInfo.x}, ${this.translateInfo.y})===`);
    }
    transform(dx, dy) {
        const { ctx, ratio: r } = this;
        ctx.save();
        ctx.transform(1, 0, 0, 1, dx * r, dy * r);
        // ctx.setTransform(1, 0, 0, 1, dx * r, dy * r)
        // logger(ctx.getTransform())
    }
    restore() {
        this.ctx.restore();
        // this.translate(-this.translateInfo.x, -this.translateInfo.y)
    }
    // paint node
    paintNode(node, opts) {
        const { ctx, ratio: r } = this;
        let { x, y, w, h } = node;
        x *= r;
        y *= r;
        w *= r;
        h *= r;
        const ox = x - w / 2;
        const oy = y - h / 2;
        // paint shadow
        ctx.save();
        const shadow = this._paintRoundRect(ox + 2 * r, oy + 2 * r, w, h, 4 * r);
        ctx.fillStyle = 'rgba(35,35,35,0.08)';
        ctx.fill(shadow);
        ctx.restore();
        // create & save rectangle path
        const path = this._paintRoundRect(ox, oy, w, h, 4 * r);
        if (node.id && this.hasStore) {
            this.paths.nodes[node.id] = path;
        }
        ctx.fill(path);
        // left color border
        ctx.save();
        const leftBorder = this._paintRoundRect(ox, oy, 4 * r, h, 4 * r, true);
        ctx.fillStyle = node.color || color_1.default.blue;
        ctx.fill(leftBorder);
        ctx.restore();
        // stroke the border
        if (node.id && opts && opts.status) { // hover | selected
            ctx.save();
            ctx.strokeStyle = node.color || color_1.default.blue;
            ctx.lineWidth = 2;
            ctx.stroke(path);
            // paint anchors
            ctx.restore();
        }
        // paint text
        ctx.save();
        ctx.fillStyle = color_1.default.font;
        ctx.fillText(node.name || node.shape, x, y);
        ctx.restore();
    }
    _paintRoundRect(x, y, w, h, r, leftBorder) {
        const path = new Path2D();
        path.moveTo(x + r, y);
        if (leftBorder) {
            path.lineTo(x + r, y + h);
        }
        else {
            path.arcTo(x + w, y, x + w, y + h, r);
            path.arcTo(x + w, y + h, x, y + h, r);
        }
        path.arcTo(x, y + h, x, y, r);
        path.arcTo(x, y, x + r, y, r);
        path.closePath();
        return path;
    }
    checkInNode(nid, pos) {
        const r = this.ratio;
        const path = this.paths.nodes[nid];
        let { x, y } = pos;
        x *= r;
        y *= r;
        return path && this.ctx.isPointInPath(path, x, y);
    }
    // paint anchor
    _paintAnchor({ x, y }) {
        const { ratio: r } = this;
        x *= r;
        y *= r;
        const anchorPath = new Path2D();
        anchorPath.arc(x, y, 4 * r, 0, Math.PI * 2, false);
        const activeAnchorPath = new Path2D();
        activeAnchorPath.arc(x, y, 12 * r, 0, Math.PI * 2, false);
        return [anchorPath, activeAnchorPath];
    }
    checkInNodeAnchor(node, pos, opts) {
        const r = this.ratio;
        let { x, y } = pos;
        x *= r;
        y *= r;
        const paths = (opts && opts.active) ? this.paths.activeAnchors[node.id] : this.paths.anchors[node.id];
        if (!paths) {
            return;
        }
        for (let i = 0, n = paths.length; i < n; i++) {
            const cur = paths[i];
            if (this.ctx.isPointInPath(cur.path, x, y)) {
                return [node, cur.type, cur.index];
            }
        }
        return null;
    }
    paintActiveAnchors(node) {
        const { ctx } = this;
        const { input } = node.anchors;
        if (input) {
            for (let i = 0; i < input; i++) {
                let pos = utils_1.getAnchorPos(node, 'input', i, input);
                let [anchorPath, activeAnchorPath] = this._paintAnchor(pos);
                ctx.save();
                ctx.fillStyle = color_1.lighter(node.color || color_1.default.blue);
                ctx.fill(activeAnchorPath);
                ctx.restore();
                ctx.fill(anchorPath);
                ctx.stroke(anchorPath);
            }
        }
    }
    // paint edge
    paintEdge({ x: sx, y: sy }, // start
    { x: ex, y: ey }, // end
    { id, selected, gap = 1, maxWidth, isLeaf, gapCount = 0, } // options
    ) {
        const { ctx, ratio: r } = this;
        sx *= r;
        sy *= r;
        ex *= r;
        ey *= r;
        maxWidth *= r;
        const path = new Path2D();
        // 连线起点
        ctx.beginPath();
        path.moveTo(sx, sy);
        // 计算控制点
        const diffY = 40 * r;
        if (gap === 1) {
            const cp1 = [sx, sy + diffY / 4];
            const cp2 = [ex, sy + diffY / 4];
            path.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey);
        }
        else if (gap === -1) {
            const lx = ex - (gapCount + 1) * gw * r - maxWidth / 2;
            path.lineTo(sx, sy + 40);
            path.lineTo(lx, sy + 40);
            path.lineTo(lx, ey - 40);
            path.lineTo(ex, ey - 40);
            path.lineTo(ex, ey);
        }
        else {
            if (isLeaf) {
                path.lineTo(sx, ey - diffY / 2);
                path.bezierCurveTo(sx, ey - diffY / 4, ex, ey - diffY / 4, ex, ey);
            }
            else {
                let lx = sx - maxWidth / 2 - gapCount * gw * r;
                const cp1 = [sx, sy + diffY / 4];
                const cp2 = [lx, sy + diffY / 4];
                const cp3 = [lx, ey - diffY / 4];
                const cp4 = [ex, ey - diffY / 4];
                path.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], lx, sy + diffY);
                path.lineTo(lx, ey - diffY / 2);
                path.bezierCurveTo(cp3[0], cp3[1], cp4[0], cp4[1], ex, ey);
            }
        }
        // 连线
        if (selected) {
            ctx.save();
            ctx.lineWidth = 2 * r;
            ctx.strokeStyle = color_1.default.blue;
            ctx.stroke(path);
            ctx.restore();
        }
        else {
            ctx.stroke(path);
        }
        ctx.closePath();
        // 缓存路径
        this.paths.edges[id] = path;
        this._paintArrow({ x: ex, y: ey });
    }
    checkOnEdge(eid, pos) {
        const { ratio: r, ctx } = this;
        const path = this.paths.edges[eid];
        let { x, y } = pos;
        x *= r;
        y *= r;
        ctx.save();
        ctx.lineWidth = 6 * r;
        let on = path && ctx.isPointInStroke(path, x, y);
        ctx.restore();
        return on;
    }
    _paintArrow({ x, y }) {
        const { ctx, ratio: r } = this;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 2 * r, y - 6 * r);
        ctx.lineTo(x + 2 * r, y - 6 * r);
        ctx.save();
        ctx.fillStyle = color_1.default.line;
        ctx.fill();
        ctx.restore();
        ctx.stroke();
        ctx.closePath();
    }
    // clear canvas
    clear() {
        const { x, y } = this.translateInfo;
        this.ctx.clearRect(-x, -y, this.canvas.width, this.canvas.height);
    }
    // fill canvas white background
    preFill() {
        var _a;
        const { x, y } = this.translateInfo;
        this.ctx.save();
        this.ctx.fillStyle = '#f9f9f9';
        this.ctx.fillRect(-x, -y, this.canvas.width, this.canvas.height);
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.grid) {
            this.paintGrid();
        }
        this.ctx.restore();
    }
    paintGrid() {
        const { ctx, ratio } = this;
        const { width, height } = this.canvas;
        const ts = this.ctx.getTransform();
        const x = ts.e;
        const y = ts.f;
        const d = 16 * ratio;
        const xn = Math.ceil(width / d);
        const yn = Math.ceil(height / d);
        ctx.save();
        ctx.strokeStyle = '#e1e1e1';
        ctx.lineWidth = 1;
        for (let i = 1; i < xn + 1; i++) {
            let sx = -x + d * i;
            ctx.beginPath();
            ctx.moveTo(sx, -y);
            ctx.lineTo(sx, -y + height);
            ctx.stroke();
            ctx.closePath();
        }
        for (let i = 1; i < yn + 1; i++) {
            let sy = -y + d * i;
            ctx.beginPath();
            ctx.moveTo(-x, sy);
            ctx.lineTo(-x + width, sy);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.restore();
    }
}
exports.Canvas = Canvas;


/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.lighter = exports.rgbToHEX = exports.hexToRGB = void 0;
const COLOR = {
    blue: '#b3e5fc',
    font: '#333333',
    line: '#c1c1c1',
    green: '#c5e1a5',
    red: '#ffcdd2',
    lingthBlue: '#e3f2fd',
    white: '#ffffff',
};
exports.default = COLOR;
function hexToRGB(hex) {
    if (!/^#[A-Fa-f0-9]{6}$/.test(hex)) {
        return null;
    }
    let c;
    c = '0x' + hex.substring(1);
    return {
        r: (c >> 16) & 255,
        g: (c >> 8) & 255,
        b: c & 255,
    };
}
exports.hexToRGB = hexToRGB;
function rgbToHEX(color) {
    const r = color.r.toString(16);
    const g = color.g.toString(16);
    const b = color.b.toString(16);
    return `#${r}${g}${b}`;
}
exports.rgbToHEX = rgbToHEX;
function lighter(color, alpha = 5) {
    const c = hexToRGB(color);
    const r = Math.floor((c.r * alpha + 255 * (10 - alpha)) / 10);
    const g = Math.floor((c.g * alpha + 255 * (10 - alpha)) / 10);
    const b = Math.floor((c.b * alpha + 255 * (10 - alpha)) / 10);
    return rgbToHEX({ r, g, b });
}
exports.lighter = lighter;


/***/ }),

/***/ "./src/command.ts":
/*!************************!*\
  !*** ./src/command.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor({ app }) {
        this.app = app;
        this.task = {};
    }
    register(name, task) {
        if (this.task[name]) {
            throw Error(`command ${name} exist`);
        }
        this.task[name] = task;
    }
    execute(command, args) {
        const fn = this.task[command];
        fn && fn.call(this.app, args);
    }
}
exports.Command = Command;


/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
/*
 *	dag-editor core
 *	@liupd
 *	email: liupeidong1027@gmail.com
 */
__webpack_require__(/*! ../style/editor.css */ "./style/editor.css");
const dom_1 = __webpack_require__(/*! ./dom */ "./src/dom.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const canvas_1 = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
const event_1 = __webpack_require__(/*! ./event */ "./src/event.ts");
const command_1 = __webpack_require__(/*! ./command */ "./src/command.ts");
const ow = 100;
// Editor core
class Editor {
    constructor({ page, config, }) {
        /*
         *	public
         */
        this.callback = {
            selectedNodeChange: null,
            nodeAdded: null,
            nodeDeleted: null,
            edgeAdded: null,
            edgeDeleted: null,
            selectedEdgeChange: null,
        };
        /*
         *	events
         */
        this.isMouseDown = false;
        this.eventList = [
            ['oPage', 'mousedown', '_mouseDownOnPage'],
            ['oPage', 'mousemove', '_mouseMove'],
            ['oPage', 'mouseleave', '_mouseLeavePage'],
            ['oPage', 'mouseup', '_mouseUpPage'],
        ];
        /*
         *	add-node
         *	- mousedown_on_itempanel: begin-add-node
         *		-> mouseup_itempanel: end
         *	- mousemove_on_page
         *		-> mouseup_page: add-node
         *		-> mouseleave_page: end
         *	move-node
         *	- mousedown_on_page
         *		- check_is_in_node: false -> end
         *	- mousemove_on_page
         *	- mouseup_page: end
         */
        // mouse event start pos (x, y)
        this.mouseEventStartPos = {
            x: 0,
            y: 0,
        };
        this.commands = {
            'del:node': '_delNodeCommand',
            'del:edge': '_delEdgeCommand',
            'clear': '_clear',
        };
        console.info('%csimple-dag-editor: created', 'color: #c5e1a5;font-weight: bold;');
        // dom container
        // this.oContainer = getDom(container)
        this.oPage = dom_1.getDom(page);
        // init property
        this.nodes = [];
        this.edges = [];
        // extra config
        this.extraConfig = config;
        this._init();
        this._renderTask('init');
    }
    // init canvas
    _init() {
        this._initCanvas();
        this._bindEvents();
        this._initCommand();
    }
    _initPageConfig() {
        if (!this.oPage) {
            throw Error('cannot find Editor editor container');
        }
        else {
            this.oPage.classList.add('editor-page');
        }
        let rect = this.oPage.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        rect = rect.toJSON();
        // page config
        this.pageConfig = Object.assign(Object.assign({}, rect), { ratio });
    }
    _initCanvas() {
        this._initPageConfig();
        const { width, height, ratio } = this.pageConfig;
        // create canvas dom
        const oc = dom_1.createDom('canvas', 'editor-canvas');
        oc.width = width * ratio;
        oc.height = height * ratio;
        // define canvas object
        // main canvas paint all nodes & edges that exist in this.nodes & this.edges
        this.mainCvs = new canvas_1.Canvas(oc, { ratio, hasStore: true, hasBg: true, config: this.extraConfig });
        // append to page container
        this.oPage.appendChild(oc);
    }
    get selectedNode() {
        return this.__selectedNode;
    }
    set selectedNode(node) {
        if (node === this.__selectedNode) {
            utils_1.logger('no change');
            return;
        }
        this.__selectedNode = node;
        // selected node change trigger render on main canvas
        this._renderTask('selected node change');
        // callback
        this.callback.selectedNodeChange && this.callback.selectedNodeChange(node);
    }
    get hoverNode() {
        return this.__hoverNode;
    }
    set hoverNode(node) {
        if (node === this.__hoverNode) {
            return;
        }
        // hover node change trigger render on main canvas
        this.__hoverNode = node;
        this._renderTask('hover node change');
    }
    _updateNode(node) {
        let i = this.nodes.findIndex(n => n.id === node.id);
        if (i < 0) {
            return;
        }
        let cur = this.nodes.splice(i, 1)[0];
        cur = Object.assign({}, node);
        this.nodes.push(cur);
        this.selectedNode = cur;
    }
    get selectedEdge() {
        return this.__selectedEdge;
    }
    set selectedEdge(edge) {
        if (edge === this.__selectedEdge) {
            return;
        }
        this.__selectedEdge = edge;
        this._renderTask('selected edge change');
        this.callback.selectedEdgeChange && this.callback.selectedEdgeChange(edge);
    }
    // clear
    _clear() {
        this.nodes = [];
        this.edges = [];
        this._renderTask('clear');
    }
    _renderTask(msg) {
        this.renderTask && cancelAnimationFrame(this.renderTask);
        this.renderTask = window.requestAnimationFrame(() => { this._render(msg); });
    }
    _render(msg) {
        msg && utils_1.logger(`===render by: ${msg}===`);
        this.mainCvs.clear();
        this.mainCvs.preFill();
        /**
         * @sd-layout
         * 绘制节点
         * 绘制边
         */
        this.nodes.forEach(node => {
            let status = this.selectedNode === node ? 'selected' : (this.hoverNode === node ? 'hover' : null);
            this.mainCvs.paintNode(node, { status });
        });
        this._paintEdgeTask();
    }
    _paintEdgeTask() {
        const { circle } = this.layout;
        const edges = this.edges.slice();
        let gap = 1;
        let count = 0;
        while (count < edges.length) {
            edges.forEach(({ source, target, id }, i) => {
                const start = this.nodes.find(n => n.id === source);
                const end = this.nodes.find(n => n.id === target);
                let startPos = utils_1.getAnchorPos(start, 'output', 0, start.anchors.output);
                let endPos = utils_1.getAnchorPos(end, 'input', 0, end.anchors.input);
                if (end.depth - start.depth === gap) {
                    this.mainCvs.paintEdge(startPos, endPos, {
                        id,
                        selected: this.selectedEdge && this.selectedEdge.id === id,
                        gap,
                        // TODO
                        maxWidth: start.treeWidth * ow,
                        isLeaf: start.hasNoSon,
                        gapCount: start.gapCount,
                    });
                    count++;
                }
            });
            gap++;
        }
        if (circle.length) {
            this._paintTail(circle[0]);
        }
    }
    _paintTail(circle) {
        const { source, target, id } = circle;
        const start = this.nodes.find(n => n.id === source);
        const end = this.nodes.find(n => n.id === target);
        let startPos = utils_1.getAnchorPos(start, 'output', 0, start.anchors.output);
        let endPos = utils_1.getAnchorPos(end, 'input', 0, end.anchors.input);
        this.mainCvs.paintEdge(startPos, endPos, {
            id,
            selected: this.selectedEdge && this.selectedEdge.id === id,
            gap: -1,
            // TODO
            maxWidth: end.treeWidth * ow,
            gapCount: end.gapCount,
        });
    }
    on(ev, cb) {
        if (this.callback.hasOwnProperty(ev)) {
            this.callback[ev] = cb;
        }
    }
    update(node) {
        this._updateNode(node);
    }
    repaint() {
        this._renderTask('repaint');
    }
    getData() {
        return {
            nodes: this.nodes,
            edges: this.edges,
        };
    }
    setData({ nodes = [], edges = [], layout }) {
        this.nodes = nodes;
        this.edges = edges;
        this.layout = layout;
        this._renderTask('set data');
    }
    setConfig(config) {
        this.extraConfig = config;
        this.mainCvs.config = config;
        this._renderTask('change config');
    }
    saveFile(fileName = 'simple-dag-editor-export-picture', type = 'jpeg') {
        return new Promise(rs => {
            this.getFileBlob(type).then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.download = `${fileName}.${type}`;
                a.href = url;
                a.click();
                rs(url);
            });
        });
    }
    getFileBlob(type) {
        const { canvas } = this.mainCvs;
        const MIME_TYPE = `image/${type}`;
        return new Promise(rs => {
            canvas.toBlob(blob => {
                rs(blob);
            }, MIME_TYPE);
        });
    }
    // TODO
    resize() { }
    execute(cmd, opts) {
        this.command.execute(cmd, opts);
    }
    _bindEvents() {
        const event = new event_1.Event({
            rect: this.pageConfig,
        });
        for (let ev of this.eventList) {
            event.add(this[ev[0]], ev[1], this[ev[2]].bind(this));
        }
    }
    // mousedown on page
    _mouseDownOnPage(e) {
        this.isMouseDown = true;
        const { offsetX: x, offsetY: y } = e;
        this.mouseEventStartPos = { x, y };
        if (this.hoverNode) {
            this.selectedNode = this.hoverNode;
            this.selectedEdge = null;
            // this.selectedNode = this.selectedNode
            this.mouseDownType = 'move-node';
        }
        else {
            this.selectedNode = null;
            this.selectedEdge = this._getSelectedEdge({ x, y });
            this.mouseDownType = 'drag-canvas';
        }
    }
    // mousemove
    _mouseMove(e) {
        const { offsetX: x, offsetY: y } = e;
        // diff (x, y) from mouse down start point
        const dx = x - this.mouseEventStartPos.x;
        const dy = y - this.mouseEventStartPos.y;
        if (this.isMouseDown) { // move
            switch (this.mouseDownType) {
                case 'drag-canvas':
                    this.mainCvs.clear();
                    this.mainCvs.transform(dx, dy);
                    this.mainCvs.preFill();
                    this._render();
                    this.mainCvs.restore();
                    break;
            }
        }
        else { // hover
            const hoverNode = this._getSelectedNode({ x, y });
            if (this.hoverNode) {
                let hoverAnchor = this.mainCvs.checkInNodeAnchor(this.hoverNode, { x, y });
                this.hoverAnchor = hoverAnchor;
                if (!hoverAnchor) {
                    this.hoverNode = hoverNode;
                }
            }
            else {
                this.hoverAnchor = null;
                this.hoverNode = hoverNode;
            }
        }
    }
    // mouseleave
    _mouseLeavePage() {
        this._mouseUp();
    }
    // mouseup
    _mouseUpPage(e) {
        if (!this.isMouseDown) {
            return;
        }
        const { offsetX: x, offsetY: y } = e;
        const dx = x - this.mouseEventStartPos.x;
        const dy = y - this.mouseEventStartPos.y;
        switch (this.mouseDownType) {
            case 'drag-canvas':
                this.mainCvs.translate(dx, dy);
                break;
        }
        this._mouseUp();
    }
    _mouseUp() {
        this.isMouseDown = false;
        this.mouseDownType = null;
    }
    _initCommand() {
        const command = new command_1.Command({ app: this });
        const { commands } = this;
        for (let cmd in commands) {
            command.register(cmd, this[commands[cmd]]);
        }
        this.command = command;
    }
    _preventDefaultMenu(e) {
        e.preventDefault();
    }
    /*
     * methods
     */
    _getSelectedNode({ x, y }) {
        const { nodes } = this;
        for (let i = nodes.length; i > 0; i--) {
            let node = nodes[i - 1];
            if (this.mainCvs.checkInNode(node.id, { x, y })) {
                return node;
            }
        }
        return null;
    }
    _getSelectedEdge({ x, y }) {
        const { edges } = this;
        for (let edge of edges) {
            if (this.mainCvs.checkOnEdge(edge.id, { x, y })) {
                return edge;
            }
        }
        return null;
    }
}
exports.Editor = Editor;


/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttr = exports.createDom = exports.getDomList = exports.getDom = void 0;
function getDom(selector) {
    return document.querySelector(selector);
}
exports.getDom = getDom;
function getDomList(selector) {
    return document.querySelectorAll(selector);
}
exports.getDomList = getDomList;
function createDom(tag = 'div', className, id) {
    const o = document.createElement(tag);
    className && (o.className = className);
    id && (o.id = id);
    return o;
}
exports.createDom = createDom;
function getAttr(dom, attr) {
    return dom.getAttribute(attr);
}
exports.getAttr = getAttr;


/***/ }),

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor({ rect }) {
        this.mobileEvent = {
            'mousedown': 'touchstart',
            'mouseup': 'touchend',
            'mousemove': 'touchmove',
        };
        const UA = window && window.navigator.userAgent || '';
        this.isMobile = !!UA.toLowerCase().match(/iphone|mobile|andriod/);
        this.baseRect = rect;
        if (this.isMobile) {
            document.body.addEventListener('touchmove', e => {
                e.preventDefault();
            }, { passive: false });
        }
    }
    add(dom, ev, fn) {
        if (!dom) {
            return;
        }
        ev = this.isMobile ? (this.mobileEvent[ev] || ev) : ev;
        dom.addEventListener(ev, e => {
            if (this.isMobile) {
                let t = ev === 'touchend' ? e['changedTouches'][0] : e['touches'][0];
                t.offsetX = t.clientX - this.baseRect.left;
                t.offsetY = t.clientY - this.baseRect.top;
                fn(t);
            }
            else {
                fn(e);
            }
        });
    }
}
exports.Event = Event;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./core */ "./src/core.ts"), exports);
__exportStar(__webpack_require__(/*! ./mind */ "./src/mind.js"), exports);


/***/ }),

/***/ "./src/layout.ts":
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const layout = ({ nodes, edges }) => {
    // TODO 成环的一条特殊标记
    const [brims, circle] = cutToDag(edges);
    // 初始化
    // 入度表 { node_id: input_count }
    const inMap = {};
    // 父节点表 { node_id: [ parent_id ] }
    const parentsMap = {};
    // 子节点表 { node_id: [ child_id ] }
    const childrenMap = {};
    // 层级表
    const levels = {};
    // 初始化构建
    for (let node of nodes) {
        const { id } = node;
        inMap[id] = 0;
        parentsMap[id] = [];
        childrenMap[id] = [];
    }
    for (let br of brims) {
        const s = br.source;
        const t = br.target;
        inMap[t]++;
        parentsMap[t].push(s);
        childrenMap[s].push(t);
    }
    // root
    const ox = 400;
    const oy = 40;
    const ow = 100;
    const oh = 80;
    const gw = 10;
    const root = Object.keys(inMap).find(k => inMap[k] === 0);
    const rootNode = findNode(root);
    rootNode.x = ox;
    rootNode.y = oy;
    // 计算节点深度, 由上自下
    const figureDepth = () => {
        const queue = [root];
        const getNodeDepth = id => {
            const parents = findParents(id);
            return parents.length ? Math.max.apply(null, parents.map(p => findNode(p)['depth'])) + 1 : 0;
        };
        while (queue.length) {
            const cur = queue.pop();
            const curNode = findNode(cur);
            const depth = getNodeDepth(cur);
            curNode.depth = depth;
            if (!levels.hasOwnProperty(depth)) {
                levels[depth] = [];
            }
            levels[depth].push(cur);
            const children = findChildren(cur);
            children.forEach(child => {
                inMap[child]--;
                if (inMap[child] === 0) {
                    queue.push(child);
                }
            });
        }
    };
    figureDepth();
    // 层内梳理
    const figureLevelInside = () => {
        // 排序
        const getFathersTotalOrder = (id, lv) => {
            if (lv < 2) {
                return 0;
            }
            const ids = findFathers(id);
            const list = levels[lv - 1];
            return ids.reduce((total, cur) => total + list.indexOf(cur), 0);
        };
        // 宽度
        const getWidth = id => {
            const node = findNode(id);
            if (node.hasOwnProperty('treeWidth')) {
                return node.treeWidth;
            }
            const sons = findSons(id);
            if (!sons.length) {
                node.hasNoSon = true;
                node.treeWidth = 1;
            }
            else {
                node.treeWidth = sons.reduce((total, cur) => total + getWidth(cur), 0);
            }
            return node.treeWidth;
        };
        // 跨级线, 没有子节点的节点连出的跨级线不占用横向空间, 不计算入内
        const getTreeGapCount = id => {
            const node = findNode(id);
            if (node.hasOwnProperty('gapCount')) {
                return node.gapCount;
            }
            if (node.hasNoSon) {
                node.gapCount = 0;
            }
            else {
                const sons = findSons(id);
                node.gapCount = getGapCount(id) + sons.reduce((total, cur) => total + getTreeGapCount(cur), 0);
            }
            return node.gapCount;
        };
        console.time('figure_level');
        Object.keys(levels).sort((a, b) => Number(a) - Number(b)).forEach(l => {
            const lv = Number(l);
            levels[l].sort((a, b) => {
                const ca = findChildren(a);
                const cb = findChildren(b);
                const pa = getFathersTotalOrder(a, lv);
                const pb = getFathersTotalOrder(b, lv);
                if (pa !== pb) {
                    return pa - pb;
                }
                return cb.length - ca.length;
            });
            levels[l].forEach(id => {
                getWidth(id);
                getTreeGapCount(id);
                // 计算坐标
                const node = findNode(id);
                const sx = node.x - node.treeWidth * ow / 2 - node.gapCount * gw;
                const sons = findSons(id);
                sons.forEach((c, i) => {
                    const child = findNode(c);
                    if (!child.hasOwnProperty('x') || !child.hasOwnProperty('y')) {
                        if (i === 0) {
                            child.x = sx + child.treeWidth * ow / 2;
                            if (getGapCount(id)) {
                                child.x += gw;
                            }
                        }
                        else {
                            const prev = findNode(sons[i - 1]);
                            child.x = prev.x + prev.treeWidth * ow / 2 + child.treeWidth * ow / 2;
                        }
                        child.x += child.gapCount * gw;
                        child.y = node.y + oh;
                    }
                });
            });
        });
        console.timeEnd('figure_level');
    };
    figureLevelInside();
    console.log(nodes);
    // utils
    // node_id => node
    function findNode(id) {
        return nodes.find(n => n.id === id);
    }
    // node_id => [ child ]
    function findChildren(id) {
        return childrenMap[id];
    }
    // node_id => [ son ]
    function findSons(id) {
        const node = findNode(id);
        return findChildren(id).filter(c => levels[node.depth + 1] && levels[node.depth + 1].indexOf(c) > -1);
    }
    // node_id => [ parent ]
    function findParents(id) {
        return parentsMap[id];
    }
    // node_id => [ father ]
    function findFathers(id) {
        const node = findNode(id);
        return findParents(id).filter(p => levels[node.depth - 1] && levels[node.depth - 1].indexOf(p) > -1);
    }
    // node_id => gap edge
    function getGapCount(id) {
        return childrenMap[id].length - findSons(id).length;
    }
    function cutToDag(edges) {
        const i = edges.findIndex(e => e.target.toUpperCase().match(/ROOT/));
        let circle = [];
        if (i > -1) {
            circle = edges.splice(i, 1);
        }
        return [edges, circle];
    }
    return format({ nodes, edges, layout: { levels, childrenMap, parentsMap, circle } });
};
// 格式化填充 editor 要求数据字段
function format({ nodes, edges, layout }) {
    return {
        nodes: nodes.map(n => {
            return Object.assign(Object.assign({}, n), { name: n.label, w: 80, h: 40, anchors: { input: 1, output: 1 } });
        }),
        edges: edges.map(e => {
            return Object.assign(Object.assign({}, e), { id: `edge-${e.name}`, sourceAnchorIndex: 0, targetAnchorIndex: 0, name: e.label });
        }),
        layout,
    };
}
exports.default = layout;


/***/ }),

/***/ "./src/mind.js":
/*!*********************!*\
  !*** ./src/mind.js ***!
  \*********************/
/*! exports provided: Mind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mind", function() { return Mind; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "./src/tree.ts");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/color.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar */ "./src/toolbar.ts");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./src/event.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *  mind-map
 */





var Mind = /*#__PURE__*/function () {
  function Mind(_ref) {
    var _ref$container = _ref.container,
        container = _ref$container === void 0 ? '#mind-map-container' : _ref$container,
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? {} : _ref$data,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;

    _classCallCheck(this, Mind);

    _defineProperty(this, "options", {
      style: {
        fill: _color__WEBPACK_IMPORTED_MODULE_2___default.a.blue,
        line: _color__WEBPACK_IMPORTED_MODULE_2___default.a.line,
        font: _color__WEBPACK_IMPORTED_MODULE_2___default.a.font
      },
      lineType: 'polygon',
      legends: null
    });

    _defineProperty(this, "nodeInfo", {
      height: 26,
      minWidth: 80,
      horizontalGap: 100,
      verticalHeight: 36,
      fontSize: 12
    });

    _defineProperty(this, "translate", {
      x: 0,
      y: 0
    });

    _defineProperty(this, "mouseEvent", {
      isDown: false,
      // mouse event start point (sx, sy)
      sx: 0,
      sy: 0
    });

    _defineProperty(this, "scale", 10);

    if (!Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(container)) {
      throw Error('null canvas container found');
    }

    this.oCon = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(container);
    this.options = _objectSpread(_objectSpread({}, this.options), options);

    this._init();

    this._setData(data);

    this._render();

    this._bindEvent();
  }
  /*
   *  initial info
   */


  _createClass(Mind, [{
    key: "_init",
    value: function _init() {
      var rect = this.oCon.getBoundingClientRect();
      var width = rect.width,
          height = rect.height,
          left = rect.left,
          top = rect.top;
      var ratio = window.devicePixelRatio || 1; // dom config

      this.config = {
        width: width,
        height: height,
        ratio: ratio,
        left: left,
        top: top
      };
      console.info("\u5F53\u524D\u5C4F\u5E55\u50CF\u7D20\u5BC6\u5EA6\u4E3A".concat(ratio)); // set node painting info

      this._initNodeInfo(); // add legends to container


      this.options.toolbar && this._initLegends(); // add toolbar

      this.options.toolbar && this._initToolbar(this.options.toolbar);
      var oCanvas = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('canvas');
      oCanvas.width = width * ratio;
      oCanvas.height = height * ratio; // canvas & ctx

      this.oCanvas = oCanvas;
      this.ctx = oCanvas.getContext('2d');
      this.ctx.font = "".concat(this.nodeInfo.fontSize, "px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif");
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = this.options.style.fill;
      this.ctx.strokeStyle = this.options.style.line; // translate the origin to make the root node a better place

      this._initTranslate(); // append canvas dom to container


      this.oCon.appendChild(this.oCanvas);
    }
  }, {
    key: "_initNodeInfo",
    value: function _initNodeInfo() {
      var r = this.config.ratio;
      var nodeInfo = this.nodeInfo;

      for (var k in nodeInfo) {
        nodeInfo[k] = nodeInfo[k] * r;
      }

      nodeInfo.fontSize = Math.max(r * 10, 12);
    } // canvas ctx translate info, it's the origin pos relative to canvas(0, 0)

  }, {
    key: "_initTranslate",
    value: function _initTranslate() {
      this._translate(50 * this.config.ratio, this.oCanvas.height / 2);
    }
  }, {
    key: "_translate",

    /*
     *  arguments(x, y) is diffX & diffY
     *  ctx.translate() is accumulative
     */
    value: function _translate(x, y) {
      this.ctx.translate(x, y);
      this.translate.x += x;
      this.translate.y += y;
    } // repaint

  }, {
    key: "_reset",
    value: function _reset() {
      this._clear();

      this.scale = 10;

      this._translate(-this.translate.x, -this.translate.y);

      this._initTranslate();

      this._render();
    }
  }, {
    key: "_repaint",
    value: function _repaint() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this._clear();

      this.ctx.save();
      var sc = this.scale / 10;
      this.ctx.transform(sc, 0, 0, sc, x, y);

      this._render();

      this.ctx.restore();
    }
    /*
     *  data: {
     *      ...node,
     *      children: [ node ],
     *
     *      // calculated property for canvas painting
     *      count: number,      // width of tree, which current node as root
     *      level: number,      // height of current node
     *      x: number,      // origin x-position
     *      y: number,      // origin y-position
     *      end: number,    // end x-position
     *  }
     */

  }, {
    key: "_setData",
    value: function _setData(data) {
      this.data = data; // scan the tree

      Object(_tree__WEBPACK_IMPORTED_MODULE_1__["figureNodeLevel"])(this.data);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this = this;

      var data = this.data;
      var queue = [];
      queue.push(data);
      var _this$nodeInfo = this.nodeInfo,
          gap = _this$nodeInfo.horizontalGap,
          vh = _this$nodeInfo.verticalHeight;
      var lineType = this.options.lineType;

      var _loop = function _loop() {
        var cur = queue.shift(); // paint root first

        if (cur.level === 0) {
          _this._paintNode(data, {
            ox: 0,
            oy: 0
          });
        } // paint children node & line


        var children = cur.children;

        if (!children || !children.length) {
          return "continue";
        }

        if (lineType === 'polygon') {
          // line from root to child, first part
          _this._paintLine({
            x: cur.end,
            y: cur.y
          }, {
            x: cur.end + gap / 2,
            y: cur.y
          });
        }

        var n = children.length;
        children.forEach(function (child, i) {
          var oy = child.count * vh / 2;

          if (i > 0) {
            var prevHeight = children[i - 1]['count'] * vh / 2 + children[i - 1]['y'];
            oy += prevHeight;
          } else {
            oy += cur.y - cur.count * vh / 2;
          } // paint root's child node


          _this._paintNode(child, {
            ox: cur.end + gap,
            oy: oy
          });

          if (lineType === 'polygon') {
            if (i === 0 || i === n - 1) {
              // polygon-line from root to child, second part
              _this._paintLine({
                x: cur.end + gap / 2,
                y: cur.y
              }, {
                x: cur.end + gap / 2,
                y: child.y
              });
            } // line from root to child, third part


            _this._paintLine({
              x: cur.end + gap / 2,
              y: child.y
            }, {
              x: child.x,
              y: child.y
            });
          } else {
            _this._paintCurve({
              x: cur.end,
              y: cur.y
            }, child);
          } // add child nodes to the queue


          queue.push(child);
        });
      };

      while (queue.length) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }
    }
    /*
     *  node: {
     *      x, y, end
     *  }
     *  rect(x, y - node.height/2, node.width, node.height)
     *
     */

  }, {
    key: "_paintNode",
    value: function _paintNode(node, _ref2) {
      var ox = _ref2.ox,
          oy = _ref2.oy;
      var ctx = this.ctx,
          options = this.options;
      var _this$nodeInfo2 = this.nodeInfo,
          h = _this$nodeInfo2.height,
          w = _this$nodeInfo2.minWidth;
      var t = ctx.measureText(node.text);
      var tw = Math.max(t.width + 20 * this.config.ratio, w);

      if (options.legends && options.legends[node.type]) {
        var color = options.legends[node.type]['color'];
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(ox, oy - h / 2, tw, h);
        ctx.restore();
      } else {
        ctx.fillRect(ox, oy - h / 2, tw, h);
      }

      ctx.save();
      ctx.fillStyle = options.style.font;
      ctx.fillText(node.text, ox + tw / 2, oy);
      ctx.restore();
      node.x = ox;
      node.y = oy;
      node.end = ox + tw;
    }
  }, {
    key: "_paintLine",
    value: function _paintLine(start, end) {
      var ctx = this.ctx;
      var sx = start.x,
          sy = start.y;
      var ex = end.x,
          ey = end.y;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "_paintCurve",
    value: function _paintCurve(start, end) {
      var ctx = this.ctx;
      var sx = start.x,
          sy = start.y;
      var ex = end.x,
          ey = end.y;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      var cp1 = [(sx + ex) / 2, sy];
      var cp2 = [sx, ey];
      ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey);
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "_clear",
    value: function _clear() {
      var _this$translate = this.translate,
          x = _this$translate.x,
          y = _this$translate.y;
      this.ctx.clearRect(-x, -y, this.oCanvas.width, this.oCanvas.height);
    }
    /*
     *  event
     */

  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;

      var event = new _event__WEBPACK_IMPORTED_MODULE_4___default.a({
        rect: this.config
      });
      var o = this.oCanvas;
      event.add(o, 'mousedown', this._mouseDown.bind(this));
      event.add(o, 'mouseup', this._mouseUp.bind(this));
      event.add(o, 'mousemove', function (e) {
        requestAnimationFrame(_this2._mouseMove.bind(_this2, e));
      });
      this.event = event;
    }
  }, {
    key: "_mouseDown",
    value: function _mouseDown(e) {
      var x = e.offsetX,
          y = e.offsetY;
      var r = this.config.ratio;
      var sc = this.scale / 10;
      this.mouseEvent.isDown = true;
      this.mouseEvent.sx = x * r * sc;
      this.mouseEvent.sy = y * r * sc;
    }
  }, {
    key: "_mouseMove",
    value: function _mouseMove(e) {
      var _this$mouseEvent = this.mouseEvent,
          isDown = _this$mouseEvent.isDown,
          sx = _this$mouseEvent.sx,
          sy = _this$mouseEvent.sy;
      var sc = this.scale / 10;

      if (!isDown) {
        return;
      }

      var x = e.offsetX,
          y = e.offsetY;
      var r = this.config.ratio;
      var diffX = x * r * sc - sx;
      var diffY = y * r * sc - sy;

      this._repaint(diffX, diffY);
    }
  }, {
    key: "_mouseUp",
    value: function _mouseUp(e) {
      var x = e.offsetX,
          y = e.offsetY;
      var _this$mouseEvent2 = this.mouseEvent,
          sx = _this$mouseEvent2.sx,
          sy = _this$mouseEvent2.sy;
      var r = this.config.ratio;
      var sc = this.scale / 10;
      this.mouseEvent.isDown = false;
      var diffX = x * r * sc - sx;
      var diffY = y * r * sc - sy;

      this._translate(diffX, diffY);
    } // canvas ctx scale info

  }, {
    key: "_zoomIn",
    value: function _zoomIn() {
      this.scale < 15 && this.scale++;

      this._repaint();

      console.info("\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B\u4E3A".concat(this.scale / 10));
    }
  }, {
    key: "_zoomOut",
    value: function _zoomOut() {
      this.scale > 5 && this.scale--;

      this._repaint();

      console.info("\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B\u4E3A".concat(this.scale / 10));
    } // toolbar: zoom-in, zoom-out

  }, {
    key: "_initToolbar",
    value: function _initToolbar(selector) {
      this.toolbar = new _toolbar__WEBPACK_IMPORTED_MODULE_3___default.a({
        selector: selector
      });
      this.toolbar.registerCommands({
        'zoom-in': this._zoomIn.bind(this),
        'zoom-out': this._zoomOut.bind(this),
        'reset': this._reset.bind(this),
        'switch-line': this._switchLine.bind(this)
      });
    } // legends

  }, {
    key: "_initLegends",
    value: function _initLegends() {
      var legends = this.options.legends;
      var oBox = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('div', 'legends-container');
      var tpl = "";

      for (var k in legends) {
        var l = legends[k];
        tpl += "<span class=\"legend-item\" style=\"background-color: ".concat(l.color, "\">").concat(l.name, "</span>");
      }

      oBox.innerHTML = tpl;
      this.oCon.appendChild(oBox);
    } // options

  }, {
    key: "_switchLine",
    value: function _switchLine(e) {
      var lineType = this.options.lineType;
      var type = lineType === 'curve' ? 'polygon' : 'curve';
      this.options.lineType = type; // this._reset()

      this._repaint();
    }
  }]);

  return Mind;
}();

/***/ }),

/***/ "./src/toolbar.ts":
/*!************************!*\
  !*** ./src/toolbar.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Toolbar {
    constructor({ selector }) {
        this.events = {};
        this.oToolbar = document.querySelector(selector);
        this._bind();
    }
    registerCommands(events) {
        this.events = Object.assign(Object.assign({}, this.events), events);
    }
    _bind() {
        this.oToolbar.addEventListener('click', e => {
            const o = e.target;
            const command = o.getAttribute('data-command');
            if (!command) {
                return;
            }
            const fn = this.events[command];
            fn && fn(e);
        });
    }
}
exports.default = Toolbar;


/***/ }),

/***/ "./src/tree.ts":
/*!*********************!*\
  !*** ./src/tree.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.figureNodeLevel = exports.getLeavesCount = void 0;
function getLeavesCount(tree) {
    if (tree.count !== undefined) {
        return tree.count;
    }
    tree.count = 0;
    const { children } = tree;
    if (!children) {
        tree.count++;
    }
    else {
        for (let i = 0, n = children.length; i < n; i++) {
            tree.count += getLeavesCount(children[i]);
        }
    }
    return tree.count;
}
exports.getLeavesCount = getLeavesCount;
function figureNodeLevel(node, lvl = 0) {
    node.level = lvl;
    node.count = getLeavesCount(node);
    if (!node.children) {
        return false;
    }
    for (let i = 0, n = node.children.length; i < n; i++) {
        figureNodeLevel(node.children[i], lvl + 1);
    }
}
exports.figureNodeLevel = figureNodeLevel;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.compareEdge = exports.checkInCircle = exports.checkInNodeAnchor = exports.getAnchorPos = exports.randomID = void 0;
function randomID() {
    return Date.now().toString(16);
}
exports.randomID = randomID;
function getAnchorPos(node, type, i, n) {
    const { x, y, w, h } = node;
    let ax = x - w / 2 + (i + 1) / (n + 1) * w;
    let ay = type === 'input' ? y - h / 2 : y + h / 2;
    return { x: ax, y: ay };
}
exports.getAnchorPos = getAnchorPos;
function checkInNodeAnchor({ x, y }, node) {
    const { input, output } = node.anchors;
    if (input) {
        for (let i = 0; i < input; i++) {
            let pos = getAnchorPos(node, 'input', i, input);
            if (checkInCircle({ x, y }, pos)) {
                return [node, 'input', i];
            }
        }
    }
    if (output) {
        for (let i = 0; i < output; i++) {
            let pos = getAnchorPos(node, 'output', i, output);
            if (checkInCircle({ x, y }, pos)) {
                return [node, 'output', i];
            }
        }
    }
    return null;
}
exports.checkInNodeAnchor = checkInNodeAnchor;
function checkInCircle({ x, y }, { x: cx, y: cy }, r = 4) {
    return Math.abs(x - cx) <= r && Math.abs(y - cy) <= r;
}
exports.checkInCircle = checkInCircle;
function compareEdge(a, b) {
    for (let i in a) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
exports.compareEdge = compareEdge;
function logger(msg) {
    if (true) {
        // console.log(msg)
    }
}
exports.logger = logger;


/***/ }),

/***/ "./style/editor.css":
/*!**************************!*\
  !*** ./style/editor.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./editor.css */ "./node_modules/css-loader/dist/cjs.js!./style/editor.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=editor.build.js.map