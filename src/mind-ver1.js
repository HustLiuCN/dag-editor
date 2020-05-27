const DATA = {
	d: '平台',
	children: [
		// 实验相关
		{
			d: '实验',
			children: [
				{
					d: 'DAG图',
					children: [
						{
							d: '@antV/g6-editor', t: 'tech',
						}, {
							d: '定制化UI',
							children: [
								{
									d: '原始API延伸', t: 'tech',
								}, {
									d: '上层canvas自定义', t: 'tech',
								},
							],
						}, {
							d: 'Tensorflow',
							t: 'todo',
							children: [
								{ d: '深度网络可视化', t: 'tech' },
							],
						}, {
							d: '更多框架接入/拓展', t: 'todo',
						},
					],
				},
				{
					d: '参数配置',
					children: [
						{
							d: '算子参数',
							children: [
								{
									d: '算子组件抽象',
									t: 'tech',
									children: [
										{ d: 'UI封装', t: 'tech' },
										{ d: '逻辑解耦', t: 'tech' },
									],
								},
								{
									d: '自定义算子',
									children: [
										{ d: '自定义组件', t: 'tech' },
										{ d: '自定义参数', t: 'tech' },
									],
								},
							],
						}, {
							d: '实验参数',
						},
					],
				},
				{
					d: '数据流',
					children: [
						{
							d: '数据继承',
							children: [
								{
									d: '准确性',
									children: [
										{ d: '超集 --> 严格收敛', t: 'tech' },
									],
								}, {
									d: '高效性',
									children: [
										{ d: '缓存', t: 'tech' },
									],
								},
							],
						}, {
							d: '数据验证',
							children: [
								{ d: '表单验证', t: 'tech' },
								{ d: '逻辑验证', t: 'tech' },
							],
						}, {
							d: '数据扩展',
							children: [
								{ d: '字段类型', t: 'tech' },
								{ d: '新字段', t: 'tech' },
							],
						},
					],
				},
				{
					d: '版本/快照',
					children: [
						{ d: '管理' },
						{ d: '切换' },
					],
				},
			],
		},
		// 调度
		{
			d: '任务调度',
			children: [
				{
					d: '调度管理',
					children: [
						{
							d: '调度配置',
							children: [
								{
									d: '不同类型算子配置抽象', t: 'tech',
								},
							],
						}, {
							d: '调度周期',
							children: [
								{
									d: 'cron 表达式',
									children: [
										{ d: '用户输入 ->(降低成本提高体验)-> 可视化配置', t: 'tech' },
									],
								}, {
									d: '其他', t: 'todo',
								}
							],
						}
					],
				}, {
					d: '任务执行',
					children: [
						{
							d: '部分执行调度', t: 'todo',
							children: [
								{ d: '数据流分隔', t: 'tech' },
								{ d: '状态保存', t: 'tech' },
							],
						}, {
							d: '执行结果',
							children: [
								{
									d: '结果数据(动态)可视化', t: 'tech',
								}, {
									d: '模型评估/对比', t: 'todo',
								},
							],
						}, {
							d: '日志',
							children: [
								{ d: '展示/筛选/过滤' },
								{
									d: '排查/定位',
									t: 'todo',
									children: [
										{ d: '定位到具体执行节点', t: 'tech' },
										{ d: '定位到具体结果展示', t: 'tech' },
									],
								}, {
									d: '重跑',
								},
							],
						},
					],
				},
			],
		},
		// 日志

	],
}

const COLOR = {
	'pro': '#bbdefb',
	'tech': '#dcedc8',
	'todo': '#ffcdd2',
	'ui': '#ffd180',
}

const R = window.devicePixelRatio || 1
// const R = 1
const IH = 30	// item height

