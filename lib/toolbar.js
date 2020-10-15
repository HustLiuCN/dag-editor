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
