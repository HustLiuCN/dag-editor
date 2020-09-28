export class Event {
    constructor({ rect }: { rect: DOMRect }) {
        const UA = window && window.navigator.userAgent || ''

        this.isMobile = !!UA.toLowerCase().match(/iphone|mobile|andriod/)
        this.baseRect = rect

        if (this.isMobile) {
            document.body.addEventListener('touchmove', e => {
                e.preventDefault()
            }, { passive: false })
        }
    }
    protected isMobile: boolean
    private baseRect: DOMRect

    private mobileEvent = {
        'mousedown': 'touchstart',
        'mouseup': 'touchend',
        'mousemove': 'touchmove',
    }
    add(dom: HTMLElement, ev: string, fn: (e: globalThis.Event) => void) {
        ev = this.isMobile ? (this.mobileEvent[ev] || ev) : ev
        dom.addEventListener(ev, e => {
            if (this.isMobile) {
                let t = ev === 'touchend' ? e['changedTouches'][0] : e['touches'][0]
                t.offsetX = t.clientX - this.baseRect.left
                t.offsetY = t.clientY - this.baseRect.top
                fn(t)
            } else {
                fn(e)
            }
        })
    }
}
