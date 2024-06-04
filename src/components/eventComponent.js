import { LitElement, html, css } from "lit";
import { sortDataByDate } from "../utils/fetchEventData.js";
import { formatDate } from "../utils/formatDate.js";

export class EventComponent extends LitElement {
  constructor() {
    super();


    this.eventData = [];
  }

  static get properties() {
    return {
      eventData: { type: Array, attribute: false }
    }
  }

  static get styles() {
      return css`
      :host {
        display: block;
        width: 100%;
        height: max-content;
      }

      .event {
        width: max-content;
      }

      .event:not(:last-child) {
        margin-bottom: 2rem;
      }

      h2 {
        margin: auto 0;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.eventData = await sortDataByDate();
    console.log(this.eventData);
  }


  render() {
    console.log('render');
    if (this.eventData.length > 1) {
      return html`
      <link rel="stylesheet" href="/index.css">
      <div class="event-list">
        ${this.eventData.map(event => html`
          <div class="event row__layer-01">
            <h2>${event.title}</h2>
            <div class="event-info">
              <p>${formatDate(event.start_date)} - ${formatDate(event.end_date)}</p>
              <p>Location: ${event.location}</p>
              <p>Details: ${event.details}</p>
            </div>

          </div>
        `)}
      </div>
    `;
    }
    return html`<p>No events</p>`;
  }

}

customElements.define('event-component', EventComponent);