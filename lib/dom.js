export function getDom(selector) {
    return document.querySelector(selector)
}

export function getDomList(selector) {
    return document.querySelectorAll(selector)
}

export function createDom(tag = 'div', className, id) {
    const o = document.createElement(tag)
    className && (o.className = className)
    id && (o.id = id)
    return o
}
