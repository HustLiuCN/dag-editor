import { Editor } from './core';
export declare class Command {
    constructor({ app }: {
        app: Editor;
    });
    app: Editor;
    task: {
        [taskName: string]: Function;
    };
    register(name: string, task: Function): void;
    execute(command: string, args?: any): void;
}
