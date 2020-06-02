import COLOR from './color'

class Canvas {
    constructor(canvas, options = {}) {
        this.canvas = canvas
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = options.fillStyle || COLOR.white
        ctx.strokeStyle = options.strokeStyle || COLOR.line

        this.ctx = ctx
    }

    _paintNode(node) {
        this._clear()

        let { x, y, w, h } = node

        this.ctx.strokeRect(x - w/2, y - h/2, w, h)
        this.ctx.fillRect(x - w/2, y - h/2, w, h)
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default Canvas