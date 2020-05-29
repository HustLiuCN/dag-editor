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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mind.js");
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
/*! exports provided: getDom, getDomList, createDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDom", function() { return getDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomList", function() { return getDomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDom", function() { return createDom; });
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

/***/ }),

/***/ "./lib/tree.js":
/*!*********************!*\
  !*** ./lib/tree.js ***!
  \*********************/
/*! exports provided: getLeavesCount, figureNodeLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeavesCount", function() { return getLeavesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "figureNodeLevel", function() { return figureNodeLevel; });
function getLeavesCount(tree) {
  if (tree.count !== undefined) {
    return tree.count;
  }

  tree.count = 0;
  var children = tree.children;

  if (!children) {
    tree.count++;
  } else {
    for (var i = 0, n = children.length; i < n; i++) {
      tree.count += getLeavesCount(children[i]);
    }
  }

  return tree.count;
}
function figureNodeLevel(node) {
  var lvl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  node.level = lvl;
  node.count = getLeavesCount(node);

  if (!node.children) {
    return false;
  }

  for (var i = 0, n = node.children.length; i < n; i++) {
    figureNodeLevel(node.children[i], lvl + 1);
  }
}

/***/ }),

/***/ "./mock-data/mind-map-data.js":
/*!************************************!*\
  !*** ./mock-data/mind-map-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DATA = {
  text: 'Platform',
  children: [// 实验相关
  {
    text: '实验',
    children: [{
      text: 'DAG图',
      children: [{
        text: '@antV/g6-editor',
        type: 'tech'
      }, {
        text: '定制化UI',
        children: [{
          text: '原始API延伸',
          type: 'tech'
        }, {
          text: '上层canvas自定义',
          type: 'tech'
        }]
      }, {
        text: 'Tensorflow',
        type: 'todo',
        children: [{
          text: '深度网络可视化',
          type: 'tech'
        }]
      }, {
        text: '更多框架接入/拓展',
        type: 'todo'
      }]
    }, {
      text: '参数配置',
      children: [{
        text: '算子参数',
        children: [{
          text: '算子组件抽象',
          type: 'tech',
          children: [{
            text: 'UI封装',
            type: 'tech'
          }, {
            text: '逻辑解耦',
            type: 'tech'
          }]
        }, {
          text: '自定义算子',
          children: [{
            text: '自定义组件',
            type: 'tech'
          }, {
            text: '自定义参数',
            type: 'tech'
          }]
        }]
      }, {
        text: '实验参数'
      }]
    }, {
      text: '数据流',
      children: [{
        text: '数据继承',
        children: [{
          text: '准确性',
          children: [{
            text: '超集 --> 严格收敛',
            type: 'tech'
          }]
        }, {
          text: '高效性',
          children: [{
            text: '缓存',
            type: 'tech'
          }]
        }]
      }, {
        text: '数据验证',
        children: [{
          text: '表单验证',
          type: 'tech'
        }, {
          text: '逻辑验证',
          type: 'tech'
        }]
      }, {
        text: '数据扩展',
        children: [{
          text: '字段类型',
          type: 'tech'
        }, {
          text: '新字段',
          type: 'tech'
        }]
      }]
    }, {
      text: '版本/快照',
      children: [{
        text: '管理'
      }, {
        text: '切换'
      }]
    }]
  }, // 调度
  {
    text: '任务调度',
    children: [{
      text: '调度管理',
      children: [{
        text: '调度配置',
        children: [{
          text: '不同类型算子配置抽象',
          type: 'tech'
        }]
      }, {
        text: '调度周期',
        children: [{
          text: 'cron 表达式',
          children: [{
            text: '用户输入 ->(降低成本提高体验)-> 可视化配置',
            type: 'tech'
          }]
        }, {
          text: '其他',
          type: 'todo'
        }]
      }]
    }, {
      text: '任务执行',
      children: [{
        text: '部分执行调度',
        type: 'todo',
        children: [{
          text: '数据流分隔',
          type: 'tech'
        }, {
          text: '状态保存',
          type: 'tech'
        }]
      }, {
        text: '执行结果',
        children: [{
          text: '结果数据(动态)可视化',
          type: 'tech'
        }, {
          text: '模型评估/对比',
          type: 'todo'
        }]
      }, {
        text: '日志',
        children: [{
          text: '展示/筛选/过滤'
        }, {
          text: '排查/定位',
          type: 'todo',
          children: [{
            text: '定位到具体执行节点',
            type: 'tech'
          }, {
            text: '定位到具体结果展示',
            type: 'tech'
          }]
        }, {
          text: '重跑'
        }]
      }]
    }]
  } // 日志
  ]
};
/* harmony default export */ __webpack_exports__["default"] = (DATA);

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

/***/ }),

/***/ "./src/mind.js":
/*!*********************!*\
  !*** ./src/mind.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/dom */ "./lib/dom.js");
/* harmony import */ var _lib_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/tree */ "./lib/tree.js");
/* harmony import */ var _data_mind_map_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/mind-map-data */ "./mock-data/mind-map-data.js");
/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/color */ "./lib/color.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar */ "./src/toolbar.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./src/event.js");
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
        fill: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].blue,
        line: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].line,
        font: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].font
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

    if (!Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(container)) {
      throw Error('null canvas container found');
    }

    this.oCon = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])(container);
    this.options = _objectSpread({}, this.options, {}, options);

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
      var oCanvas = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('canvas');
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

      Object(_lib_tree__WEBPACK_IMPORTED_MODULE_1__["figureNodeLevel"])(this.data);
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

      var event = new _event__WEBPACK_IMPORTED_MODULE_5__["default"]({
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
      this.toolbar = new _toolbar__WEBPACK_IMPORTED_MODULE_4__["default"]({
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
      var oBox = Object(_lib_dom__WEBPACK_IMPORTED_MODULE_0__["createDom"])('div', 'legends-container');
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

new Mind({
  data: _data_mind_map_data__WEBPACK_IMPORTED_MODULE_2__["default"],
  options: {
    toolbar: '#toolbar',
    legends: {
      // type: { name, color }
      'default': {
        name: '业务场景',
        color: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].blue
      },
      'tech': {
        name: '技术应用',
        color: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].green
      },
      'todo': {
        name: 'TODO',
        color: _lib_color__WEBPACK_IMPORTED_MODULE_3__["default"].red
      }
    },
    lineType: 'curve' // curve, polygon

  }
});

/***/ }),

/***/ "./src/toolbar.js":
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toolbar = /*#__PURE__*/function () {
  function Toolbar(_ref) {
    var selector = _ref.selector;

    _classCallCheck(this, Toolbar);

    _defineProperty(this, "events", {});

    this.oToolbar = document.querySelector(selector);

    this._bind();
  }

  _createClass(Toolbar, [{
    key: "registerCommands",
    value: function registerCommands(events) {
      this.events = _objectSpread({}, this.events, {}, events);
    }
  }, {
    key: "_bind",
    value: function _bind() {
      var _this = this;

      this.oToolbar.addEventListener('click', function (e) {
        var o = e.target;
        var command = o.getAttribute('data-command');

        if (!command) {
          return;
        }

        var fn = _this.events[command];
        fn && fn(e);
      });
    }
  }]);

  return Toolbar;
}();

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

/******/ });
//# sourceMappingURL=mind.js.map