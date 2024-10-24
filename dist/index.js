(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,i=this.t;if(e&&void 0===t){let e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}let a=t=>new s("string"==typeof t?t:t+"",void 0,i),r=(t,...e)=>new s(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,i),n=(i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let e of o){let o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return a(e)})(t):t,{is:d,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,b=globalThis,g=b.trustedTypes,m=g?g.emptyScript:"",v=b.reactiveElementPolyfillSupport,y=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&h(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){let a=o?.call(this);s.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;let t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){let t=this.properties;for(let e of[...p(t),...u(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(l(i));else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){let s=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??w)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[y("elementProperties")]=new Map,A[y("finalized")]=new Map,v?.({ReactiveElement:A}),(b.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=globalThis,E=S.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,j="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,D=`<${C}>`,R=document,T=()=>R.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,I=t=>N(t)||"function"==typeof t?.[Symbol.iterator],q="[ 	\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,O=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,J=/"/g,L=/^(?:script|style|textarea|title)$/i,F=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=F(1),W=(F(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),K=new WeakMap,Z=R.createTreeWalker(R,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}let Y=(t,e)=>{let i=t.length-1,o=[],s,a=2===e?"<svg>":"",r=U;for(let e=0;e<i;e++){let i=t[e],n,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,null!==(l=r.exec(i)));)h=r.lastIndex,r===U?"!--"===l[1]?r=M:void 0!==l[1]?r=z:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=s??U,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?O:'"'===l[3]?J:H):r===J||r===H?r=O:r===M||r===z?r=U:(r=O,s=void 0);let c=r===O&&t[e+1].startsWith("/>")?" ":"";a+=r===U?i+D:d>=0?(o.push(n),i.slice(0,d)+j+i.slice(d)+k+c):i+k+(-2===d?e:c)}return[G(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,a=0,r=t.length-1,n=this.parts,[l,d]=Y(t,e);if(this.el=Q.createElement(l,i),Z.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Z.nextNode())&&n.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(j)){let e=d[a++],i=o.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?to:"?"===r[1]?ts:"@"===r[1]?ta:ti}),o.removeAttribute(t)}else t.startsWith(k)&&(n.push({type:6,index:s}),o.removeAttribute(t));if(L.test(o.tagName)){let t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),Z.nextNode(),n.push({type:2,index:++s});o.append(t[e],T())}}}else if(8===o.nodeType){if(o.data===C)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)n.push({type:7,index:s}),t+=k.length-1}}s++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){if(e===W)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl,a=P(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(t))._$AT(t,i,o),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??R).importNode(e,!0);Z.currentNode=o;let s=Z.nextNode(),a=0,r=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new te(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new tr(s,this,t)),this._$AV.push(e),n=i[++r]}a!==n?.index&&(s=Z.nextNode(),a++)}return Z.currentNode=R,o}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){P(t=X(this,t,e))?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):I(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let t=new tt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let s of t)o===e.length?e.push(i=new te(this.S(T()),this.S(T()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ti{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,o){let s=this.strings,a=!1;if(void 0===s)(a=!P(t=X(this,t,e,0))||t!==this._$AH&&t!==W)&&(this._$AH=t);else{let o,r;let n=t;for(t=s[0],o=0;o<s.length-1;o++)(r=X(this,n[i+o],e,o))===W&&(r=this._$AH[o]),a||=!P(r)||r!==this._$AH[o],r===V?t=V:t!==V&&(t+=(r??"")+s[o+1]),this._$AH[o]=r}a&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class to extends ti{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class ts extends ti{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class ta extends ti{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??V)===W)return;let i=this._$AH,o=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tr{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}let tn=S.litHtmlPolyfillSupport;tn?.(Q,te),(S.litHtmlVersions??=[]).push("3.1.3");let tl=(t,e,i)=>{let o=i?.renderBefore??e,s=o._$litPart$;if(void 0===s){let t=i?.renderBefore??null;o._$litPart$=s=new te(e.insertBefore(T(),t),t,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class td extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tl(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}td._$litElement$=!0,td.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:td});let th=globalThis.litElementPolyfillSupport;async function tc(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.error("Failed to fetch data:",t)}}async function tp(){let t=await tc(),e=new Date;return t.sort((t,i)=>{let o=new Date(t.start_date),s=new Date(i.start_date);return tu(e,o)-tu(e,s)})}th?.({LitElement:td}),(globalThis.litElementVersions??=[]).push("4.0.5"),customElements.define("auth-component",class extends td{constructor(){super(),this.userIsAuthorized=!1,this.userName=""}static get properties(){return{userIsAuthorized:{type:Boolean,attribute:!1},userName:{type:String,attribute:!1}}}static get styles(){return r`
      :host {
        display: block;
      }

      .text--signed-in {
        color: #fff;
        padding-right: 1rem;
      }

      summary:hover {
        cursor: pointer;
      }

      .button__dialog--close {
        position: absolute;
        right: .5rem;
        top: .5rem;
        padding: 0 !important;
      }

      .dialog__btn--close {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../close.svg');
      }
    `}connectedCallback(){super.connectedCallback();let t=sessionStorage.getItem("authorized-user");null===t||"false"==t?this.userIsAuthorized=!1:(this.userIsAuthorized=!0,this.userName=JSON.parse(t).data.name)}render(){return B`
      <link rel="stylesheet" href="/index.css">
      ${this.userIsAuthorized?B`<span class="text--signed-in"><i>Signed in as: </i>${this.userName}</span><button class="button__ghost" @click="${this.signOutUserHandler}" title="Sign Out">Sign Out</button>`:B`
        <button @click="${this.openSignInForm}" class="button__ghost" title="Sign In">Admin Sign In</button>
        <dialog id="dialog__sign-in">
          <button title="close dialog" @click="${this.closeSignInForm}" class="icon button__dialog--close">
            <div class="icon__wrap">
              <span class="dialog__btn--close"></span>
            </div>
          </button>
          <form @submit="${this.formSubmissionHandler}"  id="form__sign-in">
            <div class="input-wrap">
              <label>Email</label>
              <input type="text" name="email" id="email" autocomplete="email">
            </div>
            <div class="input-wrap">
              <label>Password</label>
              <input type="password" name="password" id="password" autocomplete="current-password">
            </div>
            <button type="submit" title="Sign In">Sign In</button>
          </form>
        </dialog>
      `}
    `}async formSubmissionHandler(t){t.preventDefault();let e=this.shadowRoot.querySelector("#email").value,i=this.shadowRoot.querySelector("#password").value;try{let t=await fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:i})});if(t.ok){let e=await t.json();sessionStorage.setItem("authorized-user",JSON.stringify({data:e})),this.userIsAuthorized=!0,this.userName=e.name,document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}else console.log(t),alert("Invalid email or password")}catch(t){console.error("Error: ",t)}}signOutUserHandler(){sessionStorage.setItem("authorized-user",!1),this.userIsAuthorized=!1,document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}openSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").showModal()}closeSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").close(),this.shadowRoot.querySelector("#form__sign-in").reset()}});let tu=(t,e)=>(e-t)/864e5;function t_(t){let e=new Date(t),i=e.getDate(),o=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],s=e.getFullYear(),a=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(i);return`${o} ${i}${a}, ${s}`}customElements.define("event-component",class extends td{constructor(){super(),this.eventData=[],this.userIsAuthorized=!1}static get properties(){return{eventData:{type:Array,attribute:!1},userIsAuthorized:{type:Boolean,attribute:!1}}}static get styles(){return r`
      :host {
        display: block;
        width: 100%;
        height: max-content;
        position: relative;
      }

      /*#button__event--new {
        position: absolute;
        right: 0;
        top: 0;
      }*/

      .event {
       /* width: max-content; */
       padding: 2rem;
       position: relative;
       width: 50vw;
       border: 1px solid grey;;
       background-color: transparent;
       display: flex;
       gap: 2rem;
       justify-content: space-between
      }

      .event:not(:last-child) {
        margin-bottom: 2rem;
      }

      .event-info {
        justify-self: flex-end;
      }

      h2 {
        margin: auto 0;
      }

      .event__action-bar {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
      }

      #button__dialog--close {
        position: absolute;
        right: .5rem;
        top: .5rem;
        padding: 0 !important;
      }

      .dialog__btn--close {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../close.svg');
      }

      .button__event--delete {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../trash-can.svg');
        transition: transform .2s;
      }

      .button__event--edit {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../edit.svg');
        transition: transform .2s;
      }

      .button__event--delete:hover, .button__event--edit:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    `}async connectedCallback(){super.connectedCallback(),this.eventData=await tp();let t=sessionStorage.getItem("authorized-user");null===t||"false"==t?this.userIsAuthorized=!1:this.userIsAuthorized=!0,document.addEventListener("auth-state",t=>{console.log("here was supposed to dispatch"),this.userIsAuthorized=t.detail})}render(){return B`
    <link rel="stylesheet" href="/index.css">
      ${this.userIsAuthorized?B`
        <button id="button__event--new"  @click="${this.openNewEventForm}">Create New Event</button>
        <dialog id="dialog__event--new">
          <button id="button__dialog--close" title="close dialog" @click="${this.closeNewEventForm}" class="icon">
            <div class="icon__wrap">
              <span class="dialog__btn--close"></span>
            </div>
          </button>
          <form action="/api/v1/events/" method="post">
            <span class="form-heading">Create New Event</span>
  
            <div class="input-wrap">
              <label for="title">Title:</label>
              <input type="text" id="title" name="title">
            </div>
  
            <div class="input-wrap">
              <label for="start_date">Start Date:</label>
              <input type="date" id="start_date" name="start_date">
            </div>
  
            <div class="input-wrap">
              <label for="end_date">End Date:</label>
              <input type="date" id="end_date" name="end_date">
            </div>
  
            <div class="input-wrap">
              <label for="location">Location:</label>
              <input type="text" id="location" name="location">
            </div>
  
            <div class="input-wrap">
              <label for="details">Details:</label>
              <input type="text" id="details" name="details">
            </div>
  
            <button type="submit">Create</button>
          </form>
        </dialog>
  
  
        <dialog id="dialog__event--edit">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeEditEventForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
          <form id="form__event--edit">
            <span class="form-heading">Edit Event</span>
  
            <div class="input-wrap">
              <label for="title">Title:</label>
              <input type="text" id="edit__title" name="title">
            </div>
  
            <div class="input-wrap">
              <label for="start_date">Start Date:</label>
              <input type="date" id="edit__start_date" name="start_date">
            </div>
  
  
            <div class="input-wrap">
              <label for="end_date">End Date:</label>
              <input type="date" id="edit__end_date" name="end_date">
            </div>
  
  
            <div class="input-wrap">
              <label for="location">Location:</label>
              <input type="text" id="edit__location" name="location">
            </div>
  
  
            <div class="input-wrap">
              <label for="details">Details:</label>
              <input type="text" id="edit__details" name="details">
            </div>
  
  
            <button type="submit" @click="${this.updateEvent}">Update</button>
  
            <input type="hidden" class="edit__id--hidden" name="id">
          </form>
        </dialog>
        `:""}


      ${this.eventData.length>0?this.eventData.map(t=>B`
        
        <div class="event">

          <div class="event-data">
            <h2>${t.title}</h2>
            <div class="event-info">
              <p>${t_(t.start_date)} - ${t_(t.end_date)}</p>
              <p>Location: ${t.location}</p>
              <p>Details: ${t.details}</p>
            </div>
          </div>
          ${this.userIsAuthorized?B`
            <div class="event__action-bar">
              <div class="icon__wrap">
                <span class="button__event--edit" title="edit event" data-id="${t.id}" @click="${this.editEvent}"></span>
              </div>
              <div class="icon__wrap">
                <span class="button__event--delete" title="delete event" data-id="${t.id}" @click="${()=>this.openDeleteEventDialog(t.title)}"></span>
              </div>
            </div>

            <dialog id="dialog__event--delete">
              <h3 id="dialogTitle"></h3>
              <button class="button__secondary" @click="${this.cancelDeleteEventDialog}">Cancel</button>
              <button class="button__primary" @click="${this.confirmDeleteEvent}" data-id="${t.id}">Delete</button>
            </dialog>
            `:B``}
        </div>`):B`<p>No upcoming events</p>`}
    `}openNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").showModal()}closeNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").close()}cancelDeleteEventDialog(){this.shadowRoot.querySelector("#dialog__event--delete").close()}async openDeleteEventDialog(t){this.shadowRoot.querySelector("#dialog__event--delete").showModal(),this.shadowRoot.querySelector("#dialogTitle").textContent=`Are you sure you want to delete the event '${t}'?`}async confirmDeleteEvent(t){let e=parseInt(t.target.getAttribute("data-id"));try{if((await fetch(`/api/v1/events/${e}`,{method:"DELETE"})).ok)this.eventData=await tp();else throw Error("Failed to delete event")}catch(t){console.error("Error:",t),alert("An error occurred while trying to delete the event.")}this.shadowRoot.querySelector("#dialog__event--delete").close()}closeEditEventForm(){this.shadowRoot.querySelector("#dialog__event--edit").close(),this.shadowRoot.querySelector("#form__event--edit").reset()}async editEvent(t){let e=parseInt(t.target.getAttribute("data-id"));this.shadowRoot.querySelector("#dialog__event--edit").showModal();try{let t=await fetch(`/api/v1/events/${e}`),i=(await t.json())[0];console.log(i),this.shadowRoot.querySelector("#edit__title").value=i.title,this.shadowRoot.querySelector("#edit__start_date").value=this.formatDate(i.start_date),this.shadowRoot.querySelector("#edit__end_date").value=this.formatDate(i.end_date),this.shadowRoot.querySelector("#edit__location").value=i.location,this.shadowRoot.querySelector("#edit__details").value=i.details,this.shadowRoot.querySelector(".edit__id--hidden").value=i.id}catch(t){console.error("Error: ",t)}}async updateEvent(t){t.preventDefault();let e=this.shadowRoot.querySelector("#dialog__event--edit"),i=this.shadowRoot.querySelector(".edit__id--hidden").value,o=this.shadowRoot.querySelector("#form__event--edit"),s={title:this.shadowRoot.querySelector("#edit__title").value,start_date:this.shadowRoot.querySelector("#edit__start_date").value,end_date:this.shadowRoot.querySelector("#edit__end_date").value,location:this.shadowRoot.querySelector("#edit__location").value,details:this.shadowRoot.querySelector("#edit__details").value,id:this.shadowRoot.querySelector(".edit__id--hidden").value};try{(await fetch(`/api/v1/events/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(console.info("Successfully updated event"),o.reset(),e.close()):console.error("Failed to update event")}catch(t){console.error(t)}this.eventData=await tp()}formatDate(t){return new Date(t).toISOString().split("T")[0]}}),customElements.define("footer-component",class extends td{constructor(){super()}static get styles(){return r`
      :host {
        display:block;
        width: 100%;
        height: 6em;
        background-color: black;
      }

      p {
        margin: 0;
        padding: 0;
      }

      footer {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }

      .footer-images {
        margin-left: 1rem;
        align-self: center;
        display: flex;
        gap: 1rem
      }

      .footer-images > * {
        max-width: 100px;
        height: auto;
      }

      .footer-info {
        margin: auto 1rem auto 0;
      }
      @media only screen and (max-width: 700px) {
        .footer-images {
          flex-direction: column;
        }

        .footer-images > * {
          width: 100px;
          height: 50px
        }
      }
    `}render(){return B`
    <footer>
      <div class="footer-images">
        <img src="../ibm.jpg" alt="IBM Partner">
        <img src="../bobbyApproved.jpg" alt="Bobby 508">
        <img src="../destination.jpg" alt="IBM Destination z">
        <img src="../gsa.jpg" alt="GSA Schedule">
      </div>
      <div class="footer-info">
        <p>Trident Services, Inc</p>
        <p>1260 41st Ave, Suite K,</p>
        <p>Capitola, CA, (831) 465-7661</p>
      </div>
    </footer>
    `}}),customElements.define("general-contact",class extends td{constructor(){super()}render(){return B`
      <h3>Contact our friendly support staff for more information:</h3>
      <h4>Telephone: 1 (800) 887-4336</h4>
      <h4>Email: <a href="mailto:services@triserv.com:">services@triserv.com</a></h4>
    `}}),customElements.define("header-component",class extends td{constructor(){super()}static get styles(){return r`
      :host {
        display: flex;
        width: 100%;
        height: max-content;
        background-color: black;
        position: sticky;
        top: 0;
        z-index: 3000;
        box-shadow: 0px 1px 5px grey;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .trident-logo {
        display: inline-block;
        width: 200px;
        height: auto;
        flex-shrink: 0;
        padding: .5rem;
      }

      .nav-toggle {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url('../menu.svg');
      }

      auth-component {
        position: absolute;
        right: 0;
        top: 0;
      } 

    `}render(){return B`
    <link rel="stylesheet" href="/index.css">
    <header>
      <a href="/">
        <img src="../tridentLogo.png" alt="Trident logo" class="trident-logo">
      </a>
      <auth-component></auth-component>
      <nav>
        <ul>
          <li><a href="/software">Software</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <details>
        <summary>
          <span class="nav-toggle"></span>
        </summary>
      </details>
    </header>
    `}}),customElements.define("job-component",class extends td{constructor(){super(),this.jobData=[],this.userIsAuthorized=!1}static get properties(){return{jobData:{type:Array,attribute:!1},userIsAuthorized:{type:Boolean,attribute:!1}}}static get styles(){return r`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    #button__dialog--close {
      position: absolute;
      right: .5rem;
      top: .5rem;
      padding: 0 !important;
    }

    .dialog__btn--close {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url('../close.svg');
    }

    .container {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      width: 100%;
      margin: 0 auto;
    }

    .job {
      flex: 1 1 25%; 
      background-color: var(--layer-2);
      padding: 2rem;
      box-sizing: border-box;
      border: 1px solid grey;
      display: flex;
      justify-content: space-between;
      height: 200px;
      transition: all .3s;
    }


    h3:hover {
      color: var(--color-blue);
      cursor: pointer;
      text-decoration: underline;
    }

    dialog h3:hover {
      color: currentColor;
      cursor: auto;
      text-decoration: none;
    }

    .arrow {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background-image: url('../arrow__right--blue.svg');
      background-size: cover;
      background-repeat: no-repeat;
    } 

    .button__job-delete {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url('../trash-can.svg');
      transition: transform .2s;
    }

    .button__job-delete:hover {
      cursor: pointer;
      transform: scale(1.2);
    }

    
    .button__job--edit {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url('../edit.svg');
      transition: transform .2s;
    }

    .button__job--edit:hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    .job__action-bar {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      width: max-content;
    }

    #job__display-container {
      padding: 1rem;
      min-width: 40vw;
      min-height: 30vh;
    }

    `}async fetchJobData(){try{let t=await fetch("/api/v1/jobs");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.error("Failed to fetch data: ",t)}}async connectedCallback(){super.connectedCallback(),this.jobData=await this.fetchJobData();let t=sessionStorage.getItem("authorized-user");null===t||"false"==t?this.userIsAuthorized=!1:this.userIsAuthorized=!0,document.addEventListener("auth-state",t=>{console.log("here was supposed to dispatch"),this.userIsAuthorized=t.detail})}render(){return B`
    <link rel="stylesheet" href="/index.css">
    ${this.userIsAuthorized?B`
      <button @click="${this.openNewJobForm}">Create New Job</button>
      <dialog id="dialog__job--new">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeNewJobForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <form action="/api/v1/jobs/" method="post">
          <span class="form-heading">Create New Job</span>
          <div class="input-wrap">
            <label for="job_title">Job Title:</label>
            <input type="text" id="new__job_title" name="job_title">
          </div>

          <div class="input-wrap">
            <label for="location">Location:</label>
            <input type="text" id="new__location" name="location">
          </div>

          <div class="input-wrap">
            <label for="details">Details:</label>
            <input type="text" id="new__details" name="details">
          </div>

          <div class="input-wrap">
            <label for="category">Category:</label>
            <input type="text" id="new__category" name="category">
          </div>

          <div class="input-wrap">
          <label for="experience_level">Experience Level:</label>
          <input type="text" id="new__experience_level" name="experience_level">
        </div>

          <div class = "input-wrap">
            <label for="new__job__type">Employment Type:</label>
            <select name="option" id="new__job__type">
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
      </dialog>

      <dialog id="dialog__job--edit">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeEditJobForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <form id="form__job--edit">
          <span class="form-heading">Edit Job</span>
          <div class="input-wrap">
            <label for="job_title">Job Title:</label>
            <input type="text" id="edit__job_title" name="job_title">
          </div>

          <div class="input-wrap">
            <label for="location">Location:</label>
            <input type="text" id="edit__location" name="location">
          </div>

          <div class="input-wrap">
            <label for="details">Details:</label>
            <input type="text" id="edit__details" name="details">
          </div>

          <div class="input-wrap">
            <label for="edit__category">Category:</label>
            <input type="text" id="edit__category" name="category">
          </div>

          <div class="input-wrap">
            <label for="edit__experience_level">Experience Level:</label>
            <input type="text" id="edit__experience_level" name="experience_level">
          </div>


          <div class = "input-wrap">
            <label for="edit__job_type">Employment Type:</label>
            <select name="option" id="edit__job_type">
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </select>
          </div>
          <button type="submit" @click="${this.updateJob}">Update</button>
          <input type="hidden" class="job__id--hidden" name="id">
        </form>
      </dialog>

      <dialog id="job__display">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeJobDisplayModal}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <div id="job__display-container">
          <h3 class="job__display--job_title"></h3>
          <p class="job__display--location"></p>
          <p class="job__display--details"></p>
          <p class="job__display--job_type"></p>
          <p class="job__display--category"></p>
          <p class="job__display--experience_level"></p>
        </div>
      </dialog>
      `:B``}


      <div class="container">
          ${this.jobData.length>0?this.jobData.map(t=>B`
              <div class="job">
                <div class="job-data">
                  <h3 @click="${this.renderJobDisplayModal}" data-id="${t.id}">${t.job_title}</h3>
                  <p>${t.location}</p>
                </div>
                ${this.userIsAuthorized?B`
                  <div class="job__action-bar">    
                    <div class="icon__wrap">
                      <span class="button__job--edit" title="edit job post" data-id="${t.id}" @click="${this.openEditJobForm}"></span>
                    </div>
                    <div class="icon__wrap">
                      <span class="button__job-delete" title="delete job post" data-id="${t.id}" @click="${this.deleteJob}"></span>
                    </div>
                  </div>
                  `:B``}

              </div>

            `):B`<p>No postings yet</p>`}
      </div>
    `}openNewJobForm(){this.shadowRoot.querySelector("#dialog__job--new").showModal()}closeNewJobForm(){this.shadowRoot.querySelector("#dialog__job--new").close()}async openEditJobForm(t){let e=parseInt(t.target.getAttribute("data-id"));this.shadowRoot.querySelector("#dialog__job--edit").showModal(),console.log(e);try{let t=await fetch(`/api/v1/jobs/${e}`),i=(await t.json())[0];this.shadowRoot.querySelector("#edit__job_title").value=i.job_title,this.shadowRoot.querySelector("#edit__location").value=i.location,this.shadowRoot.querySelector("#edit__details").value=i.details,this.shadowRoot.querySelector("#edit__job_type").value=i.job_type,this.shadowRoot.querySelector(".job__id--hidden").value=i.id}catch(t){console.error("Error: ",t)}}async updateJob(t){t.preventDefault();let e=this.shadowRoot.querySelector("#dialog__job--edit"),i=this.shadowRoot.querySelector(".job__id--hidden").value,o=this.shadowRoot.querySelector("#form__job--edit"),s={job_title:this.shadowRoot.querySelector("#edit__job_title").value,location:this.shadowRoot.querySelector("#edit__location").value,details:this.shadowRoot.querySelector("#edit__details").value,job_type:this.shadowRoot.querySelector("#edit__job_type").value};try{(await fetch(`/api/v1/jobs/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(console.info("Successfully updated job"),o.reset(),e.close()):console.error("Failed to update job")}catch(t){console.error(t)}this.jobData=await this.fetchJobData()}closeEditJobForm(){this.shadowRoot.querySelector("#dialog__job--edit").close()}renderJobDetailPopup(t){console.log(t)}async deleteJob(t){let e=parseInt(t.target.getAttribute("data-id"));try{(await fetch(`/api/v1/jobs/${e}`,{method:"DELETE"})).ok&&(this.jobData=await this.fetchJobData())}catch(t){console.error("Error:",t),alert("An error occurred while trying to delete the event.")}}async renderJobDisplayModal(t){let e=parseInt(t.target.getAttribute("data-id")),i=await fetch(`/api/v1/jobs/${e}`),o=(await i.json())[0];this.shadowRoot.querySelector("#job__display").showModal(),this.shadowRoot.querySelector(".job__display--job_title").textContent=o.job_title,this.shadowRoot.querySelector(".job__display--location").textContent=o.location,this.shadowRoot.querySelector(".job__display--details").textContent=o.details,this.shadowRoot.querySelector(".job__display--job_type").textContent=o.job_type,this.shadowRoot.querySelector(".job__display--category").textContent=o.category,this.shadowRoot.querySelector(".job__display--experience_level").textContent=o.experience_level}closeJobDisplayModal(){this.shadowRoot.querySelector("#job__display").close()}}),customElements.define("partner-component",class extends td{constructor(){super(),this.partnerDataArr=[]}static get properties(){return{partnerDataArr:{type:Array,attribute:!1}}}static get styles(){return r`
      :host {
        display: block;
        width: 100%;
        height: max-content;
      }

      .partner-wrap:not(:last-child) {
        margin-bottom: 2rem;
      }

      .partner-logo {
        height:70px;
        width: auto;
      }

      .row > * {
        flex: 1;
      }
    `}async connectedCallback(){super.connectedCallback(),console.log("partners connected callback");try{let t=await fetch("../partnerData.json");if(!t.ok)throw Error("Failed to fetch JSON");this.partnerDataArr=await t.json(),console.log("here",this.partnerDataArr.length)}catch(t){console.error("Error fetching JSON: ",t)}}render(){return(console.log("partner render"),this.partnerDataArr.length&&this.partnerDataArr.length>0)?B`
      <link rel="stylesheet" href="/index.css">

        ${this.partnerDataArr.map(t=>B`
          <div class="row__layer-01 partner-wrap">
            <div class="partner-info flex-item">
              ${this.renderCompany(t.company)}
              ${this.renderCountries(t.countries)}
              ${this.renderContact(t.contact)}
              ${this.renderPhone(t.phone)}
              ${this.renderMobile(t.mobile)}
              ${this.renderEmail(t.email)}
              ${this.renderAddress(t.address)}
              ${this.renderWebsite(t.website)}
              ${this.renderSummary(t.summary)}
            </div>
            ${this.renderLogo(t.logo)}
          </div>
        `)}

      
      `:B`<p>No data</p>`}renderCompany(t){if(t.length>0)return B`<h2>${t}</h2>`}renderCountries(t){if(t.length>0)return B`<h4>${t}</h4>`}renderContact(t){if(t.length>0)return B`<p>Contact: ${t}</p>`}renderPhone(t){if(t.length>0)return B`<p>Phone: ${t}</p>`}renderMobile(t){if(t.length>0)return B`<p>Mobile: ${t}</p>`}renderEmail(t){if(t.length>0)return B`<p>Email: <a href="mailto:${t}">${t}</a></p>`}renderAddress(t){if(t.length>0)return B`<p>Address: ${t}</p>`}renderSummary(t){if(t.length>0)return B`<p>Summary: ${t}</p>`}renderWebsite(t){if(t.length>0)return B`<p>Website: <a href="str" target="_blank">${t}</a></p>`}renderLogo(t){if(t.length>0)return B`
      <div class="flex-item">
        <img src="../${t}" class="partner-logo">
      </div>
      `}}),customElements.define("show-first-event",class extends td{constructor(){super(),this.eventData=[],this.eventToDisplay={}}static get properties(){return{eventData:{type:Array,attribute:!1},eventData:{type:Object,attribute:!1}}}static get styles(){return r`
      :host {
        display: block;
        width: max-content;
        height: max-content;
        background-color: transparent;
        background-color: hsla(0, 0%, 0%, .5);
        padding: 2rem;
      }

      h2, h3, h4 {
        color: white;
        font-weight: 300;
      }

      .event-container {
        display: flex;
        gap: 2rem;
      }

    `}async connectedCallback(){super.connectedCallback(),this.eventData=await tp(),this.eventData.length>0&&(this.eventToDisplay=this.eventData[0])}render(){return this.eventToDisplay?B`
      <link rel="stylesheet" href="/index.css">
        <div class="event-container">
          <h3 class="heading">Upcoming Event:</h3>
          <div>
            <h3>${this.eventToDisplay.title}</h3>
            <h4>${t_(this.eventToDisplay.start_date)} - ${t_(this.eventToDisplay.end_date)}</h4>
            <h4>Location: ${this.eventToDisplay.location}</h4>
          </div>
        </div>

      `:B``}})})();
//# sourceMappingURL=index.js.map
