import '../style/editor.css';
export declare class Editor {
    constructor({ page, config, }: Editor.IOption);
    readonly oPage: HTMLElement;
    extraConfig: any;
    private _init;
    private _initPageConfig;
    private _initCanvas;
    pageConfig: Editor.IPageConfig;
    private mainCvs;
    protected nodes: Editor.INode[];
    private __selectedNode;
    private get selectedNode();
    private set selectedNode(value);
    private __hoverNode;
    private get hoverNode();
    private set hoverNode(value);
    private _updateNode;
    private edges;
    private __selectedEdge;
    private get selectedEdge();
    private set selectedEdge(value);
    private hoverAnchor;
    private _clear;
    private renderTask;
    private _renderTask;
    private _render;
    private _paintEdgeTask;
    private _paintTail;
    private callback;
    on(ev: Editor.ICallback, cb: Function): void;
    update(node: Editor.INode): void;
    repaint(): void;
    getData(): {
        nodes: Editor.INode[];
        edges: Editor.IEdge[];
    };
    layout: any;
    setData({ nodes, edges, layout }: {
        nodes?: Editor.INode[];
        edges?: Editor.IEdge[];
        layout: any;
    }): void;
    setConfig(config: any): void;
    saveFile(fileName?: string, type?: string): Promise<string>;
    getFileBlob(type: string): Promise<Blob>;
    resize(): void;
    execute(cmd: string, opts?: any): void;
    private isMouseDown;
    private mouseDownType;
    private eventList;
    private _bindEvents;
    private mouseEventStartPos;
    private _mouseDownOnPage;
    private _mouseMove;
    private _mouseLeavePage;
    private _mouseUpPage;
    private _mouseUp;
    private contextmenu;
    private command;
    readonly commands: {
        'del:node': string;
        'del:edge': string;
        clear: string;
    };
    private _initCommand;
    private _preventDefaultMenu;
    private _getSelectedNode;
    private _getSelectedEdge;
}
export declare namespace Editor {
    interface IOption {
        container: string;
        itempanel: string;
        page: string;
        config?: {
            bgColor?: string;
            grid?: boolean;
        };
    }
    interface IPageConfig extends DOMRect {
        width: number;
        height: number;
        left: number;
        top: number;
        ratio: number;
    }
    interface IPos {
        x: number;
        y: number;
    }
    interface INode extends IShape {
        id?: string;
        x: number;
        y: number;
        depth?: number;
        treeWidth?: number;
        hasNoSon?: boolean;
        gapCount?: number;
        _edgesCount?: number;
    }
    interface IAnchor {
        input?: number;
        output?: number;
    }
    interface IShapes {
        [shape: string]: IShape;
    }
    interface IShape {
        w: number;
        h: number;
        shape: string;
        name: string;
        color?: string;
        anchors: IAnchor;
    }
    interface IEdge {
        id?: string;
        source: string;
        sourceAnchorIndex: number;
        target: string;
        targetAnchorIndex: number;
    }
    type ICallback = 'selectedNodeChange' | 'nodeAdded' | 'nodeDeleted' | 'edgeAdded' | 'edgeDeleted';
}
