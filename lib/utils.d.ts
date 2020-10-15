import { Editor } from './core';
export declare function randomID(): string;
export declare function checkInNode({ x, y }: {
    x: any;
    y: any;
}, { x: nx, y: ny, w, h }: {
    x: any;
    y: any;
    w: any;
    h: any;
}): boolean;
export declare function getAnchorPos(node: Editor.INode, anchor: Editor.IAnchor): {
    x: number;
    y: number;
};
export declare function checkInNodeAnchor({ x, y }: Editor.IPos, node: Editor.INode): [Editor.INode, number];
export declare function checkInCircle({ x, y }: Editor.IPos, { x: cx, y: cy }: Editor.IPos, r?: number): boolean;
export declare function compareEdge(a: Editor.IEdge, b: Editor.IEdge): boolean;
