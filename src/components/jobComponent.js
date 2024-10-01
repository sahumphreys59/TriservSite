import { LitElement, html, css } from "lit";

export class JobComponent extends LitElement {
  constructor() {
    super();
    this.jobData = [];
    this.userIsAuthorized = false;
  }

  static get properties() {
    return {
      jobData: { type: Array, attribute: false },
      userIsAuthorized: { type: Boolean, attribute: false }
    }
  }

  static get styles () {
    return css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
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

    .container {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      width: 100%;
      margin: 0 auto;
    }

    .job {
      flex: 1 1 25%; 
      background-color: var(--layer-2);
      padding: 2rem;
      box-sizing: border-box;
      border: 1px solid grey;
      display: flex;
      justify-content: space-between;
      height: 200px;
      transition: all .3s;
    }


    h3:hover {
      color: var(--color-blue);
      cursor: pointer;
      text-decoration: underline;
    }

    dialog h3:hover {
      color: currentColor;
      cursor: auto;
      text-decoration: none;
    }

    .arrow {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background-image: url('../arrow__right--blue.svg');
      background-size: cover;
      background-repeat: no-repeat;
    } 

    .button__job-delete {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url('../trash-can.svg');
      transition: transform .2s;
    }

    .button__job-delete:hover {
      cursor: pointer;
      transform: scale(1.2);
    }

    
    .button__job--edit {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url('../edit.svg');
      transition: transform .2s;
    }

    .button__job--edit:hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    .job__action-bar {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      width: max-content;
    }

    #job__display-container {
      padding: 1rem;
      min-width: 40vw;
      min-height: 30vh;
    }

