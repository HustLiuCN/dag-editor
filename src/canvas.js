class Canvas {
    constructor(canvas, options) {
        this.canvas = canvas
        const ctx = canvas.getContext('2d')
    }

    _paint(node) {
        console.log(node)
    }
}

export default Canvas