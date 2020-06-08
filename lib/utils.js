export function randomID() {
    return Date.now().toString(16)
}

export function checkInNode({ x, y }, { x: nx, y: ny, w, h }) {
    return Math.abs(x - nx) <= w/2 && Math.abs(y - ny) <= h/2
}

export function getAnchorPos(node, anchor) {
    const { x, y, w, h } = node
    let x0 = x - w/2
    let y0 = y - h/2

    return { x: x0 + anchor[0] * w, y: y0 + anchor[1] * h }
}

export function checkInNodeAnchor({ x, y }, node) {
    const { anchors } = node
    for (let i = 0, n = anchors.length; i < n; i ++) {
        let anchor = anchors[i]
        let pos = getAnchorPos(node, anchor)
        if (checkInCircle({ x, y }, pos)) {
            return [node, i]
        }
    }
    return null
}

export function checkInCircle({ x, y }, { x: cx, y: cy }, r = 4) {
    return Math.abs(x - cx) <= r && Math.abs(y - cy) <= r
}