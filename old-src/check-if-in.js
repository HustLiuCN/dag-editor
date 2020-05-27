export function checkInRect({ x, y }, rect) {
	let { x: ox, y: oy, w, h } = rect

	return Math.abs(x - ox) <= w/2 && Math.abs(y - oy) <= h/2
}

export function checkInCircle({ x, y }, { ox, oy, r }) {
	return Math.pow(ox - x, 2) + Math.pow(oy - y, 2) <= Math.pow(r, 2)
}
