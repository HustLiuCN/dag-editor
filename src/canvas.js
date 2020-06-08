import COLOR from './color'
import { getAnchorPos } from '@lib/utils'

class Canvas {
    constructor(canvas, options = {}) {
        this.canvas = canvas
        const ctx = canvas.getContext('2d')

        this.ratio = options.ratio || 1

        ctx.fillStyle = options.fillStyle || COLOR.white
        ctx.strokeStyle = options.strokeStyle || COLOR.line
        ctx.font = `${Math.max(this.ratio * 10, 12)}px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

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
        ctx.save()
        ctx.fillStyle = COLOR.font
        ctx.fillText(node.name || node.shape, x, y)
        ctx.restore()
    }
    _paintAnchor({ x, y }) {
        const { ctx, ratio: r } = this
        x *= r
        y *= r
        ctx.save()
        ctx.fillStyle = COLOR.white
        ctx.beginPath()
        ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.restore()
        ctx.stroke()
    }
    _paintActiveAnchors(node) {
        const { anchors } = node
        anchors.forEach(anchor => {
            if (anchor[2] === 'input') {
                let pos = getAnchorPos(node, anchor)
                this._paintActiveAnchor(pos)
            }
        })
    }
    _paintActiveAnchor({ x, y }) {
        const { ctx, ratio: r } = this
        x *= r
        y *= r
        ctx.beginPath()
        ctx.arc(x, y, 12 * r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.save()
        ctx.fillStyle = COLOR.white
        ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.stroke()
        ctx.restore()

    }
    _paintEdge({ x: sx, y: sy }, { x: ex, y: ey }) {
        const { ctx, ratio: r } = this
        sx *= r
        sy *= r
        ex *= r
        ey *= r
        ctx.save()
        ctx.strokeStyle = COLOR.line
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        let diffY = Math.abs(ey - sy)
        const cp1 = [ sx, sy + diffY / 2 ]
        const cp2 = [ ex, ey - diffY / 2 ]
        ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey)
        // ctx.lineTo(ex, ey)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default Canvas