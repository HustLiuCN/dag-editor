import { Editor } from './core';
export declare function randomID(): string;
export declare function getAnchorPos(node: Editor.INode, type: string, i: number, n: number): {
    x: number;
    y: number;
};
export declare function checkInNodeAnchor({ x, y }: Editor.IPos, node: Editor.INode): [Editor.INode, string, number];
export declare function checkInCircle({ x, y }: Editor.IPos, { x: cx, y: cy }: Editor.IPos, r?: number): boolean;
export declare function compareEdge(a: Editor.IEdge, b: Editor.IEdge): boolean;
