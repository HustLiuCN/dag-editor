/*
 *	game @liupd
 */

import config from './device'
import { getDom, createDom } from '../lib/dom'
import { randomBoard } from './random'

class GAME {
	constructor() {
		console.log('===game init===')
		this._init()
	}
	_init() {
		this._initDom()

		this._initData()
		this._initPaint()

		this._bindEvent()
	}
	_initDom() {
		const oCon = getDom('#game-box')
		const rect = oCon.getBoundingClientRect()

		this.oCon = oCon
		this.rect = rect

		const bg = createDom('canvas')
		bg.width = rect.width
		bg.height = rect.height
		this.oCanvas = bg		// to get canvas width & height
		// background canvas
		this.bg = bg.getContext('2d')
		// animation canvas
		const ani = bg.cloneNode()
		this.ani = ani.getContext('2d')
		this.ani.fillStyle = '#2196f3'
		// controller canvas
		const ctl = bg.cloneNode()
		this.ctl = ctl.getContext('2d')

		bg.className = 'bg-canvas'
		ani.className = 'ani-canvas'
		ctl.className = 'ctl-canvas'

		oCon.appendChild(bg)
		oCon.appendChild(ani)
		oCon.appendChild(ctl)
	}
	_initData() {
		this.items.push({ x: 0, y: 200, w: 50, h: 10 })
		for (let i = 1; i < 5; i ++) {
			this.items.push(randomBoard(this.items[i - 1]))
		}
	}
	_initPaint() {
		this.items.forEach(item => {
			this._paintBoard(item)
		})
		this._paintRole(this.role.x, this.role.y)
	}

	// board
	items = []		// Board list
	_paintBoard({ x, y, w, h, t }) {
		const { bg } = this

		bg.fillRect(x, y, w, h)
	}

	// role
	role = {
		x: 50,
		y: 190,
	}
	_paintRole(x, y) {
		this.ani.beginPath()
		this.ani.arc(x, y, 10, 0, Math.PI * 2, false)
		this.ani.fill()
	}

	// event
	_bindEvent() {
		this.oCon.addEventListener('touchstart', e => {
			let touch = e.touches[0]
			console.log(touch)
		})
	}
}

const MyGame = new GAME()
