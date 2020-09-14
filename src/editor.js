/*
 *  dag-editor
 *  author: liupeidong@gmail.com
 */

import { getDom, createDom } from '@lib/dom'
import shapes from '@data/dag-shapes'
import Editor from './base'

// example
const editor = new Editor({
    container: '#container',
    page: '#editor',
    itempanel: '#itempanel',
})

const tpl = `<h4>TODO List</h4>
            <ul>
                <li>1. delete node & edge</li>
                <li>2. edge check</li>
				<li>3. zoom-in & zoom-out</li>
				<li>4. more callback</li>
            </ul>`
editor.on('selectedNodeChange', node => {
    const oPanel = getDom('#panel')
    if (node) {
        oPanel.innerHTML = ``
        const oTitle = createDom('h4')
        oTitle.innerHTML = '节点名称'
        const oInput = createDom('input')
        oPanel.appendChild(oTitle)
        oPanel.appendChild(oInput)
        oInput.addEventListener('change', e => {
            let val = e.target.value
            let newNode = {
                ...node,
                name: val,
            }
            editor._updateNode(newNode)
            editor._render()
        })
    } else {
        oPanel.innerHTML = tpl
    }
})

for (let shape in shapes) {
    editor.registerShape(shape, shapes[shape])
}
