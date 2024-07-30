var e=globalThis,t={},r={},s=e.parcelRequirefc44;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequirefc44=s),s.register;var n=s("800sp");class i extends n.LitElement{constructor(){super(),this.isUserLoggedIn=!1}connectedCallback(){super.connectedCallback(),"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1}render(){return this.isUserLoggedIn?(0,n.html)`<h3 @click="${this.signOutUserHandler}">sign out</h3>`:(0,n.html)`
      <details>
        <summary>Sign In</summary>
        <form>
          <label>Username</label>
          <input type="text">
          <label>Password</label>
          <input type="text">
        </form>
      </details>
    `}signOutUserHandler(){sessionStorage.setItem("authorizedBoolean",!1),this.requestUpdate()}}customElements.define("auth-component",i);
//# sourceMappingURL=news.62a40716.js.map
