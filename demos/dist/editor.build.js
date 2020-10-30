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
/* harmony import */ var _src_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/dom */ "./src/dom.ts");
/* harmony import */ var _src_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_data_dag_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock-data/dag-shapes */ "./mock-data/dag-shapes.js");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/index */ "./src/index.ts");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./demos/js/store.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
*  dag-editor
*  author: liupeidong@gmail.com
*/



 // example

var editor = new _src_index__WEBPACK_IMPORTED_MODULE_2__["Editor"]({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel'
}); // example data store

var store = new _store__WEBPACK_IMPORTED_MODULE_3__["Store"]({
  editor: editor
}); // new node added

editor.on('nodeAdded', function (node) {
  console.log('node added', node);
}); // selected node change

editor.on('selectedNodeChange', function (node) {
  console.log('selected node changed', node);
  var oNodePanel = Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#node-panel');
  var oCanvasPanel = Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#canvas-panel');

  if (node) {
    oNodePanel.classList.add('show');
    oCanvasPanel.classList.remove('show');
    store.currentNode = node;
  } else {
    oNodePanel.classList.remove('show');
    oCanvasPanel.classList.add('show');
  }
}); // node deleted

editor.on('nodeDeleted', function (nodeId) {
  console.log("node deleted: node-id: ".concat(nodeId));
}); // new edge added

editor.on('edgeAdded', function (edge) {
  console.log('edge added', edge);
}); // edge deleted

editor.on('edgeDeleted', function (edge) {
  console.log('edge deleted', edge);
});

var _iterator = _createForOfIteratorHelper(_mock_data_dag_shapes__WEBPACK_IMPORTED_MODULE_1__["default"]),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var shape = _step.value;
    editor.registerShape(shape.shape, shape);
  } // check source data

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#source-btn').addEventListener('click', function () {
  editor.resize();
  Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#code').innerHTML = JSON.stringify(editor.getData());
});
Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#export-btn').addEventListener('click', function () {
  console.log('===save===');
  editor.saveFile().then(function (imgURL) {
    Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#preview').src = imgURL;
  });
});

/***/ }),

/***/ "./demos/js/store.js":
/*!***************************!*\
  !*** ./demos/js/store.js ***!
  \***************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _src_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/dom */ "./src/dom.ts");
/* harmony import */ var _src_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_dom__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // example to show Editor callback and data binding

var Store = /*#__PURE__*/function () {
  function Store(_ref) {
    var editor = _ref.editor;

    _classCallCheck(this, Store);

    this.editor = editor;
    this.oName = Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#node-name');
    this.oW = Object(_src_dom__WEBPACK_IMPORTED_MODULE_0__["getDom"])('#node-width');

    this._bind();
  }

  _createClass(Store, [{
    key: "_bind",
    value: function _bind() {
      var _this = this;

      this.oName.addEventListener('change', function () {
        _this.currentNode.name = _this.oName.value.trim();

        _this.editor.repaint();
      });
      this.oW.addEventListener('change', function () {
        _this.currentNode.w = Number(_this.oW.value.trim());

        _this.editor.repaint();
      });
    }
  }, {
    key: "currentNode",
    get: function get() {
      return this.__node;
    },
    set: function set(node) {
      this.__node = node;
      this.oName.value = node.name;
      this.oW.value = node.w.toString();
    }
  }]);

  return Store;
}();

/***/ }),

/***/ "./mock-data/dag-shapes.js":
/*!*********************************!*\
  !*** ./mock-data/dag-shapes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/color */ "./src/color.ts");
/* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_color__WEBPACK_IMPORTED_MODULE_0__);

var w = 160;
var h = 36;
var c = _src_color__WEBPACK_IMPORTED_MODULE_0___default.a['blue'];
var shapes = [{
  shape: 'shape-001',
  w: w,
  h: h,
  color: c,
  name: 'Node-ABC',
  // anchors: [
  // 	{ type: 'input' },
  // 	{ type: 'output' },
  // ],
  anchors: {
    input: 1,
    output: 1
  }
}, {
  shape: 'shape-002',
  w: w,
  h: h,
  color: _src_color__WEBPACK_IMPORTED_MODULE_0___default.a['green'],
  name: 'Node-XYZ',
  // anchors: [
  // 	[0.5, 0, 'input'],
  // 	[0.3, 1, 'output'],
  // 	[0.7, 1, 'output'],
  // ],
  anchors: {
    input: 1,
    output: 2
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (shapes);

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
class Canvas {
    constructor(cvs, { ratio = 1, fillStyle = color_1.default.white, strokeStyle = color_1.default.line, hasStore, }) {
        this.canvas = cvs;
        this.ratio = ratio;
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
        };
        // translate
        this.translateInfo = {
            x: 0,
            y: 0,
        };
    }
    translate(dx, dy) {
        const { ratio: r, ctx } = this;
        dx *= r;
        dy *= r;
        ctx.translate(dx, dy);
        this.translateInfo.x += dx;
        this.translateInfo.y += dy;
        console.log(`===translate: (${this.translateInfo.x}, ${this.translateInfo.y})===`);
    }
    transform(dx, dy) {
        const { ctx, ratio: r } = this;
        ctx.save();
        ctx.transform(1, 0, 0, 1, dx * r, dy * r);
        // ctx.setTransform(1, 0, 0, 1, dx * r, dy * r)
        // console.log(ctx.getTransform())
    }
    restore() {
        this.ctx.restore();
        // this.translate(-this.translateInfo.x, -this.translateInfo.y)
    }
    // paint node
    paintNode(node, status) {
        const { ctx, ratio: r } = this;
        let { x, y, w, h } = node;
        x *= r;
        y *= r;
        w *= r;
        h *= r;
        // fill the white rectangle
        ctx.fillRect(x - w / 2, y - h / 2, w, h);
        // stroke the border
        if (status) { // hover | selected
            ctx.save();
            ctx.strokeStyle = color_1.default.blue;
            ctx.lineWidth = 2;
            const path = new Path2D();
            path.rect(x - w / 2, y - h / 2, w, h);
            ctx.stroke(path);
            if (node.id && this.hasStore) {
                this.paths.nodes[node.id] = path;
            }
            // paint anchors
            const { anchors } = node;
            if (this.hasStore) {
                this.paths.anchors[node.id] = [];
            }
            Object.keys(anchors).forEach(k => {
                if (anchors[k]) {
                    for (let i = 0; i < anchors[k]; i++) {
                        let pos = utils_1.getAnchorPos(node, k, i, anchors[k]);
                        let anchorPath = this._paintAnchor(pos);
                        this.paths.anchors[node.id].push({ type: k, index: i, path: anchorPath });
                    }
                }
            });
            ctx.restore();
        }
        else { // undefined
            ctx.strokeRect(x - w / 2, y - h / 2, w, h);
        }
        // paint text
        ctx.save();
        ctx.fillStyle = color_1.default.font;
        ctx.fillText(node.name || node.shape, x, y);
        ctx.restore();
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
        const { ctx, ratio: r } = this;
        x *= r;
        y *= r;
        const path = new Path2D();
        path.arc(x, y, 4 * r, 0, Math.PI * 2, false);
        ctx.fill(path);
        ctx.stroke(path);
        return path;
    }
    checkInNodeAnchor(node, pos) {
        const r = this.ratio;
        let { x, y } = pos;
        x *= r;
        y *= r;
        const paths = this.paths.anchors[node.id];
        for (let i = 0, n = paths.length; i < n; i++) {
            const cur = paths[i];
            if (this.ctx.isPointInPath(cur.path, x, y)) {
                return [node, cur.type, cur.index];
            }
        }
        return null;
    }
    paintActiveAnchors(node) {
        const { input } = node.anchors;
        if (input) {
            for (let i = 0; i < input; i++) {
                let pos = utils_1.getAnchorPos(node, 'input', i, input);
                this._paintActiveAnchor(pos);
            }
        }
    }
    _paintActiveAnchor({ x, y }) {
        const { ctx, ratio: r } = this;
        x *= r;
        y *= r;
        ctx.save();
        ctx.fillStyle = color_1.default.lingthBlue;
        ctx.beginPath();
        ctx.arc(x, y, 12 * r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        ctx.beginPath();
        ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    // paint edge
    paintEdge({ x: sx, y: sy }, // start
    { x: ex, y: ey }, // end
    opts // options
    ) {
        const { ctx, ratio: r } = this;
        sx *= r;
        sy *= r;
        ex *= r;
        ey *= r;
        ex -= this.translateInfo.x;
        ey -= this.translateInfo.y;
        const path = new Path2D();
        ctx.beginPath();
        path.moveTo(sx, sy);
        let diffY = Math.abs(ey - sy);
        const cp1 = [sx, sy + diffY / 4];
        const cp2 = [ex, ey - diffY / 2];
        path.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey);
        if (opts && opts.selected) {
            ctx.save();
            ctx.lineWidth = 2 * r;
            ctx.stroke(path);
            ctx.restore();
        }
        else {
            ctx.stroke(path);
        }
        if (opts && opts.id && this.hasStore) {
            this.paths.edges[opts.id] = path;
        }
        ctx.closePath();
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
        const { x, y } = this.translateInfo;
        this.ctx.save();
        this.ctx.fillStyle = '#fcfcfc';
        this.ctx.fillRect(-x, -y, this.canvas.width, this.canvas.height);
        this.ctx.restore();
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

/***/ "./src/contextmenu.ts":
/*!****************************!*\
  !*** ./src/contextmenu.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
const dom_1 = __webpack_require__(/*! ./dom */ "./src/dom.ts");
class ContextMenu {
    constructor({ app, command, container, }) {
        this.app = app;
        this.command = command;
        this.container = container;
        this._init();
        this._bind();
    }
    // init
    _init() {
        const oBody = this._createBody();
        this.body = oBody;
        this.container.appendChild(oBody);
    }
    _bind() {
        this.body.addEventListener('click', e => {
            const o = e.target;
            if (o.classList.contains('editor-contextmenu-item')) {
                let command = dom_1.getAttr(o, 'data-command');
                this.command.execute(command);
                this.detach();
            }
        });
    }
    // attach
    attach(e, { type }) {
        this.detach();
        this.body.classList.add('show');
        this.body.style.left = `${e.clientX}px`;
        this.body.style.top = `${e.clientY}px`;
        switch (type) {
            case 'node':
                this.body.appendChild(this._createDelItem());
                break;
            case 'edge':
                this.body.appendChild(this._createDelEdge());
                break;
            default:
                this.body.appendChild(this._createClearItem());
                break;
        }
    }
    // detach
    detach() {
        this.body.innerHTML = '';
        this.body.classList.remove('show');
    }
    // create dom
    _createBody() {
        const body = dom_1.createDom('div', 'editor-contextmenu bxs', 'editor-contextmenu');
        // body.classList
        return body;
    }
    _createDelItem() {
        const item = dom_1.createDom('div', 'editor-contextmenu-item');
        item.setAttribute('data-command', 'del:node');
        item.innerText = '删除节点';
        return item;
    }
    _createDelEdge() {
        const item = dom_1.createDom('div', 'editor-contextmenu-item');
        item.setAttribute('data-command', 'del:edge');
        item.innerText = '删除边';
        return item;
    }
    _createClearItem() {
        const item = dom_1.createDom('div', 'editor-contextmenu-item');
        item.setAttribute('data-command', 'clear');
        item.innerText = '清空';
        return item;
    }
}
exports.ContextMenu = ContextMenu;


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
const dom_1 = __webpack_require__(/*! ./dom */ "./src/dom.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const canvas_1 = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
const event_1 = __webpack_require__(/*! ./event */ "./src/event.ts");
const command_1 = __webpack_require__(/*! ./command */ "./src/command.ts");
const contextmenu_1 = __webpack_require__(/*! ./contextmenu */ "./src/contextmenu.ts");
// Editor core
class Editor {
    constructor({ container, 
    // toolbar,
    itempanel, page, }) {
        // private selectedAnchor: [Editor.INode, number]
        this.anchorStartPos = { x: 0, y: 0 };
        /*
         *	public
         */
        this.callback = {
            selectedNodeChange: null,
            nodeAdded: null,
            nodeDeleted: null,
            edgeAdded: null,
            edgeDeleted: null,
        };
        /*
         *	events
         */
        this.isMouseDown = false;
        this.eventList = [
            ['oItemPanel', 'mousedown', '_beginAddNode'],
            ['oItemPanel', 'mouseup', '_mouseUp'],
            ['oPage', 'mousedown', '_mouseDownOnPage'],
            ['oPage', 'mousemove', '_mouseMove'],
            ['oPage', 'mouseleave', '_mouseLeavePage'],
            ['oPage', 'mouseup', '_mouseUpPage'],
            ['oContainer', 'contextmenu', '_preventDefaultMenu'],
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
        this.oContainer = dom_1.getDom(container);
        this.oItemPanel = dom_1.getDom(itempanel);
        this.oPage = dom_1.getDom(page);
        // init property
        this.shapes = {};
        this.nodes = [];
        this.edges = [];
        this._init();
    }
    // init canvas
    _init() {
        this._initCanvas();
        this._bindEvents();
        this._initCommand();
    }
    resize() {
    }
    _initPageConfig() {
        if (!this.oPage || !this.oContainer) {
            throw Error('cannot find Editor editor container');
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
        const odc = oc.cloneNode();
        odc.style.pointerEvents = 'none';
        odc.style.backgroundColor = 'transparent';
        // define canvas object
        // main canvas paint all nodes & edges that exist in this.nodes & this.edges
        this.mainCvs = new canvas_1.Canvas(oc, { ratio, hasStore: true });
        // dynamic canvas paint nodes & edges which is being added or moved
        this.dynamicCvs = new canvas_1.Canvas(odc, { ratio });
        // append to page container
        this.oPage.appendChild(oc);
        this.oPage.appendChild(odc);
    }
    registerShape(name, shape) {
        this.shapes[name] = shape;
    }
    get selectedNode() {
        return this.__selectedNode;
    }
    set selectedNode(node) {
        if (node === this.__selectedNode) {
            console.log('no change');
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
    _addNode(node) {
        this.nodes.push(Object.assign(Object.assign({}, node), { id: utils_1.randomID() }));
        let cur = this.nodes[this.nodes.length - 1];
        this.callback.nodeAdded && this.callback.nodeAdded(cur);
        this.selectedNode = cur;
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
    _delNode(nid) {
        let i = this.nodes.findIndex(n => n.id === nid);
        if (i > -1) {
            this.nodes.splice(i, 1);
            let edges = this._getRelatedEdge(nid);
            if (edges.length) {
                edges.forEach(e => { this._delEdge(e.id); });
            }
            this.selectedNode = null;
            this.callback.nodeDeleted && this.callback.nodeDeleted(nid);
        }
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
    }
    _addEdge([source, sourceAnchorIndex], [target, targetAnchorIndex]) {
        let edge = {
            source: source.id,
            sourceAnchorIndex,
            target: target.id,
            targetAnchorIndex,
        };
        let exist = this.edges.find(e => utils_1.compareEdge(edge, e));
        if (!exist) {
            this.edges.push(Object.assign(Object.assign({}, edge), { id: utils_1.randomID() }));
            this.callback.edgeAdded && this.callback.edgeAdded(edge);
        }
    }
    _delEdge(eid) {
        let i = this.edges.findIndex(e => e.id === eid);
        if (i > -1) {
            let [edge] = this.edges.splice(i, 1);
            this.callback.edgeDeleted && this.callback.edgeDeleted(edge);
        }
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
        msg && console.log(`===render by: ${msg}===`);
        this.mainCvs.clear();
        this.mainCvs.preFill();
        this.nodes.forEach(node => {
            let status = this.selectedNode === node ? 'selected' : (this.hoverNode === node ? 'hover' : null);
            this.mainCvs.paintNode(node, status);
        });
        this.edges.forEach(({ source, sourceAnchorIndex, target, targetAnchorIndex, id }) => {
            const start = this.nodes.find(n => n.id === source);
            const end = this.nodes.find(n => n.id === target);
            this.mainCvs.paintEdge(utils_1.getAnchorPos(start, 'output', sourceAnchorIndex, start.anchors.output), utils_1.getAnchorPos(end, 'input', targetAnchorIndex, end.anchors.input), { id, selected: this.selectedEdge && this.selectedEdge.id === id });
        });
    }
    on(ev, cb) {
        if (this.callback.hasOwnProperty(ev)) {
            this.callback[ev] = cb;
        }
    }
    update(type) {
        // TODO
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
    _bindEvents() {
        const event = new event_1.Event({
            rect: this.pageConfig,
        });
        for (let ev of this.eventList) {
            event.add(this[ev[0]], ev[1], this[ev[2]].bind(this));
        }
    }
    // mousedown on itempanel
    _beginAddNode(e) {
        const o = e.target;
        const shape = dom_1.getAttr(o, 'data-shape');
        if (!shape) {
            return;
        }
        this.isMouseDown = true;
        this.mouseDownType = 'add-node';
        this.selectedShape = this.shapes[shape];
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
            if (this.hoverAnchor) {
                // u can't drag an edge from input anchor
                const [node, type, index] = this.hoverAnchor;
                this.mouseDownType = type === 'output' ? 'add-edge' : null;
                this.anchorStartPos = utils_1.getAnchorPos(node, type, index, node.anchors[type]);
            }
            else {
                this.mouseDownType = 'move-node';
            }
        }
        else {
            this.selectedNode = null;
            this.selectedEdge = this._getSelectedEdge({ x, y });
            this.mouseDownType = 'drag-canvas';
        }
        // trigger contextmenu
        this._triggerMenu(e.button === 2, e);
    }
    // mousemove
    _mouseMove(e) {
        this.dynamicCvs.clear();
        const { offsetX: x, offsetY: y } = e;
        const dx = x - this.mouseEventStartPos.x;
        const dy = y - this.mouseEventStartPos.y;
        if (this.isMouseDown) { // move
            switch (this.mouseDownType) {
                case 'add-node':
                    this.dynamicCvs.paintNode(Object.assign(Object.assign({}, this.selectedShape), { x, y }));
                    break;
                case 'move-node':
                    this.dynamicCvs.paintNode(Object.assign(Object.assign({}, this.selectedNode), { x: this.selectedNode.x + dx, y: this.selectedNode.y + dy }));
                    break;
                case 'add-edge':
                    this.nodes.forEach(node => {
                        if (node.id !== this.selectedNode.id && node.anchors) {
                            this.dynamicCvs.paintActiveAnchors(node);
                        }
                    });
                    this.dynamicCvs.paintEdge(this.anchorStartPos, { x, y });
                    break;
                case 'drag-canvas':
                    this.mainCvs.clear();
                    this.mainCvs.transform(dx, dy);
                    this.dynamicCvs.transform(dx, dy);
                    this._render();
                    this.mainCvs.restore();
                    this.dynamicCvs.restore();
                    break;
            }
        }
        else { // hover
            const hoverNode = this._getSelectedNode({ x, y });
            // TODO bugfix: get hover anchor error after canvas moved
            if (this.hoverNode) {
                // let hoverAnchor = checkInNodeAnchor({ x, y }, this.hoverNode)
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
            case 'add-node':
                this._addNode(Object.assign(Object.assign({}, this.selectedShape), { x, y }));
                break;
            case 'move-node':
                if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
                    break;
                }
                console.log('move');
                this._updateNode(Object.assign(Object.assign({}, this.selectedNode), { x: this.selectedNode.x + dx, y: this.selectedNode.y + dy }));
                break;
            case 'add-edge':
                this.nodes.forEach(node => {
                    const { input } = node.anchors;
                    if (node.id !== this.selectedNode.id && input) { // not link to self && link to an input-anchor
                        for (let i = 0; i < input; i++) {
                            let pos = utils_1.getAnchorPos(node, 'input', i, input);
                            if (utils_1.checkInCircle({ x, y }, pos, 12)) {
                                this._addEdge([this.hoverAnchor[0], this.hoverAnchor[2]], [node, i]);
                            }
                        }
                    }
                });
                break;
            case 'drag-canvas':
                // this.mainCvs.reset()
                this.mainCvs.translate(dx, dy);
                this.dynamicCvs.translate(dx, dy);
                break;
        }
        this._mouseUp();
    }
    _mouseUp() {
        this.isMouseDown = false;
        this.mouseDownType = null;
        this.dynamicCvs.clear();
    }
    _initCommand() {
        const command = new command_1.Command({ app: this });
        const { commands } = this;
        for (let cmd in commands) {
            command.register(cmd, this[commands[cmd]]);
        }
        this.command = command;
        this.contextmenu = new contextmenu_1.ContextMenu({
            app: this,
            command,
            container: this.oContainer
        });
    }
    _triggerMenu(show, e) {
        if (show) {
            let options = {
                type: null,
            };
            if (this.selectedNode) {
                options.type = 'node';
            }
            else if (this.selectedEdge) {
                options.type = 'edge';
            }
            this.contextmenu.attach(e, options);
        }
        else {
            this.contextmenu.detach();
        }
    }
    _preventDefaultMenu(e) {
        e.preventDefault();
    }
    _delNodeCommand() {
        this._delNode(this.selectedNode.id);
    }
    _delEdgeCommand() {
        this._delEdge(this.selectedEdge.id);
        this.selectedEdge = null;
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
    _getRelatedEdge(nid) {
        let tmps = [];
        this.edges.forEach(e => {
            if (e.source === nid || e.target === nid) {
                tmps.push(e);
            }
        });
        return tmps;
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
exports.compareEdge = exports.checkInCircle = exports.checkInNodeAnchor = exports.getAnchorPos = exports.randomID = void 0;
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


/***/ })

/******/ });
//# sourceMappingURL=editor.build.js.map