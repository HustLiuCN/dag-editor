import COLOR from '@src/color'
import { Editor } from '@src/core'

const w = 160
const h = 36
const c = COLOR['blue']

const shapes: Editor.IShape[] = [
	{
		shape: 'shape-001',
		w, h, color: c,
		name: 'Node-ABC',
		anchors: [
			[0.5, 0, 'input'],		// [x, y, type]
			[0.5, 1, 'output'],
		],
	},
	{
		shape: 'shape-002',
		w, h, color: COLOR['green'],
		name: 'Node-XYZ',
		anchors: [
			[0.5, 0, 'input'],
			[0.3, 1, 'output'],
			[0.7, 1, 'output'],
		],
	},
]

export default shapes
