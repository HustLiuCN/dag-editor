/*
 *  mind-map
 */

import { createDom, getDom } from './dom'
import { figureNodeLevel } from './tree'

import COLOR from './color'
import Toolbar from './toolbar'
import Event from './event'

export class Mind {
    constructor({ container = '#mind-map-container', data = {}, options = {} }) {
        if (!getDom(container)) {
            throw Error('null canvas container found')
        }
        this.oCon = getDom(container)
        this.options = {
            ...this.options,
            ...options,
        }

        this._init()
        this._setData(data)
        this._render()
        this._bindEvent()
    }
    /*
     *  initial info
     */
    options = {
        style: {
            fill: COLOR.blue,
            line: COLOR.line,
            font: COLOR.font,
        },
        lineType: 'polygon',
        legends: null,
    }
    _init() {
        const rect = this.oCon.getBoundingClientRect()
        const { width, height, left, top } = rect
        const ratio = window.devicePixelRatio || 1
        // dom config
        this.config = {
            width,
            height,
            ratio,
            left,
            top,
        }
        console.info(`当前屏幕像素密度为${ratio}`)
        // set node painting info
        this._initNodeInfo()
        // add legends to container
        this.options.toolbar && this._initLegends()
        // add toolbar
        this.options.toolbar && this._initToolbar(this.options.toolbar)

        const oCanvas = createDom('canvas')
        oCanvas.width = width * ratio
        oCanvas.height = height * ratio
        // canvas & ctx
        this.oCanvas = oCanvas
        this.ctx = oCanvas.getContext('2d')
        this.ctx.font = `${this.nodeInfo.fontSize}px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,sans-serif`
        this.ctx.textBaseline = 'middle'
        this.ctx.textAlign = 'center'
        this.ctx.fillStyle = this.options.style.fill
        this.ctx.strokeStyle = this.options.style.line
        // translate the origin to make the root node a better place
        this._initTranslate()

        // append canvas dom to container
        this.oCon.appendChild(this.oCanvas)
    }
    nodeInfo = {
        height: 26,
        minWidth: 80,
        horizontalGap: 100,
        verticalHeight: 36,
        fontSize: 12,
    }
    _initNodeInfo() {
        const { ratio: r } = this.config
        const { nodeInfo } = this
        for (let k in nodeInfo) {
            nodeInfo[k] = nodeInfo[k] * r
        }
        nodeInfo.fontSize = Math.max(r * 10, 12)
    }
    // canvas ctx translate info, it's the origin pos relative to canvas(0, 0)
    _initTranslate() {
        this._translate(50 * this.config.ratio, this.oCanvas.height / 2)
    }
    translate = {
        x: 0,
        y: 0,
    }
    /*
     *  arguments(x, y) is diffX & diffY
     *  ctx.translate() is accumulative
     */
    _translate(x, y) {
        this.ctx.translate(x, y)
        this.translate.x += x
        this.translate.y += y
    }
    // repaint
    _reset() {
        this._clear()
        this.scale = 10
        this._translate(-this.translate.x, -this.translate.y)
        this._initTranslate()
        this._render()
    }
    _repaint(x = 0, y = 0) {
        this._clear()
        this.ctx.save()
        const sc = this.scale / 10
        this.ctx.transform(sc, 0, 0, sc, x, y)
        this._render()
        this.ctx.restore()
    }

