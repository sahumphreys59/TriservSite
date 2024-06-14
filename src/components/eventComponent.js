import { LitElement, html, css } from "lit";
import { sortDataByDate } from "../utils/fetchEventData.js";
import { formatDate } from "../utils/formatDate.js";
import config from "../../config.js";


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
          <span class="form-heading">Create New Event</span>

          <div class="input-wrap">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title">
          </div>

          <div class="input-wrap">
            <label for="start_date">Start Date:</label>
            <input type="date" id="start_date" name="start_date">
          </div>

          <div class="input-wrap">
            <label for="end_date">End Date:</label>
            <input type="date" id="end_date" name="end_date">
          </div>

          <div class="input-wrap">
            <label for="location">Location:</label>
            <input type="text" id="location" name="location">
          </div>

          <div class="input-wrap">
            <label for="details">Details:</label>
            <input type="text" id="details" name="details">
          </div>

          <button type="submit">Create</button>
        </form>
      </dialog>


      <dialog id="dialog__event--edit">
      <button id="button__dialog--close" title="close dialog" @click="${this.closeEditEventForm}">
        <div class="icon__wrap">
          <span class="dialog__btn--close"></span>
        </div>
      </button>
        <form id="form__event--edit" @submit=${this.updateEvent}>
          <h2>Edit Event</h2>
          <label for="title">Title:</label>
          <input type="text" id="edit__title" name="title">
          <label for="start_date">Start Date:</label>
          <input type="date" id="edit__start_date" name="start_date">
          <label for="end_date">End Date:</label>
          <input type="date" id="edit__end_date" name="end_date">
          <label for="location">Location:</label>
          <input type="text" id="edit__location" name="location">
          <label for="details">Details:</label>
          <input type="text" id="edit__details" name="details">
          <button type="submit">Update</button>

          <input type="hidden" id="edit__id--hidden" name="id">
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
              <span class="button__event--edit" title="edit event" data-id="${event.id}" @click="${this.editEvent}"></span>
            </div>
            <div class="icon__wrap">
              <span class="button__event--delete" title="delete event" data-id="${event.id}" @click="${this.deleteEvent}"></span>
            </div>
          </div>
        </div>

        `) 
        : html`<p>No upcoming events</p>`
      }
    `;

  }


  /* utils  */
  openNewEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--new');
    dialog.showModal();
  }

  closeNewEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--new');
    dialog.close();

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

  closeEditEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--edit');
    dialog.classList.remove('visible');
    dialog.classList.add('hidden');

    const form =  this.shadowRoot.querySelector('#form__event--edit');
    form.reset();
  }

  async editEvent(e) {
    const idToEdit = parseInt(e.target.getAttribute('data-id'));
    const dialog =  this.shadowRoot.querySelector('#dialog__event--edit');
    const form = this.shadowRoot.querySelector('#form__event--edit');
    dialog.classList.add('visible');
    dialog.classList.remove('hidden');

    try {
      const response = await fetch(`/api/v1/events/${idToEdit}`);
      const eventToEditArr = await response.json();
      const eventToEdit = eventToEditArr[0];
      console.log(eventToEdit.title);
      this.shadowRoot.querySelector('#edit__title').value = eventToEdit.title;
      this.shadowRoot.querySelector('#edit__start_date').value = eventToEdit.start_date;
      this.shadowRoot.querySelector('#edit__end_date').value = eventToEdit.end_date;
      this.shadowRoot.querySelector('#edit__location').value = eventToEdit.location;
      this.shadowRoot.querySelector('#edit__details').value = eventToEdit.details;
      this.shadowRoot.querySelector('#edit__id--hidden').value = eventToEdit.id;
    } catch (error) {
      console.error('Error: '. error);
    }

    // form.setAttribute('action', `/api/v1/events/${idToEdit}`);

    // try {
    //   const response = await fetch(`/api/v1/events/${idToEdit}`, {
    //     method: 'PUT',
    //   });
    //   if (response.ok) {
    //     this.eventData = await sortDataByDate();
    //   } else {
    //     throw new Error('Failed to edit event');
    //   }
    // } catch (error) {
    //   console.error('Error: '. error);
    // }
  }

  async sendPutRequest(e) {
    e.preventDefault();
    const form =  this.shadowRoot.querySelector('#form__event--edit');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const url = `/api/v1/events/${parseInt(data.id)}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    };

    try {
      const response = await fetch(`/api/v1/events//:id`, options);

      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      const responseData = await response.json();
      console.log('Success:', responseData);
      alert('Update successfull');
    } catch (error) {
      console.error('Error:', error);
      alert('Update failed: ' + error.message);
    }

    this.closeEditEventForm();
    this.eventData = await sortDataByDate();
  }

  async updateEvent(e) {
    // e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);
    // const jsonData =  {
    //   id: data.get('id'),
    //   title: data.get('title'),
    //   start_date: data.get('start_date'),
    //   end_date: data.get('end_date'),
    //   location: data.get('location'),
    //   details: data.get('details'),
    // }

    // const idToEdit = parseInt(data.get('id'));
    // const url = `/api/v1/events/${idToEdit}`;
    // console.log('Request URL:', url);
    // try {
    //   const response = await fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(jsonData),
    //   });
    
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    
    //   console.log('Response:', response.url);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }
}

customElements.define('event-component', EventComponent);