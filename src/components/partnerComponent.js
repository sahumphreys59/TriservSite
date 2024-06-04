import { LitElement, html, css } from "lit";

export class PartnerComponent extends LitElement {
  constructor() {
    super();

    this.partnerDataArr = [];
  }

  static get properties() {
    return {
      partnerDataArr: { type: Array, attribute: false }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: max-content;
      }

      .partner-wrap:not(:last-child) {
        margin-bottom: 2rem;
      }

      .partner-logo {
        height:70px;
        width: auto;
      }

      .row > * {
        flex: 1;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    console.log('partners connected callback');

    const partnerDataUrl = '../partnerData.json';
    try {
      const response = await fetch(partnerDataUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch JSON');
      }
      this.partnerDataArr = await response.json();
      console.log('here', this.partnerDataArr.length);
    } catch (error) {
      console.error('Error fetching JSON: ', error);
    }
  }

  render() {
    console.log('partner render');
    if (this.partnerDataArr.length && this.partnerDataArr.length > 0) {
      return html`
      <link rel="stylesheet" href="/index.css">

        ${this.partnerDataArr.map((obj) => html`
          <div class="row__layer-01 partner-wrap">
            <div class="partner-info flex-item">
              ${this.renderCompany(obj.company)}
              ${this.renderCountries(obj.countries)}
              ${this.renderContact(obj.contact)}
              ${this.renderPhone(obj.phone)}
              ${this.renderMobile(obj.mobile)}
              ${this.renderEmail(obj.email)}
              ${this.renderAddress(obj.address)}
              ${this.renderWebsite(obj.website)}
              ${this.renderSummary(obj.summary)}
            </div>
            ${this.renderLogo(obj.logo)}
          </div>
        `)}

      
      `;
    }

    return html`<p>No data</p>`
  }


  /* Render util functions */
  renderCompany(str) {
    if (str.length > 0) {
      return html`<h2>${str}</h2>`;
    }
  }

  renderCountries(str) {
    if (str.length > 0) {
      return html`<h4>${str}</h4>`;
    }
  }

  renderContact(str) {
    if (str.length > 0) {
      return html`<p>Contact: ${str}</p>`;
    }
  }

  renderPhone(str) {
    if (str.length > 0) {
      return html`<p>Phone: ${str}</p>`;
    }
  }

  renderMobile(str) {
    if (str.length > 0) {
      return html`<p>Mobile: ${str}</p>`;
    }
  }

  renderEmail(str) {
    if (str.length > 0) {
      return html`<p>Email: <a href="mailto:${str}">${str}</a></p>`;
    }
  }

  renderAddress(str) {
    if (str.length > 0) {
      return html`<p>Address: ${str}</p>`;
    }
  }

  renderSummary(str) {
    if (str.length > 0) {
      return html`<p>Summary: ${str}</p>`;
    }
  }

  renderWebsite(str) {
    if (str.length > 0) {
      return html`<p>Website: <a href="str" target="_blank">${str}</a></p>`;
    }
  }

  renderLogo(url) {
    if (url.length > 0) {
      return html`
      <div class="flex-item">
        <img src="../${url}" class="partner-logo">
      </div>
      `;
    }
  }
}

customElements.define('partner-component', PartnerComponent);