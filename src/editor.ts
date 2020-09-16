/*
*  dag-editor
*  author: liupeidong@gmail.com
*/

import { getDom, createDom } from '@lib/dom'
import shapes from '@data/dag-shapes'
import { Editor } from './core'
import { Store } from './store'

// example
const editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel',
})

// example data store
const store = new Store({ editor })

editor.on('selectedNodeChange', (node: Editor.INode) => {
  console.log('selected node changed', node)
  const oNodePanel = getDom('#node-panel')
  const oCanvasPanel = getDom('#canvas-panel')
  if (node) {
    oNodePanel.classList.add('show')
    oCanvasPanel.classList.remove('show')

    store.currentNode = node
  } else {
    oNodePanel.classList.remove('show')
    oCanvasPanel.classList.add('show')
  }
})

for (let shape of shapes) {
  editor.registerShape(shape.shape, shape)
}

// check source data
getDom('#source-btn').addEventListener('click', () => {
  getDom('#code').innerHTML = JSON.stringify(editor.getData())
})