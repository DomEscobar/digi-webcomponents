var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './shiny-text.js';
let DigiCard = class DigiCard extends LitElement {
    // @property({ type: Array })
    // attacks: string[] = [];
    render() {
        return html `
      <div class="card-body">

      ${this.image ?
            html `<img src="${this.image}" class="card-bg">` : undefined}

      <div class="image-container">
      ${this.image ?
            html `<img src="${this.image}" class="card-img-top">` : undefined}
      </div>

      <div class="info-container">
        ${this.name ?
            html `<div class="card-name"> <text-shiny text="${this.name}"></text-shiny></div>` : undefined}  

        ${this.releaseDate ?
            html `<div class="text-row"> ${unsafeHTML(icons.calendar)} <span class="info-text">${this.releaseDate}</span></div>` : undefined}  

        ${this.condition ?
            html `<div class="text-row"> ${unsafeHTML(icons.diamond)} <span class="info-text">${this.condition}</span></div>` : undefined}  

        ${this.power ?
            html `<div class="text-power">  ${this.power} </div>` : undefined}  

        </div>
      </div>
    `;
    }
};
DigiCard.styles = css `
    :host{
      border-radius: 1rem;
      box-shadow: rgb(173 173 173 / 26%) 0px 0px 20px 0px;
      overflow: hidden;
      position: relative;
      display: block;
    }

    .card-bg{
      position: absolute;
    /* bottom: -53px; */
      opacity: 0.1;
      left: 0px;
      height: 100%;
      top: 0px;
      width: 60%;
      border-radius: 1rem;
      transform: rotate(
  15deg
  );
      z-index: -1;
    }

    .card-body{
      padding: .5rem;
      display: flex;
    }

    .image-container{
      padding: .5rem;
      flex:1;
    }

    .info-container{
      padding: .5rem;
      flex:1;
    }

    .card-img-top{
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }

    .card-name{
      text-align: center;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid white;
      margin-bottom: 1rem;
      color: rgb(25 25 25);
      font-size: calc(1.26rem + 0.12vw) !important;
      text-shadow: 2px 2px 8px #ababab;
    }

    .text-row{
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .text-row svg{
      padding: 0.6rem;
      margin-right: 1rem;
      width: 32px;
      border-radius: 0.5rem;
      height: 32px;
      vertical-align: top;
      box-shadow: rgb(234 230 230) 1px 1px 3px 1px;
    }

    .text-power{
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      line-height: 32px;
      /* width: 32px; */
      color: #212529;
      font-size: 32px;
      font-weight: bold;
      text-shadow: -1px 10px 20px #929292;
    }

  `;
__decorate([
    property({ type: String })
], DigiCard.prototype, "name", void 0);
__decorate([
    property({ type: String })
], DigiCard.prototype, "image", void 0);
__decorate([
    property({ type: String })
], DigiCard.prototype, "releaseDate", void 0);
__decorate([
    property({ type: String })
], DigiCard.prototype, "condition", void 0);
__decorate([
    property({ type: String })
], DigiCard.prototype, "power", void 0);
DigiCard = __decorate([
    customElement('digi-card')
], DigiCard);
export { DigiCard };
const icons = {
    calendar: `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>
  `,
    diamond: `
  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  `
};
//# sourceMappingURL=digi-card.js.map