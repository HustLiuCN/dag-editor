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
