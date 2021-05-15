import { LitElement } from 'lit';
import './shiny-text.js';
export declare class DigiCard extends LitElement {
    static styles: import("lit").CSSResultGroup;
    emptyImg: string;
    name: string | undefined;
    image?: string;
    price: string | undefined;
    releaseDate: string | undefined;
    condition: string | undefined;
    power: string | undefined;
    bgTitle: string | undefined;
    loadedImg: string;
    connectedCallback(): void;
    checkImage(url: string): Promise<unknown>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'digi-card': DigiCard;
    }
}
//# sourceMappingURL=digi-card.d.ts.map