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
    if (process.env.NODE_ENV === 'development') {
        console.log(msg);
    }
}
exports.logger = logger;
