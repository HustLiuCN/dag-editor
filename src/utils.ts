import { Editor } from '@src/core'

export function randomID(): string {
  return Date.now().toString(16)
}

export function checkInNode({ x, y }, { x: nx, y: ny, w, h }) {
  return Math.abs(x - nx) <= w/2 && Math.abs(y - ny) <= h/2
}

export function getAnchorPos(node: Editor.INode, anchor: Editor.IAnchor) {
  const { x, y, w, h } = node
  let x0 = x - w/2
  let y0 = y - h/2

  return { x: x0 + anchor[0] * w, y: y0 + anchor[1] * h }
}

export function checkInNodeAnchor({ x, y }: Editor.IPos, node: Editor.INode): [Editor.INode, number] {
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

export function checkInCircle({ x, y }: Editor.IPos, { x: cx, y: cy }: Editor.IPos, r = 4) {
  return Math.abs(x - cx) <= r && Math.abs(y - cy) <= r
}

export function compareEdge(a: Editor.IEdge, b: Editor.IEdge) {
  for (let i in a) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}