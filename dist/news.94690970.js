var e=globalThis,r={},t={},s=e.parcelRequirefc44;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in t){var s=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,s.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirefc44=s),s.register;var n=s("800sp");class o extends n.LitElement{constructor(){super(),this.isUserLoggedIn=!1}connectedCallback(){super.connectedCallback();let e=sessionStorage.getItem("authorizedBoolean");this.isUserLoggedIn=e,console.log(this.isUserLoggedIn)}render(){return(0,n.html)`
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
//# sourceMappingURL=news.94690970.js.map
