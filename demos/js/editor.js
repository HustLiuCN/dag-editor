/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
import { getDom } from '../../src/dom'
import shapes from '../../mock-data/dag-shapes'
import { Editor, figure, format } from '../../src'
import { Store } from './store'
import * as MockData from '../../mock-data/sd-mock'

/**
 * 应用实例
 */
// example
const editor = new Editor({
  container: '#container',
  page: '#editor',
  itempanel: '#itempanel',
  // config: {
  //   grid: true,
  // },
})

/**
 * 数据
 * { nodes, edges }
 */
editor.setData(figure(MockData.mock_data_6))

/**
 * 预留接口
 */
editor.on('selectedNodeChange', (node) => {
  // console.log('selected node changed', node)
  console.log(node);
})

for (let shape of shapes) {
  editor.registerShape(shape.shape, shape)
}

