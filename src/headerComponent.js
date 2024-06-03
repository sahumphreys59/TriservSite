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
        box-shadow: 0px 3px 5px black;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      header img {
        display: inline-block;
        width: 200px;
        height: 75px;
        flex-shrink: 0;
        padding: .5rem;
      }

      nav {
        display: flex;
        align-items: flex-end;
      }

      ul {
        display: flex;
        gap: 2rem;
        margin: 0;
        margin-right: 1rem;
      }

      li {
        list-style-type: none;
      }  

      a {
        color: #fff;
        font-size: 18px;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `;
  }
  render() {
    console.log(`render`);
    return html`
    
    <header>
      <a href="/">
        <img src="../tridentLogo.png" alt="Trident logo">
      </a>
      <nav>
        <ul>
          <li><a href="/software">Software</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
    `;
  }
}
customElements.define('header-component', HeaderComponent);