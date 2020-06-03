import COLOR from './color'
import { getAnchorPos } from '@lib/utils'

class Canvas {
    constructor(canvas, options = {}) {
        this.canvas = canvas
        const ctx = canvas.getContext('2d')

        this.ratio = options.ratio || 1

        ctx.fillStyle = options.fillStyle || COLOR.white
        ctx.strokeStyle = options.strokeStyle || COLOR.line

        this.ctx = ctx
    }

    _paintNode(node, isSelected) {
        let { ratio: r, ctx } = this
        let { x, y, w, h } = node
        x *= r
        y *= r
        w *= r
        h *= r

        ctx.fillRect(x - w/2, y - h/2, w, h)
        if (isSelected) {
            ctx.save()
            ctx.strokeStyle = COLOR.blue
            ctx.lineWidth = 2
            ctx.strokeRect(x - w/2, y - h/2, w, h)
            // anchor
            if (node.anchors) {
                node.anchors.forEach(anchor => {
                    let pos = getAnchorPos(node, anchor)
                    this._paintAnchor(pos)
                })
            }
            ctx.restore()
        } else {
            ctx.strokeRect(x - w/2, y - h/2, w, h)
        }
    }
    _paintAnchor({ x, y }) {
        const { ctx, ratio: r } = this
        x *= r
        y *= r
        ctx.beginPath()
        ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.stroke()
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default Canvas