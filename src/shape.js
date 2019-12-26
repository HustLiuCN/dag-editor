const w = 180
const h = 40
const c = '#42a5f5'

const shapes = {
	'shape-001': {
		w, h, c,
		text: 'Shape 001',
		anchors: [
			[0.5, 0, 'input'],		// [x, y, type]
			[0.5, 1, 'output'],
		],
	}
}

export default shapes
