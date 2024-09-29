var e=globalThis,t={},s={},i=e.parcelRequirefc44;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirefc44=i),i.register;var o=i("800sp");class r extends o.LitElement{constructor(){super(),this.userIsAuthorized=!1,this.userName=""}static get properties(){return{userIsAuthorized:{type:Boolean,attribute:!1},userName:{type:String,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
      }

      .text--signed-in {
        color: #fff;
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
    `}connectedCallback(){super.connectedCallback();let e=sessionStorage.getItem("authorized-user");null===e||"false"==e?this.userIsAuthorized=!1:(this.userIsAuthorized=!0,this.userEmail=e)}render(){return(0,o.html)`
      <link rel="stylesheet" href="/index.css">
      ${this.userIsAuthorized?(0,o.html)`<span class="text--signed-in"><i>Signed in as: </i>${this.userName}</span><button @click="${this.signOutUserHandler}">Sign Out</button>`:(0,o.html)`
        <button @click="${this.openSignInForm}">Sign In</button>
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
            <button type="submit">Log In</button>
          </form>
        </dialog>
      `}
    `}async formSubmissionHandler(e){e.preventDefault();let t=this.shadowRoot.querySelector("#email").value,s=this.shadowRoot.querySelector("#password").value;try{let e=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})});if(e.ok){let s=await e.json();sessionStorage.setItem("authorized-user",t),this.userIsAuthorized=!0,this.userEmail=t,this.userName=s.name,console.log(s,this.userName),document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}else alert("Invalid email or password")}catch(e){console.error("Error: ",e)}}signOutUserHandler(){sessionStorage.setItem("authorized-user",!1),this.userIsAuthorized=!1,document.dispatchEvent(new CustomEvent("auth-state",{bubbles:!0,detail:this.userIsAuthorized}))}openSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").showModal()}closeSignInForm(){this.shadowRoot.querySelector("#dialog__sign-in").close(),this.shadowRoot.querySelector("#form__sign-in").reset()}}customElements.define("auth-component",r);
//# sourceMappingURL=news.b3e268d2.js.map
