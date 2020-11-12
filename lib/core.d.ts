import '../style/editor.css';
export declare class Editor {
    constructor({ container, itempanel, page, config, }: Editor.IOption);
    readonly oContainer: HTMLElement;
    private oItemPanel;
    readonly oPage: HTMLElement;
    extraConfig: any;
    private _init;
    private _initPageConfig;
    private _initCanvas;
    pageConfig: Editor.IPageConfig;
    private mainCvs;
    private dynamicCvs;
    private shapes;
    private selectedShape;
    registerShape(name: string, shape: Editor.IShape): void;
    protected nodes: Editor.INode[];
    private __selectedNode;
    private get selectedNode();
    private set selectedNode(value);
    private __hoverNode;
    private get hoverNode();
    private set hoverNode(value);
    private _addNode;
    private _updateNode;
    private _delNode;
    private edges;
    private __selectedEdge;
    private get selectedEdge();
    private set selectedEdge(value);
    private hoverAnchor;
    private anchorStartPos;
    private _addEdge;
    private _delEdge;
    private _clear;
    private renderTask;
    private _renderTask;
    private _render;
    private callback;
    on(ev: Editor.ICallback, cb: Function): void;
    update(node: Editor.INode): void;
    repaint(): void;
    getData(): {
        nodes: Editor.INode[];
        edges: Editor.IEdge[];
    };
    setData({ nodes, edges }: {
        nodes?: Editor.INode[];
        edges?: Editor.IEdge[];
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
    private _beginAddNode;
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
    private _triggerMenu;
    private _preventDefaultMenu;
    private _delNodeCommand;
    private _delEdgeCommand;
    private _getSelectedNode;
    private _getSelectedEdge;
    private _getRelatedEdge;
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
