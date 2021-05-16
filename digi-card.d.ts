import { LitElement } from 'lit';
import './shiny-text.js';
import './lazy-img.js';
export declare class DigiCard extends LitElement {
    static styles: import("lit").CSSResultGroup;
    name: string | undefined;
    image?: string;
    price: string | undefined;
    releaseDate: string | undefined;
    condition: string | undefined;
    power: string | undefined;
    bgTitle: string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'digi-card': DigiCard;
    }
}
//# sourceMappingURL=digi-card.d.ts.map