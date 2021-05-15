var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let TextShiny = class TextShiny extends LitElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.bgTitle = "";
    }
    render() {
        return html `
       <div class="neon">
            <span class="text">${this.text}</span>
            <span class="gradient"  style="background:${this.bgTitle}"></span>
            <span class="spotlight"></span>
        </div>
     `;
    }
};
TextShiny.styles = css `
     :host {
        display: flex;
        align-items: center;
        justify-content: center;
     }

     .neon {
        position: relative;
        overflow: hidden;
        filter: brightness(200%);
        width: 100%;
        padding: 5px;
        background: rgb(16, 16, 16);
        box-shadow: rgb(97 97 97) -3px -1px 14px 7px;
    }
    

    .text {
        background-color: black;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
        text-transform: uppercase;
        position: relative;
        user-select: none;
        width: 100%;
        font-size: 13px;
        display: block;
    }

    .text::before {
        content: attr(data-text);
        position: absolute;
        color: black;
        filter: blur(0.02em);
        mix-blend-mode: difference;
    }

    .gradient {
        position: absolute;
        inset: 0px;
        mix-blend-mode: multiply;
    }

    .spotlight {
        position: absolute;
        inset: -80% 58px 7px -75%;
        background: radial-gradient(circle, rgb(255 255 255), #4e4e4e 25%) center center / 25% 25%, radial-gradient(circle, white, black 25%) center center / 12.5% 12.5%;
        animation: 5s linear 0s infinite normal none running light;
        mix-blend-mode: soft-light;
    }

    @keyframes light {
        to {
            transform: translate(50%, 50%);
        }
    }

   `;
__decorate([
    property()
], TextShiny.prototype, "text", void 0);
__decorate([
    property({ type: String })
], TextShiny.prototype, "bgTitle", void 0);
TextShiny = __decorate([
    customElement('text-shiny')
], TextShiny);
export { TextShiny };
//# sourceMappingURL=shiny-text.js.map