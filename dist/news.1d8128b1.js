var e=globalThis,t={},r={},s=e.parcelRequirefc44;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirefc44=s),s.register;var o=s("800sp");class n extends o.LitElement{constructor(){super(),this.isUserLoggedIn=!1}static get properties(){return{isUserLoggedIn:{type:Boolean,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
      }

      details {
        height: max-content;
      }

      details[open] {
        height: auto;
      }
    `}connectedCallback(){super.connectedCallback(),this.getStoredAuthorizedValue()}render(){return(console.log("render",new Date),this.isUserLoggedIn)?(0,o.html)`<span @click="${this.signOutUserHandler}">Sign Out</span>`:(0,o.html)`
      <details>
        <summary>Sign In</summary>
        <form>
          <label>Username</label>
          <input type="text">
          <label>Password</label>
          <input type="text">
          <button type="submit" @click="${this.logInUserHandler}">Log In</button>
        </form>
      </details>
    `}getStoredAuthorizedValue(){"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1}logInUserHandler(e){e.preventDefault(),sessionStorage.setItem("authorizedBoolean","true"),this.getStoredAuthorizedValue()}signOutUserHandler(){sessionStorage.setItem("authorizedBoolean","false"),this.getStoredAuthorizedValue()}}customElements.define("auth-component",n);
//# sourceMappingURL=news.1d8128b1.js.map
