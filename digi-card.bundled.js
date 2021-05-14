/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,h=`<${l}>`,c=document,a=(t="")=>c.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,g=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,b=/"/g,m=/^(?:script|style|textarea)$/i,w=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),y=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),$=new WeakMap,k=c.createTreeWalker(c,129,null,!1);class C{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let c=0,d=0;const u=t.length-1,w=this.parts,[y,S]=((t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let o,a,d=-1,u=0;for(;u<s.length&&(c.lastIndex=u,a=c.exec(s),null!==a);)u=c.lastIndex,c===v?"!--"===a[1]?c=p:void 0!==a[1]?c=g:void 0!==a[2]?(m.test(a[2])&&(n=RegExp("</"+a[2],"g")),c=f):void 0!==a[3]&&(c=f):c===f?">"===a[0]?(c=null!=n?n:v,d=-1):void 0===a[1]?d=-2:(d=c.lastIndex-a[2].length,o=a[1],c=void 0===a[3]?f:'"'===a[3]?b:x):c===b||c===x?c=f:c===p||c===g?c=v:(c=f,n=void 0);const w=c===f&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+h:d>=0?(e.push(o),s.slice(0,d)+"$lit$"+s.slice(d)+r+w):s+r+(-2===d?(e.push(void 0),i):w)}const a=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==o?o.createHTML(a):a,e]})(t,i);if(this.el=C.createElement(y,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&w.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=S[d++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);w.push({type:1,index:c,name:i[2],strings:t,ctor:"."===i[1]?O:"?"===i[1]?j:"@"===i[1]?M:E})}else w.push({type:6,index:c})}for(const i of t)e.removeAttribute(i)}if(m.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=n?n.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],a()),k.nextNode(),w.push({type:2,index:++c});e.append(t[i],a())}}}else if(8===e.nodeType)if(e.data===l)w.push({type:2,index:c});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)w.push({type:7,index:c}),t+=r.length-1}c++}}static createElement(t,i){const s=c.createElement("template");return s.innerHTML=t,s}}function T(t,i,s=t,e){var n,o,r,l;if(i===y)return i;let h=void 0!==e?null===(n=s.Σi)||void 0===n?void 0:n[e]:s.Σo;const c=d(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===c?h=void 0:(h=new c(t),h.T(t,s,e)),void 0!==e?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=T(t,h.S(t,i.values),h,e)),i}class V{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:c).importNode(s,!0);k.currentNode=n;let o=k.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new A(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new z(o,this,t)),this.l.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(o=k.nextNode(),r++)}return n}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class A{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=T(this,t,i),d(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==y&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(c.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(s);else{const t=new V(n,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new C(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const n of t)e===i.length?i.push(s=new A(this.k(a()),this.k(a()),this,this.options)):s=i[e],s.I(n),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class E{constructor(t,i,s,e,n){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(S),this.strings=s):this.H=S}get tagName(){return this.element.tagName}I(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=T(this,t,i,0),o=!d(t)||t!==this.H&&t!==y,o&&(this.H=t);else{const e=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=T(this,e[s+r],i,r),l===y&&(l=this.H[r]),o||(o=!d(l)||l!==this.H[r]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!e&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends E{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class j extends E{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class M extends E{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=T(this,t,i,0))&&void 0!==s?s:S)===y)return;const e=this.H,n=t===S&&e!==S||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==S&&(e===S||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){T(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,C,A),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U=Symbol();class P{constructor(t,i){if(i!==U)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return H&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const _=new Map,D=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof P)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=_.get(s);return void 0===e&&_.set(s,e=new P(s,U)),e},N=H?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new P(t+"",U))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var R,I,B,G;const L={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},W=(t,i)=>i!==t&&(i==i||t==t),Z={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:W};class q extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=Z){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(N(t))}else void 0!==t&&i.push(N(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{H?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=Z){var e,n;const o=this.constructor.Πp(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:L.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,i){var s,e,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==n?n:L.fromAttribute;this.Πh=r,this[r]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||W)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,K,F,Y,Q,X;q.finalized=!0,q.shadowRootOptions={mode:"open"},null===(I=(R=globalThis).reactiveElementPlatformSupport)||void 0===I||I.call(R,{ReactiveElement:q}),(null!==(B=(G=globalThis).reactiveElementVersions)&&void 0!==B?B:G.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(J=(X=globalThis).litElementVersions)&&void 0!==J?J:X.litElementVersions=[]).push("3.0.0-rc.1");class tt extends q{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new A(i.insertBefore(a(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return y}}tt.finalized=!0,tt._$litElement$=!0,null===(F=(K=globalThis).litElementHydrateSupport)||void 0===F||F.call(K,{LitElement:tt}),null===(Q=(Y=globalThis).litElementPlatformSupport)||void 0===Q||Q.call(Y,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const nt=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){if(super(t),this.vt=S,t.type!==nt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S)return this.Vt=void 0,this.vt=t;if(t===y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const i=[t];return i.raw=i,this.Vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const rt=(t=>(...i)=>({_$litDirective$:t,values:i}))(ot);var lt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends tt{constructor(){super(...arguments),this.text="",this.bgTitle=""}render(){return w`
       <div class="neon">
            <span class="text">${this.text}</span>
            <span class="gradient"  style="background:${this.bgTitle}"></span>
            <span class="spotlight"></span>
        </div>
     `}};ht.styles=D`
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
        /* border: 2px solid black; */
        background: rgb(16 16 16);
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
        inset: -62% 6px 9px -104%;
        background: radial-gradient(circle, rgb(255, 255, 255), transparent 25%) center center / 25% 25%, radial-gradient(circle, black, black 25%) center center / 12.5% 12.5%;
        animation: 5s linear 0s infinite normal none running light;
        mix-blend-mode: overlay;
    }

    @keyframes light {
        to {
            transform: translate(50%, 50%);
        }
    }

   `,lt([et()],ht.prototype,"text",void 0),lt([et({type:String})],ht.prototype,"bgTitle",void 0),ht=lt([it("text-shiny")],ht);var ct=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let at=class extends tt{render(){return w`
        ${this.name?w`<div class="card-name"> <text-shiny bgTitle="${this.bgTitle}" text="${this.name}"></text-shiny></div>`:void 0}  
      <div class="card-body">

      ${this.image?w`<img src="${this.image}" class="card-bg">`:void 0}

      <div class="image-container">
      ${this.image?w`<img src="${this.image}" class="card-img-top">`:void 0}
      </div>

      <div class="info-container">

        ${this.price?w`<div class="text-row"> ${rt(dt.dollar)} <span class="info-text">${this.price}</span></div>`:void 0}  

        ${this.releaseDate?w`<div class="text-row"> ${rt(dt.calendar)} <span class="info-text">${this.releaseDate}</span></div>`:void 0}  

        ${this.condition?w`<div class="text-row"> ${rt(dt.diamond)} <span class="info-text">${this.condition}</span></div>`:void 0}  

        ${this.power?w`<div class="text-power">  ${this.power} </div>`:void 0}  

        </div>
      </div>
    `}};at.styles=D`
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
      width: 60%;
      border-radius: 1rem;
      transform: rotate(15deg);
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
      display:flex;
      flex-direction:column;
    }

    .card-img-top{
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }

    .card-name{
      text-align: center;
      border-bottom: 1px solid white;
      color: rgb(25 25 25);
      font-size: calc(1.46rem + 0.12vw) !important;
      text-shadow: 2px 2px 8px #ababab;import { replace } from '@rollup/plugin-replace';
import { resolve } from '@rollup/plugin-node-resolve';

    }

    .text-row{
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      flex:1;
    }

    .text-row svg{
      padding: 0.6rem;
      margin-right: 1rem;
      width: 32px;
      border-radius: 0.5rem;
      height: 32px;
      vertical-align: top;
      opacity:0.5;
    }

    .text-power{
      text-align: center;
      padding: 1rem;
      margin-top: -1rem;
      line-height: 32px;
      position:relative;
      color: white;
      font-size: 32px;
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

  `,ct([et({type:String})],at.prototype,"name",void 0),ct([et({type:String})],at.prototype,"image",void 0),ct([et({type:String})],at.prototype,"price",void 0),ct([et({type:String})],at.prototype,"releaseDate",void 0),ct([et({type:String})],at.prototype,"condition",void 0),ct([et({type:String})],at.prototype,"power",void 0),ct([et({type:String})],at.prototype,"bgTitle",void 0),at=ct([it("digi-card")],at);const dt={calendar:'\n  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>\n  ',diamond:'\n  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>\n  ',dollar:'\n  <?xml version="1.0" encoding="iso-8859-1"?>\x3c!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="511.613px" height="511.613px" viewBox="0 0 511.613 511.613" style="enable-background:new 0 0 511.613 511.613;"\t xml:space="preserve"><g>\t<path d="M385.261,311.475c-2.471-8.367-5.469-15.649-8.99-21.833c-3.519-6.19-8.559-12.228-15.13-18.134\t\tc-6.563-5.903-12.467-10.657-17.702-14.271c-5.232-3.617-12.419-7.661-21.557-12.137c-9.13-4.475-16.364-7.805-21.689-9.995\t\tc-5.332-2.187-13.045-5.185-23.134-8.992c-8.945-3.424-15.605-6.042-19.987-7.849c-4.377-1.809-10.133-4.377-17.271-7.71\t\tc-7.135-3.328-12.465-6.28-15.987-8.848c-3.521-2.568-7.279-5.708-11.277-9.419c-3.998-3.711-6.805-7.661-8.424-11.848\t\tc-1.615-4.188-2.425-8.757-2.425-13.706c0-12.94,5.708-23.507,17.128-31.689c11.421-8.182,26.174-12.275,44.257-12.275\t\tc7.99,0,16.136,1.093,24.41,3.284s15.365,4.659,21.266,7.421c5.906,2.762,11.471,5.808,16.707,9.137\t\tc5.235,3.332,8.945,5.852,11.136,7.565c2.189,1.714,3.576,2.855,4.141,3.427c2.478,1.903,5.041,2.568,7.706,1.999\t\tc2.854-0.19,5.045-1.715,6.571-4.567l23.13-41.684c2.283-3.805,1.811-7.422-1.427-10.85c-1.144-1.142-2.566-2.473-4.291-3.997\t\tc-1.708-1.524-5.421-4.283-11.136-8.282c-5.709-3.996-11.752-7.565-18.124-10.706c-6.379-3.138-14.661-6.328-24.845-9.562\t\tc-10.178-3.239-20.697-5.426-31.549-6.567V9.136c0-2.663-0.855-4.853-2.563-6.567C282.493,0.859,280.303,0,277.634,0h-38.546\t\tc-2.474,0-4.615,0.903-6.423,2.712s-2.712,3.949-2.712,6.424v51.391c-29.884,5.708-54.152,18.461-72.805,38.256\t\tc-18.651,19.796-27.98,42.823-27.98,69.092c0,7.803,0.812,15.226,2.43,22.265c1.616,7.045,3.616,13.374,5.996,18.988\t\tc2.378,5.618,5.758,11.136,10.135,16.562c4.377,5.424,8.518,10.088,12.419,13.988c3.903,3.899,8.995,7.945,15.274,12.131\t\tc6.283,4.19,11.66,7.571,16.134,10.139c4.475,2.56,10.422,5.52,17.843,8.843c7.423,3.333,13.278,5.852,17.561,7.569\t\tc4.283,1.711,10.135,4.093,17.561,7.132c10.277,3.997,17.892,7.091,22.84,9.281c4.952,2.19,11.231,5.235,18.849,9.137\t\tc7.611,3.898,13.176,7.468,16.7,10.705c3.521,3.237,6.708,7.234,9.565,11.991s4.288,9.801,4.288,15.133\t\tc0,15.037-5.853,26.645-17.562,34.823c-11.704,8.187-25.27,12.279-40.685,12.279c-7.036,0-14.084-0.757-21.124-2.279\t\tc-24.744-4.955-47.869-16.851-69.377-35.693l-0.571-0.571c-1.714-2.088-3.999-2.946-6.851-2.563\t\tc-3.046,0.38-5.236,1.523-6.567,3.43l-29.408,38.54c-2.856,3.806-2.663,7.707,0.572,11.704c0.953,1.143,2.618,2.86,4.996,5.14\t\tc2.384,2.289,6.81,5.852,13.278,10.715c6.47,4.856,13.513,9.418,21.128,13.706c7.614,4.281,17.272,8.514,28.98,12.703\t\tc11.708,4.182,23.839,7.131,36.402,8.843v49.963c0,2.478,0.905,4.617,2.712,6.427c1.809,1.811,3.949,2.711,6.423,2.711h38.546\t\tc2.669,0,4.859-0.855,6.57-2.566s2.563-3.901,2.563-6.571v-49.963c30.269-4.948,54.87-17.939,73.806-38.972\t\tc18.938-21.033,28.41-46.11,28.41-75.229C388.994,328.801,387.759,319.855,385.261,311.475z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n  '};export{at as DigiCard};
