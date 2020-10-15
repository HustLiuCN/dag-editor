export declare class Event {
    constructor({ rect }: {
        rect: DOMRect;
    });
    protected isMobile: boolean;
    private baseRect;
    private mobileEvent;
    add(dom: HTMLElement, ev: string, fn: (e: globalThis.Event) => void): void;
}
