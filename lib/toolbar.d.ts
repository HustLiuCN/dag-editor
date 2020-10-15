declare class Toolbar {
    constructor({ selector }: {
        selector: any;
    });
    registerCommands(events: any): void;
    events: {};
    oToolbar: HTMLElement;
    _bind(): void;
}
export default Toolbar;
