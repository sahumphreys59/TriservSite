var e=globalThis,t={},r={},s=e.parcelRequirefc44;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirefc44=s),s.register;var n=s("800sp");class o extends n.LitElement{constructor(){super(),this.isUserLoggedIn=!1}connectedCallback(){super.connectedCallback(),"true"===sessionStorage.getItem("authorizedBoolean")?this.isUserLoggedIn=!0:this.isUserLoggedIn=!1,console.log(this.isUserLoggedIn,typeof this.isUserLoggedIn)}render(){return this.isUserLoggedIn?(0,n.html)`sign out`:(0,n.html)`
      <details>
        <summary>Sign In</summary>
        <form>
          <label>Username</label>
          <input type="text">
          <label>Password</label>
          <input type="text">
        </form>
      </details>
    `}}customElements.define("auth-component",o);
//# sourceMappingURL=news.f8ee2145.js.map
