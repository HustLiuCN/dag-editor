import COLOR from '@src/color'

const w = 160
const h = 36

const shapes = [
  {
    shape: 'shape-001',
    w, h, color: COLOR.blue,
    name: '布局测试节点',
    anchors: {
      input: 1,
      output: 1,
    },
  },
  // {
  //   shape: 'shape-002',
  //   w, h, color: COLOR.red,
  //   name: 'Node-XYZ',
  //   anchors: {
  //     input: 1,
  //     output: 2,
  //   },
  // },
]

export default shapes
