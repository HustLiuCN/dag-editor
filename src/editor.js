/*
 *  dag-editor
 *  author: liupeidong@gmail.com
 */

import { getDom, createDom, getAttr } from '@lib/dom'
import Event from './event'
import Canvas from './canvas'
import shapes from '@data/dag-shapes'

class Editor {
    constructor({
        container,
        toolbar,
        itempanel,
        page,
        detailpanel,
    }) {
        console.log('xxx')
        this.oContainer = getDom(container)

        this.oItemPanel = itempanel && getDom(itempanel)
        this.oPage = page && getDom(page)

        this._initCanvas()
        this._bindEvents()
    }
    // init
    _initCanvas() {
        const rect = this.oPage.getBoundingClientRect()
        const { width, height, left, top } = rect
        const ratio = window.devicePixelRatio || 1
        this.pageConfig = {
            width,
            height,
            left,
            top,
            ratio,
        }

        const oCanvas = createDom('canvas', 'editor-canvas')
        oCanvas.width = width * ratio
        oCanvas.height = height * ratio

        const oDynamicCanvas = oCanvas.cloneNode()
        oDynamicCanvas.style.pointerEvents = 'none'
        oDynamicCanvas.style.backgroundColor = 'transparent'

        this.mainCanvas = new Canvas(oCanvas)
        this.dynamicCanvas = new Canvas(oDynamicCanvas)

        this.oPage.appendChild(oCanvas)
        this.oPage.appendChild(oDynamicCanvas)
    }
    registerShape(shapeName, shape) {
        this.shapes[shapeName] = shape
    }
    /*
     *  data
     *      node: {
     *          ...shape,
     *          ...position,
     *      }
     *      edge: {
     *          source,
     *          sourceAnchor,
     *          target,
     *          targetAnchor,
     *      }
     */
    shapes = {}
    nodes = []
    edges = []

    /*
     *  paint
     */
    _paint(node) {
        this.mainCanvas._paint(node)
    }

    /*
     *  events
     */
    _bindEvents() {
        const event = new Event({
            rect: this.config
        })

        event.add(this.oItemPanel, 'mousedown', this._beginAddNode.bind(this))
        event.add(this.oPage, 'mousemove', this._mouseMove.bind(this))

        // event.add(this.oContainer, 'mouseup', this._mouseUp.bind(this))
        event.add(this.oPage, 'mouseleave', this._mouseLeave.bind(this))

        this.event = event
    }

    isMouseDown = false
    mouseDownType = null
    selectedShape = null
    _beginAddNode(e) {
        const o = e.target
        const shape = getAttr(o, 'data-shape')
        if (!shape) {
            return
        }

        this.isMouseDown = true
        this.mouseDownType = 'add-node'

        this.selectedShape = this.shapes[shape]
        console.log(this.selectedShape)
    }
    // mouse move
    _mouseMove(e) {
        const { offsetX: x, offsetY: y } = e
        if (this.isMouseDown) {
            switch(this.mouseDownType) {
                case 'add-node':
                    this.dynamicCanvas._paint({ ...this.selectedShape, x, y })
                    break
                case 'move-node':
                    console.log('moving node')
                    break
            }
        }
    }

    _mouseLeave() {
        this.isMouseDown = false
    }
    _mouseUp(e) {
        this.isMouseDown = false
    }
}

const editor = new Editor({
    container: '#container',
    page: '#editor',
    itempanel: '#itempanel',
})

for (let shape in shapes) {
    editor.registerShape(shape, shapes[shape])
}