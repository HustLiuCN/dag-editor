/*
 *	dag-editor core
 *	@liupd
 *	email: liupeidong1027@gmail.com
 */
import '../style/editor.css'
import { getDom, createDom, getAttr } from './dom'
import { randomID, getAnchorPos, logger, compareEdge} from './utils'
import { Canvas } from './canvas'
import { Event } from './event'
import { Command } from './command'
import { ContextMenu } from './contextmenu'

const ow = 100

// Editor core
export class Editor {
	constructor({
		page,
		config,
	}: Editor.IOption) {
		console.info('%csimple-dag-editor: created', 'color: #c5e1a5;font-weight: bold;')
		// dom container
		// this.oContainer = getDom(container)
		this.oPage = getDom(page)
		// init property
		this.nodes = []
		this.edges = []
		// extra config
		this.extraConfig = config

		this._init()
		this._renderTask('init')
	}
	// readonly oContainer: HTMLElement
	readonly oPage: HTMLElement
	extraConfig: any
	// init canvas
	private _init() {
		this._initCanvas()
		this._bindEvents()
		this._initCommand()
	}
	private _initPageConfig() {
		if (!this.oPage) {
			throw Error('cannot find Editor editor container')
		} else {
			this.oPage.classList.add('editor-page')
		}
		let rect = this.oPage.getBoundingClientRect()
		const ratio = window.devicePixelRatio || 1
		rect = rect.toJSON()
		// page config
		this.pageConfig = {
			...rect,
			ratio,
		}
	}
	private _initCanvas() {
		this._initPageConfig()
		const { width, height, ratio } = this.pageConfig

		// create canvas dom
		const oc = createDom('canvas', 'editor-canvas') as HTMLCanvasElement
		oc.width = width * ratio
		oc.height = height * ratio

		// define canvas object
		// main canvas paint all nodes & edges that exist in this.nodes & this.edges
		this.mainCvs = new Canvas(oc, { ratio, hasStore: true, hasBg: true, config: this.extraConfig })

		// append to page container
		this.oPage.appendChild(oc)
	}
	pageConfig: Editor.IPageConfig
	private mainCvs: Canvas
	/*
	 *	node
	 */
	protected nodes: Editor.INode[]
	// selected node
	private __selectedNode: Editor.INode
	private get selectedNode() {
		return this.__selectedNode
	}
	private set selectedNode(node: Editor.INode) {
		if (node === this.__selectedNode) {
			logger('no change')
			return
		}
		this.__selectedNode = node
		// selected node change trigger render on main canvas
		this._renderTask('selected node change')
		// callback
		this.callback.selectedNodeChange && this.callback.selectedNodeChange(node)
	}
	// hover node
	private __hoverNode: Editor.INode
	private get hoverNode() {
		return this.__hoverNode
	}
	private set hoverNode(node: Editor.INode) {
		if (node === this.__hoverNode) {
			return
		}
		// hover node change trigger render on main canvas
		this.__hoverNode = node
		this._renderTask('hover node change')
	}
	private _updateNode(node: Editor.INode) {
		let i = this.nodes.findIndex(n => n.id === node.id)
		if (i < 0) {
			return
		}
		let cur = this.nodes.splice(i, 1)[0]
		cur = { ...node }
		this.nodes.push(cur)
		this.selectedNode = cur
	}
	/*
	 * anchor & edge
	 */
	private edges: Editor.IEdge[]
	private __selectedEdge: Editor.IEdge
	private get selectedEdge() {
		return this.__selectedEdge
	}
	private set selectedEdge(edge: Editor.IEdge) {
		if (edge === this.__selectedEdge) {
			return
		}
		this.__selectedEdge = edge
		this._renderTask('selected edge change')
	}
	private hoverAnchor: [Editor.INode, string, number]		// [node, type, index]

