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

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: randomID, checkInNode, getAnchorPos, checkInNodeAnchor, checkInCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomID", function() { return randomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInNode", function() { return checkInNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnchorPos", function() { return getAnchorPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInNodeAnchor", function() { return checkInNodeAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInCircle", function() { return checkInCircle; });
function randomID() {
  return Date.now().toString(16);
}
function checkInNode(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var nx = _ref2.x,
      ny = _ref2.y,
      w = _ref2.w,
      h = _ref2.h;
  return Math.abs(x - nx) <= w / 2 && Math.abs(y - ny) <= h / 2;
}
function getAnchorPos(node, anchor) {
  var x = node.x,
      y = node.y,
      w = node.w,
      h = node.h;
  var x0 = x - w / 2;
  var y0 = y - h / 2;
  return {
    x: x0 + anchor[0] * w,
    y: y0 + anchor[1] * h
  };
}
function checkInNodeAnchor(_ref3, node) {
  var x = _ref3.x,
      y = _ref3.y;
  var anchors = node.anchors;

  for (var i = 0, n = anchors.length; i < n; i++) {
    var anchor = anchors[i];
    var pos = getAnchorPos(node, anchor);

    if (checkInCircle({
      x: x,
      y: y
    }, pos)) {
      return [node, i];
    }
  }

  return null;
}
function checkInCircle(_ref4, _ref5) {
  var x = _ref4.x,
      y = _ref4.y;
  var cx = _ref5.x,
      cy = _ref5.y;
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  return Math.abs(x - cx) <= r && Math.abs(y - cy) <= r;
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
/* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/color */ "./src/color.js");

var w = 180;
var h = 40;
var c = _src_color__WEBPACK_IMPORTED_MODULE_0__["default"]['blue'];
var shapes = {
  'shape-001': {
    w: w,
    h: h,
    c: c,
    name: 'Shape 001',
    anchors: [[0.5, 0, 'input'], // [x, y, type]
    [0.5, 1, 'output']]
  },
  'Test-Shape-': {
    w: w,
    h: h,
    c: _src_color__WEBPACK_IMPORTED_MODULE_0__["default"]['green'],
    name: 'Test-Shape-',
    anchors: [[0.5, 0, 'input'], [0.3, 1, 'output'], [0.7, 1, 'output']]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (shapes);

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/dom */ "./lib/dom.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/utils */ "./lib/utils.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _data_dag_shapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data/dag-shapes */ "./mock-data/dag-shapes.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color */ "./src/color.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    _defineProperty(this, "eventList", [['oItemPanel', 'mousedown', '_beginAddNode'], ['oItemPanel', 'mouseup', '_mouseUp'], ['oPage', 'mousedown', '_mouseDownOnPage'], ['oPage', 'mousemove', '_mouseMove'], ['oPage', 'mouseleave', '_mouseLeave'], ['oPage', 'mouseup', '_mouseUpOnPage'], ['oPage', 'contextmenu', '_contextMenu']]);

    _defineProperty(this, "callbackList", ['selectedNodeChange']);

    _defineProperty(this, "isMouseDown", false);

    _defineProperty(this, "mouseDownType", null);

    _defineProperty(this, "selectedShape", null);

    _defineProperty(this, "__selectedNode", null);

    _defineProperty(this, "__selectedAnchor", null);

    _defineProperty(this, "anchorStartPos", {});

    _defineProperty(this, "hoverNode", null);

    _defineProperty(this, "hoverAnchor", null);

    _defineProperty(this, "mouseEventStart", {
      x: 0,
      y: 0
    });

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
      this.mainCanvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__["default"](oCanvas, {
        ratio: ratio
      });
      this.dynamicCanvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__["default"](oDynamicCanvas, {
        ratio: ratio,
        fillStyle: _color__WEBPACK_IMPORTED_MODULE_5__["default"].lingthBlue,
        strokeStyle: _color__WEBPACK_IMPORTED_MODULE_5__["default"].blue
      });
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
    key: "_addNode",
    value: function _addNode(node) {
      this.nodes.push(_objectSpread({}, node, {
        id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["randomID"])()
      }));
      this.selectedNode = this.nodes[this.nodes.length - 1]; // this._render()
    }
  }, {
    key: "_updateNode",
    value: function _updateNode(node) {
      var i = this.nodes.findIndex(function (n) {
        return n.id === node.id;
      });

      if (i < 0) {
        return;
      } // node.x += dx
      // node.y += dy


      this.nodes.splice(i, 1);
      this.nodes.push(node); // this._render()
    }
  }, {
    key: "_addEdge",
    value: function _addEdge(_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 2),
          source = _ref4[0],
          sourceAnchor = _ref4[1];

      var _ref5 = _slicedToArray(_ref3, 2),
          target = _ref5[0],
          targetAnchor = _ref5[1];

      var edge = {
        source: source.id,
        sourceAnchor: sourceAnchor,
        target: target.id,
        targetAnchor: targetAnchor
      };
      var i = this.edges.findIndex(function (e) {
        return e.source === source.id && e.sourceAnchor === sourceAnchor && e.target === target.id && e.targetAnchor === targetAnchor;
      });

      if (i < 0) {
        this.edges.push(edge);
      }

      console.log(this.edges);
    }
  }, {
    key: "_getSelected",
    value: function _getSelected(_ref6) {
      var x = _ref6.x,
          y = _ref6.y;
      var nodes = this.nodes;

      for (var i = nodes.length; i > 0; i--) {
        var node = nodes[i - 1];

        if (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["checkInNode"])({
          x: x,
          y: y
        }, node)) {
          return node;
        }
      }

      return null;
    }
    /*
     *  paint
     *      render: render all nodes & edges on main canvas, clear first
     */

  }, {
    key: "_render",
    value: function _render() {
      var _this = this;

      this.mainCanvas._clear();

      this.nodes.forEach(function (node) {
        _this.mainCanvas._paintNode(node, _this.selectedNode && _this.selectedNode.id === node.id);
      });
      this.edges.forEach(function (_ref7) {
        var source = _ref7.source,
            sourceAnchor = _ref7.sourceAnchor,
            target = _ref7.target,
            targetAnchor = _ref7.targetAnchor;

        var start = _this.nodes.find(function (n) {
          return n.id === source;
        });

        var end = _this.nodes.find(function (n) {
          return n.id === target;
        });

        _this.mainCanvas._paintEdge(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(start, start.anchors[sourceAnchor]), Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(end, end.anchors[targetAnchor]));
      });
    }
    /*
     *  events
     */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var event = new _event__WEBPACK_IMPORTED_MODULE_2__["default"]({
        rect: this.config
      });

      var _iterator = _createForOfIteratorHelper(this.eventList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ev = _step.value;
          event.add(this[ev[0]], ev[1], this[ev[2]].bind(this));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.event = event;
    }
  }, {
    key: "on",
    value: function on(ev, cb) {
      if (this.callbackList.indexOf(ev) > -1) {
        this[ev] = cb;
      }
    }
  }, {
    key: "_beginAddNode",
    // mouse down on itempanel
    value: function _beginAddNode(e) {
      var o = e.target;
      var shape = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getAttr"])(o, 'data-shape');

      if (!shape) {
        return;
      }

      this.isMouseDown = true;
      this.mouseDownType = 'add-node';
      this.selectedShape = this.shapes[shape];
    } // mouse down on page

  }, {
    key: "_mouseDownOnPage",
    value: function _mouseDownOnPage(e) {
      this.isMouseDown = true;
      var x = e.offsetX,
          y = e.offsetY;
      this.mouseEventStart = {
        x: x,
        y: y
      };

      if (this.hoverNode) {
        this.selectedNode = this.hoverNode;

        if (this.hoverAnchor) {
          this.mouseDownType = 'move-edge';
          this.selectedAnchor = this.hoverAnchor;
        } else {
          this.mouseDownType = 'move-node';
          this.selectedAnchor = null;
        }
      } else {
        this.selectedNode = null;
        return;
      }
    } // mouse move

  }, {
    key: "_mouseMove",
    value: function _mouseMove(e) {
      var _this2 = this;

      this.dynamicCanvas._clear();

      var x = e.offsetX,
          y = e.offsetY;

      if (this.isMouseDown) {
        // move
        switch (this.mouseDownType) {
          case 'add-node':
            this.dynamicCanvas._paintNode(_objectSpread({}, this.selectedShape, {
              x: x,
              y: y
            }));

            break;

          case 'move-node':
            var dx = x - this.mouseEventStart.x;
            var dy = y - this.mouseEventStart.y;

            this.dynamicCanvas._paintNode(_objectSpread({}, this.selectedNode, {
              x: this.selectedNode.x + dx,
              y: this.selectedNode.y + dy
            }));

            break;

          case 'move-edge':
            this.nodes.forEach(function (node) {
              if (node.id !== _this2.selectedNode.id && node.anchors) {
                _this2.dynamicCanvas._paintActiveAnchors(node);
              }
            });

            this.dynamicCanvas._paintEdge(this.anchorStartPos, {
              x: x,
              y: y
            });

            break;
        }
      } else {
        // hover
        var hoverNode = this._getSelected({
          x: x,
          y: y
        });

        if (this.hoverNode) {
          var hoverAnchor = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["checkInNodeAnchor"])({
            x: x,
            y: y
          }, this.hoverNode);
          this.hoverAnchor = hoverAnchor;

          if (!hoverAnchor) {
            this.hoverNode = hoverNode;
          }
        } else {
          this.hoverAnchor = null;
          this.hoverNode = hoverNode;
        }

        this.hoverNode && this.dynamicCanvas._paintNode(this.hoverNode, true);
      }
    }
  }, {
    key: "_mouseLeave",
    value: function _mouseLeave() {
      this._mouseUp(); // this.dynamicCanvas._clear()

    }
  }, {
    key: "_mouseUpOnPage",
    value: function _mouseUpOnPage(e) {
      var _this3 = this;

      var x = e.offsetX,
          y = e.offsetY;

      if (!this.isMouseDown) {
        return;
      }

      switch (this.mouseDownType) {
        case 'add-node':
          this._addNode(_objectSpread({}, this.selectedShape, {
            x: x,
            y: y
          })); // this._mouseUp()


          break;

        case 'move-node':
          this._updateNode(_objectSpread({}, this.selectedNode, {
            x: this.selectedNode.x + x - this.mouseEventStart.x,
            y: this.selectedNode.y + y - this.mouseEventStart.y
          })); // this._mouseUp()


          break;

        case 'move-edge':
          this.nodes.forEach(function (node) {
            if (node.id !== _this3.selectedNode.id && node.anchors) {
              node.anchors.forEach(function (anchor, i) {
                if (anchor[2] === 'input') {
                  var pos = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(node, anchor);

                  if (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["checkInCircle"])({
                    x: x,
                    y: y
                  }, pos, 12)) {
                    _this3._addEdge(_this3.selectedAnchor, [node, i]);
                  }
                }
              });
            }
          });
          break;

        default:
          // this._render()
          // this._mouseUp()
          break;
      }

      this._render();

      this._mouseUp();
    }
  }, {
    key: "_mouseUp",
    value: function _mouseUp() {
      this.isMouseDown = false;
      this.mouseDownType = null;
      this.selectedShape = null;

      this.dynamicCanvas._clear();
    }
  }, {
    key: "_contextMenu",
    value: function _contextMenu(e) {
      e.preventDefault();
      console.log('===');
    }
  }, {
    key: "selectedNode",
    set: function set(node) {
      // TODO
      this.__selectedNode = node;
      this.hoverNode = null;
      this.selectedNodeChange && this.selectedNodeChange(node);
    },
    get: function get() {
      return this.__selectedNode;
    }
  }, {
    key: "selectedAnchor",
    set: function set(anchor) {
      this.__selectedAnchor = anchor;

      if (!anchor) {
        this.anchorStartPos = {};
      } else {
        var _anchor = _slicedToArray(anchor, 2),
            node = _anchor[0],
            i = _anchor[1];

        this.anchorStartPos = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(node, node.anchors[i]);
      }
    },
    get: function get() {
      return this.__selectedAnchor;
    }
  }]);

  return Editor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/color.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/utils */ "./lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Canvas = /*#__PURE__*/function () {
  function Canvas(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Canvas);

    this.canvas = canvas;
    var ctx = canvas.getContext('2d');
    this.ratio = options.ratio || 1;
    ctx.fillStyle = options.fillStyle || _color__WEBPACK_IMPORTED_MODULE_0__["default"].white;
    ctx.strokeStyle = options.strokeStyle || _color__WEBPACK_IMPORTED_MODULE_0__["default"].line;
    ctx.font = "".concat(Math.max(this.ratio * 10, 12), "px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif");
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ctx = ctx;
  }

  _createClass(Canvas, [{
    key: "_paintNode",
    value: function _paintNode(node, isSelected) {
      var _this = this;

      var r = this.ratio,
          ctx = this.ctx;
      var x = node.x,
          y = node.y,
          w = node.w,
          h = node.h;
      x *= r;
      y *= r;
      w *= r;
      h *= r;
      ctx.fillRect(x - w / 2, y - h / 2, w, h);

      if (isSelected) {
        ctx.save();
        ctx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__["default"].blue;
        ctx.lineWidth = 2;
        ctx.strokeRect(x - w / 2, y - h / 2, w, h); // anchor

        if (node.anchors) {
          node.anchors.forEach(function (anchor) {
            var pos = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(node, anchor);

            _this._paintAnchor(pos);
          });
        }

        ctx.restore();
      } else {
        ctx.strokeRect(x - w / 2, y - h / 2, w, h);
      }

      ctx.save();
      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__["default"].font;
      ctx.fillText(node.name || node.shape, x, y);
      ctx.restore();
    }
  }, {
    key: "_paintAnchor",
    value: function _paintAnchor(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var ctx = this.ctx,
          r = this.ratio;
      x *= r;
      y *= r;
      ctx.save();
      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__["default"].white;
      ctx.beginPath();
      ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
      ctx.stroke();
    }
  }, {
    key: "_paintActiveAnchors",
    value: function _paintActiveAnchors(node) {
      var _this2 = this;

      var anchors = node.anchors;
      anchors.forEach(function (anchor) {
        if (anchor[2] === 'input') {
          var pos = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getAnchorPos"])(node, anchor);

          _this2._paintActiveAnchor(pos);
        }
      });
    }
  }, {
    key: "_paintActiveAnchor",
    value: function _paintActiveAnchor(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var ctx = this.ctx,
          r = this.ratio;
      x *= r;
      y *= r;
      ctx.beginPath();
      ctx.arc(x, y, 12 * r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.save();
      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__["default"].white;
      ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "_paintEdge",
    value: function _paintEdge(_ref3, _ref4) {
      var sx = _ref3.x,
          sy = _ref3.y;
      var ex = _ref4.x,
          ey = _ref4.y;
      var ctx = this.ctx,
          r = this.ratio;
      sx *= r;
      sy *= r;
      ex *= r;
      ey *= r;
      ctx.save();
      ctx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__["default"].line;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      var diffY = Math.abs(ey - sy);
      var cp1 = [sx, sy + diffY / 2];
      var cp2 = [ex, ey - diffY / 2];
      ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey); // ctx.lineTo(ex, ey)

      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return Canvas;
}();

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
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
  red: '#ffcdd2',
  lingthBlue: '#e3f2fd',
  white: '#ffffff'
};
/* harmony default export */ __webpack_exports__["default"] = (COLOR);

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
/* harmony import */ var _data_dag_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data/dag-shapes */ "./mock-data/dag-shapes.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/base.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *  dag-editor
 *  author: liupeidong@gmail.com
 */


 // example

var editor = new _base__WEBPACK_IMPORTED_MODULE_2__["default"]({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel'
});
var tpl = "<h4>TODO List</h4>\n            <ul>\n                <li>1. delete node & edge</li>\n                <li>2. edge check</li>\n\t\t\t\t<li>3. zoom-in & zoom-out</li>\n\t\t\t\t<li>4. more callback</li>\n            </ul>";
editor.on('selectedNodeChange', function (node) {
  var oPanel = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#panel');

  if (node) {
    oPanel.innerHTML = "";
    var oTitle = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('h4');
    oTitle.innerHTML = '节点名称';
    var oInput = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('input');
    oPanel.appendChild(oTitle);
    oPanel.appendChild(oInput);
    oInput.addEventListener('change', function (e) {
      var val = e.target.value;

      var newNode = _objectSpread({}, node, {
        name: val
      });

      editor._updateNode(newNode);

      editor._render();
    });
  } else {
    oPanel.innerHTML = tpl;
  }
});

for (var shape in _data_dag_shapes__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  editor.registerShape(shape, _data_dag_shapes__WEBPACK_IMPORTED_MODULE_1__["default"][shape]);
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