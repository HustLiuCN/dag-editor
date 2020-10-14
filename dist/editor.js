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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom.ts":
/*!********************!*\
  !*** ./lib/dom.ts ***!
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

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compareEdge = exports.checkInCircle = exports.checkInNodeAnchor = exports.getAnchorPos = exports.checkInNode = exports.randomID = void 0;
function randomID() {
    return Date.now().toString(16);
}
exports.randomID = randomID;
function checkInNode({ x, y }, { x: nx, y: ny, w, h }) {
    return Math.abs(x - nx) <= w / 2 && Math.abs(y - ny) <= h / 2;
}
exports.checkInNode = checkInNode;
function getAnchorPos(node, anchor) {
    const { x, y, w, h } = node;
    let x0 = x - w / 2;
    let y0 = y - h / 2;
    return { x: x0 + anchor[0] * w, y: y0 + anchor[1] * h };
}
exports.getAnchorPos = getAnchorPos;
function checkInNodeAnchor({ x, y }, node) {
    const { anchors } = node;
    for (let i = 0, n = anchors.length; i < n; i++) {
        let anchor = anchors[i];
        let pos = getAnchorPos(node, anchor);
        if (checkInCircle({ x, y }, pos)) {
            return [node, i];
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


/***/ }),

/***/ "./mock-data/dag-shapes.ts":
/*!*********************************!*\
  !*** ./mock-data/dag-shapes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __webpack_require__(/*! @src/color */ "./src/color.ts");
