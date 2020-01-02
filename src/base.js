import COLOR from './color'
import { checkInRect, checkInCircle } from './check-if-in'

// import { bindEvent } from './event'
import test from './test'
import initDom from './init'

import { paintItem } from './paint'

const R = 1

class Editor {
	constructor(options) {
		this.ratio = R
		this.options = options

		initDom.call(this, options)
		this._bindEvent()

		this._initTest()
	}
	/*
	 *	this.ctx: main canvas for static items, edges
	 *	this.moveCtx: paint moving content canvas
 	*/
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
	edgeList = []
	selectedItemType = null

	// item list
	itemList = []
	_addItem(item) {		// push to the itemList in 'z-index' ascend order
		const { itemList } = this

		let n = itemList.length
		item.z = n > 0 ? Math.max.apply(null, itemList.map(o => o.z)) + 1 : 1
		item.id = n > 0 ? Math.max.apply(null, itemList.map(o => o.id)) + 1 : 1
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
	// mouse down
	isMouseDown = false
	movingStart = {}		// { x, y }: move origin point, to calculate the diffX, diffY
	movingType = null			// new-item, move-item, drag-edge
	selectedItem = null
	selectedAnchor = null		// index + 1 of item.anchors
	selectedItemType = null		// item, anchor, edge
	_startAddItem(e) {
		const oItem = e.target
		if (!oItem.classList.contains('menu-item')) {
			return
		}

		this.isMouseDown = true
		this.movingType = 'new-item'
		this.movingStart = { x: 0, y: 0 }

		const shape = oItem.getAttribute('data-shape')
		// TODO
		this.selectedItem = this.shapeList[shape]
		this.selectedAnchor = null
		this.selectedItemType = 'item'

		// set moving-canvas
		const { moveCtx: ctx } = this
		ctx.save()
		ctx.setLineDash([7, 3])
		ctx.strokeStyle = COLOR['blue']
		ctx.fillStyle = COLOR['blue-op']
	}
	_selectItem(e) {			// select must be behind hover action
		const { moveCtx: ctx } = this

		this.selectedItem = this.hoverItem
		this.selectedAnchor = this.hoverAnchor
		this.selectedItemType = this.hoverAnchor ? 'anchor' : 'item'

		this.movingStart = { x: e.offsetX, y: e.offsetY }

		if (!this.selectedItem) {
			// TODO move canvas
			return
		}

		this.isMouseDown = true
		this.movingType = `move-${this.selectedItemType}`
		this._clearHover()

		if (this.selectedItemType === 'item') {
			ctx.save()
			ctx.setLineDash([7, 3])
			ctx.strokeStyle = COLOR['blue']
			ctx.fillStyle = COLOR['blue-op']
		}

	}

	// mouse move
	_mouseMove(e) {
		const { offsetX: x, offsetY: y } = e
		this.isMouseDown ? this._moveItem({ x, y }) : this._hoverItem({ x, y })
	}
	// hover
	hoverItem = null
	hoverAnchor = null
	_hoverItem(e) {		// TODO
		const { itemList } = this

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

		let isSelected = this.selectedItem && this.selectedItem.id === this.hoverItem.id
		if (!isSelected) {
			this._paintHoverItem(this.hoverItem)
		}

		let { x, y, w, h, anchors } = this.hoverItem
		if (anchors.length) {
			let hoverAnchor = null
			for (let i = 0; i < anchors.length; i ++) {
				let anchor = anchors[i]
				let [ox, oy] = anchor

				ox = x - w/2 + w * ox
				oy = y - h/2 + h * oy

				if (checkInCircle(e, { ox, oy, r: 8 })) {
					hoverAnchor = i + 1
					this._paintAnchor(ox, oy, 'solid')
				} else {
					this._paintAnchor(ox, oy, 'empty')
				}
			}
			this.hoverAnchor = hoverAnchor
		} else {
			this.hoverAnchor = null
		}
	}
	// moving item
	_moveItem({ x, y }) {
		const { selectedItem, movingStart, movingType } = this
		console.log(movingType)
		switch (movingType) {
			case 'new-item':
				this._paintMovingItem({ x, y, ...selectedItem })
				break
			case 'move-item':
				let diffX = x - movingStart.x
				let diffY = y - movingStart.y
				this._paintMovingItem({
					...selectedItem,
					x: selectedItem.x + diffX,
					y: selectedItem.y + diffY,
				})
				break
			case 'move-anchor':
				this._paintMovingLine(movingStart, { x, y })
				break
		}
	}
	// end move
	_endMove(e) {
		this.isMouseDown = false

		const { selectedItem, movingType, oCanvas, rect, movingStart } = this
		const { offsetX: x, offsetY: y } = e

		switch (movingType) {
			case 'new-item':
				if (x > 0 && x < oCanvas.width && y > 0 && y < oCanvas.height) {
					let item = { x, y, ...selectedItem }
					this._addItem(item)
					this.selectedItem = item
				}
				break
			case 'move-item':
				if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
					selectedItem.x += (x - movingStart.x)
					selectedItem.y += (y - movingStart.y)
					this._replaceItem(selectedItem)
				}
				break
		}

		this._repaint()
		this._clearMoving()
		this.test.log()
	}
	_clearMoving() {
		const { moveCtx: ctx, oCanvas } = this

		ctx.restore()
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.movingType = null
	}
	_clearHover() {
		const { moveCtx: ctx, oCanvas } = this
		ctx.clearRect(0, 0, oCanvas.width, oCanvas.height)

		this.hoverItem = null
		this.hoverAnchor = null
	}

	// paint
	_paintItem(item, selected) {
		paintItem(this.ctx, item, selected)
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
	_paintAnchor(x, y, type) {
		const { moveCtx: ctx } = this
		ctx.beginPath()
		ctx.arc(x, y, 4, 0, Math.PI * 2)
		ctx.fillStyle = type === 'solid' ? COLOR['blue'] : COLOR['white']
		ctx.fill()
		ctx.stroke()
		ctx.closePath()
	}
	_paintMovingLine(start, end) {
		const { moveCtx: ctx } = this

		ctx.clearRect(0, 0, this.oCanvas.width, this.oCanvas.height)

		ctx.beginPath()
		ctx.moveTo(start.x, start.y)
		ctx.lineTo(end.x, end.y)
		ctx.stroke()
		ctx.closePath()
	}
	_repaint() {
		this._clear()
		const { itemList, edgeList, selectedItem } = this
		console.log(selectedItem)
		itemList.forEach(item => {
			let isSelected = (selectedItem && selectedItem.id === item.id)
			this._paintItem(item, isSelected)
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

	_initTest() {
		this.test = test.call(this)

		// this.test.paintLine()
	}
}

export default Editor