	// clear
	private _clear() {
		this.nodes = []
		this.edges = []
		this._renderTask('clear')
	}
	// render
	private renderTask: number
	private _renderTask(msg?: string) {
		this.renderTask && cancelAnimationFrame(this.renderTask)
		this.renderTask = window.requestAnimationFrame(() => { this._render(msg) })
	}
	private _render(msg?: string) {
		msg && logger(`===render by: ${msg}===`)
		this.mainCvs.clear()
		this.mainCvs.preFill()
		/**
		 * @sd-layout
		 * 绘制节点
		 * 绘制边
		 */
		this.nodes.forEach(node => {
			let status = this.selectedNode === node ? 'selected' : (this.hoverNode === node ? 'hover' : null)
			this.mainCvs.paintNode(node, { status })
		})
		this._paintEdgeTask()
	}
	private _paintEdgeTask() {
		const { levels } = this.layout
		const edges = this.edges.slice()

		let gap = 1
		let count = 0
		while (count < edges.length) {
			edges.forEach(({ source, target, id }, i) => {
				const start = this.nodes.find(n => n.id === source)
				const end = this.nodes.find(n => n.id === target)
				let startPos = getAnchorPos(start, 'output', 0, start.anchors.output)
				let endPos = getAnchorPos(end, 'input', 0, end.anchors.input)
				if (end.depth - start.depth === gap) {
					this.mainCvs.paintEdge(
						startPos,
						endPos,
						{
							id,
							selected: this.selectedEdge && this.selectedEdge.id === id,
							gap,
							// TODO
							maxWidth: start.treeWidth * ow,
							isLeaf: start.hasNoSon,
							gapCount: start.gapCount,
							edgeCount: start._edgesCount,
						},
					)
					count ++
					// edges.splice(i, 1)
				}
			})
			gap ++
		}
		// console.log(gap, count, edges.length);
	}
	/*
	 *	public
	 */
	private callback = {
		selectedNodeChange: null,
		nodeAdded: null,
		nodeDeleted: null,
		edgeAdded: null,
		edgeDeleted: null,
	}
	on(ev: Editor.ICallback, cb: Function) {
		if (this.callback.hasOwnProperty(ev)) {
			this.callback[ev] = cb
		}
	}
	update(node: Editor.INode) {
		this._updateNode(node)
	}
	repaint() {
		this._renderTask('repaint')
	}
	getData(): { nodes: Editor.INode[], edges: Editor.IEdge[] } {
		return {
			nodes: this.nodes,
			edges: this.edges,
		}
	}
	layout: any
	setData({ nodes = [], edges = [], layout }: { nodes?: Editor.INode[], edges?: Editor.IEdge[], layout: any }) {
		this.nodes = nodes
		this.edges = edges
		this.layout = layout
		this._renderTask('set data')
	}
	setConfig(config: any) {
		this.extraConfig = config
		this.mainCvs.config = config
		this._renderTask('change config')
	}
	saveFile(fileName = 'simple-dag-editor-export-picture', type = 'jpeg'): Promise<string> {
		return new Promise(rs => {
			this.getFileBlob(type).then(blob => {
				const url = URL.createObjectURL(blob)
				const a = document.createElement('a')
				a.download = `${fileName}.${type}`
				a.href = url
				a.click()

				rs(url)
			})
		})
	}
	getFileBlob(type: string): Promise<Blob> {
		const { canvas } = this.mainCvs
		const MIME_TYPE = `image/${type}`
		return new Promise(rs => {
			canvas.toBlob(blob => {
				rs(blob)
			}, MIME_TYPE)
		})
	}
	// TODO
	resize() {}
	execute(cmd: string, opts?: any) {
		this.command.execute(cmd, opts)
	}
	/*
	 *	events
	 */
	private isMouseDown = false
	private mouseDownType: 'add-node' | 'move-node' | 'add-edge' | 'drag-canvas'

