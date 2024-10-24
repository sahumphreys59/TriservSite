import { LitElement, html, css } from "lit";


class AuthComponent extends LitElement {
  constructor() {
    super();

    this.userIsAuthorized = false;
    this.userName = '';
  }

  static get properties() {
    return {
      userIsAuthorized: { type: Boolean, attribute: false },
      userName: { type: String, attribute: false}
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .text--signed-in {
        color: #fff;
        padding-right: 1rem;
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
    `
  }

  connectedCallback() {
    super.connectedCallback();
    const userAuthorizedData = sessionStorage.getItem('authorized-user');
    if (userAuthorizedData === null || userAuthorizedData == 'false') {
      this.userIsAuthorized = false;
    } else {
      this.userIsAuthorized = true;
      this.userName = JSON.parse(userAuthorizedData).data.name;
    }

  }

  render() {
    return html`
      <link rel="stylesheet" href="/index.css">
      ${!this.userIsAuthorized ? html`
        <button @click="${this.openSignInForm}" class="button__ghost" title="Sign In">Admin Sign In</button>
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
            <button type="submit" title="Sign In">Sign In</button>
          </form>
        </dialog>
      `: html`<span class="text--signed-in"><i>Signed in as: </i>${this.userName}</span><button class="button__ghost" @click="${this.signOutUserHandler}" title="Sign Out">Sign Out</button>`
      }
    `;
  }


  async formSubmissionHandler(e) {
    e.preventDefault();
    const email =  this.shadowRoot.querySelector('#email').value;
    const password = this.shadowRoot.querySelector('#password').value;

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      if (response.ok) {
        const data = await response.json();
        const authorizedUser = {data}
        sessionStorage.setItem('authorized-user', JSON.stringify(authorizedUser));
        this.userIsAuthorized = true;
        this.userName = data.name;
        document.dispatchEvent(new CustomEvent('auth-state', {bubbles: true, detail: this.userIsAuthorized}));
      } else {
        console.log(response);
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  signOutUserHandler() {
    sessionStorage.setItem('authorized-user', false);
    this.userIsAuthorized = false;
    document.dispatchEvent(new CustomEvent('auth-state', {bubbles: true, detail: this.userIsAuthorized}));
  }

  openSignInForm() {
    const dialog = this.shadowRoot.querySelector('#dialog__sign-in');
    dialog.showModal();
  }

  closeSignInForm() {
    const dialog = this.shadowRoot.querySelector('#dialog__sign-in');
    dialog.close();

    const form = this.shadowRoot.querySelector('#form__sign-in');
    form.reset();
  }
}

customElements.define('auth-component', AuthComponent);