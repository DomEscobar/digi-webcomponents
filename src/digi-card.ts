import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './shiny-text.js';

@customElement('digi-card')
export class DigiCard extends LitElement {
  static styles = css`
    :host{
      border-radius: 1rem;
      box-shadow: rgb(173 173 173 / 26%) 0px 0px 20px 0px;
      overflow: hidden;
      position: relative;
      display: block;
    }

    .card-bg{
      position: absolute;
      opacity: 0.2;
      left: 0px;
      height: 100%;
      top: 0px;
      border-radius: 1rem;
      transform: rotate(15deg);
      z-index: -1;
    }

    .card-body{
      padding: 0.5rem;
      text-align: center;
    }

    .image-container{
      padding: 0.5rem;
      text-align: center;
      display: inline-block;
    }

    .info-container{
      padding: 0.5rem;
      flex-direction: column;
      display: inline-block;
      margin: auto;
      text-align: center;
      vertical-align: text-bottom;
    }

    .card-img-top{
      height: 136px;
      max-width: 90px;
      width: auto;
      margin: auto;
      text-align: center;
    }

    .card-name{
      text-align: center;
      border-bottom: 1px solid white;
      color: rgb(25 25 25);
      text-shadow: 2px 2px 8px #ababab;
    }

    .text-row{
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      align-items: center;
      flex:1;
    }

    .text-row svg{
      padding: 0.6rem;
      width: 16px;
      border-radius: 0.5rem;
      height: 16px;
      vertical-align: top;
      opacity:0.5;
    }

    .text-power{
      text-align: center;
      padding: 1rem;
      margin-top: -1rem;
      line-height: 16px;
      position: relative;
      color: white;
      font-size: 27px;
      font-weight: bold;
      text-shadow: rgb(255 255 255) 0px 1px 0px, rgb(201 201 201) 0px 2px 0px, rgb(187 187 187) 0px 3px 0px, rgb(185 185 185) 0px 4px 0px, rgb(183 183 183) 0px 5px 0px, rgb(0 0 0 / 10%) 0px 6px 1px, rgb(0 0 0 / 10%) 0px 0px 5px, rgb(0 0 0 / 30%) 0px 1px 3px, rgb(0 0 0 / 20%) 0px 3px 5px, rgb(0 0 0 / 25%) 0px 5px 10px, rgb(0 0 0 / 0%) 0px 10px 10px, rgb(0 0 0 / 0%) 0px 20px 20px;    
    }

    .text-power::after{
      content: "POWER";
      position: absolute;
      z-index: -1;
      left: 0px;
      color: #000000;
      opacity: 0.1;
      top: 5px;
      width: 100%;
    }

  `;


  @property({ type: String })
  name: string | undefined;

  @property({ type: String })
  image: string | undefined;

  @property({ type: String })
  price: string | undefined;

  @property({ type: String })
  releaseDate: string | undefined;

  @property({ type: String })
  condition: string | undefined;

  @property({ type: String })
  power: string | undefined;

  @property({ type: String })
  bgTitle: string | undefined;

  // @property({ type: Array })
  // attacks: string[] = [];



