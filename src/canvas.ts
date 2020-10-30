import COLOR from './color'
import { Editor } from './core'
import { getAnchorPos } from './utils'

export class Canvas {
	constructor(cvs: HTMLCanvasElement, {
		ratio = 1,
		fillStyle = COLOR.white,
		strokeStyle = COLOR.line,
		hasStore,
	}: {
		ratio: number,
		fillStyle?: string,
		strokeStyle?: string,
		hasStore?: boolean
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
		this.hasStore = hasStore
		this.paths = {
			nodes: {},
			edges: {},
			anchors: {},
		}
		// translate
		this.translateInfo = {
			x: 0,
			y: 0,
		}
	}
	canvas: HTMLCanvasElement
	ratio: number
	ctx: CanvasRenderingContext2D
	hasStore: boolean
	paths: {		// store the paths for node & edge
		nodes: { [id: string]: Path2D },
		edges: { [id: string]: Path2D },
		anchors: {
			[id: string]: Array<{ type: string, index: number, path: Path2D }>
		},
	}
	translateInfo: { x: number, y: number }
	translate(dx: number, dy: number) {
		const { ratio: r, ctx } = this
		dx *= r
		dy *= r
		ctx.translate(dx, dy)
		this.translateInfo.x += dx
		this.translateInfo.y += dy
		console.log(`===translate: (${this.translateInfo.x}, ${this.translateInfo.y})===`)
	}
	transform(dx: number, dy: number) {
		const { ctx, ratio: r } = this
		ctx.save()
		ctx.transform(1, 0, 0, 1, dx*r, dy*r)
		// ctx.setTransform(1, 0, 0, 1, dx * r, dy * r)
		// console.log(ctx.getTransform())
	}
	restore() {
		this.ctx.restore()
		// this.translate(-this.translateInfo.x, -this.translateInfo.y)
	}
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
			const path = new Path2D()
			path.rect(x - w/2, y - h/2, w, h)
			ctx.stroke(path)
			if (node.id && this.hasStore) {
				this.paths.nodes[node.id] = path
			}
			// paint anchors
			const { anchors } = node
			if (this.hasStore) {
				this.paths.anchors[node.id] = []
			}
			Object.keys(anchors).forEach(k => {
				if (anchors[k]) {
					for (let i = 0; i < anchors[k]; i ++) {
						let pos = getAnchorPos(node, k, i, anchors[k])
						let anchorPath = this._paintAnchor(pos)
						this.paths.anchors[node.id].push({ type: k, index: i, path: anchorPath })
					}
				}
			})
			ctx.restore()
		} else {		// undefined
			ctx.strokeRect(x - w/2, y - h/2, w, h)
		}
		// paint text
		ctx.save()
		ctx.fillStyle = COLOR.font
		ctx.fillText(node.name || node.shape, x, y)
		ctx.restore()
	}
	checkInNode(nid: string, pos: Editor.IPos) {
		const r = this.ratio
		const path = this.paths.nodes[nid]
		let { x, y } = pos
		x *= r
		y *= r
		return path && this.ctx.isPointInPath(path, x, y)
	}
	// paint anchor
	private _paintAnchor({ x, y }: { x: number, y: number }) {
		const { ctx, ratio: r } = this
		x *= r
		y *= r
		const path = new Path2D()
		path.arc(x, y, 4 * r, 0, Math.PI * 2, false)
		ctx.fill(path)
		ctx.stroke(path)
		return path
	}
	checkInNodeAnchor(node: Editor.INode, pos: Editor.IPos): [Editor.INode, string, number] {
		const r = this.ratio
		let { x, y } = pos
		x *= r
		y *= r
		const paths = this.paths.anchors[node.id]
		for (let i = 0, n = paths.length; i < n; i ++) {
			const cur = paths[i]
			if (this.ctx.isPointInPath(cur.path, x, y)) {
				return [node, cur.type, cur.index]
			}
		}
		return null
	}
	paintActiveAnchors(node: Editor.INode) {
		const { input } = node.anchors
		if (input) {
			for (let i = 0; i < input; i ++) {
				let pos = getAnchorPos(node, 'input', i, input)
				this._paintActiveAnchor(pos)
			}
		}
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
	paintEdge(
		{ x: sx, y: sy }: Editor.IPos,	// start
		{ x: ex, y: ey }: Editor.IPos,	// end
		opts?: { id?: string, selected?: boolean }		// options
	) {
		const { ctx, ratio: r } = this
		sx *= r
		sy *= r
		ex *= r
		ey *= r
		ex -= this.translateInfo.x
		ey -= this.translateInfo.y
		const path = new Path2D()
		ctx.beginPath()
		path.moveTo(sx, sy)
		let diffY = Math.abs(ey - sy)
		const cp1 = [sx, sy + diffY / 4]
		const cp2 = [ex, ey - diffY / 2]
		path.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey)
		if (opts && opts.selected) {
			ctx.save()
			ctx.lineWidth = 2 * r
			ctx.stroke(path)
			ctx.restore()
		} else {
			ctx.stroke(path)
		}
		if (opts && opts.id && this.hasStore) {
			this.paths.edges[opts.id] = path
		}
		ctx.closePath()
		this._paintArrow({ x: ex, y: ey })
	}
	checkOnEdge(eid: string, pos: Editor.IPos) {
		const { ratio: r, ctx } = this
		const path = this.paths.edges[eid]
		let { x, y } = pos
		x *= r
		y *= r
		ctx.save()
		ctx.lineWidth = 6 * r
		let on = path && ctx.isPointInStroke(path, x, y)
		ctx.restore()
		return on
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
		const { x, y } = this.translateInfo
		this.ctx.clearRect(-x, -y, this.canvas.width, this.canvas.height)
	}
	// fill canvas white background
	preFill() {
		const { x, y } = this.translateInfo
		this.ctx.save()
		this.ctx.fillStyle = '#fcfcfc'
		this.ctx.fillRect(-x, -y, this.canvas.width, this.canvas.height)
		this.ctx.restore()
	}
}

