import { LitElement } from 'lit';
export declare class CollectorCard extends LitElement {
    static styles: import("lit").CSSResultGroup;
    amount: number;
    name: string;
    image: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'collector-card': CollectorCard;
    }
}
//# sourceMappingURL=collector-card.d.ts.map