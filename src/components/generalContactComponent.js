import { LitElement, html, css } from "lit";

export class GeneralContact extends LitElement {
  constructor() {
    super();

  }

  render() {
    return html`
      <h3>Contact our friendly support staff for more information:</h3>
      <h4>Telephone: 1 (800) 887-4336</h4>
      <h4>Email: <a href="mailto:services@triserv.com:">services@triserv.com</a></h4>
    `;
  }
}

customElements.define('general-contact', GeneralContact);