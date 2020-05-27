/*
 *  mind-map
 */

import { createDom, getDom } from '@lib/dom'
import { getLeavesCount, figureNodeLevel } from '@lib/tree'
import MockData from '@data/mind-map-data'
import COLOR from '@lib/color'

class Mind {
    constructor({ container = '#mind-map-container', data = {} }) {
        if (!getDom(container)) {
            throw Error('null canvas container found')
        }
        this.oCon = getDom(container)

        this._init()
        this._setData(data)
        this._render()
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
        this.itemInfo = {
            height: 32,
            minWidth: 60,
            horizontalGap: 100,
            verticalHeight: 40,
        }

        const oCanvas = createDom('canvas')
        oCanvas.width = width * ratio
        oCanvas.height = height * ratio
        // canvas & ctx
        this.oCanvas = oCanvas
        this.ctx = oCanvas.getContext('2d')
        this.ctx.font = '14px STHei,Helvetica,Arial,sans-serif'
        this.ctx.textBaseline = 'middle'
        this.ctx.textAlign = 'center'
        this.ctx.fillStyle = COLOR.blue
        // transform info
        this.translate = {
            // x: 50,
            x: 50 + Math.ceil(left) - left,
            y: Math.floor(oCanvas.height / 2) + Math.ceil(top) - top,
            // y: oCanvas.height / 2
        }
        this.scale = {
            x: 1,
            y: 1,
        }
        this.ctx.translate(this.translate.x, this.translate.y)

        this.oCon.appendChild(this.oCanvas)
    }

    _setData(data) {
        // data
        this.data = data

        figureNodeLevel(this.data)
        console.log(this.data)
    }

    _render() {
        const { data } = this
        let queue = []
        queue.push(data)
        // const diffY = this.translate.y

        while (queue.length) {
            let cur = queue.shift()
            if (cur.level === 0) {
                this._paintItem(data, { ox: 0, oy: 0 })
            }
            const { children } = cur
            if (children) {
                this._paintLine({ x: cur.end, y: cur.y }, { x: cur.end + 40, y: cur.y })
                children.forEach((child, i) => {
                    let oy = child.count * 40 / 2
                    if (i > 0) {
                        let prevHeight = children[i - 1]['count'] * 40 / 2 + children[i - 1]['y']
                        oy += prevHeight
                    } else {
                        oy += cur.y - cur.count * 40 / 2
                    }
                    this._paintItem(child, { ox: cur.end + 100, oy })
                    this._paintLine({ x: cur.end + 40, y: cur.y }, { x: child.x, y: child.y }, 'polygon')
                    queue.push(child)
                })
            }
        }
    }
    _paintItem(item, { ox, oy }) {
        const { ctx } = this
        let t = ctx.measureText(item.text)
        let tw = Math.max(t.width, 60) + 20
        // ctx.strokeRect(ox, oy - 16, tw, 32)
        ctx.fillRect(ox, oy - 16, tw, 32)

        ctx.save()
        ctx.fillStyle = COLOR.font
        ctx.fillText(item.text, ox + tw / 2, oy)
        ctx.restore()

        let end = ox + tw
        item.end = end
        item.x = ox
        item.y = oy
    }
    _paintLine(start, end, isPoylgon) {
        const { ctx } = this
        const { x: sx, y: sy } = start
        const { x: ex, y: ey } = end

        ctx.save()
        ctx.fillStyle = COLOR.line
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        if (isPoylgon) {
            ctx.lineTo(sx, ey)
        }
        ctx.lineTo(ex, ey)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
}


new Mind({ data: MockData })