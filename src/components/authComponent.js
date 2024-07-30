import { LitElement, html, css } from "lit";


class AuthComponent extends LitElement {
  constructor() {
    super();

    this.isUserLoggedIn = false;
  }

  static get properties() {
    return {
      isUserLoggedIn: { type: Boolean, attribute: false }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      summary:hover, span {
        cursor: pointer;
      }


    `
  }

  connectedCallback() {
    super.connectedCallback();

    this.getStoredAuthorizedValue();
  }

  render() {
    console.log('render', new Date());
    if (!this.isUserLoggedIn) {
      return html`
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
    `
    }
    return html`<link rel="stylesheet" href="/index.css"><button @click="${this.signOutUserHandler}">Sign Out</button>`;
  }

  firstUpdated() {
    super.firstUpdated();

    const details = this.shadowRoot.querySelector('#auth-detail');
    const openDetail = details.open;
    const openDetailHeight = openDetail;
    console.log(openDetailHeight);
  }

  getStoredAuthorizedValue() {
    const isUserLoggedInData = sessionStorage.getItem('authorizedBoolean');

    if (isUserLoggedInData === 'true') {
      this.isUserLoggedIn = true;
    } else if (isUserLoggedInData === 'false') {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = false;
    }
  }

  logInUserHandler(e) {
    e.preventDefault();
    sessionStorage.setItem('authorizedBoolean', 'true');
    this.getStoredAuthorizedValue();
  }

  signOutUserHandler() {
    sessionStorage.setItem('authorizedBoolean', 'false');
    this.getStoredAuthorizedValue();
  }
}

customElements.define('auth-component', AuthComponent);