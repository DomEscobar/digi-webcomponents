var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let LazyImage = class LazyImage extends LitElement {
    constructor() {
        super(...arguments);
        this.emptyImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAIAAADMaMX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAzSURBVFhH7c1BEQAwEAOh+lcZKTXB3GsxwNutPqvP6rP6rD6rz+qz+qw+q8/qs/qs22/7cqJrk6NNXs8AAAAASUVORK5CYII=';
        this.loadedImg = this.emptyImg;
    }
    connectedCallback() {
        super.connectedCallback();
        this.checkImage(this.src || this.emptyImg).then(() => {
            this.loadedImg = this.src || this.emptyImg;
            this.requestUpdate();
        });
    }
    async checkImage(url) {
        const img = new Image();
        return new Promise(resolve => {
            img.onload = () => resolve(img);
            img.src = url;
        });
    }
    render() {
        return html `
            <img class="${this.rounded ? 'round' : ''}" src="${this.loadedImg}">
     `;
    }
};
LazyImage.styles = css `
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
__decorate([
    property({ type: Boolean })
], LazyImage.prototype, "rounded", void 0);
__decorate([
    property({ type: String })
], LazyImage.prototype, "src", void 0);
LazyImage = __decorate([
    customElement('img-lazy')
], LazyImage);
export { LazyImage };
//# sourceMappingURL=lazy-img.js.map