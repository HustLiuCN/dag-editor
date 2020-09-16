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
//     const oPanel = getDom('#panel')
//     if (node) {
//         oPanel.innerHTML = ``
//         const oTitle = createDom('h4')
//         oTitle.innerHTML = '节点名称'
//         const oInput = createDom('input')
//         oPanel.appendChild(oTitle)
//         oPanel.appendChild(oInput)
//         oInput.addEventListener('change', e => {
//             let val = e.target.value
//             let newNode = {
//                 ...node,
//                 name: val,
//             }
//             editor._updateNode(newNode)
//             editor._render()
//         })
//     } else {
//         oPanel.innerHTML = ''
//     }
})

for (let shape of shapes) {
    editor.registerShape(shape.shape, shape)
}
