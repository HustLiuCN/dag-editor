export declare class Editor {
    constructor({ container, itempanel, page, }: Editor.IOption);
    private oContainer;
    private oItemPanel;
    private oPage;
    private _init;
    resize(): void;
    private _initPageConfig;
    private _initCanvas;
    private pageConfig;
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
    on(ev: string, cb: Function): void;
    update(type: 'node' | 'edge'): void;
    repaint(): void;
    getData(): {
        nodes: Editor.INode[];
        edges: Editor.IEdge[];
    };
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
}
