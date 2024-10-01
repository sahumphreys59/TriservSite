import { LitElement, html, css } from "lit";
import { sortDataByDate } from "../utils/fetchEventData.js";
import { formatDate } from "../utils/formatDate.js";
import config from "../../config.js";


export class EventComponent extends LitElement {
  constructor() {
    super();


    this.eventData = [];
    this.userIsAuthorized = false;
  }

  static get properties() {
    return {
      eventData: { type: Array, attribute: false },
      userIsAuthorized: { type: Boolean, attribute: false }
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
       border: 1px solid grey;;
       background-color: transparent;
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

    const userAuthorizedData = sessionStorage.getItem('authorized-user');
    if (userAuthorizedData === null || userAuthorizedData == 'false') {
      this.userIsAuthorized = false;
    } else {
      this.userIsAuthorized = true;
    }

    document.addEventListener('auth-state', (e) => {
      console.log('here was supposed to dispatch')
      this.userIsAuthorized = e.detail;
    });
  }


  render() {
    return html`
    <link rel="stylesheet" href="/index.css">
      ${this.userIsAuthorized ? html`
        <button id="button__event--new"  @click="${this.openNewEventForm}">Create New Event</button>
        <dialog id="dialog__event--new">
          <button id="button__dialog--close" title="close dialog" @click="${this.closeNewEventForm}" class="icon">
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
        <button id="button__dialog--close" title="close dialog" @click="${this.closeEditEventForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
          <form id="form__event--edit">
            <span class="form-heading">Edit Event</span>
  
            <div class="input-wrap">
              <label for="title">Title:</label>
              <input type="text" id="edit__title" name="title">
            </div>
  
            <div class="input-wrap">
              <label for="start_date">Start Date:</label>
              <input type="date" id="edit__start_date" name="start_date">
            </div>
  
  
            <div class="input-wrap">
              <label for="end_date">End Date:</label>
              <input type="date" id="edit__end_date" name="end_date">
            </div>
  
  
            <div class="input-wrap">
              <label for="location">Location:</label>
              <input type="text" id="edit__location" name="location">
            </div>
  
  
            <div class="input-wrap">
              <label for="details">Details:</label>
              <input type="text" id="edit__details" name="details">
            </div>
  
  
            <button type="submit" @click="${this.updateEvent}">Update</button>
  
            <input type="hidden" class="edit__id--hidden" name="id">
          </form>
        </dialog>
        `: ``}


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
          ${this.userIsAuthorized ? html`
            <div class="event__action-bar">
              <div class="icon__wrap">
                <span class="button__event--edit" title="edit event" data-id="${event.id}" @click="${this.editEvent}"></span>
              </div>
              <div class="icon__wrap">
                <span class="button__event--delete" title="delete event" data-id="${event.id}" @click="${()=>this.openDeleteEventDialog(event.title)}"></span>
              </div>
            </div>

            <dialog id="dialog__event--delete">
              <h3 id="dialogTitle"></h3>
              <button class="button__secondary" @click="${this.cancelDeleteEventDialog}">Cancel</button>
              <button class="button__primary" @click="${this.confirmDeleteEvent}" data-id="${event.id}">Delete</button>
            </dialog>
            `: html``
          }
        </div>`) 
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

  cancelDeleteEventDialog() {
    const dialog = this.shadowRoot.querySelector('#dialog__event--delete');
    dialog.close();
  }

  async openDeleteEventDialog(text) {
    const dialog = this.shadowRoot.querySelector('#dialog__event--delete');
    dialog.showModal();

    const title = this.shadowRoot.querySelector('#dialogTitle');
    title.textContent = `Are you sure you want to delete the event '${text}'?`;
  } 

  async confirmDeleteEvent(e) {
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


    const dialog = this.shadowRoot.querySelector('#dialog__event--delete');
    dialog.close();
  }

  closeEditEventForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__event--edit');
    dialog.close();

    const form =  this.shadowRoot.querySelector('#form__event--edit');
    form.reset();
  }

  async editEvent(e) {
    const idToEdit = parseInt(e.target.getAttribute('data-id'));
    const dialog =  this.shadowRoot.querySelector('#dialog__event--edit');
    dialog.showModal();

    try {
      const response = await fetch(`/api/v1/events/${idToEdit}`);
      const eventToEditArr = await response.json();
      const eventToEdit = eventToEditArr[0];
      console.log(eventToEdit);
      this.shadowRoot.querySelector('#edit__title').value = eventToEdit.title;
      this.shadowRoot.querySelector('#edit__start_date').value = this.formatDate(eventToEdit.start_date);
      this.shadowRoot.querySelector('#edit__end_date').value = this.formatDate(eventToEdit.end_date);
      this.shadowRoot.querySelector('#edit__location').value = eventToEdit.location;
      this.shadowRoot.querySelector('#edit__details').value = eventToEdit.details;
      this.shadowRoot.querySelector('.edit__id--hidden').value = eventToEdit.id;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async updateEvent(e) {    
    e.preventDefault();
    const dialog = this.shadowRoot.querySelector('#dialog__event--edit');
    const idToEdit = this.shadowRoot.querySelector('.edit__id--hidden').value;
    const form = this.shadowRoot.querySelector('#form__event--edit');

    const formData = {
      title: this.shadowRoot.querySelector('#edit__title').value,
      start_date: this.shadowRoot.querySelector('#edit__start_date').value,
      end_date: this.shadowRoot.querySelector('#edit__end_date').value,
      location: this.shadowRoot.querySelector('#edit__location').value,
      details: this.shadowRoot.querySelector('#edit__details').value,
      id : this.shadowRoot.querySelector('.edit__id--hidden').value
    }

    try {
      const response = await fetch(`/api/v1/events/${idToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });

      if (response.ok) {
        console.info('Successfully updated event');
        form.reset();
        dialog.close();
      } else {
        console.error('Failed to update event');
      }

    } catch (error) {
      console.error(error);
    }



    this.eventData = await sortDataByDate();
  }

  formatDate(string) {
    const date = new Date(string);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  }

}

customElements.define('event-component', EventComponent);


