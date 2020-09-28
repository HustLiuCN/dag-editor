/*
 *	dag-editor core
 *	@liupd
 *	email: liupeidong1027@gmail.com
 */
import { getDom, createDom, getAttr } from '@lib/dom'
import { randomID, checkInNode, checkInNodeAnchor, getAnchorPos, checkInCircle, compareEdge} from '@lib/utils'
import { Canvas } from './canvas'
import { Event } from './event'
import { Command } from './command'
import { ContextMenu } from './contextmenu'

// Editor core
export class Editor {
	constructor({
		container,
		// toolbar,
		itempanel,
		page,
	}: Editor.IOption) {
		console.log('dag-editor created')
		// dom container
		this.oContainer = getDom(container)
		this.oItemPanel = getDom(itempanel)
		this.oPage = getDom(page)
		// init property
		this.shapes = {}
		this.nodes = []
		this.edges = []

		this._initCanvas()
		this._bindEvents()
		this._initCommand()
	}
	private oContainer: HTMLElement
	private oItemPanel: HTMLElement
	private oPage: HTMLElement
	// init canvas
	private _initCanvas() {
		const rect = this.oPage.getBoundingClientRect()
		// const { width, height, left, top } = rect
		const ratio = window.devicePixelRatio || 1
		// page config
		this.pageConfig = {
			...rect,
			ratio,
		}
		// create canvas dom
		const oc = createDom('canvas', 'editor-canvas') as HTMLCanvasElement
		oc.width = rect.width * ratio
		oc.height = rect.height * ratio
		const odc = oc.cloneNode() as HTMLCanvasElement
		odc.style.pointerEvents = 'none'
		odc.style.backgroundColor = 'transparent'

		// define canvas object
		// main canvas paint all nodes & edges that exist in this.nodes & this.edges
		this.mainCvs = new Canvas(oc, { ratio, hasStore: true })
		// dynamic canvas paint nodes & edges which is being added or moved
		this.dynamicCvs = new Canvas(odc, { ratio })

		// append to page container
		this.oPage.appendChild(oc)
		this.oPage.appendChild(odc)
	}
	private pageConfig: Editor.IPageConfig
	private mainCvs: Canvas
	private dynamicCvs: Canvas
	// register shape
	private shapes: Editor.IShapes
	private selectedShape: Editor.IShape
	registerShape(name: string, shape: Editor.IShape) {
		this.shapes[name] = shape
	}
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
			console.log('no change')
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
	private _addNode(node: Editor.INode) {
		this.nodes.push({ ...node, id: randomID() })
		let cur = this.nodes[this.nodes.length - 1]
		this.callback.nodeAdded && this.callback.nodeAdded(cur)
		this.selectedNode = cur
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
	private _delNode(nid: string) {
		let i = this.nodes.findIndex(n => n.id === nid)
		if (i > -1) {
			this.nodes.splice(i, 1)
			let edges = this._getRelatedEdge(nid)
			if (edges.length) {
				edges.forEach(e => { this._delEdge(e.id) })
			}
			this.selectedNode = null

			this.callback.nodeDeleted && this.callback.nodeDeleted(nid)
		}
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
	private hoverAnchor: [Editor.INode, number]
	// private selectedAnchor: [Editor.INode, number]
	private anchorStartPos = { x: 0, y: 0 }

	private _addEdge([source, sourceAnchorIndex]: [Editor.INode, number], [target, targetAnchorIndex]: [Editor.INode, number]) {
		let edge = {
			source: source.id,
			sourceAnchorIndex,
			target: target.id,
			targetAnchorIndex,
		}
		let exist = this.edges.find(e => compareEdge(edge, e))
		if (!exist) {
			this.edges.push({ ...edge, id: randomID() })
			this.callback.edgeAdded && this.callback.edgeAdded(edge)
		}
	}
	private _delEdge(eid: string) {
		let i = this.edges.findIndex(e => e.id === eid)
		if (i > -1) {
			this.edges.splice(i, 1)
		}
	}
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
		console.log(`===render by: ${msg}===`)
		this.mainCvs.clear()
		this.nodes.forEach(node => {
			let status = this.selectedNode === node ? 'selected' : (this.hoverNode === node ? 'hover' : null)
			this.mainCvs.paintNode(node, status)
		})
		this.edges.forEach(({ source, sourceAnchorIndex, target, targetAnchorIndex, id }) => {
			const start = this.nodes.find(n => n.id === source)
			const end = this.nodes.find(n => n.id === target)
			this.mainCvs.paintEdge(
				getAnchorPos(start, start.anchors[sourceAnchorIndex]),
				getAnchorPos(end, end.anchors[targetAnchorIndex]),
				{ id, selected: this.selectedEdge && this.selectedEdge.id === id },
			)
		})
	}
	/*
	 *	public
	 */
	private callback = {
		selectedNodeChange: null,
		nodeAdded: null,
		nodeDeleted: null,
		edgeAdded: null,
	}
	on(ev: string, cb: Function) {
		if (this.callback.hasOwnProperty(ev)) {
			this.callback[ev] = cb
		}
	}
	update(type: 'node' | 'edge') {

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
	/*
	 *	events
	 */
	private isMouseDown = false
	private mouseDownType: 'add-node' | 'move-node' | 'add-edge'

	private eventList = [
		['oItemPanel', 'mousedown', '_beginAddNode'],
		['oItemPanel', 'mouseup', '_mouseUp'],
		['oPage', 'mousedown', '_mouseDownOnPage'],
		['oPage', 'mousemove', '_mouseMove'],
		['oPage', 'mouseleave', '_mouseLeavePage'],
		['oPage', 'mouseup', '_mouseUpPage'],
		['oContainer', 'contextmenu', '_preventDefaultMenu'],
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
	// mousedown on itempanel
	private _beginAddNode(e: MouseEvent) {
		const o = e.target as HTMLElement
		const shape = getAttr(o, 'data-shape')
		if (!shape) {
			return
		}

		this.isMouseDown = true
		this.mouseDownType = 'add-node'
		this.selectedShape = this.shapes[shape]
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
			if (this.hoverAnchor) {
				// u can't drag an edge from input anchor
				this.mouseDownType = this.selectedNode.anchors[this.hoverAnchor[1]][2] === 'output' ? 'add-edge' : null
				this.anchorStartPos = getAnchorPos(this.hoverAnchor[0], this.hoverAnchor[0].anchors[this.hoverAnchor[1]])
			} else {
				this.mouseDownType = 'move-node'
			}

		} else {
			this.selectedNode = null
			this.selectedEdge = this._getSelectedEdge({ x, y })
			// TODO start drag canvas
		}

		// TODO contextmenu
		this._triggerMenu(e.button === 2, e)
	}
	// mousemove
	private _mouseMove(e: MouseEvent) {
		this.dynamicCvs.clear()
		const { offsetX: x, offsetY: y } = e
		if (this.isMouseDown) {		// move
			switch(this.mouseDownType) {
				case 'add-node':
					this.dynamicCvs.paintNode({ ...this.selectedShape, x, y })
					break
				case 'move-node':
					this.dynamicCvs.paintNode({
						...this.selectedNode,
						x: this.selectedNode.x + x - this.mouseEventStartPos.x,
						y: this.selectedNode.y + y - this.mouseEventStartPos.y,
					})
					break
				case 'add-edge':
					this.nodes.forEach(node => {
						if (node.id !== this.selectedNode.id && node.anchors) {
							this.dynamicCvs.paintActiveAnchors(node)
						}
					})
					this.dynamicCvs.paintEdge(this.anchorStartPos, { x, y })
					break
			}
		} else {		// hover
			const hoverNode = this._getSelectedNode({ x, y })
			if (this.hoverNode) {
				let hoverAnchor = checkInNodeAnchor({ x, y }, this.hoverNode)
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
		switch(this.mouseDownType) {
			case 'add-node':
				this._addNode({ ...this.selectedShape, x, y })
				break
			case 'move-node':
				let diffX = x - this.mouseEventStartPos.x
				let diffY = y - this.mouseEventStartPos.y
				if (diffX < 5 && diffY < 5) {
					break
				}
				console.log('move')
				this._updateNode({
					...this.selectedNode,
					x: this.selectedNode.x + diffX,
					y: this.selectedNode.y + diffY,
				})
				break
			case 'add-edge':
				this.nodes.forEach(node => {
					if (node.id !== this.selectedNode.id && node.anchors) {
						node.anchors.forEach((anchor, i) => {
							if (anchor[2] === 'input') {
								let pos = getAnchorPos(node, anchor)
								if (checkInCircle({ x, y }, pos, 12)) {
									this._addEdge(this.hoverAnchor, [ node, i ])
								}
							}
						})
					}
				})
				break
		}

		this._mouseUp()
	}
	private _mouseUp() {
		this.isMouseDown = false
		this.mouseDownType = null
		this.dynamicCvs.clear()
	}
	/*
	 *	contextmenu
	 */
	private contextmenu: ContextMenu
	private command: Command
	readonly commands = {
		'del:node': '_delNodeCommand',
		'clear': '_clear',
	}
	private _initCommand() {
		const command = new Command({ app: this })
		const { commands } = this
		for (let cmd in commands) {
			command.register(cmd, this[commands[cmd]])
		}

		this.command = command
		this.contextmenu = new ContextMenu({
			app: this,
			command,
			container: this.oContainer
		})
	}
	private _triggerMenu(show: boolean, e?: MouseEvent) {
		if (show) {
			let options = {
				type: null,
			}
			if (this.selectedNode) {
				options.type = 'node'
			}
			this.contextmenu.attach(e, options)
		} else {
			this.contextmenu.detach()
		}
	}
	private _preventDefaultMenu(e: MouseEvent) {
		e.preventDefault()
	}
	private _delNodeCommand() {
		this._delNode(this.selectedNode.id)
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
	private _getRelatedEdge(nid: string): Editor.IEdge[] {
		let tmps = []
		this.edges.forEach(e => {
			if (e.source === nid || e.target === nid) {
				tmps.push(e)
			}
		})
		return tmps
	}
}

// Editor interface
export namespace Editor {
	export interface IOption {
		container: string,
		itempanel: string,
		page: string,
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
	}
	// anchor
	export interface IAnchor extends Array<number | string>{
		[0]: number,
		[1]: number,
		[2]: 'input' | 'output',
	}
	// shape
	export interface IShapes {
		[shape: string]: IShape,
	}
	export interface IShape {
		w: number,
		h: number,
		shape: string,
		name?: string,
		color: string,
		anchors?: IAnchor[]
	}
	export interface IEdge {
		id?: string,
		source: string,
		sourceAnchorIndex: number,
		target: string,
		targetAnchorIndex: number,
	}
	// event

}
