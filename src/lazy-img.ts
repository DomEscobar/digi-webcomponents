import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('img-lazy')
export class LazyImage extends LitElement {
    static styles = css`
        :host{
            display: block;
        }

        img{
            width:100%;
            height:auto;
        }

        .round{
            border-radius:50%;
        }
   `;

    @property({ type: Boolean })
    rounded?:boolean;

    @property({ type: String })
    src?: string;

    emptyImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAIAAADMaMX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAzSURBVFhH7c1BEQAwEAOh+lcZKTXB3GsxwNutPqvP6rP6rD6rz+qz+qw+q8/qs/qs22/7cqJrk6NNXs8AAAAASUVORK5CYII='

    public loadedImg = this.emptyImg;

    connectedCallback() {
        super.connectedCallback()

        this.checkImage(this.src || this.emptyImg).then(() => {
            this.loadedImg = this.src || this.emptyImg;
            this.requestUpdate();
        });
    }

    async checkImage(url: string) {
        const img = new Image();
        return new Promise(resolve => {
            img.onload = () => resolve(img)
            img.src = url;
        });
    }

    render() {
        return html`
            <img class="${this.rounded?'round':''}" src="${ this.loadedImg }">
     `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'img-lazy': LazyImage;
    }
}
