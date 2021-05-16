import { LitElement } from 'lit';
export declare class LazyImage extends LitElement {
    static styles: import("lit").CSSResultGroup;
    rounded?: boolean;
    src?: string;
    emptyImg: string;
    loadedImg: string;
    connectedCallback(): void;
    checkImage(url: string): Promise<unknown>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'img-lazy': LazyImage;
    }
}
//# sourceMappingURL=lazy-img.d.ts.map