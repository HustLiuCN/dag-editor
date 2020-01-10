import config from './device'

const half = Math.floor(config.width / 2)

export function randomBoard(prev, lvl = 1) {
	let x = (prev.x < half ? 1 : -1) * half * Math.random() + half
	let y = prev.y + 100

	console.log(x, y)

	return { x: x - 25, y, w: 50, h: 10 }
}
