import { LitElement, html, css } from "lit";
import './authComponent.js';
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

      /*auth-component {
        width:2rem;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
      } */

    `;
  }
  render() {
    return html`
    <link rel="stylesheet" href="/index.css">
    <header>
      <a href="/">
        <img src="../tridentLogo.png" alt="Trident logo" class="trident-logo">
      </a>
      <auth-component></auth-component>
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