    `;
  }

  async fetchJobData() {
    try {
      const response = await fetch('/api/v1/jobs');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch data: ', error);
    }
  }

  async connectedCallback() {
    super.connectedCallback();


    this.jobData = await this.fetchJobData();


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
      <button @click="${this.openNewJobForm}">Create New Job</button>
      <dialog id="dialog__job--new">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeNewJobForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <form action="/api/v1/jobs/" method="post">
          <span class="form-heading">Create New Job</span>
          <div class="input-wrap">
            <label for="job_title">Job Title:</label>
            <input type="text" id="new__job_title" name="job_title">
          </div>

          <div class="input-wrap">
            <label for="location">Location:</label>
            <input type="text" id="new__location" name="location">
          </div>

          <div class="input-wrap">
            <label for="details">Details:</label>
            <input type="text" id="new__details" name="details">
          </div>

          <div class="input-wrap">
            <label for="category">Category:</label>
            <input type="text" id="new__category" name="category">
          </div>

          <div class="input-wrap">
          <label for="experience_level">Experience Level:</label>
          <input type="text" id="new__experience_level" name="experience_level">
        </div>

          <div class = "input-wrap">
            <label for="new__job__type">Employment Type:</label>
            <select name="option" id="new__job__type">
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
      </dialog>

      <dialog id="dialog__job--edit">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeEditJobForm}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <form id="form__job--edit">
          <span class="form-heading">Edit Job</span>
          <div class="input-wrap">
            <label for="job_title">Job Title:</label>
            <input type="text" id="edit__job_title" name="job_title">
          </div>

          <div class="input-wrap">
            <label for="location">Location:</label>
            <input type="text" id="edit__location" name="location">
          </div>

          <div class="input-wrap">
            <label for="details">Details:</label>
            <input type="text" id="edit__details" name="details">
          </div>

          <div class="input-wrap">
            <label for="edit__category">Category:</label>
            <input type="text" id="edit__category" name="category">
          </div>

          <div class="input-wrap">
            <label for="edit__experience_level">Experience Level:</label>
            <input type="text" id="edit__experience_level" name="experience_level">
          </div>


          <div class = "input-wrap">
            <label for="edit__job_type">Employment Type:</label>
            <select name="option" id="edit__job_type">
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </select>
          </div>
          <button type="submit" @click="${this.updateJob}">Update</button>
          <input type="hidden" class="job__id--hidden" name="id">
        </form>
      </dialog>

      <dialog id="job__display">
        <button id="button__dialog--close" title="close dialog" @click="${this.closeJobDisplayModal}" class="icon">
          <div class="icon__wrap">
            <span class="dialog__btn--close"></span>
          </div>
        </button>
        <div id="job__display-container">
          <h3 class="job__display--job_title"></h3>
          <p class="job__display--location"></p>
          <p class="job__display--details"></p>
          <p class="job__display--job_type"></p>
          <p class="job__display--category"></p>
          <p class="job__display--experience_level"></p>
        </div>
      </dialog>
      `: html``}


      <div class="container">
          ${this.jobData.length > 0
            ? this.jobData.map((job) => html`
              <div class="job">
                <div class="job-data">
                  <h3 @click="${this.renderJobDisplayModal}" data-id="${job.id}">${job.job_title}</h3>
                  <p>${job.location}</p>
                </div>
                ${this.userIsAuthorized ? html`
                  <div class="job__action-bar">    
                    <div class="icon__wrap">
                      <span class="button__job--edit" title="edit job post" data-id="${job.id}" @click="${this.openEditJobForm}"></span>
                    </div>
                    <div class="icon__wrap">
                      <span class="button__job-delete" title="delete job post" data-id="${job.id}" @click="${this.deleteJob}"></span>
                    </div>
                  </div>
                  ` : html``}

              </div>

            `) : html`<p>No postings yet</p>`
          }
      </div>
    `;
  }

  openNewJobForm() {
    const dialog = this.shadowRoot.querySelector('#dialog__job--new');
    dialog.showModal();
  }

  closeNewJobForm() {
    const dialog =  this.shadowRoot.querySelector('#dialog__job--new');
    dialog.close();
  }

  async openEditJobForm(e) {
    const idToEdit = parseInt(e.target.getAttribute('data-id'));
    const dialog = this.shadowRoot.querySelector('#dialog__job--edit');
    dialog.showModal();
    console.log(idToEdit);
    try {
      const response = await fetch(`/api/v1/jobs/${idToEdit}`);
      const jobToEditArr = await response.json();
      const jobToEdit = jobToEditArr[0];
      this.shadowRoot.querySelector('#edit__job_title').value = jobToEdit.job_title;
      this.shadowRoot.querySelector('#edit__location').value = jobToEdit.location;
      this.shadowRoot.querySelector('#edit__details').value = jobToEdit.details;
      this.shadowRoot.querySelector('#edit__job_type').value = jobToEdit.job_type;
      this.shadowRoot.querySelector('.job__id--hidden').value = jobToEdit.id;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async updateJob(e) {
    e.preventDefault();
    const dialog = this.shadowRoot.querySelector('#dialog__job--edit');
    const idToEdit = this.shadowRoot.querySelector('.job__id--hidden').value;
    const form = this.shadowRoot.querySelector('#form__job--edit');

    const formData = {
      job_title: this.shadowRoot.querySelector('#edit__job_title').value,
      location: this.shadowRoot.querySelector('#edit__location').value,
      details: this.shadowRoot.querySelector('#edit__details').value,
      job_type: this.shadowRoot.querySelector('#edit__job_type').value
    }

    try {
      const response = await fetch(`/api/v1/jobs/${idToEdit}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.info('Successfully updated job');
        form.reset();
        dialog.close();
      } else {
        console.error('Failed to update job');
      }
    } catch (error) {
      console.error(error);
    }

    this.jobData = await this.fetchJobData();
  }

  closeEditJobForm() {
    const dialog = this.shadowRoot.querySelector('#dialog__job--edit');
    dialog.close();
  }

  renderJobDetailPopup(obj) {
    console.log(obj);
  }

  async deleteJob(e) {
    const idToDelete = parseInt(e.target.getAttribute('data-id'));

    try {
      const response = await fetch(`/api/v1/jobs/${idToDelete}`, {
        method: 'DELETE',
      });
      if (response.ok) {
         this.jobData = await this.fetchJobData();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to delete the event.');
    }
  }

  async renderJobDisplayModal(e) {
    const id = parseInt(e.target.getAttribute('data-id'));
    const response = await fetch(`/api/v1/jobs/${id}`);
    const dataArr = await response.json();
    const data = dataArr[0];

    const dialog = this.shadowRoot.querySelector('#job__display');
    dialog.showModal();

    this.shadowRoot.querySelector('.job__display--job_title').textContent = data.job_title;
    this.shadowRoot.querySelector('.job__display--location').textContent = data.location;
    this.shadowRoot.querySelector('.job__display--details').textContent = data.details;
    this.shadowRoot.querySelector('.job__display--job_type').textContent = data.job_type;
    this.shadowRoot.querySelector('.job__display--category').textContent = data.category;
    this.shadowRoot.querySelector('.job__display--experience_level').textContent = data.experience_level;

  }

  closeJobDisplayModal() {
    const dialog = this.shadowRoot.querySelector('#job__display');
    dialog.close();
  }

}

customElements.define('job-component', JobComponent);