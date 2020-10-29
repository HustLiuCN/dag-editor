import COLOR from '@src/color'

const w = 160
const h = 36
const c = COLOR['blue']

const shapes = [
	{
		shape: 'shape-001',
		w, h, color: c,
		name: 'Node-ABC',
		// anchors: [
		// 	{ type: 'input' },
		// 	{ type: 'output' },
		// ],
		anchors: {
			input: 1,
			output: 1,
		},
	},
	{
		shape: 'shape-002',
		w, h, color: COLOR['green'],
		name: 'Node-XYZ',
		// anchors: [
		// 	[0.5, 0, 'input'],
		// 	[0.3, 1, 'output'],
		// 	[0.7, 1, 'output'],
		// ],
		anchors: {
			input: 1,
			output: 2,
		},
	},
]

export default shapes
