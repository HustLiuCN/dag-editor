import { getDom, createDom } from './dom'
import COLOR from './color'

function init({
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
    canvas.width = rect.width
    canvas.height = rect.height
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

    initCanvas.call(this)
}

function initCanvas() {
    const { ctx, moveCtx, ratio } = this
    ctx.fillStyle = COLOR['white']
    ctx.strokeStyle = COLOR['border']
    ctx.font = `${ratio > 1 ? 20 : 14}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.lineJoin = 'round'

    moveCtx.strokeStyle = COLOR['blue']
    moveCtx.fillStyle = COLOR['blue-op']
    moveCtx.lineJoin = 'round'
}

export default init