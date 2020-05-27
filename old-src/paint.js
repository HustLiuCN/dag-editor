import COLOR from './color'

export function paintItem(ctx, item, selected) {
    const { x, y, w, h, text, c } = item
    let sx = x - w/2
    let sy = y - h/2
    // save canvas status
    ctx.save()
    // rect
    ctx.fillStyle = COLOR['shadow']
    ctx.fillRect(sx + 1, sy + 2, w, h)
    ctx.fillStyle = COLOR['white']
    ctx.fillRect(sx, sy, w, h)
    // border
    ctx.fillStyle = c || COLOR['blue']
    ctx.fillRect(sx, sy, 6, h + 1)
    // text
    ctx.fillStyle = COLOR['font']
    ctx.fillText(text, x, y)
    if (selected) {
        ctx.strokeStyle = COLOR['blue']
        ctx.strokeRect(sx, sy, w, h)
        if (item.anchors) {
            for (let i = 0; i < item.anchors.length; i ++) {
                let [ox, oy] = item.anchors[i]
                ox = sx + w * ox
                oy = sy + h * oy
                paintAnchor(ctx, ox, oy, 'empty')
            }
        }
    }
    // restore
    ctx.restore()
}

export function paintAnchor(ctx, x, y, type) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fillStyle = type === 'solid' ? COLOR['blue'] : COLOR['white']
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
}