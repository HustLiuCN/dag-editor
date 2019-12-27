import { COLOR, COLOR_RGBA } from './color'
import { checkInRect, checkInCircle } from './check-if-in'
import { getDom, createDom } from './dom'
// import { bindEvent } from './event'

const R = 1

class Editor {
	constructor(options) {

		this.options = options

		this._initDom(options)

		this._bindEvent()
	}
	// init dom & canvas
	_initDom({
		container = '#container',
		menu = '#menu',
		editor = '#editor',
	}) {
		// container
		this.oContainer = getDom(container)

		// item menu
		this.oMenu = getDom(menu)

		// canvas
		this.oCanvasContainer = getDom(editor)
		const rect = this.oCanvasContainer.getBoundingClientRect()
		this.rect = rect
		// main painting canvas
		const canvas = createDom('canvas')
		canvas.width = rect.width * R
		canvas.height = rect.height * R
		canvas.style.backgroundColor = COLOR['grey']
		this.oCanvasContainer.appendChild(canvas)
		this.oCanvas = canvas
		this.ctx = canvas.getContext('2d')
		// upper moving painting canvas
		const cp = canvas.cloneNode()
		cp.style.pointerEvents = 'none'
		cp.style.backgroundColor = 'transparent'
		this.oCanvasContainer.appendChild(cp)
		this.moveCtx = cp.getContext('2d')

		this._initCanvas()
	}
	_initCanvas() {
		const { ctx, moveCtx } = this

		ctx.fillStyle = COLOR['white']
		ctx.strokeStyle = COLOR['border']
		ctx.font = `${R > 1 ? 20 : 14}px sans-serif`
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.lineJoin = 'round'

		moveCtx.strokeStyle = COLOR['blue']
		moveCtx.fillStyle = COLOR['blue-op']
		moveCtx.lineJoin = 'round'
	}
	// bind event
	eventList = [
		['oMenu', 'mousedown', '_startAddItem'],				// mousedown in menu: start to add a new item
		['oCanvasContainer', 'mousedown', '_selectItem'],
		['oContainer', 'mouseup', '_endMove'],					// mouseup in container: end move
		['oCanvasContainer', 'mousemove', '_mouseMove'],		// mousemove in canvas: move item or hover
	]
	_bindEvent() {
		const { eventList } = this
		eventList.forEach(ev => {
			this[ev[0]].addEventListener(ev[1], e => this[ev[2]](e))
		})
	}
	// item, edge, shape
	shapeList = {}
	itemList = []
	edgeList = []
	selectedItem = null
	selectedAnchor = null			// index of item.anchors
	selectedItemType = null

	_addItem(item) {		// push to the itemList in 'z-index' ascend order
		const { itemList } = this

		let n = itemList.length
		item.id = item.z = n > 0 ? itemList[n - 1]['z'] : 1
		itemList.push(item)
	}
	_replaceItem(item) {
		const { itemList } = this

		let i = itemList.findIndex(o => o.id === item.id)
		if (i >= 0) {
			item.z = itemList[itemList.length - 1]['z'] + 1
			itemList.splice(i, 1)
			itemList.push(item)
		}
	}

	// event
	_mouseMove(e) {
		const { offsetX: x, offsetY: y } = e
		this.isMoving ? this._moveItem({ x, y }) : this._hoverItem({ x, y })
	}
	_selectItem(e) {
		const { moveCtx: ctx } = this
		this.selectedItem = this.hoverItem
		this.selectedAnchor = this.hoverAnchor
		this.selectedItemType = this.hoverAnchor ? 'anchor' : 'item'

		if (this.selectedItem) {
			this.isMoving = true
			this.movingType = 'move-item'
			this.movingItem = this.selectedItem
			this.movingStart = { x: e.offsetX, y: e.offsetY }

			ctx.save()
			ctx.setLineDash([7, 3])
			ctx.strokeStyle = COLOR['blue']
			ctx.fillStyle = COLOR['blue-op']
		} else {
			this.isMoving = false
			this.movingType = null
		}
	}

