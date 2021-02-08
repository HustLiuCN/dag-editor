/*
*  dag-editor
*  author: liupeidong@gmail.com
*/
import * as mock from '../../mock-data/sd-mock'
import createLayout from './layout'

createLayout({
  page: '#editor',
  data: mock.mock_data_6,
  nodeSelected: node => console.log(node),
})
