/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
import { getDom } from '../../src/dom'
import shapes from '../../mock-data/dag-shapes'
import { Editor } from '../../src/index'
import { Store } from './store'

// example
const editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel',
  config: {
    grid: true,
  },
})

// init data
const mockData = [{"shape":"shape-001","w":160,"h":36,"color":"#b3e5fc","name":"Node-ABC","anchors":{"input":1,"output":1},"x":216,"y":113,"id":"1759b6e4951"},{"shape":"shape-002","w":160,"h":36,"color":"#ffcdd2","name":"Node-XYZ","anchors":{"input":1,"output":2},"x":182,"y":258,"id":"1759b6e4f33"}]
editor.setData({ nodes: mockData })

// example data store
const store = new Store({ editor })

// new node added
editor.on('nodeAdded', (node) => {
  console.log('node added', node)
})
// selected node change
editor.on('selectedNodeChange', (node) => {
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
// node deleted
editor.on('nodeDeleted', (nodeId) => {
  console.log(`node deleted: node-id: ${nodeId}`)
})
// new edge added
editor.on('edgeAdded', (edge) => {
  console.log('edge added', edge)
})
// edge deleted
editor.on('edgeDeleted', (edge) => {
  console.log('edge deleted', edge)
})

for (let shape of shapes) {
  editor.registerShape(shape.shape, shape)
}

// check source data
getDom('#source-btn').addEventListener('click', () => {
  editor.resize()
  const data = editor.getData()
  console.log(data)
  getDom('#code').innerHTML = JSON.stringify(data)
  editor.setConfig({ grid: true })
})

getDom('#export-btn').addEventListener('click', () => {
  console.log('===save===')
  editor.saveFile().then(imgURL => {
    getDom('#preview').src = imgURL
  })
})
