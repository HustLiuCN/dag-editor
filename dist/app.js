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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./src/color.js\");\n/* harmony import */ var _check_if_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-if-in */ \"./src/check-if-in.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar R = 1;\n\nvar Editor =\n/*#__PURE__*/\nfunction () {\n  function Editor(options) {\n    _classCallCheck(this, Editor);\n\n    _defineProperty(this, \"isMoving\", false);\n\n    _defineProperty(this, \"movingType\", null);\n\n    _defineProperty(this, \"movingTarget\", null);\n\n    _defineProperty(this, \"hoverItem\", null);\n\n    _defineProperty(this, \"hoverAnchor\", null);\n\n    _defineProperty(this, \"itemList\", []);\n\n    _defineProperty(this, \"edgeList\", []);\n\n    _defineProperty(this, \"shapeList\", {});\n\n    this._initDom(options);\n\n    this._bindEvent();\n  }\n\n  _createClass(Editor, [{\n    key: \"_initDom\",\n    value: function _initDom(_ref) {\n      var _ref$container = _ref.container,\n          container = _ref$container === void 0 ? '#container' : _ref$container,\n          _ref$toolbar = _ref.toolbar,\n          toolbar = _ref$toolbar === void 0 ? '#toolbar' : _ref$toolbar,\n          _ref$canvas = _ref.canvas,\n          canvas = _ref$canvas === void 0 ? '#editor' : _ref$canvas,\n          _ref$panel = _ref.panel,\n          panel = _ref$panel === void 0 ? '#panel' : _ref$panel;\n      this.oContainer = document.querySelector('#container');\n      this.oMenu = document.querySelector('#menu');\n      this.oPanel = document.querySelector('#panel'); // canvas\n\n      this.oCanvasContainer = document.querySelector('#editor');\n      var rect = this.oCanvasContainer.getBoundingClientRect();\n      this.rect = rect; // paint canvas\n\n      var oCanvas = document.createElement('canvas');\n      oCanvas.width = rect.width;\n      oCanvas.height = rect.height;\n      oCanvas.style.backgroundColor = '#F3F4F8';\n      this.oCanvasContainer.appendChild(oCanvas);\n      this.oCanvas = oCanvas;\n      this.ctx = oCanvas.getContext('2d');\n      this.ctx.fillStyle = '#fff';\n      this.ctx.font = \"\".concat(R > 1 ? 20 : 14, \"px sans-serif\");\n      this.ctx.textAlign = 'center';\n      this.ctx.textBaseline = 'middle';\n      this.ctx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['border'];\n      var oMoveCanvas = document.createElement('canvas');\n      oMoveCanvas.width = rect.width;\n      oMoveCanvas.height = rect.height;\n      oMoveCanvas.style.pointerEvents = 'none';\n      oMoveCanvas.style.backgroundColor = 'transparent';\n      this.oCanvasContainer.appendChild(oMoveCanvas);\n      this.moveCtx = oMoveCanvas.getContext('2d');\n      this.moveCtx.lineJoin = 'round';\n    } // move property\n\n  }, {\n    key: \"_hover\",\n    value: function _hover(e) {\n      var itemList = this.itemList,\n          edgeList = this.edgeList;\n      var hoverItem = null;\n\n      for (var i = itemList.length - 1; i >= 0; i--) {\n        if (Object(_check_if_in__WEBPACK_IMPORTED_MODULE_1__[\"checkInRect\"])(e, itemList[i])) {\n          hoverItem = itemList[i];\n          break;\n        }\n      }\n\n      if (hoverItem) {\n        // 鼠标实际在 item 范围内\n        this.hoverItem = hoverItem;\n      } else if (!this.hoverAnchor) {\n        // 鼠标虽然不在 item 范围内但还在 item 的 anchor 内\n        this.hoverItem = null;\n      }\n\n      this.moveCtx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['blue']; // TODO 逻辑合并?\n\n      if (this.hoverItem) {\n        // 鼠标在 item 或 item.anchor 内\n        this._paintHoverItem(this.hoverItem);\n\n        var _this$hoverItem = this.hoverItem,\n            x = _this$hoverItem.x,\n            y = _this$hoverItem.y,\n            w = _this$hoverItem.w,\n            h = _this$hoverItem.h,\n            anchors = _this$hoverItem.anchors;\n\n        if (anchors.length) {\n          // 这时候再判断鼠标是否在 anchor 内\n          var hoverAnchor = null;\n\n          for (var _i = 0; _i < anchors.length; _i++) {\n            var anchor = anchors[_i];\n\n            var _anchor = _slicedToArray(anchor, 2),\n                ox = _anchor[0],\n                oy = _anchor[1];\n\n            ox = x - w / 2 + w * ox;\n            oy = y - h / 2 + h * oy;\n\n            if (Object(_check_if_in__WEBPACK_IMPORTED_MODULE_1__[\"checkInCircle\"])(e, {\n              ox: ox,\n              oy: oy,\n              r: 8\n            })) {\n              hoverAnchor = anchor;\n\n              this._paintHoverAnchor(ox, oy, 'solid');\n            } else {\n              this._paintHoverAnchor(ox, oy, 'empty');\n            }\n          }\n\n          this.hoverAnchor = hoverAnchor;\n        } else {\n          this.hoverAnchor = null;\n        }\n      } else if (!this.hoverAnchor) {\n        this._clearHover();\n      }\n    }\n  }, {\n    key: \"_paintItem\",\n    value: function _paintItem(item) {\n      var ctx = this.ctx;\n      var x = item.x,\n          y = item.y,\n          w = item.w,\n          h = item.h,\n          text = item.text,\n          z = item.z,\n          c = item.c;\n      var sx = x - w / 2;\n      var sy = y - h / 2; // rect\n\n      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['shadow'];\n      ctx.fillRect(sx + 1, sy + 2, w, h);\n      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['white'];\n      ctx.fillRect(sx, sy, w, h); // border\n\n      ctx.fillStyle = c;\n      ctx.fillRect(sx, sy, 6, h + 1); // ctx.save()\n\n      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['font'];\n      ctx.fillText(text, x, y); // ctx.restore()\n    }\n  }, {\n    key: \"_paintMovingItem\",\n    value: function _paintMovingItem(item) {\n      // paint moving item\n      var ctx = this.moveCtx;\n      ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height);\n      var x = item.x,\n          y = item.y,\n          w = item.w,\n          h = item.h;\n      ctx.beginPath();\n      ctx.moveTo(x - w / 2, y - h / 2);\n      ctx.lineTo(x + w / 2, y - h / 2);\n      ctx.lineTo(x + w / 2, y + h / 2);\n      ctx.lineTo(x - w / 2, y + h / 2);\n      ctx.lineTo(x - w / 2, y - h / 2);\n      ctx.stroke();\n      ctx.closePath();\n      ctx.fillRect(x - w / 2, y - h / 2, w, h);\n    }\n  }, {\n    key: \"_paintHoverItem\",\n    value: function _paintHoverItem(item) {\n      // paint hover item\n      var ctx = this.moveCtx;\n      ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height);\n      var x = item.x,\n          y = item.y,\n          w = item.w,\n          h = item.h,\n          input = item.input,\n          output = item.output;\n      ctx.strokeRect(x - w / 2, y - h / 2, w, h);\n    }\n  }, {\n    key: \"_paintHoverAnchor\",\n    value: function _paintHoverAnchor(x, y, type) {\n      var ctx = this.moveCtx;\n      ctx.beginPath();\n      ctx.arc(x, y, 4, 0, Math.PI * 2);\n      ctx.fillStyle = type === 'solid' ? _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['blue'] : _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['white'];\n      ctx.fill();\n      ctx.stroke();\n      ctx.closePath();\n    } // item, edge, shape\n\n  }, {\n    key: \"_addItem\",\n    value: function _addItem(item) {\n      var itemList = this.itemList;\n      var n = itemList.length;\n      item.z = n > 0 ? itemList[n - 1]['z'] : 1;\n      itemList.push(item); // if (!n) {\n      // \titem.z = 1\n      // \titemList.push(item)\n      // \treturn item\n      // }\n      // let maxIndex = Math.max.apply(0, itemList.map(i => i.z))\n      // item.z = maxIndex + 1\n      // let p\n      // for (let i = 0; i < n; i ++) {\n      // \tp = i\n      // \tif (itemList[i]['x'] > item.x) {\n      // \t\tbreak\n      // \t}\n      // \tif (itemList[i]['x'] === item.x && item[i]['y'] > item.y) {\n      // \t\tbreak\n      // \t}\n      // }\n      // itemList.splice(p, 1, item, itemList[p])\n    } // event\n\n  }, {\n    key: \"_bindEvent\",\n    value: function _bindEvent() {\n      var _this = this;\n\n      // this.oCanvasContainer.addEventListener('mousemove', e => {\n      // \tconsole.log(e)\n      // })\n      // 从 menu 开始的点击, 只能是添加 item 事件\n      this.oMenu.addEventListener('mousedown', function (e) {\n        var oItem = e.target;\n\n        if (!oItem.classList.contains('menu-item')) {\n          return false;\n        }\n\n        _this.isMoving = true;\n\n        _this._startAddItem(oItem);\n      }); // 从 canvas 开始的点击, 可能是移动/选择/拖边\n\n      this.oCanvasContainer.addEventListener('click', function (e) {\n        console.log('xxx');\n      });\n      this.oCanvasContainer.addEventListener('mousemove', function (e) {\n        var x = e.offsetX,\n            y = e.offsetY;\n\n        if (_this.isMoving) {\n          // TODO mousemove 出画布区域\n          // if (x < 2 || x > this.rect.width - 2 || y < 2 || y > this.rect.height - 2) {\n          // \tthis.isMoving = false\n          // \tthis._clearMoving()\n          // } else {\n          _this._move({\n            x: x,\n            y: y\n          }); // }\n\n        } else {\n          _this._hover({\n            x: x,\n            y: y\n          });\n        }\n      });\n      this.oContainer.addEventListener('mouseup', function (e) {\n        _this._endMove(e);\n      });\n    } // move event\n\n  }, {\n    key: \"_startAddItem\",\n    value: function _startAddItem(dom) {\n      this.movingType = 'new-item';\n      var shape = dom.getAttribute('data-shape');\n      this.movingTarget = this.shapeList[shape];\n      var ctx = this.moveCtx;\n      ctx.setLineDash([7, 3]);\n      ctx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR\"]['blue'];\n      ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"COLOR_RGBA\"]['blue'];\n    }\n  }, {\n    key: \"_startMoveItem\",\n    value: function _startMoveItem() {}\n  }, {\n    key: \"_move\",\n    value: function _move(_ref2) {\n      var x = _ref2.x,\n          y = _ref2.y;\n      var item = this.movingTarget;\n\n      if (this.movingType === 'new-item') {\n        this._paintMovingItem(_objectSpread({\n          x: x,\n          y: y\n        }, item));\n      }\n    }\n  }, {\n    key: \"_endMove\",\n    value: function _endMove(e) {\n      this.isMoving = false;\n      var movingType = this.movingType,\n          movingTarget = this.movingTarget,\n          rect = this.rect;\n      var x = e.offsetX,\n          y = e.offsetY;\n\n      if (movingType === 'new-item') {\n        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {\n          var item = _objectSpread({\n            x: x,\n            y: y\n          }, movingTarget);\n\n          this._paintItem(item);\n\n          this._addItem(item);\n\n          this._clearMoving();\n        }\n      }\n    }\n  }, {\n    key: \"_clearMoving\",\n    value: function _clearMoving() {\n      var ctx = this.moveCtx,\n          oCanvas = this.oCanvas;\n      ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);\n      this.movingType = null;\n      this.movingTarget = null;\n      ctx.setLineDash([]);\n    }\n  }, {\n    key: \"_clearHover\",\n    value: function _clearHover() {\n      var ctx = this.moveCtx,\n          oCanvas = this.oCanvas;\n      ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);\n      this.hoverItem = null;\n      this.hoverAnchor = null;\n    } // register\n\n  }, {\n    key: \"_register\",\n    value: function _register(shape, item) {\n      this.shapeList[shape] = item;\n    }\n  }]);\n\n  return Editor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/check-if-in.js":
/*!****************************!*\
  !*** ./src/check-if-in.js ***!
  \****************************/
