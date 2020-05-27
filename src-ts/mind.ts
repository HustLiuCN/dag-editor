import { createDom } from './dom'

import color from './color'

class Mind {
	constructor({
		container = '#mind-map-container',
	} : {
		container?: string
	}) {
		this.oContainer = document.querySelector(container)

		this._init()
	}

	_init() {
		let oCanvas = createDom('canvas', 'mind-map-canvas') as HTMLCanvasElement
		this.oCanvas = oCanvas
		this.ctx = oCanvas.getContext('2d')

		this.ctx.

		this.oContainer.appendChild(oCanvas)
	}

	oContainer: HTMLElement
	oCanvas: HTMLCanvasElement
	ctx: CanvasRenderingContext2D
}


new Mind({})
