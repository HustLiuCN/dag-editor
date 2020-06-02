import COLOR from '@src/color'

const w = 180
const h = 40
const c = COLOR['blue']

const shapes = {
	'shape-001': {
		w, h, c,
		text: 'Shape 001',
		anchors: [
			[0.5, 0, 'input'],		// [x, y, type]
			[0.5, 1, 'output'],
		],
	},
	'Test-Shape-': {
		w, h, c: COLOR['green'],
		text: 'Test-Shape-',
		anchors: [
			[0.5, 0, 'input'],
			[0.3, 1, 'output'],
			[0.7, 1, 'output'],
		],
	},
}

export default shapes
