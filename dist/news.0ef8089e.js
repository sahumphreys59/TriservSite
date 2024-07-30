var e=globalThis,t={},s={},r=e.parcelRequirefc44;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},e.parcelRequirefc44=r),r.register;var n=r("800sp");class o extends n.LitElement{constructor(){super(),this.isUserLoggedIn=!1}connectedCallback(){super.connectedCallback(),"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1,console.log(this.isUserLoggedIn)}render(){return this.isUserLoggedIn?(0,n.html)`<h3 @click="${this.signOutUserHandler}">sign out</h3>`:(0,n.html)`
      <details>
        <summary>Sign In</summary>
        <form>
          <label>Username</label>
          <input type="text">
          <label>Password</label>
          <input type="text">
        </form>
      </details>
    `}signOutUserHandler(){console.log("click"),sessionStorage.setItem("authorizedBoolean",!1),this.requestUpdate()}}customElements.define("auth-component",o);
//# sourceMappingURL=news.0ef8089e.js.map