	private eventList = [
		['oPage', 'mousedown', '_mouseDownOnPage'],
		['oPage', 'mousemove', '_mouseMove'],
		['oPage', 'mouseleave', '_mouseLeavePage'],
		['oPage', 'mouseup', '_mouseUpPage'],
		// ['oContainer', 'contextmenu', '_preventDefaultMenu'],
	]
	private _bindEvents() {
		const event = new Event({
			rect: this.pageConfig,
		})

		for (let ev of this.eventList) {
			event.add(this[ev[0]], ev[1], this[ev[2]].bind(this))
		}
	}
	/*
	 *	add-node
	 *	- mousedown_on_itempanel: begin-add-node
	 *		-> mouseup_itempanel: end
	 *	- mousemove_on_page
	 *		-> mouseup_page: add-node
	 *		-> mouseleave_page: end
	 *	move-node
	 *	- mousedown_on_page
	 *		- check_is_in_node: false -> end
	 *	- mousemove_on_page
	 *	- mouseup_page: end
	 */
	// mouse event start pos (x, y)
	private mouseEventStartPos = {
		x: 0,
		y: 0,
	}
	// mousedown on page
	private _mouseDownOnPage(e: MouseEvent) {
		this.isMouseDown = true
		const { offsetX: x, offsetY: y } = e
		this.mouseEventStartPos = { x, y }

		if (this.hoverNode) {
			this.selectedNode = this.hoverNode
			this.selectedEdge = null
			// this.selectedNode = this.selectedNode
			this.mouseDownType = 'move-node'
		} else {
			this.selectedNode = null
			this.selectedEdge = this._getSelectedEdge({ x, y })
			this.mouseDownType = 'drag-canvas'
		}
	}
	// mousemove
	private _mouseMove(e: MouseEvent) {
		const { offsetX: x, offsetY: y } = e
		// diff (x, y) from mouse down start point
		const dx = x - this.mouseEventStartPos.x
		const dy = y - this.mouseEventStartPos.y

		if (this.isMouseDown) {		// move
			switch(this.mouseDownType) {
				case 'drag-canvas':
					this.mainCvs.clear()
					this.mainCvs.transform(dx, dy)
					this.mainCvs.preFill()
					this._render()
					this.mainCvs.restore()
					break
			}
		} else {		// hover
			const hoverNode = this._getSelectedNode({ x, y })
			if (this.hoverNode) {
				let hoverAnchor = this.mainCvs.checkInNodeAnchor(this.hoverNode, { x, y })
				this.hoverAnchor = hoverAnchor
				if (!hoverAnchor) {
					this.hoverNode = hoverNode
				}
			} else {
				this.hoverAnchor = null
				this.hoverNode = hoverNode
			}
		}
	}
	// mouseleave
	private _mouseLeavePage() {
		this._mouseUp()
	}
	// mouseup
	private _mouseUpPage(e: MouseEvent) {
		if (!this.isMouseDown) {
			return
		}
		const { offsetX: x, offsetY: y } = e
		const dx = x - this.mouseEventStartPos.x
		const dy = y - this.mouseEventStartPos.y
		switch(this.mouseDownType) {
			case 'drag-canvas':
				this.mainCvs.translate(dx, dy)
				break
		}

		this._mouseUp()
	}
	private _mouseUp() {
		this.isMouseDown = false
		this.mouseDownType = null
	}
	/*
	 *	contextmenu
	 */
	private contextmenu: ContextMenu
	private command: Command
	readonly commands = {
		'del:node': '_delNodeCommand',
		'del:edge': '_delEdgeCommand',
		'clear': '_clear',
	}
	private _initCommand() {
		const command = new Command({ app: this })
		const { commands } = this
		for (let cmd in commands) {
			command.register(cmd, this[commands[cmd]])
		}

		this.command = command
	}
	private _preventDefaultMenu(e: MouseEvent) {
		e.preventDefault()
	}
	/*
	 * methods
	 */
	private _getSelectedNode({ x, y }): Editor.INode {
		const { nodes } = this
		for (let i = nodes.length; i > 0; i --) {
			let node = nodes[i - 1]
			if (this.mainCvs.checkInNode(node.id, { x, y })) {
				return node
			}
		}
		return null
	}
	private _getSelectedEdge({ x, y }): Editor.IEdge {
		const { edges } = this
		for (let edge of edges) {
			if (this.mainCvs.checkOnEdge(edge.id, { x, y })) {
				return edge
			}
		}
		return null
	}
}

// Editor interface
export namespace Editor {
	export interface IOption {
		container: string,
		itempanel: string,
		page: string,
		config?: {
			bgColor?: string,
			grid?: boolean,
		},
	}
	export interface IPageConfig extends DOMRect {
		width: number,
		height: number,
		left: number,
		top: number,
		ratio: number,
	}
	// position
	export interface IPos {
		x: number,
		y: number,
	}
	// node
	export interface INode extends IShape {
		id?: string,
		x: number,
		y: number,
		depth?: number,
		treeWidth?: number,
		hasNoSon?: boolean,
		gapCount?: number,
		_edgesCount?: number,
	}
	// anchor: [x, y, type]
	export interface IAnchor {
		input?: number,		// input count
		output?: number,	// output count
	}
	// shape
	export interface IShapes {
		[shape: string]: IShape,
	}
	export interface IShape {
		w: number,
		h: number,
		shape: string,
		name: string,
		color?: string,
		anchors: IAnchor,
	}
	export interface IEdge {
		id?: string,
		source: string,
		sourceAnchorIndex: number,
		target: string,
		targetAnchorIndex: number,
	}
	// event
	export type ICallback = 'selectedNodeChange' | 'nodeAdded' | 'nodeDeleted' | 'edgeAdded' | 'edgeDeleted'
}
