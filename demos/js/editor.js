/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
import { getDom } from '../../src/dom'
import shapes from '../../mock-data/dag-shapes'
import { Editor } from '../../src/index'
import { Store } from './store'

/**
 * 应用实例
 */
// example
const editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel',
  config: {
    grid: true,
  },
})

/**
 * 数据
 * { nodes, edges }
 */
const mockNodes = [
  {
    // 固定填充
    "shape":"shape-001",
    "w":160,
    "h":36,
    "anchors":{"input":1,"output":1},
    // 源数据字段
    "name":"Node-ABC",
    "id":"node1",
    "color":"#b3e5fc",
    // 计算后添加
    "x":216,
    "y":113,
  },
  {
    "shape":"shape-001",
    "w":160,
    "h":36,
    "anchors":{"input":1,"output":1},
    "x":416,
    "y":313,
    "name":"测试节点2",
    "id":"node2",
    "color":"#b3e5fc",
  },
]
const mockEdges = [
  {
    // 源数据
    source: 'node1',
    target: 'node2',
    // 固定填充
    id: 'edge1',
    sourceAnchorIndex: 0,
    targetAnchorIndex: 0,
  },
]
editor.setData({ nodes: mockNodes, edges: mockEdges })

// example data store
const store = new Store({ editor })


/**
 * 预留接口
 */
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
