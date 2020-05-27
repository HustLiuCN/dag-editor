export function createDom(tag = 'div', className?, id?) : HTMLElement {
    const o = document.createElement(tag)
    className && (o.className = className)
    id && (o.id = id)
    return o
}