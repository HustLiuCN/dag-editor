import { getDom } from "@lib/dom";
import { Editor } from "./core";

// example to show Editor callback and data binding
export class Store {
  constructor({ editor }: { editor: Editor }) {
    this.editor = editor

    this.oName = getDom('#node-name') as HTMLInputElement
    this.oW = getDom('#node-width') as HTMLInputElement

    this._bind()
  }

  private _bind() {
    this.oName.addEventListener('change', () => {
      this.currentNode.name = this.oName.value.trim()
      this.editor.repaint()
    })
    this.oW.addEventListener('change', () => {
      this.currentNode.w = Number(this.oW.value.trim())
      this.editor.repaint()
    })
  }

  editor: Editor
  oName: HTMLInputElement
  oW: HTMLInputElement

  __node: Editor.INode
  get currentNode() {
    return this.__node
  }
  set currentNode(node: Editor.INode) {
    this.__node = node
    this.oName.value = node.name
    this.oW.value = node.w.toString()
  }
}