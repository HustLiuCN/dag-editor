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

    _bind() {
        this.oToolbar.addEventListener('click', e => {
            const o = e.target
            const command = o.getAttribute('data-command')
            if (!command) {
                return
            }
            const fn = this.events[command]
            fn && fn()
        })
    }
}

export default Toolbar