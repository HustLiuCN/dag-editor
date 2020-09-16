import COLOR from './color'
import { Editor } from './core'
import { getAnchorPos } from '@lib/utils'

export class Canvas {
	constructor(cvs: HTMLCanvasElement, {
		ratio = 1,
		fillStyle = COLOR.white,
		strokeStyle = COLOR.line,
	}: {
		ratio: number,
		fillStyle?: string,
		strokeStyle?: string
	}) {
		this.canvas = cvs
		this.ratio = ratio

		const ctx = cvs.getContext('2d')
		ctx.fillStyle = fillStyle
		ctx.strokeStyle = strokeStyle
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.font = `${Math.max(ratio * 10, 12)}px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif`

		this.ctx = ctx
	}
	canvas: HTMLCanvasElement
	ratio: number
	ctx: CanvasRenderingContext2D
	// paint node
	paintNode(node: Editor.INode, status?: string) {
		const { ctx, ratio: r } = this
		let { x, y, w, h } = node
		x *= r
		y *= r
		w *= r
		h *= r
		// fill the white rectangle
		ctx.fillRect(x - w/2, y - h/2, w, h)
		// stroke the border
		if (status) {		// hover | selected
			ctx.save()
			ctx.strokeStyle = COLOR.blue
			ctx.lineWidth = 2
			ctx.strokeRect(x - w/2, y - h/2, w, h)
			if (node.anchors) {
				node.anchors.forEach(anchor => {
					let pos = getAnchorPos(node, anchor)
					this._paintAnchor(pos)
				})
			}
			ctx.restore()
			// TODO paint anchor
		} else {		// undefined
			ctx.strokeRect(x - w/2, y - h/2, w, h)
		}
		// paint text
		ctx.save()
		ctx.fillStyle = COLOR.font
		ctx.fillText(node.name || node.shape, x, y)
		ctx.restore()
	}
	// paint anchor
	private _paintAnchor({ x, y }: { x: number, y: number }) {
		const { ctx, ratio: r } = this
		x *= r
		y *= r
		ctx.beginPath()
		ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false)
		ctx.fill()
		ctx.stroke()
	}
	paintActiveAnchors(node: Editor.INode) {
		const { anchors } = node
		anchors.forEach(anchor => {
			if (anchor[2] === 'input') {
				let pos = getAnchorPos(node, anchor)
				this._paintActiveAnchor(pos)
			}
		})
	}
	private _paintActiveAnchor({ x, y }: Editor.IPos) {
		const { ctx, ratio: r } = this
		x *= r
		y *= r
		ctx.save()
		ctx.fillStyle = COLOR.lingthBlue
		ctx.beginPath()
		ctx.arc(x, y, 12 * r, 0, Math.PI * 2, false)
		ctx.fill()
		ctx.closePath()
		ctx.restore()
		ctx.beginPath()
		ctx.arc(x, y, 4 * r, 0, Math.PI * 2, false)
		ctx.fill()
		ctx.stroke()
		ctx.closePath()
	}
	// paint edge
	paintEdge({ x: sx, y: sy }: Editor.IPos, { x: ex, y: ey }: Editor.IPos) {
		const { ctx, ratio: r } = this
		sx *= r
		sy *= r
		ex *= r
		ey *= r
		ctx.beginPath()
		ctx.moveTo(sx, sy)
		let diffY = Math.abs(ey - sy)
		const cp1 = [sx, sy + diffY / 4]
		const cp2 = [ex, ey - diffY / 2]
		ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey)
		ctx.stroke()
		ctx.closePath()
		this._paintArrow({ x: ex, y: ey })
	}
	private _paintArrow({ x, y}: Editor.IPos) {
		const { ctx, ratio: r } = this
		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x - 2*r, y - 6*r)
		ctx.lineTo(x + 2*r, y - 6*r)
		ctx.save()
		ctx.fillStyle = COLOR.line
		ctx.fill()
		ctx.restore()
		ctx.stroke()
		ctx.closePath()
	}
	// clear canvas
	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}
}