	// hover
	hoverItem = null
	hoverAnchor = null
	_hoverItem(e) {
		const { itemList, moveCtx: ctx } = this

		let hoverItem = null
		for (let i = itemList.length - 1; i >= 0; i --) {		// by z-index ascend order
			if (checkInRect(e, itemList[i])) {
				hoverItem = itemList[i]
				break
			}
		}

		if (!hoverItem && !this.hoverAnchor) {			// mouse not in item-rect & item-anchor
			this._clearHover()
			return
		}
		if (hoverItem) {		// mouse hover on item
			this.hoverItem = hoverItem
		}

		this._paintHoverItem(this.hoverItem)

		let { x, y, w, h, anchors } = this.hoverItem
		if (anchors.length) {
			let hoverAnchor = null
			for (let i = 0; i < anchors.length; i ++) {
				let anchor = anchors[i]
				let [ox, oy] = anchor

				ox = x - w/2 + w * ox
				oy = y - h/2 + h * oy

				if (checkInCircle(e, { ox, oy, r: 8 })) {
					hoverAnchor = i
					this._paintHoverAnchor(ox, oy, 'solid')
				} else {
					this._paintHoverAnchor(ox, oy, 'empty')
				}
			}
			this.hoverAnchor = hoverAnchor
		} else {
			this.hoverAnchor = null
		}
	}
	_clearHover() {
		const { moveCtx: ctx, oCanvas } = this
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.hoverItem = null
		this.hoverAnchor = null
	}

	// move info
	isMoving = false
	movingType = null
	movingItem = null
	movingStart = {}		// { x, y }: move start point, to calculate the diffX, diffY
	// move start with a new item
	_startAddItem(e) {
		const oItem = e.target
		if (!oItem.classList.contains('menu-item')) {
			return
		}
		const shape = oItem.getAttribute('data-shape')
		// set new item info
		this.isMoving = true
		this.movingType = 'new-item'
		this.movingItem = this.shapeList[shape]
		this.movingStart = { x: 0, y: 0 }
		// set moving-canvas
		const { moveCtx: ctx } = this
		ctx.save()
		ctx.setLineDash([7, 3])
		ctx.strokeStyle = COLOR['blue']
		ctx.fillStyle = COLOR['blue-op']
	}
	// moving item
	_moveItem({ x, y }) {
		const { movingItem, movingStart, movingType } = this
		switch (movingType) {
			case 'new-item':
				this._paintMovingItem({ x, y, ...movingItem })
				break
			case 'move-item':
				let diffX = x - movingStart.x
				let diffY = y - movingStart.y
				this._paintMovingItem({
					...movingItem,
					x: movingItem.x + diffX,
					y: movingItem.y + diffY,
				})
				break
		}
	}
	// end move
	_endMove(e) {
		this.isMoving = false

		const { movingItem, movingType, oCanvas, rect, movingStart } = this
		const { offsetX: x, offsetY: y } = e

		switch (movingType) {
			case 'new-item':
				if (x > 0 && x < oCanvas.width && y > 0 && y < oCanvas.height) {
					let item = { x, y, ...movingItem }
					this._paintItem(item)
					this._addItem(item)
				}
				break
			case 'move-item':
				if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
					movingItem.x += (x - movingStart.x)
					movingItem.y += (y - movingStart.y)
					this._replaceItem(movingItem)
					this._repaint()
					this._clearMoving()
				}
				break
		}

		this._clearMoving()
	}
	_clearMoving() {
		const { moveCtx: ctx, oCanvas } = this

		ctx.restore()
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.movingType = null
		this.movingItem = null
	}
	// paint
	_paintItem(item) {
		const { ctx } = this
		const { x, y, w, h, text, z, c } = item
		let sx = x - w/2
		let sy = y - h/2

		ctx.save()
		// rect
		ctx.fillStyle = COLOR['shadow']
		ctx.fillRect(sx + 1, sy + 2, w, h)
		ctx.fillStyle = COLOR['white']
		ctx.fillRect(sx, sy, w, h)
		// border
		ctx.fillStyle = c
		ctx.fillRect(sx, sy, 6, h + 1)
		// text
		ctx.fillStyle = COLOR['font']
		ctx.fillText(text, x, y)
		ctx.restore()
	}
	_paintMovingItem(item) {		// paint moving item
		const { moveCtx: ctx } = this
		ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height)

		const { x, y, w, h } = item

		let sx = x - w/2
		let sy = y - h/2
		let ex = x + w/2
		let ey = y + h/2

		ctx.beginPath()
		ctx.moveTo(sx, sy)
		ctx.lineTo(ex, sy)
		ctx.lineTo(ex, ey)
		ctx.lineTo(sx, ey)
		ctx.lineTo(sx, sy)
		ctx.stroke()
		ctx.closePath()
		ctx.fillRect(sx, sy, w, h)

	}
	_paintHoverItem(item) {
		const { moveCtx: ctx } = this
		ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height)

		const { x, y, w, h } = item
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
	_repaint() {
		this._clear()
		const { itemList, edgeList } = this
		itemList.forEach(item => {
			this._paintItem(item)
		})
	}


	_clear() {
		const { ctx, oCanvas } = this
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)
	}

	// register
	_register(shape, item) {
		this.shapeList[shape] = item
	}

	_log() {
		console.log(this.selectedItem, this.xx)
	}
}

export default Editor
