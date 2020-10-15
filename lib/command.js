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
