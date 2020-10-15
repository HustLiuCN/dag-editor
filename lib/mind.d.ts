export class Mind {
    constructor({ container, data, options }: {
        container?: string;
        data?: {};
        options?: {};
    });
    oCon: HTMLElement;
    options: {
        style: {
            fill: string;
            line: string;
            font: string;
        };
        lineType: string;
        legends: any;
    };
    _init(): void;
    config: {
        width: number;
        height: number;
        ratio: number;
        left: number;
        top: number;
    };
    oCanvas: HTMLElement;
    ctx: any;
    nodeInfo: {
        height: number;
        minWidth: number;
        horizontalGap: number;
        verticalHeight: number;
        fontSize: number;
    };
    _initNodeInfo(): void;
    _initTranslate(): void;
    translate: {
        x: number;
        y: number;
    };
    _translate(x: any, y: any): void;
    _reset(): void;
    scale: number;
    _repaint(x?: number, y?: number): void;
    _setData(data: any): void;
    data: any;
    _render(): void;
    _paintNode(node: any, { ox, oy }: {
        ox: any;
        oy: any;
    }): void;
    _paintLine(start: any, end: any): void;
    _paintCurve(start: any, end: any): void;
    _clear(): void;
    _bindEvent(): void;
    event: any;
    mouseEvent: {
        isDown: boolean;
        sx: number;
        sy: number;
    };
    _mouseDown(e: any): void;
    _mouseMove(e: any): void;
    _mouseUp(e: any): void;
    _zoomIn(): void;
    _zoomOut(): void;
    _initToolbar(selector: any): void;
    toolbar: Toolbar;
    _initLegends(): void;
    _switchLine(e: any): void;
}
import Toolbar from "./toolbar";
