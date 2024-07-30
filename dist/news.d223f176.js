var e=globalThis,t={},r={},o=e.parcelRequirefc44;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirefc44=o),o.register;var s=o("800sp");class n extends s.LitElement{constructor(){super(),this.isUserLoggedIn=!1}connectedCallback(){super.connectedCallback(),this.getStoredAuthorizedValue()}render(){return(console.log("render",new Date),this.isUserLoggedIn)?(0,s.html)`<h3 @click="${this.signOutUserHandler}">sign out</h3>`:(0,s.html)`
      <details>
        <summary>Sign In</summary>
        <form>
          <label>Username</label>
          <input type="text">
          <label>Password</label>
          <input type="text">
          <button @click="${this.logInUserHandler}">Log In</button>
        </form>
      </details>
    `}getStoredAuthorizedValue(){"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1,console.log(this.isUserLoggedIn),console.log("here")}logInUserHandler(e){sessionStorage.setItem("authorizedBoolean","true"),this.getStoredAuthorizedValue()}signOutUserHandler(){console.log("click"),sessionStorage.setItem("authorizedBoolean","false"),this.getStoredAuthorizedValue()}}customElements.define("auth-component",n);
//# sourceMappingURL=news.d223f176.js.map
