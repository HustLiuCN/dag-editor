/*
 *  dag-editor
 *  author: liupeidong@gmail.com
 */

import { getDom, createDom, getAttr } from '@lib/dom'
import { randomID, checkInNode, checkInNodeAnchor, getAnchorPos, checkInCircle } from '@lib/utils'
import Event from './event'
import Canvas from './canvas'
import shapes from '@data/dag-shapes'
import COLOR from './color'

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

        this.mainCanvas = new Canvas(oCanvas, { ratio, })
        this.dynamicCanvas = new Canvas(oDynamicCanvas, {
            ratio,
            fillStyle: COLOR.lingthBlue,
            strokeStyle: COLOR.blue,
        })

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
    _addNode(node) {
        this.nodes.push({ ...node, id: randomID() })
        this.selectedNode = this.nodes[this.nodes.length - 1]
        // this._render()
    }
    _updateNode(node) {
        let i = this.nodes.findIndex(n => n.id === node.id)
        if (i < 0) {
            return
        }
        // node.x += dx
        // node.y += dy
        this.nodes.splice(i, 1)
        this.nodes.push(node)
        // this._render()
    }
    _addEdge([ source, sourceAnchor ], [ target, targetAnchor ]) {
        let edge = {
            source: source.id,
            sourceAnchor,
            target: target.id,
            targetAnchor
        }
        let i = this.edges.findIndex(e => e.source === source.id && e.sourceAnchor === sourceAnchor && e.target === target.id && e.targetAnchor === targetAnchor)
        if (i < 0) {
            this.edges.push(edge)
        }
        console.log(this.edges)
    }

    _getSelected({ x, y }) {
        const { nodes } = this
        for (let i = nodes.length; i > 0; i --) {
            let node = nodes[i - 1]
            if (checkInNode({ x, y }, node)) {
                return node
            }
        }
        return null
    }

    /*
     *  paint
     *      render: render all nodes & edges on main canvas, clear first
     */
    _render() {
        this.mainCanvas._clear()
        this.nodes.forEach(node => {
            this.mainCanvas._paintNode(node, this.selectedNode && this.selectedNode.id === node.id)
        })
        this.edges.forEach(({ source, sourceAnchor, target, targetAnchor }) => {
            let start = this.nodes.find(n => n.id === source)
            let end = this.nodes.find(n => n.id === target)
            this.mainCanvas._paintEdge(
                getAnchorPos(start, start.anchors[sourceAnchor]),
                getAnchorPos(end, end.anchors[targetAnchor])
            )
        })
    }

    /*
     *  events
     */
    eventList = [
        ['oItemPanel', 'mousedown', '_beginAddNode'],
        ['oItemPanel', 'mouseup', '_mouseUp'],
        ['oPage', 'mousedown', '_mouseDownOnPage'],
        ['oPage', 'mousemove', '_mouseMove'],
        ['oPage', 'mouseleave', '_mouseLeave'],
        ['oPage', 'mouseup', '_mouseUpOnPage'],
        ['oPage', 'contextmenu', '_contextMenu'],
    ]
    callbackList = [
        'selectedNodeChange',
    ]
    _bindEvents() {
        const event = new Event({
            rect: this.config
        })

        for (let ev of this.eventList) {
            event.add(this[ev[0]], ev[1], this[ev[2]].bind(this))
        }

        this.event = event
    }
    on(ev, cb) {
        if (this.callbackList.indexOf(ev) > -1) {
            this[ev] = cb
        }
    }

    isMouseDown = false
    mouseDownType = null
    selectedShape = null
    // selectedNode
    __selectedNode = null
    set selectedNode(node) {
        // TODO
        this.__selectedNode = node
        this.hoverNode = null
        this.selectedNodeChange && this.selectedNodeChange(node)
    }
    get selectedNode() {
        return this.__selectedNode
    }
    __selectedAnchor = null
    anchorStartPos = {}
    set selectedAnchor(anchor) {
        this.__selectedAnchor = anchor
        if (!anchor) {
            this.anchorStartPos = {}
        } else {
            let [ node, i ] = anchor
            this.anchorStartPos = getAnchorPos(node, node.anchors[i])
        }
    }
    get selectedAnchor() {
        return this.__selectedAnchor
    }
    hoverNode = null
    hoverAnchor = null
    // mouse down on itempanel
    _beginAddNode(e) {
        const o = e.target
        const shape = getAttr(o, 'data-shape')
        if (!shape) {
            return
        }

        this.isMouseDown = true
        this.mouseDownType = 'add-node'

        this.selectedShape = this.shapes[shape]
    }
    // mouse down on page
    mouseEventStart = {
        x: 0,
        y: 0,
    }
    _mouseDownOnPage(e) {
        this.isMouseDown = true
        const { offsetX: x, offsetY: y } = e
        this.mouseEventStart = { x, y }

        if (this.hoverNode) {
            this.selectedNode = this.hoverNode
            if (this.hoverAnchor) {
                this.mouseDownType = 'move-edge'
                this.selectedAnchor = this.hoverAnchor
            } else {
                this.mouseDownType = 'move-node'
                this.selectedAnchor = null
            }
        } else {
            this.selectedNode = null
            return
        }
    }
    // mouse move
    _mouseMove(e) {
        this.dynamicCanvas._clear()
        const { offsetX: x, offsetY: y } = e
        if (this.isMouseDown) {     // move
            switch(this.mouseDownType) {
                case 'add-node':
                    this.dynamicCanvas._paintNode({ ...this.selectedShape, x, y })
                    break
                case 'move-node':
                    let dx = x - this.mouseEventStart.x
                    let dy = y - this.mouseEventStart.y
                    this.dynamicCanvas._paintNode({
                        ...this.selectedNode,
                        x: this.selectedNode.x + dx,
                        y: this.selectedNode.y + dy
                    })
                    break
                case 'move-edge':
                    this.nodes.forEach(node => {
                        if (node.id !== this.selectedNode.id && node.anchors) {
                            this.dynamicCanvas._paintActiveAnchors(node)
                        }
                    })
                    this.dynamicCanvas._paintEdge(this.anchorStartPos, { x, y })
                    break
            }
        } else {        // hover
            const hoverNode = this._getSelected({ x, y })
            if (this.hoverNode) {
                let hoverAnchor = checkInNodeAnchor({ x, y }, this.hoverNode)
                this.hoverAnchor = hoverAnchor
                if (!hoverAnchor) {
                    this.hoverNode = hoverNode
                }
            } else {
                this.hoverAnchor = null
                this.hoverNode = hoverNode
            }
            this.hoverNode && this.dynamicCanvas._paintNode(this.hoverNode, true)
        }
    }

    _mouseLeave() {
        this._mouseUp()
        // this.dynamicCanvas._clear()
    }

    _mouseUpOnPage(e) {
        let { offsetX: x, offsetY: y } = e

        if (!this.isMouseDown) {
            return
        }
        switch(this.mouseDownType) {
            case 'add-node':
                this._addNode({ ...this.selectedShape, x, y })
                // this._mouseUp()
                break
            case 'move-node':
                this._updateNode({
                    ...this.selectedNode,
                    x: this.selectedNode.x + x - this.mouseEventStart.x,
                    y: this.selectedNode.y + y - this.mouseEventStart.y
                })
                // this._mouseUp()
                break
            case 'move-edge':
                this.nodes.forEach(node => {
                    if (node.id !== this.selectedNode.id && node.anchors) {
                        node.anchors.forEach((anchor, i) => {
                            if (anchor[2] === 'input') {
                                let pos = getAnchorPos(node, anchor)
                                if (checkInCircle({ x, y }, pos, 12)) {
                                    this._addEdge(this.selectedAnchor, [ node, i ])
                                }
                            }
                        })
                    }
                })
                break
            default:
                // this._render()
                // this._mouseUp()
                break
        }

        this._render()
        this._mouseUp()
    }
    _mouseUp() {
        this.isMouseDown = false
        this.mouseDownType = null
        this.selectedShape = null
        this.dynamicCanvas._clear()
    }

    _contextMenu(e) {
        e.preventDefault()
        console.log('===')
    }
}


// example
const editor = new Editor({
    container: '#container',
    page: '#editor',
    itempanel: '#itempanel',
})

const tpl = `<h4>TODO List</h4>
            <ul>
                <li>1. delete node & edge</li>
                <li>2. edge check</li>
				<li>3. zoom-in & zoom-out</li>
				<li>4. more callback</li>
            </ul>`
editor.on('selectedNodeChange', node => {
    const oPanel = getDom('#panel')
    if (node) {
        oPanel.innerHTML = ``
        const oTitle = createDom('h4')
        oTitle.innerHTML = '节点名称'
        const oInput = createDom('input')
        oPanel.appendChild(oTitle)
        oPanel.appendChild(oInput)
        oInput.addEventListener('change', e => {
            let val = e.target.value
            let newNode = {
                ...node,
                name: val,
            }
            editor._updateNode(newNode)
            editor._render()
        })
    } else {
        oPanel.innerHTML = tpl
    }
})

for (let shape in shapes) {
    editor.registerShape(shape, shapes[shape])
}