var e=globalThis,t={},r={},s=e.parcelRequirefc44;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequirefc44=s),s.register;var o=s("800sp");class i extends o.LitElement{constructor(){super(),this.isUserLoggedIn=!1}static get properties(){return{isUserLoggedIn:{type:Boolean,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
      }

      summary:hover, span {
        cursor: pointer;
      }


    `}connectedCallback(){super.connectedCallback(),this.getStoredAuthorizedValue()}render(){return(console.log("render",new Date),this.isUserLoggedIn)?(0,o.html)`<button @click="${this.signOutUserHandler}">Sign Out</button>`:(0,o.html)`
      <link rel="stylesheet" href="/index.css">
      <details id="auth-detail">
        <summary>Sign In</summary>
        <form>
          <div class="input-wrap">
            <label>Username</label>
            <input type="text">
          </div>
          <div class="input-wrap">
            <label>Password</label>
            <input type="text">
          </div>


          <button type="submit" @click="${this.logInUserHandler}">Log In</button>
        </form>
      </details>
    `}firstUpdated(){super.firstUpdated(),console.log(this.shadowRoot.querySelector("#auth-detail").open)}getStoredAuthorizedValue(){"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1}logInUserHandler(e){e.preventDefault(),sessionStorage.setItem("authorizedBoolean","true"),this.getStoredAuthorizedValue()}signOutUserHandler(){sessionStorage.setItem("authorizedBoolean","false"),this.getStoredAuthorizedValue()}}customElements.define("auth-component",i);
//# sourceMappingURL=news.d7441bbf.js.map