/*! exports provided: checkInRect, checkInCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInRect\", function() { return checkInRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInCircle\", function() { return checkInCircle; });\nfunction checkInRect(_ref, rect) {\n  var x = _ref.x,\n      y = _ref.y;\n  var ox = rect.x,\n      oy = rect.y,\n      w = rect.w,\n      h = rect.h;\n  return Math.abs(x - ox) <= w / 2 && Math.abs(y - oy) <= h / 2;\n}\nfunction checkInCircle(_ref2, _ref3) {\n  var x = _ref2.x,\n      y = _ref2.y;\n  var ox = _ref3.ox,\n      oy = _ref3.oy,\n      r = _ref3.r;\n  return Math.pow(ox - x, 2) + Math.pow(oy - y, 2) <= Math.pow(r, 2);\n}\n\n//# sourceURL=webpack:///./src/check-if-in.js?");

/***/ }),

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/*! exports provided: COLOR, COLOR_RGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR\", function() { return COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_RGBA\", function() { return COLOR_RGBA; });\nvar COLOR = {\n  'white': '#ffffff',\n  'blue': '#2196f3',\n  'font': '#333333',\n  'border': '#333333',\n  'shadow': 'rgba(0, 0, 0, 0.1)'\n};\nvar COLOR_RGBA = {\n  'blue': 'rgba(33, 150, 243, 0.05)'\n};\n\n//# sourceURL=webpack:///./src/color.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape */ \"./src/shape.js\");\n/*\n *\tDAG-Editor @liupd\n */\n\n\nvar MyEditor = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({// toolbar: '#toolbar'\n});\n\nfor (var s in _shape__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n  MyEditor._register(s, _shape__WEBPACK_IMPORTED_MODULE_1__[\"default\"][s]);\n}\n\nconsole.log(MyEditor);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar w = 180;\nvar h = 40;\nvar c = '#42a5f5';\nvar shapes = {\n  'shape-001': {\n    w: w,\n    h: h,\n    c: c,\n    text: 'Shape 001',\n    anchors: [[0.5, 0, 'input'], // [x, y, type]\n    [0.5, 1, 'output']]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (shapes);\n\n//# sourceURL=webpack:///./src/shape.js?");

/***/ })

/******/ });