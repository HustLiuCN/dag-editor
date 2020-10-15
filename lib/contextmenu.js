"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
const dom_1 = require("./dom");
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
