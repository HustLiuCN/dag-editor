/*
*  dag-editor
*  author: liupeidong@gmail.com
*/

import { getDom, createDom } from '@lib/dom'
import shapes from '@data/dag-shapes'
// import Editor from './base'
import { Editor } from './core'

// example
const editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel',
})

editor.on('selectedNodeChange', (node: Editor.INode) => {
  console.log('selected node changed', node)
  const oNodePanel = getDom('#node-panel')
  const oCanvasPanel = getDom('#canvas-panel')
  if (node) {
    oNodePanel.classList.add('show')
    oCanvasPanel.classList.remove('show')

    const oInput = getDom('#node-name') as HTMLInputElement
    oInput.value = node.name
    oInput.addEventListener('change', () => {
      let val = oInput.value.trim()
      let newNode = {
          ...node,
          name: val,
      }
      editor._updateNode(newNode)
    })
  } else {
    oNodePanel.classList.remove('show')
    oCanvasPanel.classList.add('show')
  }
})

for (let shape of shapes) {
  editor.registerShape(shape.shape, shape)
}
