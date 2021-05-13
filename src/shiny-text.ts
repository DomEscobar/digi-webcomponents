import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('text-shiny')
export class TextShiny extends LitElement {
    static styles = css`
     :host {
        display: flex;
        align-items: center;
        justify-content: center;
     }

     .neon {
        position: relative;
        overflow: hidden;
        filter: brightness(200%);
    }

    .text {
        background-color: black;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
        text-transform: uppercase;
        position: relative;
        user-select: none;
    }

    .text::before {
        content: attr(data-text);
        position: absolute;
        color: white;
        filter: blur(0.02em);
        mix-blend-mode: difference;
    }

    .gradient {
        position: absolute;
        background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        mix-blend-mode: multiply;
    }

    .spotlight {
        position: absolute;
        top: -100%;
        left: -100%;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(
                circle,
                white,
                transparent 25%
            ) center / 25% 25%,
            radial-gradient(
                circle,
                white,
                black 25%
            ) center / 12.5% 12.5%;
        animation: light 5s linear infinite;
        mix-blend-mode: color-dodge;
    }

    @keyframes light {
        to {
            transform: translate(50%, 50%);
        }
    }

   `;

    @property()
    text = '';

    render() {
        return html`
       <div class="neon">
            <span class="text">${ this.text }</span>
            <span class="gradient"></span>
            <span class="spotlight"></span>
        </div>
     `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'text-shiny': TextShiny;
    }
}
