import { COLOR, COLOR_RGBA } from './color'
import { checkInRect, checkInCircle } from './check-if-in'

const R = 1

class Editor {
	constructor(options) {

		this._initDom(options)

		this._bindEvent()
	}
	_initDom({ container = '#container', toolbar = '#toolbar', canvas = '#editor', panel = '#panel' }) {
		this.oContainer = document.querySelector('#container')
		this.oMenu = document.querySelector('#menu')
		this.oPanel = document.querySelector('#panel')

		// canvas
		this.oCanvasContainer = document.querySelector('#editor')
		const rect = this.oCanvasContainer.getBoundingClientRect()
		this.rect = rect

		// paint canvas
		const oCanvas = document.createElement('canvas')
		oCanvas.width = rect.width
		oCanvas.height = rect.height
		oCanvas.style.backgroundColor = '#F3F4F8'

		this.oCanvasContainer.appendChild(oCanvas)
		this.oCanvas = oCanvas
		this.ctx = oCanvas.getContext('2d')

		this.ctx.fillStyle = '#fff'
		this.ctx.font = `${R > 1 ? 20 : 14}px sans-serif`
		this.ctx.textAlign = 'center'
		this.ctx.textBaseline = 'middle'
		this.ctx.strokeStyle = COLOR['border']

		const oMoveCanvas = document.createElement('canvas')
		oMoveCanvas.width = rect.width
		oMoveCanvas.height = rect.height
		oMoveCanvas.style.pointerEvents = 'none'
		oMoveCanvas.style.backgroundColor = 'transparent'
		this.oCanvasContainer.appendChild(oMoveCanvas)
		this.moveCtx = oMoveCanvas.getContext('2d')

		this.moveCtx.lineJoin = 'round'
	}

	// move property
	isMoving = false
	movingType = null
	movingTarget = null

	// hover property
	hoverItem = null
	hoverAnchor = null
	_hover(e) {
		const { itemList, edgeList } = this

		let hoverItem = null
		for (let i = itemList.length - 1; i >= 0; i --) {
			if (checkInRect(e, itemList[i])) {
				hoverItem = itemList[i]
				break
			}
		}
		if (hoverItem) {		// 鼠标实际在 item 范围内
			this.hoverItem = hoverItem
		} else if (!this.hoverAnchor) {		// 鼠标虽然不在 item 范围内但还在 item 的 anchor 内
			this.hoverItem = null
		}



		this.moveCtx.strokeStyle = COLOR['blue']
		// TODO 逻辑合并?
		if (this.hoverItem) {		// 鼠标在 item 或 item.anchor 内
			this._paintHoverItem(this.hoverItem)

			let { x, y, w, h, anchors } = this.hoverItem

			if (anchors.length) {		// 这时候再判断鼠标是否在 anchor 内
				let hoverAnchor = null
				for (let i = 0; i < anchors.length; i ++) {
					let anchor = anchors[i]
					let [ox, oy] = anchor

					ox = x - w/2 + w * ox
					oy = y - h/2 + h * oy

					if (checkInCircle(e, { ox, oy, r: 8 })) {
						hoverAnchor = anchor
						this._paintHoverAnchor(ox, oy, 'solid')
					} else {
						this._paintHoverAnchor(ox, oy, 'empty')
					}
				}
				this.hoverAnchor = hoverAnchor
			} else {
				this.hoverAnchor = null
			}
		} else if (!this.hoverAnchor) {
			this._clearHover()
		}
	}

