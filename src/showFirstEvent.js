import { sortDataByDate } from "./fetchEventData.js";
import { LitElement, html, css } from "lit";
import { formatDate } from "./utils.js";

export class ShowFirstEvent extends LitElement {
  constructor() {
    super();
    this.eventData = [];
    this.eventToDisplay = {};
  }

  static get properties() {
    return {
      eventData: { type: Array, attribute: false },
      eventData: { type: Object, attribute: false }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: max-content;
        height: max-content;
        margin: 1rem auto !important;
        background-color: transparent;
        background-color: hsla(0, 0%, 0%, .7);
        padding: 2rem;
      }

      h2, h3, h4 {
        color: white;
        font-weight: 300;
      }

    `
  }

  async connectedCallback() {
    super.connectedCallback();
    this.eventData = await sortDataByDate();
    if (this.eventData.length > 0) {
      this.eventToDisplay = this.eventData[0];
    }
  }

  render() {
    if (this.eventToDisplay) {
      return html`
      <link rel="stylesheet" href="/index.css">
        <h2>Upcoming Event:</h2><span><h3>${this.eventToDisplay.title}</h3></span>
        <div>
          <h4>${formatDate(this.eventToDisplay.start_date)} - ${formatDate(this.eventToDisplay.end_date)}</h4>
          <h4>Location: ${this.eventToDisplay.location}</h4>
        </div>
      `;
    }
    return html``;
  }
}

customElements.define('show-first-event', ShowFirstEvent);

