/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
import { Editor } from '../../src'
import layout from '../../src/layout'

function createLayout({
  page,
  data,
  nodeSelected,
}) {
  const editor = new Editor({
    page,
  })
  editor.setData(layout(data))

  nodeSelected && editor.on('selectedNodeChange', nodeSelected)
}

export default createLayout
