import { LitElement, html, css } from "lit";
export class HeaderComponent extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        height: max-content;
        background-color: black;
        position: sticky;
        top: 0;
        z-index: 3000;
        box-shadow: 0px 1px 5px grey;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .trident-logo {
        display: inline-block;
        width: 200px;
        height: auto;
        flex-shrink: 0;
        padding: .5rem;
      }

      .nav-toggle {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-image: url('../menu.svg');
      }

    `;
  }
  render() {
    return html`
    <link rel="stylesheet" href="/index.css">
    <header>
      <a href="/">
        <img src="../tridentLogo.png" alt="Trident logo" class="trident-logo">
      </a>
      <nav>
        <ul>
          <li><a href="/software">Software</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <details>
        <summary>
          <span class="nav-toggle"></span>
        </summary>
      </details>
    </header>
    `;
  }
}
customElements.define('header-component', HeaderComponent);