const Brain = {
	canvas: null,
	ctx: null,
	container: null,		// dom
	rect: null,				// dom rect
	toolbar: null,
	transform: {		// 坐标系偏移量
		ox: 0,
		oy: 0,
	},
	scale: {			// canvas 缩放
		sx: 10,
		sy: 10,
	},
	isMoving: false,
	moveStart: { x: null, y: null },
	_init() {
		// init dom info
		this.container = document.querySelector('#app')
		this.rect = this.container.getBoundingClientRect()
		this.toolbar = document.querySelector('.toolbar')
		// init canvas
		this._initCanvas()
		// init event
		this._bindEvent()
		// init data
		wash(DATA)
		// paint
		this._paint()
	},
	_initCanvas() {
		const { rect } = this

		const oCanvas = document.querySelector('#canvas')
		oCanvas.width = rect.width * R
		oCanvas.height = rect.height * R

		const ctx = oCanvas.getContext('2d')
		ctx.lineWidth = 2
		ctx.font = `${R > 1 ? 20 : 14}px sans-serif`
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.strokeStyle = '#666'

		this.canvas = oCanvas
		this.ctx = ctx

		this.transform.ox = 100
		this.transform.oy = parseInt(rect.height / 2)
	},
	_paint() {
		this._clear()
		const { ctx } = this

		ctx.save()

		let { sx, sy } = this.scale
		ctx.scale(sx / 10, sy / 10)

		this._paintItem(DATA)

		ctx.restore()
	},
	_paintItem({ x, y, d, t, children }) {
		const { ctx } = this

		let { ox, oy } = this.transform

		const IW = this._getTextWidth(d)		// 文本宽度, 已奖 ratio 影响计算入内
		// item 矩形的起点 (x, y)
		let x0 = x - 40 + ox
		let y0 = y - IH/2 + oy

		if (children) {
			ctx.beginPath()
			// edge 连线父节点的起点 (xs, ys)
			let xs = x0 * R + IW
			let ys = (y + oy) * R
			// edge 在多个子节点之前的转折点 (xm, ys)
			let xm = xs + 80 * R

			ctx.moveTo(xs, ys)
			ctx.lineTo(xm, ys)
			ctx.stroke()
			ctx.closePath()

			children.forEach(child => {
				this._paintEdge({ xs: xm, ys }, child)
				this._paintItem(child)
			})
		}

		this._drawRect(
			x0 * R,		// x
			y0 * R,		// y
			IW,			// width	已经计算过 ratio
			IH * R,		// height
			d,			// desc
			t,			// type
		)
	},

	_drawRect(x, y, w, h, d, t) {		// 绘制带文本的矩形
		const { ctx } = this
		ctx.fillStyle = COLOR[t] || '#bbdefb'
		ctx.fillRect(x, y, w, h)
		ctx.fillStyle = '#000'
		ctx.fillText(d, x + w/2, y + h/2)
		ctx.strokeRect(x, y, w, h)
	},

	_paintEdge({ xs, ys }, { x, y }) {		// 从父节点延伸出来的转折点到每个子节点的折线
		const { ctx } = this
		let { ox, oy } = this.transform
		// 终点(子节点)
		let xe = (x - 40 + ox) * R
		let ye = (y + oy) * R	// 终点的 y

		ctx.beginPath()
		ctx.moveTo(xs, ys)
		ctx.lineTo(xs, ye)
		ctx.lineTo(xe, ye)
		ctx.stroke()
		ctx.closePath()
	},
	_getTextWidth(str) {
		return Math.max(parseInt(this.ctx.measureText(str).width + 20 * R), 80 * R)
	},
	_handle(type) {
		switch (type) {
			case 'scale-plus':
				if (this.scale.sx < 12) {
					this.scale.sx += 1
					this.scale.sy += 1
				}
				break
			case 'scale-minus':
				if (this.scale.sx > 8) {
					this.scale.sx -= 1
					this.scale.sy -= 1
				}
				break
		}
		this._paint()
	},
	_clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	},
	_repaint(x, y) {
		this._clear()
		this.ctx.save()
		this.ctx.transform(1, 0, 0, 1, x, y)
		this._paint()
		this.ctx.restore()
	},
	_bindEvent() {
		this.canvas.addEventListener('mousedown', e => {
			this.isMoving = true

			this.moveStart.x = e.offsetX
			this.moveStart.y = e.offsetY

			this.canvas.classList.add('moving')
		})
		this.canvas.addEventListener('mousemove', e => {
			if (this.isMoving) {
				const { offsetX, offsetY } = e
				const { x, y } = this.moveStart
				const { sx, sy } = this.scale

				const diffX = parseInt((offsetX - x) * R * (sx / 10))
				const diffY = parseInt((offsetY - y) * R * (sy / 10))

				requestAnimationFrame(this._repaint.bind(this, diffX, diffY))
			}
		})
		this.canvas.addEventListener('mouseup', e => {
			this.isMoving = false

			const { offsetX, offsetY } = e
			const { x, y } = this.moveStart

			let diffX = parseInt(offsetX - x)
			let diffY = parseInt(offsetY - y)

			this.transform.ox += diffX
			this.transform.oy += diffY
			this.canvas.classList.remove('moving')
		})


		this.toolbar.addEventListener('click', e => {
			const oTarget = e.target
			if (oTarget.tagName.toLowerCase() === 'button') {
				let type = oTarget.getAttribute('data-type')
				this._handle(type)
			}
		})
	},
}

function getCount(item) {
	if (!item.count) {
		let count = 0
		if (item.children) {
			item.children.forEach(child => {
				count += getCount(child)
			})
		}
		item.count = Math.max(count, 1)
	}

	return item.count
}

function wash(data, lvl = -1, parent, prevCount) {
	data.count = data.count || getCount(data)
	data.level = lvl + 1
	// pos
	data.x = data.level * 200
	if (data.level === 0) {
		data.y = 0
	} else {
		let top = parent.y - parent.count / 2 * 50
		data.y = top + prevCount * 50 + data.count / 2 * 50
	}

	if (data.children) {
		data.children.reduce((prev, child) => {
			wash(child, data.level, data, prev)
			return prev + child.count
		}, 0)
	}
}

Brain._init()
