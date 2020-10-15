import { Command } from './command';
import { Editor } from './core';
export declare class ContextMenu {
    constructor({ app, command, container, }: {
        app: Editor;
        command: Command;
        container: HTMLElement;
    });
    private _init;
    private _bind;
    attach(e: MouseEvent, { type }: IMenuOption): void;
    detach(): void;
    private _createBody;
    private _createDelItem;
    private _createDelEdge;
    private _createClearItem;
    app: Editor;
    command: Command;
    body: HTMLElement;
    container: HTMLElement;
}
interface IMenuOption {
    type: 'node' | 'edge';
}
export {};