	_paintItem(item) {
		const { ctx } = this
		const { x, y, w, h, text, z, c } = item
		let sx = x - w/2
		let sy = y - h/2

		// rect
		ctx.fillStyle = COLOR['shadow']
		ctx.fillRect(sx + 1, sy + 2, w, h)
		ctx.fillStyle = COLOR['white']
		ctx.fillRect(sx, sy, w, h)
		// border
		ctx.fillStyle = c
		ctx.fillRect(sx, sy, 6, h + 1)

		// ctx.save()
		ctx.fillStyle = COLOR['font']
		ctx.fillText(text, x, y)
		// ctx.restore()
	}
	_paintMovingItem(item) {		// paint moving item
		const { moveCtx: ctx } = this
		ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height)
		const { x, y, w, h } = item
		ctx.beginPath()
		ctx.moveTo(x - w/2, y - h/2)
		ctx.lineTo(x + w/2, y - h/2)
		ctx.lineTo(x + w/2, y + h/2)
		ctx.lineTo(x - w/2, y + h/2)
		ctx.lineTo(x - w/2, y - h/2)
		ctx.stroke()
		ctx.closePath()
		ctx.fillRect(x - w/2, y - h/2, w, h)
	}
	_paintHoverItem(item) {			// paint hover item
		const { moveCtx: ctx } = this
		ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height)

		const { x, y, w, h, input, output } = item
		ctx.strokeRect(x - w/2, y - h/2, w, h)
	}
	_paintHoverAnchor(x, y, type) {
		const { moveCtx: ctx } = this
		ctx.beginPath()
		ctx.arc(x, y, 4, 0, Math.PI * 2)
		ctx.fillStyle = type === 'solid' ? COLOR['blue'] : COLOR['white']
		ctx.fill()
		ctx.stroke()
		ctx.closePath()
	}

	// item, edge, shape
	itemList = []
	edgeList = []
	shapeList = {}

	_addItem(item) {
		const { itemList } = this

		let n = itemList.length
		item.z = n > 0 ? itemList[n - 1]['z'] : 1
		itemList.push(item)


		// if (!n) {
		// 	item.z = 1
		// 	itemList.push(item)
		// 	return item
		// }

		// let maxIndex = Math.max.apply(0, itemList.map(i => i.z))
		// item.z = maxIndex + 1

		// let p
		// for (let i = 0; i < n; i ++) {
		// 	p = i
		// 	if (itemList[i]['x'] > item.x) {
		// 		break
		// 	}
		// 	if (itemList[i]['x'] === item.x && item[i]['y'] > item.y) {
		// 		break
		// 	}
		// }
		// itemList.splice(p, 1, item, itemList[p])
	}

	// event
	_bindEvent() {
		// this.oCanvasContainer.addEventListener('mousemove', e => {
		// 	console.log(e)
		// })

		// 从 menu 开始的点击, 只能是添加 item 事件
		this.oMenu.addEventListener('mousedown', e => {
			const oItem = e.target
			if (!oItem.classList.contains('menu-item')) {
				return false
			}
			this.isMoving = true

			this._startAddItem(oItem)
		})
		// 从 canvas 开始的点击, 可能是移动/选择/拖边
		this.oCanvasContainer.addEventListener('click', e => {
			console.log('xxx')
		})

		this.oCanvasContainer.addEventListener('mousemove', e => {
			let { offsetX: x, offsetY: y } = e
			if (this.isMoving) {
				// TODO mousemove 出画布区域
				// if (x < 2 || x > this.rect.width - 2 || y < 2 || y > this.rect.height - 2) {
				// 	this.isMoving = false
				// 	this._clearMoving()
				// } else {
					this._move({ x, y })
				// }

			} else {
				this._hover({ x, y })
			}
		})

		this.oContainer.addEventListener('mouseup', e => {
			this._endMove(e)
		})
	}

	// move event
	_startAddItem(dom) {
		this.movingType = 'new-item'

		let shape = dom.getAttribute('data-shape')
		this.movingTarget = this.shapeList[shape]

		const { moveCtx: ctx } = this
		ctx.setLineDash([7, 3])
		ctx.strokeStyle = COLOR['blue']
		ctx.fillStyle = COLOR_RGBA['blue']
	}
	_startMoveItem() {

	}
	_move({ x, y }) {
		let item = this.movingTarget
		if (this.movingType === 'new-item') {
			this._paintMovingItem({ x, y, ...item })
		}
	}

	_endMove(e) {
		this.isMoving = false

		const { movingType, movingTarget, rect } = this
		const { offsetX: x, offsetY: y } = e

		if (movingType === 'new-item') {
			if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
				let item = { x, y, ...movingTarget }
				this._paintItem(item)
				this._addItem(item)
				this._clearMoving()
			}
		}

	}

	_clearMoving() {
		const { moveCtx: ctx, oCanvas } = this
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.movingType = null
		this.movingTarget = null

		ctx.setLineDash([])
	}
	_clearHover() {
		const { moveCtx: ctx, oCanvas } = this
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.hoverItem = null
		this.hoverAnchor = null
	}

	// register
	_register(shape, item) {
		this.shapeList[shape] = item
	}
}

export default Editor
