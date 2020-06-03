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