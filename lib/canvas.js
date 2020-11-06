"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const color_1 = require("./color");
const utils_1 = require("./utils");
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
            activeAnchors: {},
        };
        // translate
        this.translateInfo = {
            x: 0,
            y: 0,
            tx: 0,
            ty: 0,
        };
    }
    translate(dx, dy) {
        const { ratio: r, ctx } = this;
        this.translateInfo.tx += dx;
        this.translateInfo.ty += dy;
        dx *= r;
        dy *= r;
        ctx.translate(dx, dy);
        this.translateInfo.x += dx;
        this.translateInfo.y += dy;
        utils_1.logger(`===translate: (${this.translateInfo.x}, ${this.translateInfo.y})===`);
    }
    transform(dx, dy) {
        const { ctx, ratio: r } = this;
        ctx.save();
        ctx.transform(1, 0, 0, 1, dx * r, dy * r);
        // ctx.setTransform(1, 0, 0, 1, dx * r, dy * r)
        // logger(ctx.getTransform())
    }
    restore() {
        this.ctx.restore();
        // this.translate(-this.translateInfo.x, -this.translateInfo.y)
    }
    // paint node
    paintNode(node, opts) {
        const { ctx, ratio: r } = this;
        let { x, y, w, h } = node;
        x *= r;
        y *= r;
        w *= r;
        h *= r;
        const ox = x - w / 2;
        const oy = y - h / 2;
        // paint shadow
        ctx.save();
        const shadow = this._paintRoundRect(ox + 2 * r, oy + 2 * r, w, h, 4 * r);
        ctx.fillStyle = 'rgba(35,35,35,0.08)';
        ctx.fill(shadow);
        ctx.restore();
        // create & save rectangle path
        const path = this._paintRoundRect(ox, oy, w, h, 4 * r);
        if (node.id && this.hasStore) {
            this.paths.nodes[node.id] = path;
        }
        ctx.fill(path);
        // left color border
        ctx.save();
        const leftBorder = this._paintRoundRect(ox, oy, 4 * r, h, 4 * r, true);
        ctx.fillStyle = node.color || color_1.default.blue;
        ctx.fill(leftBorder);
        ctx.restore();
        // stroke the border
        if (node.id && opts && opts.status) { // hover | selected
            ctx.save();
            ctx.strokeStyle = node.color || color_1.default.blue;
            ctx.lineWidth = 2;
            ctx.stroke(path);
            // paint anchors
            const { anchors } = node;
            // TODO
            // if (this.hasStore) {
            this.paths.anchors[node.id] = [];
            this.paths.activeAnchors[node.id] = [];
            // }
            Object.keys(anchors).forEach(k => {
                if (anchors[k]) {
                    for (let i = 0; i < anchors[k]; i++) {
                        let pos = utils_1.getAnchorPos(node, k, i, anchors[k]);
                        let [anchorPath, activeAnchorPath] = this._paintAnchor(pos);
                        ctx.fill(anchorPath);
                        ctx.stroke(anchorPath);
                        this.paths.anchors[node.id].push({ type: k, index: i, path: anchorPath });
                        this.paths.activeAnchors[node.id].push({ type: k, index: i, path: activeAnchorPath });
                    }
                }
            });
            ctx.restore();
        }
        // paint text
        ctx.save();
        ctx.fillStyle = color_1.default.font;
        ctx.fillText(node.name || node.shape, x, y);
        ctx.restore();
    }
    _paintRoundRect(x, y, w, h, r, leftBorder) {
        const path = new Path2D();
        path.moveTo(x + r, y);
        if (leftBorder) {
            path.lineTo(x + r, y + h);
        }
        else {
            path.arcTo(x + w, y, x + w, y + h, r);
            path.arcTo(x + w, y + h, x, y + h, r);
        }
        path.arcTo(x, y + h, x, y, r);
        path.arcTo(x, y, x + r, y, r);
        path.closePath();
        return path;
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
        const { ratio: r } = this;
        x *= r;
        y *= r;
        const anchorPath = new Path2D();
        anchorPath.arc(x, y, 4 * r, 0, Math.PI * 2, false);
        const activeAnchorPath = new Path2D();
        activeAnchorPath.arc(x, y, 12 * r, 0, Math.PI * 2, false);
        return [anchorPath, activeAnchorPath];
    }
    checkInNodeAnchor(node, pos, opts) {
        const r = this.ratio;
        let { x, y } = pos;
        x *= r;
        y *= r;
        const paths = (opts && opts.active) ? this.paths.activeAnchors[node.id] : this.paths.anchors[node.id];
        if (!paths) {
            return;
        }
        for (let i = 0, n = paths.length; i < n; i++) {
            const cur = paths[i];
            if (this.ctx.isPointInPath(cur.path, x, y)) {
                return [node, cur.type, cur.index];
            }
        }
        return null;
    }
    paintActiveAnchors(node) {
        const { ctx } = this;
        const { input } = node.anchors;
        if (input) {
            for (let i = 0; i < input; i++) {
                let pos = utils_1.getAnchorPos(node, 'input', i, input);
                let [anchorPath, activeAnchorPath] = this._paintAnchor(pos);
                ctx.save();
                ctx.fillStyle = color_1.lighter(node.color || color_1.default.blue);
                ctx.fill(activeAnchorPath);
                ctx.restore();
                ctx.fill(anchorPath);
                ctx.stroke(anchorPath);
            }
        }
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
        if (opts.needTranslate) {
            ex -= this.translateInfo.x;
            ey -= this.translateInfo.y;
        }
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
        this.ctx.fillStyle = '#F3F4F8';
        this.ctx.fillRect(-x, -y, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }
}
exports.Canvas = Canvas;
