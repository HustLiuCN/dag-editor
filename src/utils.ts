import { Editor } from './core'

export function randomID(): string {
  return Date.now().toString(16)
}

export function getAnchorPos(node: Editor.INode, type: string, i: number, n: number) {
  const { x, y, w, h } = node
  let ax = x - w/2 + (i + 1) / (n + 1) * w
  let ay = type === 'input' ? y - h/2 : y + h/2

  return { x: ax, y: ay }
}

export function checkInNodeAnchor({ x, y }: Editor.IPos, node: Editor.INode): [Editor.INode, string, number] {
  const { input, output } = node.anchors
  if (input) {
    for (let i = 0; i < input; i ++) {
      let pos = getAnchorPos(node, 'input', i, input)
      if (checkInCircle({ x, y }, pos)) {
          return [node, 'input', i]
      }
    }
  }
  if (output) {
    for (let i = 0; i < output; i ++) {
      let pos = getAnchorPos(node, 'output', i, output)
      if (checkInCircle({ x, y }, pos)) {
          return [node, 'output', i]
      }
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

export function logger(msg: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log(msg)
  }
}
