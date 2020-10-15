import { getDom } from "../../src/dom";

// example to show Editor callback and data binding
export class Store {
  constructor({ editor }) {
    this.editor = editor

    this.oName = getDom('#node-name')
    this.oW = getDom('#node-width')

    this._bind()
  }

  _bind() {
    this.oName.addEventListener('change', () => {
      this.currentNode.name = this.oName.value.trim()
      this.editor.repaint()
    })
    this.oW.addEventListener('change', () => {
      this.currentNode.w = Number(this.oW.value.trim())
      this.editor.repaint()
    })
  }
get currentNode() {
    return this.__node
  }
  set currentNode(node) {
    this.__node = node
    this.oName.value = node.name
    this.oW.value = node.w.toString()
  }
}