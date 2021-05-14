/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,h=`<${l}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,f=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,m=/"/g,w=/^(?:script|style|textarea)$/i,x=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),y=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),$=new WeakMap,k=a.createTreeWalker(a,129,null,!1);class C{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let a=0,c=0;const u=t.length-1,x=this.parts,[y,S]=((t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",a=v;for(let i=0;i<s;i++){const s=t[i];let n,d,c=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),null!==d);)u=a.lastIndex,a===v?"!--"===d[1]?a=p:void 0!==d[1]?a=f:void 0!==d[2]?(w.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=g):void 0!==d[3]&&(a=g):a===g?">"===d[0]?(a=null!=o?o:v,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?g:'"'===d[3]?m:b):a===m||a===b?a=g:a===p||a===f?a=v:(a=g,o=void 0);const x=a===g&&t[i+1].startsWith("/>")?" ":"";l+=a===v?s+h:c>=0?(e.push(n),s.slice(0,c)+"$lit$"+s.slice(c)+r+x):s+r+(-2===c?(e.push(void 0),i):x)}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(d):d,e]})(t,i);if(this.el=C.createElement(y,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&x.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=S[c++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);x.push({type:1,index:a,name:i[2],strings:t,ctor:"."===i[1]?O:"?"===i[1]?V:"@"===i[1]?E:M})}else x.push({type:6,index:a})}for(const i of t)e.removeAttribute(i)}if(w.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),k.nextNode(),x.push({type:2,index:++a});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===l)x.push({type:2,index:a});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)x.push({type:7,index:a}),t+=r.length-1}a++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function T(t,i,s=t,e){var o,n,r,l;if(i===y)return i;let h=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,e)),void 0!==e?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=T(t,h.S(t,i.values),h,e)),i}class A{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);k.currentNode=o;let n=k.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new j(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new H(n,this,t)),this.l.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=k.nextNode(),r++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class j{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=T(this,t,i),c(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==y&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new A(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new C(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new j(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class M{constructor(t,i,s,e,o){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(S),this.strings=s):this.H=S}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=T(this,t,i,0),n=!c(t)||t!==this.H&&t!==y,n&&(this.H=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=T(this,e[s+r],i,r),l===y&&(l=this.H[r]),n||(n=!c(l)||l!==this.H[r]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+o[r+1]),this.H[r]=l}n&&!e&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends M{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class V extends M{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class E extends M{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=T(this,t,i,0))&&void 0!==s?s:S)===y)return;const e=this.H,o=t===S&&e!==S||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==S&&(e===S||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class H{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){T(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,C,j),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U=Symbol();class _{constructor(t,i){if(i!==U)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return z&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const N=new Map,R=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof _)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=N.get(s);return void 0===e&&N.set(s,e=new _(s,U)),e},P=z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new _(t+"",U))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var I,L,Z,B;const D={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},W=(t,i)=>i!==t&&(i==i||t==t),q={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W};class J extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=q){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(P(t))}else void 0!==t&&i.push(P(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{z?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=q){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:D.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:D.fromAttribute;this.Πh=r,this[r]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||W)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,F,G,Q,X,Y;J.finalized=!0,J.shadowRootOptions={mode:"open"},null===(L=(I=globalThis).reactiveElementPlatformSupport)||void 0===L||L.call(I,{ReactiveElement:J}),(null!==(Z=(B=globalThis).reactiveElementVersions)&&void 0!==Z?Z:B.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(K=(Y=globalThis).litElementVersions)&&void 0!==K?K:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new j(i.insertBefore(d(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return y}}tt.finalized=!0,tt._$litElement$=!0,null===(G=(F=globalThis).litElementHydrateSupport)||void 0===G||G.call(F,{LitElement:tt}),null===(X=(Q=globalThis).litElementPlatformSupport)||void 0===X||X.call(Q,{LitElement:tt});
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
 */}const ot=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){if(super(t),this.vt=S,t.type!==ot)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S)return this.Vt=void 0,this.vt=t;if(t===y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const i=[t];return i.raw=i,this.Vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}nt.directiveName="unsafeHTML",nt.resultType=1;const rt=(t=>(...i)=>({_$litDirective$:t,values:i}))(nt);var lt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends tt{constructor(){super(...arguments),this.text=""}render(){return x`
       <div class="neon">
            <span class="text">${this.text}</span>
            <span class="gradient"></span>
            <span class="spotlight"></span>
        </div>
     `}};ht.styles=R`
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

   `,lt([et()],ht.prototype,"text",void 0),ht=lt([it("text-shiny")],ht);var at=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let dt=class extends tt{render(){return x`
      <div class="card-body">

      ${this.image?x`<img src="${this.image}" class="card-bg">`:void 0}

      <div class="image-container">
      ${this.image?x`<img src="${this.image}" class="card-img-top">`:void 0}
      </div>

      <div class="info-container">
        ${this.name?x`<div class="card-name"> <text-shiny text="${this.name}"></text-shiny></div>`:void 0}  

        ${this.releaseDate?x`<div class="text-row"> ${rt(ct.calendar)} <span class="info-text">${this.releaseDate}</span></div>`:void 0}  

        ${this.condition?x`<div class="text-row"> ${rt(ct.diamond)} <span class="info-text">${this.condition}</span></div>`:void 0}  

        ${this.power?x`<div class="text-power">  ${this.power} </div>`:void 0}  

        </div>
      </div>
    `}};dt.styles=R`
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

  `,at([et({type:String})],dt.prototype,"name",void 0),at([et({type:String})],dt.prototype,"image",void 0),at([et({type:String})],dt.prototype,"releaseDate",void 0),at([et({type:String})],dt.prototype,"condition",void 0),at([et({type:String})],dt.prototype,"power",void 0),dt=at([it("digi-card")],dt);const ct={calendar:'\n  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>\n  ',diamond:'\n  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>\n  '};export{dt as DigiCard};
