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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/color.js":
/*!**********************!*\
  !*** ./lib/color.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var COLOR = {
  blue: '#b3e5fc',
  font: '#333333',
  line: '#c1c1c1',
  green: '#c5e1a5',
  red: '#ffcdd2'
};
/* harmony default export */ __webpack_exports__["default"] = (COLOR);

/***/ }),

/***/ "./lib/dom.js":
/*!********************!*\
  !*** ./lib/dom.js ***!
  \********************/
/*! exports provided: getDom, getDomList, createDom, getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDom", function() { return getDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomList", function() { return getDomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDom", function() { return createDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getDom(selector) {
  return document.querySelector(selector);
}
function getDomList(selector) {
  return document.querySelectorAll(selector);
}
function createDom() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var className = arguments.length > 1 ? arguments[1] : undefined;
  var id = arguments.length > 2 ? arguments[2] : undefined;
  var o = document.createElement(tag);
  className && (o.className = className);
  id && (o.id = id);
  return o;
}
function getAttr(dom, attr) {
  return dom.getAttribute(attr);
}

/***/ }),

/***/ "./mock-data/dag-shapes.js":
/*!*********************************!*\
  !*** ./mock-data/dag-shapes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/color */ "./lib/color.js");

var w = 180;
var h = 40;
var c = _lib_color__WEBPACK_IMPORTED_MODULE_0__["default"]['blue'];
var shapes = {
  'shape-001': {
    w: w,
    h: h,
    c: c,
    text: 'Shape 001',
    anchors: [[0.5, 0, 'input'], // [x, y, type]
    [0.5, 1, 'output']]
  },
  'Test-Shape-': {
    w: w,
    h: h,
    c: _lib_color__WEBPACK_IMPORTED_MODULE_0__["default"]['green'],
    text: 'Test-Shape-',
    anchors: [[0.5, 0, 'input'], [0.3, 1, 'output'], [0.7, 1, 'output']]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (shapes);

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas(canvas, options) {
    _classCallCheck(this, Canvas);

    this.canvas = canvas;
    var ctx = canvas.getContext('2d');
  }

  _createClass(Canvas, [{
    key: "_paint",
    value: function _paint(node) {
      console.log(node);
    }
  }]);

  return Canvas;
}();

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/dom */ "./lib/dom.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _data_dag_shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/dag-shapes */ "./mock-data/dag-shapes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *  dag-editor
 *  author: liupeidong@gmail.com
 */





var Editor = /*#__PURE__*/function () {
  function Editor(_ref) {
    var container = _ref.container,
        toolbar = _ref.toolbar,
        itempanel = _ref.itempanel,
        page = _ref.page,
        detailpanel = _ref.detailpanel;

    _classCallCheck(this, Editor);

    _defineProperty(this, "shapes", {});

    _defineProperty(this, "nodes", []);

    _defineProperty(this, "edges", []);

    _defineProperty(this, "isMouseDown", false);

    _defineProperty(this, "mouseDownType", null);

    _defineProperty(this, "selectedShape", null);

    console.log('xxx');
    this.oContainer = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(container);
    this.oItemPanel = itempanel && Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(itempanel);
    this.oPage = page && Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(page);

    this._initCanvas();

    this._bindEvents();
  } // init


  _createClass(Editor, [{
    key: "_initCanvas",
    value: function _initCanvas() {
      var rect = this.oPage.getBoundingClientRect();
      var width = rect.width,
          height = rect.height,
          left = rect.left,
          top = rect.top;
      var ratio = window.devicePixelRatio || 1;
      this.pageConfig = {
        width: width,
        height: height,
        left: left,
        top: top,
        ratio: ratio
      };
      var oCanvas = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('canvas', 'editor-canvas');
      oCanvas.width = width * ratio;
      oCanvas.height = height * ratio;
      var oDynamicCanvas = oCanvas.cloneNode();
      oDynamicCanvas.style.pointerEvents = 'none';
      oDynamicCanvas.style.backgroundColor = 'transparent';
      this.mainCanvas = new _canvas__WEBPACK_IMPORTED_MODULE_2__["default"](oCanvas);
      this.dynamicCanvas = new _canvas__WEBPACK_IMPORTED_MODULE_2__["default"](oDynamicCanvas);
      this.oPage.appendChild(oCanvas);
      this.oPage.appendChild(oDynamicCanvas);
    }
  }, {
    key: "registerShape",
    value: function registerShape(shapeName, shape) {
      this.shapes[shapeName] = shape;
    }
    /*
     *  data
     *      node: {
     *          ...shape,
     *          ...position,
     *      }
     *      edge: {
     *          source,
     *          sourceAnchor,
     *          target,
     *          targetAnchor,
     *      }
     */

  }, {
    key: "_paint",

    /*
     *  paint
     */
    value: function _paint(node) {
      this.mainCanvas._paint(node);
    }
    /*
     *  events
     */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var event = new _event__WEBPACK_IMPORTED_MODULE_1__["default"]({
        rect: this.config
      });
      event.add(this.oItemPanel, 'mousedown', this._beginAddNode.bind(this));
      event.add(this.oPage, 'mousemove', this._mouseMove.bind(this)); // event.add(this.oContainer, 'mouseup', this._mouseUp.bind(this))

      event.add(this.oPage, 'mouseleave', this._mouseLeave.bind(this));
      this.event = event;
    }
  }, {
    key: "_beginAddNode",
    value: function _beginAddNode(e) {
      var o = e.target;
      var shape = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getAttr"])(o, 'data-shape');

      if (!shape) {
        return;
      }

      this.isMouseDown = true;
      this.mouseDownType = 'add-node';
      this.selectedShape = this.shapes[shape];
      console.log(this.selectedShape);
    } // mouse move

  }, {
    key: "_mouseMove",
    value: function _mouseMove(e) {
      var x = e.offsetX,
          y = e.offsetY;

      if (this.isMouseDown) {
        switch (this.mouseDownType) {
          case 'add-node':
            this.dynamicCanvas._paint(_objectSpread({}, this.selectedShape, {
              x: x,
              y: y
            }));

            break;

          case 'move-node':
            console.log('moving node');
            break;
        }
      }
    }
  }, {
    key: "_mouseLeave",
    value: function _mouseLeave() {
      this.isMouseDown = false;
    }
  }, {
    key: "_mouseUp",
    value: function _mouseUp(e) {
      this.isMouseDown = false;
    }
  }]);

  return Editor;
}();

var editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel'
});

for (var shape in _data_dag_shapes__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  editor.registerShape(shape, _data_dag_shapes__WEBPACK_IMPORTED_MODULE_3__["default"][shape]);
}

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventHandler = /*#__PURE__*/function () {
  function EventHandler(_ref) {
    var rect = _ref.rect;

    _classCallCheck(this, EventHandler);

    _defineProperty(this, "mobileEvent", {
      'mousedown': 'touchstart',
      'mouseup': 'touchend',
      'mousemove': 'touchmove'
    });

    var UA = window && window.navigator.userAgent || '';
    this.isMobile = !!UA.toLowerCase().match(/iphone|mobile|andriod/);
    this.baseRect = rect;

    if (this.isMobile) {
      document.body.addEventListener('touchmove', function (e) {
        e.preventDefault();
      }, {
        passive: false
      });
    }
  }

  _createClass(EventHandler, [{
    key: "add",
    value: function add(dom, ev, fn) {
      var _this = this;

      ev = this.isMobile ? this.mobileEvent[ev] || ev : ev;
      dom.addEventListener(ev, function (e) {
        if (_this.isMobile) {
          var t = ev === 'touchend' ? e['changedTouches'][0] : e['touches'][0];
          t.offsetX = t.clientX - _this.baseRect.left;
          t.offsetY = t.clientY - _this.baseRect.top;
          fn(t);
        } else {
          fn(e);
        }
      });
    }
  }]);

  return EventHandler;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventHandler);

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map