const w = 160;
const h = 36;
const c = color_1.default['blue'];
const shapes = [
    {
        shape: 'shape-001',
        w, h, color: c,
        name: 'Node-ABC',
        anchors: [
            [0.5, 0, 'input'],
            [0.5, 1, 'output'],
        ],
    },
    {
        shape: 'shape-002',
        w, h, color: color_1.default['green'],
        name: 'Node-XYZ',
        anchors: [
            [0.5, 0, 'input'],
            [0.3, 1, 'output'],
            [0.7, 1, 'output'],
        ],
    },
];
exports.default = shapes;


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
const utils_1 = __webpack_require__(/*! @lib/utils */ "./lib/utils.ts");
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
            if (node.anchors) {
                node.anchors.forEach(anchor => {
                    let pos = utils_1.getAnchorPos(node, anchor);
                    this._paintAnchor(pos);
                });
            }
            ctx.restore();
            // TODO paint anchor
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
        ctx.beginPath();
        ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    }
    paintActiveAnchors(node) {
        const { anchors } = node;
        anchors.forEach(anchor => {
            if (anchor[2] === 'input') {
                let pos = utils_1.getAnchorPos(node, anchor);
                this._paintActiveAnchor(pos);
            }
        });
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
const dom_1 = __webpack_require__(/*! @lib/dom */ "./lib/dom.ts");
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
const dom_1 = __webpack_require__(/*! @lib/dom */ "./lib/dom.ts");
const utils_1 = __webpack_require__(/*! @lib/utils */ "./lib/utils.ts");
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
        console.log('dag-editor created');
        // dom container
        this.oContainer = dom_1.getDom(container);
        this.oItemPanel = dom_1.getDom(itempanel);
        this.oPage = dom_1.getDom(page);
        // init property
        this.shapes = {};
        this.nodes = [];
        this.edges = [];
        this._initCanvas();
        this._bindEvents();
        this._initCommand();
    }
    // init canvas
    _initCanvas() {
        const rect = this.oPage.getBoundingClientRect();
        // const { width, height, left, top } = rect
        const ratio = window.devicePixelRatio || 1;
        // page config
        this.pageConfig = Object.assign(Object.assign({}, rect), { ratio });
        // create canvas dom
        const oc = dom_1.createDom('canvas', 'editor-canvas');
        oc.width = rect.width * ratio;
        oc.height = rect.height * ratio;
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
        this.nodes.forEach(node => {
            let status = this.selectedNode === node ? 'selected' : (this.hoverNode === node ? 'hover' : null);
            this.mainCvs.paintNode(node, status);
        });
        this.edges.forEach(({ source, sourceAnchorIndex, target, targetAnchorIndex, id }) => {
            const start = this.nodes.find(n => n.id === source);
            const end = this.nodes.find(n => n.id === target);
            this.mainCvs.paintEdge(utils_1.getAnchorPos(start, start.anchors[sourceAnchorIndex]), utils_1.getAnchorPos(end, end.anchors[targetAnchorIndex]), { id, selected: this.selectedEdge && this.selectedEdge.id === id });
        });
    }
    on(ev, cb) {
        if (this.callback.hasOwnProperty(ev)) {
            this.callback[ev] = cb;
        }
    }
    update(type) {
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
                this.mouseDownType = this.selectedNode.anchors[this.hoverAnchor[1]][2] === 'output' ? 'add-edge' : null;
                this.anchorStartPos = utils_1.getAnchorPos(this.hoverAnchor[0], this.hoverAnchor[0].anchors[this.hoverAnchor[1]]);
            }
            else {
                this.mouseDownType = 'move-node';
            }
        }
        else {
            this.selectedNode = null;
            this.selectedEdge = this._getSelectedEdge({ x, y });
            // TODO start drag canvas
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
                // TODO
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
            if (this.hoverNode) {
                let hoverAnchor = utils_1.checkInNodeAnchor({ x, y }, this.hoverNode);
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
                if (dx < 5 && dy < 5) {
                    break;
                }
                console.log('move');
                this._updateNode(Object.assign(Object.assign({}, this.selectedNode), { x: this.selectedNode.x + dx, y: this.selectedNode.y + dy }));
                break;
            case 'add-edge':
                this.nodes.forEach(node => {
                    if (node.id !== this.selectedNode.id && node.anchors) {
                        node.anchors.forEach((anchor, i) => {
                            if (anchor[2] === 'input') {
                                let pos = utils_1.getAnchorPos(node, anchor);
                                if (utils_1.checkInCircle({ x, y }, pos, 12)) {
                                    this._addEdge(this.hoverAnchor, [node, i]);
                                }
                            }
                        });
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

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = __webpack_require__(/*! @lib/dom */ "./lib/dom.ts");
const dag_shapes_1 = __webpack_require__(/*! @data/dag-shapes */ "./mock-data/dag-shapes.ts");
const core_1 = __webpack_require__(/*! ./core */ "./src/core.ts");
const store_1 = __webpack_require__(/*! ./store */ "./src/store.ts");
// example
const editor = new core_1.Editor({
    container: '#container',
    page: '#editor',
    itempanel: '#itempanel',
});
// example data store
const store = new store_1.Store({ editor });
// new node added
editor.on('nodeAdded', (node) => {
    console.log('node added', node);
});
// selected node change
editor.on('selectedNodeChange', (node) => {
    console.log('selected node changed', node);
    const oNodePanel = dom_1.getDom('#node-panel');
    const oCanvasPanel = dom_1.getDom('#canvas-panel');
    if (node) {
        oNodePanel.classList.add('show');
        oCanvasPanel.classList.remove('show');
        store.currentNode = node;
    }
    else {
        oNodePanel.classList.remove('show');
        oCanvasPanel.classList.add('show');
    }
});
// node deleted
editor.on('nodeDeleted', (nodeId) => {
    console.log(`node deleted: node-id: ${nodeId}`);
});
// new edge added
editor.on('edgeAdded', (edge) => {
    console.log('edge added', edge);
});
// edge deleted
editor.on('edgeDeleted', (edge) => {
    console.log('edge deleted', edge);
});
for (let shape of dag_shapes_1.default) {
    editor.registerShape(shape.shape, shape);
}
// check source data
dom_1.getDom('#source-btn').addEventListener('click', () => {
    dom_1.getDom('#code').innerHTML = JSON.stringify(editor.getData());
});


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

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const dom_1 = __webpack_require__(/*! @lib/dom */ "./lib/dom.ts");
// example to show Editor callback and data binding
class Store {
    constructor({ editor }) {
        this.editor = editor;
        this.oName = dom_1.getDom('#node-name');
        this.oW = dom_1.getDom('#node-width');
        this._bind();
    }
    _bind() {
        this.oName.addEventListener('change', () => {
            this.currentNode.name = this.oName.value.trim();
            this.editor.repaint();
        });
        this.oW.addEventListener('change', () => {
            this.currentNode.w = Number(this.oW.value.trim());
            this.editor.repaint();
        });
    }
    get currentNode() {
        return this.__node;
    }
    set currentNode(node) {
        this.__node = node;
        this.oName.value = node.name;
        this.oW.value = node.w.toString();
    }
}
exports.Store = Store;


/***/ })

/******/ });
//# sourceMappingURL=editor.js.map