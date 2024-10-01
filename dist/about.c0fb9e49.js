function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e=globalThis,s={},i={},r=e.parcelRequirefc44;null==r&&((r=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return s[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequirefc44=r);var o=r.register;o("800sp",function(e,s){t(e.exports,"css",()=>r("4jdI8").css),t(e.exports,"html",()=>r("jJTNo").html),t(e.exports,"LitElement",()=>r("lPSdM").LitElement),r("3qR54"),r("jJTNo"),r("lPSdM"),r("8FVzH")}),o("3qR54",function(e,s){t(e.exports,"ReactiveElement",()=>y),t(e.exports,"css",()=>r("4jdI8").css);var i=r("4jdI8");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{is:o,defineProperty:n,getOwnPropertyDescriptor:l,getOwnPropertyNames:a,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,c=globalThis,p=c.trustedTypes,u=p?p.emptyScript:"",m=c.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>!o(t,e),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:g};Symbol.metadata??=Symbol("metadata"),c.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&n(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??f}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;let t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){let t=this.properties;for(let e of[...a(t),...h(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let s of new Set(t.flat(1/0).reverse()))e.unshift((0,i.getCompatibleStyle)(s));else void 0!==t&&e.push((0,i.getCompatibleStyle)(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,i.adoptStyles)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){let r=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(!((s??=this.constructor.getPropertyOptions(t)).hasChanged??g)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[$("elementProperties")]=new Map,y[$("finalized")]=new Map,m?.({ReactiveElement:y}),(c.reactiveElementVersions??=[]).push("2.0.4")}),o("4jdI8",function(e,s){t(e.exports,"css",()=>h),t(e.exports,"adoptStyles",()=>d),t(e.exports,"getCompatibleStyle",()=>c);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class l{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(r&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}let a=t=>new l("string"==typeof t?t:t+"",void 0,o),h=(t,...e)=>new l(1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,o),d=(t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let s of e){let e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return a(e)})(t):t}),o("jJTNo",function(e,s){t(e.exports,"html",()=>E),t(e.exports,"noChange",()=>w),t(e.exports,"render",()=>D);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,r=i.trustedTypes,o=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,n="$lit$",l=`lit$${Math.random().toFixed(9).slice(2)}$`,a="?"+l,h=`<${a}>`,d=document,c=()=>d.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,m=t=>u(t)||"function"==typeof t?.[Symbol.iterator],$="[ 	\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,f=/>/g,y=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),A=/'/g,v=/"/g,b=/^(?:script|style|textarea|title)$/i,S=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),E=S(1),w=(S(2),Symbol.for("lit-noChange")),x=Symbol.for("lit-nothing"),C=new WeakMap,P=d.createTreeWalker(d,129);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}let T=(t,e)=>{let s=t.length-1,i=[],r,o=2===e?"<svg>":"",a=_;for(let e=0;e<s;e++){let s=t[e],d,c,p=-1,u=0;for(;u<s.length&&(a.lastIndex=u,null!==(c=a.exec(s)));)u=a.lastIndex,a===_?"!--"===c[1]?a=g:void 0!==c[1]?a=f:void 0!==c[2]?(b.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=y):void 0!==c[3]&&(a=y):a===y?">"===c[0]?(a=r??_,p=-1):void 0===c[1]?p=-2:(p=a.lastIndex-c[2].length,d=c[1],a=void 0===c[3]?y:'"'===c[3]?v:A):a===v||a===A?a=y:a===g||a===f?a=_:(a=y,r=void 0);let m=a===y&&t[e+1].startsWith("/>")?" ":"";o+=a===_?s+h:p>=0?(i.push(d),s.slice(0,p)+n+s.slice(p)+l+m):s+l+(-2===p?e:m)}return[N(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,h=0,d=t.length-1,p=this.parts,[u,m]=T(t,e);if(this.el=U.createElement(u,s),P.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=P.nextNode())&&p.length<d;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(n)){let e=m[h++],s=i.getAttribute(t).split(l),r=/([.?@])?(.*)/.exec(e);p.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?k:"?"===r[1]?M:"@"===r[1]?j:I}),i.removeAttribute(t)}else t.startsWith(l)&&(p.push({type:6,index:o}),i.removeAttribute(t));if(b.test(i.tagName)){let t=i.textContent.split(l),e=t.length-1;if(e>0){i.textContent=r?r.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],c()),P.nextNode(),p.push({type:2,index:++o});i.append(t[e],c())}}}else if(8===i.nodeType){if(i.data===a)p.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(l,t+1));)p.push({type:7,index:o}),t+=l.length-1}}o++}}static createElement(t,e){let s=d.createElement("template");return s.innerHTML=t,s}}function R(t,e,s=t,i){if(e===w)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=p(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t))._$AT(t,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=R(t,r._$AS(t,e.values),r,i)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??d).importNode(e,!0);P.currentNode=i;let r=P.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new H(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new z(r,this,t)),this._$AV.push(e),l=s[++n]}o!==l?.index&&(r=P.nextNode(),o++)}return P.currentNode=d,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){p(t=R(this,t,e))?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):m(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==x&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(d.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=U.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new O(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new U(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new H(this.S(c()),this.S(c()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!p(t=R(this,t,e,0))||t!==this._$AH&&t!==w)&&(this._$AH=t);else{let i,n;let l=t;for(t=r[0],i=0;i<r.length-1;i++)(n=R(this,l[s+i],e,i))===w&&(n=this._$AH[i]),o||=!p(n)||n!==this._$AH[i],n===x?t=x:t!==x&&(t+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class M extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class j extends I{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??x)===w)return;let s=this._$AH,i=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==x&&(s===x||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}let L=i.litHtmlPolyfillSupport;L?.(U,H),(i.litHtmlVersions??=[]).push("3.1.3");let D=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(void 0===r){let t=s?.renderBefore??null;i._$litPart$=r=new H(e.insertBefore(c(),t),t,void 0,s??{})}return r._$AI(t),r}}),o("lPSdM",function(e,s){t(e.exports,"css",()=>r("4jdI8").css),t(e.exports,"ReactiveElement",()=>r("3qR54").ReactiveElement),t(e.exports,"html",()=>r("jJTNo").html),t(e.exports,"noChange",()=>r("jJTNo").noChange),t(e.exports,"render",()=>r("jJTNo").render),t(e.exports,"LitElement",()=>n);var i=r("3qR54"),o=r("jJTNo");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,o.render)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return o.noChange}}n._$litElement$=!0,n.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:n});let l=globalThis.litElementPolyfillSupport;l?.({LitElement:n}),(globalThis.litElementVersions??=[]).push("4.0.5")}),o("8FVzH",function(t,e){}),r("800sp");var n=r("4jdI8"),l=r("jJTNo"),a=r("lPSdM");r("800sp");var n=r("4jdI8"),l=r("jJTNo"),a=r("lPSdM");class h extends a.LitElement{constructor(){super(),this.userIsAuthorized=!1,this.userName=""}static get properties(){return{userIsAuthorized:{type:Boolean,attribute:!1},userName:{type:String,attribute:!1}}}static get styles(){return(0,n.css)`
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
    `}connectedCallback(){super.connectedCallback();let t=sessionStorage.getItem("authorized-user");null===t||"false"==t?this.userIsAuthorized=!1:(this.userIsAuthorized=!0,this.userName=JSON.parse(t).data.name)}render(){return(0,l.html)`
      <link rel="stylesheet" href="/index.css">
      ${this.userIsAuthorized?(0,l.html)`<span class="text--signed-in"><i>Signed in as: </i>${this.userName}</span><button @click="${this.signOutUserHandler}">Sign Out</button>`:(0,l.html)`
        <button @click="${this.openSignInForm}" class="button__ghost">Admin Sign In</button>
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
            <button type="submit">Sign In</button>
          </form>
        </dialog>
      `}
    `}async formSubmissionHandler(t){t.preventDefault();let e=this.shadowRoot.querySelector("#email").value,s=this.shadowRoot.querySelector("#password").value;try{let t=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s})});if(t.ok){let e=await t.json();sessionStorage.setItem("authorized-user",JSON.stringify({data:e})),this.userIsAuthorized=!0,this.userName=e.name,document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}else alert("Invalid email or password")}catch(t){console.error("Error: ",t)}}signOutUserHandler(){sessionStorage.setItem("authorized-user",!1),this.userIsAuthorized=!1,document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}openSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").showModal()}closeSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").close(),this.shadowRoot.querySelector("#form__sign-in").reset()}}customElements.define("auth-component",h);class d extends a.LitElement{constructor(){super()}static get styles(){return(0,n.css)`
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

    `}render(){return(0,l.html)`
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
    `}}customElements.define("header-component",d);
//# sourceMappingURL=about.c0fb9e49.js.map
