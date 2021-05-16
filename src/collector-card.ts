import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('collector-card')
export class CollectorCard extends LitElement {
    static styles = css`
        :host{
        border-radius: 1rem;
        box-shadow: rgb(173 173 173 / 26%) 0px 0px 20px 0px;
        overflow: hidden;
        position: relative;
        display: block;
        }

        .card-body{
            padding: 0.5rem;
            text-align: center;
        }

        .container{
            display:flex;
        }

        .name{
            margin-bottom: 0.5rem;
        }

        img-lazy{
            flex:1;
            margin-right:1rem;
        }

        .info-container{
            flex:1;
            display:flex;
            align-items:center;
        }

        .info-container svg{
            margin-right:1rem;
            width:26px;
        }
   `;

    @property({ type: Number })
    amount = 0;

    @property({ type: String })
    name: string = "";

    @property({ type: String })
    image: string = "";

    render() {
        return html`
        <div class="card-body">
            <div class="name">${ this.name }</div>
            <div class="container">
                <img-lazy rounded="true" src="${ this.image }"></img-lazy>
                <div class="info-container">
                    ${ unsafeHTML(icons.cards) }
                    <span>${ this.amount }</span>
                </div>
            </div>
        </div>
     `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'collector-card': CollectorCard;
    }
}


const icons = {
    cards: `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
    "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="50.000000pt" height="46.000000pt" viewBox="0 0 50.000000 46.000000"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,46.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M305 453 c-61 -5 -149 -31 -197 -58 -58 -33 -108 -80 -108 -103 0 -10 40 -77 88 -148 79 -114 92 -129 120 -132 20 -2 42 4 60 18 23 17 51 24 117 29 119 9 117 5 113 204 -3 153 -4 160 -27 178 -23 19 -58 21 -166 12z m166 -178 c3 -82 1 -158 -3 -167 -7 -15 -23 -18 -108 -18 -54 0 -101 4 -104 8 -3 5 -8 75 -12 155 -5 114 -4 150 6 162 11 13 32 15 114 13 l101 -3 6 -150z m-252 23 l-1 -113 -17 95 c-11 58 -14 102 -9 113 20 40 28 12 27 -95z m-59 85 c0 -5 9 -59 20 -122 11 -63 18 -116 16 -118 -7 -7 -67 219 -62 233 6 14 26 20 26 7z m-50 -37 c0 -7 14 -58 30 -111 17 -54 29 -100 27 -102 -2 -1 -25 42 -52 97 -39 82 -45 103 -35 115 16 19 30 19 30 1z m27 -222 c-7 -7 -107 150 -107 167 0 41 19 22 63 -67 26 -53 46 -98 44 -100z"/>
    </g>
    </svg>`
}