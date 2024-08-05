var e=globalThis,t={},s={},r=e.parcelRequirefc44;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequirefc44=r),r.register;var o=r("800sp");class i extends o.LitElement{constructor(){super(),this.isUserLoggedIn=!1}static get properties(){return{isUserLoggedIn:{type:Boolean,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
      }

      summary:hover, span {
        cursor: pointer;
      }


    `}connectedCallback(){super.connectedCallback(),this.getStoredAuthorizedValue()}render(){return(console.log("render",new Date),this.isUserLoggedIn)?(0,o.html)`<link rel="stylesheet" href="/index.css"><button @click="${this.signOutUserHandler}">Sign Out</button>`:(0,o.html)`
      <link rel="stylesheet" href="/index.css">
      <details id="auth-detail">
        <summary>Sign In</summary>
        <form action="/api/auth/login" method="post">
          <div class="input-wrap">
            <label>Email</label>
            <input type="text" name="email">
          </div>
          <div class="input-wrap">
            <label>Password</label>
            <input type="password" name="password">
          </div>


          <button type="submit">Log In</button>
        </form>
      </details>
    `}async firstUpdated(){super.firstUpdated(),console.log("first updated")}async updated(){}getStoredAuthorizedValue(){"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1}logInUserHandler(e){sessionStorage.setItem("authorizedBoolean","true"),this.getStoredAuthorizedValue()}signOutUserHandler(){sessionStorage.setItem("authorizedBoolean","false"),this.getStoredAuthorizedValue()}}customElements.define("auth-component",i);
//# sourceMappingURL=news.ce38e875.js.map
