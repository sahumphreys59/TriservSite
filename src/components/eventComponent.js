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
        position: relative;
      }

      #button__event--new {
        position: absolute;
        right: 0;
        top: 0;
      }

      .event {
       /* width: max-content; */
       padding: 2rem;
       position: relative;
       width: 60vw;
       background-color: var(--layer-1);
       display: flex;
       gap: 2rem;
       justify-content: space-between
      }

      .event:not(:last-child) {
        margin-bottom: 2rem;
      }

      .event-info {
        justify-self: flex-end;
      }

      h2 {
        margin: auto 0;
      }

      .event__action-bar {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
      }

      #button__dialog--close {
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

      .button__event--delete {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../trash-can.svg');
        transition: transform .2s;
      }

      .button__event--edit {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-image: url('../edit.svg');
        transition: transform .2s;
      }

      .button__event--delete:hover, .button__event--edit:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.eventData = await sortDataByDate();
  }


  render() {
    return html`
    <link rel="stylesheet" href="/index.css">
      <button id="button__event--new"  @click="${this.openNewEventForm}">Create New Event</button>
      <dialog id="dialog__event--new">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeNewEventForm}">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <form action="/api/v1/events/" method="post">
          <h2>Create New Event</h2>
          <lable for="title">Title:</lable>
          <input type="text" id="title" name="title">
          <lable for="start_date">Start Date:</lable>
          <input type="date" id="start_date" name="start_date">
          <lable for="end_date">End Date:</lable>
          <input type="date" id="end_date" name="end_date">
          <lable for="location">Location:</lable>
          <input type="text" id="location" name="location">
          <lable for="details">Details:</lable>
          <input type="text" id="details" name="details">
          <button type="submit">Create</button>
        </form>
      </dialog>
      ${this.eventData.length > 0 
        ? this.eventData.map((event) => html`
        <div class="event">

        <div class="event-data">
          <h2>${event.title}</h2>
          <div class="event-info">
            <p>${formatDate(event.start_date)} - ${formatDate(event.end_date)}</p>
            <p>Location: ${event.location}</p>
            <p>Details: ${event.details}</p>
          </div>
          </div>
          <div class="event__action-bar">
            <div class="icon__wrap">
              <span class="button__event--edit" title="edit event" data-id="${event.id}"></span>
            </div>
            <div class="icon__wrap">
              <span class="button__event--delete" title="delete event" data-id="${event.id}" @click="${this.deleteEvent}"></span>
            </div>
          </div>
        </div>

        <dialog id="dialog__event--edit">
        
        </dialog>
        `) 
        : html`<p>No upcoming events</p>`
      }
    `;

  }


  /* utils  */
  openNewEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--new');
    dialog.classList.remove('hidden');
    dialog.classList.add('visible');
  }

  closeNewEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--new');
    dialog.classList.remove('visible');
    dialog.classList.add('hidden');
  }

  async deleteEvent(e) {
    const idToDelete = parseInt(e.target.getAttribute('data-id'));

    try {
      const response = await fetch(`/api/v1/events/${idToDelete}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        this.eventData = await sortDataByDate();
      } else {
        throw new Error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to delete the event.');
    }
  } 

  async editEvent(e) {
    const idToEdit = parseInt(e.target.getAttribute('data-id'));
  }

}

customElements.define('event-component', EventComponent);