    /*
     *  data: {
     *      ...node,
     *      children: [ node ],
     *
     *      // calculated property for canvas painting
     *      count: number,      // width of tree, which current node as root
     *      level: number,      // height of current node
     *      x: number,      // origin x-position
     *      y: number,      // origin y-position
     *      end: number,    // end x-position
     *  }
     */
    _setData(data) {
        this.data = data
        // scan the tree
        figureNodeLevel(this.data)
    }
    _render() {
        const { data } = this
        let queue = []
        queue.push(data)

        const { horizontalGap: gap, verticalHeight: vh } = this.nodeInfo
        const { lineType } = this.options

        while (queue.length) {
            let cur = queue.shift()
            // paint root first
            if (cur.level === 0) {
                this._paintNode(data, { ox: 0, oy: 0 })
            }
            // paint children node & line
            const { children } = cur
            if (!children || !children.length) {
                continue
            }

            if (lineType === 'polygon') {
                // line from root to child, first part
                this._paintLine({ x: cur.end, y: cur.y }, { x: cur.end + gap/2, y: cur.y })
            }

            let n = children.length

            children.forEach((child, i) => {
                let oy = child.count * vh / 2
                if (i > 0) {
                    let prevHeight = children[i - 1]['count'] * vh / 2 + children[i - 1]['y']
                    oy += prevHeight
                } else {
                    oy += cur.y - cur.count * vh / 2
                }
                // paint root's child node
                this._paintNode(child, { ox: cur.end + gap, oy })

                if (lineType === 'polygon') {
                    if (i === 0 || i === n - 1) {
                        // polygon-line from root to child, second part
                        this._paintLine({ x: cur.end + gap/2, y: cur.y }, { x: cur.end + gap/2, y: child.y })
                    }
                    // line from root to child, third part
                    this._paintLine({ x: cur.end + gap/2, y: child.y }, { x: child.x, y: child.y })
                } else {
                    this._paintCurve({ x: cur.end, y: cur.y }, child)
                }

                // add child nodes to the queue
                queue.push(child)
            })
        }
    }
    /*
     *  node: {
     *      x, y, end
     *  }
     *  rect(x, y - node.height/2, node.width, node.height)
     *
     */
    _paintNode(node, { ox, oy }) {
        const { ctx, options } = this
        const { height: h, minWidth: w } = this.nodeInfo

        let t = ctx.measureText(node.text)
        let tw = Math.max(t.width + 20 * this.config.ratio, w)

        if (options.legends && options.legends[node.type]) {
            let color = options.legends[node.type]['color']
            ctx.save()
            ctx.fillStyle = color
            ctx.fillRect(ox, oy - h/2, tw, h)
            ctx.restore()
        } else {
            ctx.fillRect(ox, oy - h/2, tw, h)
        }

        ctx.save()
        ctx.fillStyle = options.style.font
        ctx.fillText(node.text, ox + tw / 2, oy)
        ctx.restore()

        node.x = ox
        node.y = oy
        node.end = ox + tw
    }
    _paintLine(start, end) {
        const { ctx } = this
        const { x: sx, y: sy } = start
        const { x: ex, y: ey } = end

        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(ex, ey)
        ctx.stroke()
        ctx.closePath()
    }
    _paintCurve(start, end) {
        const { ctx } = this
        const { x: sx, y: sy } = start
        const { x: ex, y: ey } = end

        ctx.beginPath()
        ctx.moveTo(sx, sy)
        const cp1 = [ (sx + ex) / 2, sy ]
        const cp2 = [ sx, ey ]
        ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], ex, ey)
        ctx.stroke()
        ctx.closePath()
    }

    _clear() {
        const { x, y } = this.translate
        this.ctx.clearRect(-x, -y, this.oCanvas.width, this.oCanvas.height)
    }

    /*
     *  event
     */
    _bindEvent() {
        const event = new Event({
            rect: this.config
        })
        const { oCanvas: o } = this
        event.add(o, 'mousedown', this._mouseDown.bind(this))
        event.add(o, 'mouseup', this._mouseUp.bind(this))
        event.add(o, 'mousemove', e => {
            requestAnimationFrame(this._mouseMove.bind(this, e))
        })

        this.event = event
    }
    mouseEvent = {
        isDown: false,
        // mouse event start point (sx, sy)
        sx: 0,
        sy: 0,
    }
    _mouseDown(e) {
        const { offsetX: x, offsetY: y } = e
        const { ratio: r } = this.config
        const sc = this.scale / 10
        this.mouseEvent.isDown = true
        this.mouseEvent.sx = x*r*sc
        this.mouseEvent.sy = y*r*sc
    }
    _mouseMove(e) {
        const { isDown, sx, sy } = this.mouseEvent
        const sc = this.scale / 10
        if (!isDown) {
            return
        }
        const { offsetX: x, offsetY: y } = e
        const { ratio: r } = this.config
        let diffX = x*r*sc - sx
        let diffY = y*r*sc - sy

        this._repaint(diffX, diffY)
    }
    _mouseUp(e) {
        const { offsetX: x, offsetY: y } = e
        const { sx, sy } = this.mouseEvent
        const { ratio: r } = this.config
        const sc = this.scale / 10

        this.mouseEvent.isDown = false

        let diffX = x*r*sc - sx
        let diffY = y*r*sc - sy

        this._translate(diffX, diffY)
    }

    // canvas ctx scale info
    scale = 10
    _zoomIn() {
        this.scale < 15 && (this.scale ++)
        this._repaint()
        console.info(`当前缩放比例为${this.scale / 10}`)
    }
    _zoomOut() {
        this.scale > 5 && (this.scale --)
        this._repaint()
        console.info(`当前缩放比例为${this.scale / 10}`)
    }

    // toolbar: zoom-in, zoom-out
    _initToolbar(selector) {
        this.toolbar = new Toolbar({ selector })
        this.toolbar.registerCommands({
            'zoom-in': this._zoomIn.bind(this),
            'zoom-out': this._zoomOut.bind(this),
            'reset': this._reset.bind(this),
            'switch-line': this._switchLine.bind(this)
        })
    }

    // legends
    _initLegends() {
        const { legends } = this.options
        const oBox = createDom('div', 'legends-container')

        let tpl = ``
        for (let k in legends) {
            let l = legends[k]
            tpl += `<span class="legend-item" style="background-color: ${l.color}">${l.name}</span>`
        }

        oBox.innerHTML = tpl
        this.oCon.appendChild(oBox)
    }

    // options
    _switchLine(e) {
        const { lineType } = this.options
        let type = lineType === 'curve' ? 'polygon' : 'curve'
        this.options.lineType = type
        // this._reset()
        this._repaint()
    }
}
