class Toolbar {
    constructor({ selector }) {
        this.oToolbar = document.querySelector(selector)

        this._bind()
    }

    registerCommands(events) {
        this.events = {
            ...this.events,
            ...events,
        }
    }
    events = {}
    oToolbar: HTMLElement
    _bind() {
        this.oToolbar.addEventListener('click', e => {
            const o = e.target as HTMLElement
            const command = o.getAttribute('data-command')
            if (!command) {
                return
            }
            const fn = this.events[command]
            fn && fn(e)
        })
    }
}

export default Toolbar