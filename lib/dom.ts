export function getDom(selector: string): HTMLElement {
    return document.querySelector(selector)
}

export function getDomList(selector: string): NodeList {
    return document.querySelectorAll(selector)
}

export function createDom(tag = 'div', className?: string, id?: string): HTMLElement {
    const o = document.createElement(tag)
    className && (o.className = className)
    id && (o.id = id)
    return o
}

export function getAttr(dom: HTMLElement, attr: string): string {
    return dom.getAttribute(attr)
}