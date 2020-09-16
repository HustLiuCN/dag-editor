import { Command } from './command'
import { createDom, getAttr } from '@lib/dom'
import { Editor } from './core'

export class ContextMenu {
  constructor({
    app,
    command,
    container,
  }: {
    app: Editor,
    command: Command,
    container: HTMLElement,
  }) {
    this.app = app
    this.command = command
    this.container = container
    this._init()
    this._bind()
  }
  // init
  private _init() {
    const oBody = this._createBody()
    this.body = oBody

    this.container.appendChild(oBody)
  }
  private _bind() {
    this.body.addEventListener('click', e => {
      const o = e.target as HTMLElement
      if (o.classList.contains('editor-contextmenu-item')) {
        let command = getAttr(o, 'data-command')
        this.command.execute(command)
        this.detach()
      }
    })
  }
  // attach
  attach(e: MouseEvent, { type }: IMenuOption) {
    this.body.classList.add('show')
    this.body.style.left = `${e.clientX}px`
    this.body.style.top = `${e.clientY}px`

    switch(type) {
      case 'node':
        this.body.appendChild(this._createDelItem())
        break
      default:
        this.body.appendChild(this._createClearItem())
        break
    }
  }
  // detach
  detach() {
    this.body.innerHTML = ''
    this.body.classList.remove('show')
  }
  // create dom
  private _createBody() {
    const body = createDom('div', 'editor-contextmenu bxs', 'editor-contextmenu')
    // body.classList
    return body
  }
  private _createDelItem() {
    const item = createDom('div', 'editor-contextmenu-item')
    item.setAttribute('data-command', 'del:node')
    item.innerText = '删除节点'
    return item
  }
  private _createClearItem() {
    const item = createDom('div', 'editor-contextmenu-item')
    item.setAttribute('data-command', 'clear')
    item.innerText = '清空'
    return item
  }

  app: Editor
  command: Command
  body: HTMLElement
  container: HTMLElement
}

interface IMenuOption {
  type: 'node' | 'edge'
}