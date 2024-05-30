import {LitElement, html, css} from 'lit';

export class FooterComponent extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display:block;
        width: 100%;
        height: 6em;
        background-color: black;
        padding: var(--padding-content);
      }

      p {
        margin: 0;
        padding: 0;
      }

      footer {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .footer-images {
        display: flex;
        gap: 1rem
      }

      .footer-images > * {
        max-height: 100%;
        max-width: 7rem;
      }
      @media only screen and (max-width: 700px) {
        .footer-images {
          flex-direction: column;
        }

        .footer-images > * {
          width: 100px;
          height: 50px
        }
      }
    `;
  }

  render() {
    return html`
    <footer>
      <div class="footer-images">
        <img src="../ibm.jpg" alt="IBM Partner">
        <img src="../bobbyApproved.jpg" alt="Bobby 508">
        <img src="../destination.jpg" alt="IBM Destination z">
        <img src="../gsa.jpg" alt="GSA Schedule">
      </div>
      <div class="footer-info">
        <p>Trident Services, Inc</p>
        <p>1260 41st Ave, Suite K,</p>
        <p>Capitola, CA, (831) 465-7661</p>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);