  render() {
    return html`
        ${ this.name ?
        html`<div class="card-name"> <text-shiny bgTitle="${this.bgTitle}" text="${ this.name }"></text-shiny></div>` : undefined }  
      <div class="card-body">

      ${ this.image ?
        html`<img src="${ this.image }" class="card-bg">` : undefined }

      <div class="image-container">
      ${ this.image ?
        html`<img src="${ this.image }" class="card-img-top">` : undefined }
      </div>

      <div class="info-container">

        ${ this.power ?
        html`<div class="text-power">  ${ this.power } </div>` : undefined }  

        ${ this.price ?
        html`<div class="text-row"> ${ unsafeHTML(icons.dollar) } <span class="info-text">${ this.price }</span></div>` : undefined }  


        </div>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'digi-card': DigiCard;
  }
}


const icons = {
  calendar: `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>
  `,
  diamond: `
  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  `,
  dollar: `
  <?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="511.613px" height="511.613px" viewBox="0 0 511.613 511.613" style="enable-background:new 0 0 511.613 511.613;"	 xml:space="preserve"><g>	<path d="M385.261,311.475c-2.471-8.367-5.469-15.649-8.99-21.833c-3.519-6.19-8.559-12.228-15.13-18.134		c-6.563-5.903-12.467-10.657-17.702-14.271c-5.232-3.617-12.419-7.661-21.557-12.137c-9.13-4.475-16.364-7.805-21.689-9.995		c-5.332-2.187-13.045-5.185-23.134-8.992c-8.945-3.424-15.605-6.042-19.987-7.849c-4.377-1.809-10.133-4.377-17.271-7.71		c-7.135-3.328-12.465-6.28-15.987-8.848c-3.521-2.568-7.279-5.708-11.277-9.419c-3.998-3.711-6.805-7.661-8.424-11.848		c-1.615-4.188-2.425-8.757-2.425-13.706c0-12.94,5.708-23.507,17.128-31.689c11.421-8.182,26.174-12.275,44.257-12.275		c7.99,0,16.136,1.093,24.41,3.284s15.365,4.659,21.266,7.421c5.906,2.762,11.471,5.808,16.707,9.137		c5.235,3.332,8.945,5.852,11.136,7.565c2.189,1.714,3.576,2.855,4.141,3.427c2.478,1.903,5.041,2.568,7.706,1.999		c2.854-0.19,5.045-1.715,6.571-4.567l23.13-41.684c2.283-3.805,1.811-7.422-1.427-10.85c-1.144-1.142-2.566-2.473-4.291-3.997		c-1.708-1.524-5.421-4.283-11.136-8.282c-5.709-3.996-11.752-7.565-18.124-10.706c-6.379-3.138-14.661-6.328-24.845-9.562		c-10.178-3.239-20.697-5.426-31.549-6.567V9.136c0-2.663-0.855-4.853-2.563-6.567C282.493,0.859,280.303,0,277.634,0h-38.546		c-2.474,0-4.615,0.903-6.423,2.712s-2.712,3.949-2.712,6.424v51.391c-29.884,5.708-54.152,18.461-72.805,38.256		c-18.651,19.796-27.98,42.823-27.98,69.092c0,7.803,0.812,15.226,2.43,22.265c1.616,7.045,3.616,13.374,5.996,18.988		c2.378,5.618,5.758,11.136,10.135,16.562c4.377,5.424,8.518,10.088,12.419,13.988c3.903,3.899,8.995,7.945,15.274,12.131		c6.283,4.19,11.66,7.571,16.134,10.139c4.475,2.56,10.422,5.52,17.843,8.843c7.423,3.333,13.278,5.852,17.561,7.569		c4.283,1.711,10.135,4.093,17.561,7.132c10.277,3.997,17.892,7.091,22.84,9.281c4.952,2.19,11.231,5.235,18.849,9.137		c7.611,3.898,13.176,7.468,16.7,10.705c3.521,3.237,6.708,7.234,9.565,11.991s4.288,9.801,4.288,15.133		c0,15.037-5.853,26.645-17.562,34.823c-11.704,8.187-25.27,12.279-40.685,12.279c-7.036,0-14.084-0.757-21.124-2.279		c-24.744-4.955-47.869-16.851-69.377-35.693l-0.571-0.571c-1.714-2.088-3.999-2.946-6.851-2.563		c-3.046,0.38-5.236,1.523-6.567,3.43l-29.408,38.54c-2.856,3.806-2.663,7.707,0.572,11.704c0.953,1.143,2.618,2.86,4.996,5.14		c2.384,2.289,6.81,5.852,13.278,10.715c6.47,4.856,13.513,9.418,21.128,13.706c7.614,4.281,17.272,8.514,28.98,12.703		c11.708,4.182,23.839,7.131,36.402,8.843v49.963c0,2.478,0.905,4.617,2.712,6.427c1.809,1.811,3.949,2.711,6.423,2.711h38.546		c2.669,0,4.859-0.855,6.57-2.566s2.563-3.901,2.563-6.571v-49.963c30.269-4.948,54.87-17.939,73.806-38.972		c18.938-21.033,28.41-46.11,28.41-75.229C388.994,328.801,387.759,319.855,385.261,311.475z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
  `
}