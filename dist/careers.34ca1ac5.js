var e=globalThis,t={},o={},i=e.parcelRequirefc44;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirefc44=i),i.register;var a=i("800sp");class l extends a.LitElement{constructor(){super(),this.jobData=[],this.userIsAuthorized=!1}static get properties(){return{jobData:{type:Array,attribute:!1},userIsAuthorized:{type:Boolean,attribute:!1}}}static get styles(){return(0,a.css)`
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

    `}async fetchJobData(){try{let e=await fetch("/api/v1/jobs");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){console.error("Failed to fetch data: ",e)}}async connectedCallback(){super.connectedCallback(),this.jobData=await this.fetchJobData();let e=sessionStorage.getItem("authorized-user");null===e||"false"==e?this.userIsAuthorized=!1:this.userIsAuthorized=!0,document.addEventListener("auth-state",e=>{console.log("here was supposed to dispatch"),this.userIsAuthorized=e.detail})}render(){return(0,a.html)`
    <link rel="stylesheet" href="/index.css">
    ${this.userIsAuthorized?(0,a.html)`
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
      `:(0,a.html)``}


      <div class="container">
          ${this.jobData.length>0?this.jobData.map(e=>(0,a.html)`
              <div class="job">
                <div class="job-data">
                  <h3 @click="${this.renderJobDisplayModal}" data-id="${e.id}">${e.job_title}</h3>
                  <p>${e.location}</p>
                </div>
                ${this.userIsAuthorized?(0,a.html)`
                  <div class="job__action-bar">    
                    <div class="icon__wrap">
                      <span class="button__job--edit" title="edit job post" data-id="${e.id}" @click="${this.openEditJobForm}"></span>
                    </div>
                    <div class="icon__wrap">
                      <span class="button__job-delete" title="delete job post" data-id="${e.id}" @click="${this.deleteJob}"></span>
                    </div>
                  </div>
                  `:(0,a.html)``}

              </div>

            `):(0,a.html)`<p>No postings yet</p>`}
      </div>
    `}openNewJobForm(){this.shadowRoot.querySelector("#dialog__job--new").showModal()}closeNewJobForm(){this.shadowRoot.querySelector("#dialog__job--new").close()}async openEditJobForm(e){let t=parseInt(e.target.getAttribute("data-id"));this.shadowRoot.querySelector("#dialog__job--edit").showModal(),console.log(t);try{let e=await fetch(`/api/v1/jobs/${t}`),o=(await e.json())[0];this.shadowRoot.querySelector("#edit__job_title").value=o.job_title,this.shadowRoot.querySelector("#edit__location").value=o.location,this.shadowRoot.querySelector("#edit__details").value=o.details,this.shadowRoot.querySelector("#edit__job_type").value=o.job_type,this.shadowRoot.querySelector(".job__id--hidden").value=o.id}catch(e){console.error("Error: ",e)}}async updateJob(e){e.preventDefault();let t=this.shadowRoot.querySelector("#dialog__job--edit"),o=this.shadowRoot.querySelector(".job__id--hidden").value,i=this.shadowRoot.querySelector("#form__job--edit"),a={job_title:this.shadowRoot.querySelector("#edit__job_title").value,location:this.shadowRoot.querySelector("#edit__location").value,details:this.shadowRoot.querySelector("#edit__details").value,job_type:this.shadowRoot.querySelector("#edit__job_type").value};try{(await fetch(`/api/v1/jobs/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(console.info("Successfully updated job"),i.reset(),t.close()):console.error("Failed to update job")}catch(e){console.error(e)}this.jobData=await this.fetchJobData()}closeEditJobForm(){this.shadowRoot.querySelector("#dialog__job--edit").close()}renderJobDetailPopup(e){console.log(e)}async deleteJob(e){let t=parseInt(e.target.getAttribute("data-id"));try{(await fetch(`/api/v1/jobs/${t}`,{method:"DELETE"})).ok&&(this.jobData=await this.fetchJobData())}catch(e){console.error("Error:",e),alert("An error occurred while trying to delete the event.")}}async renderJobDisplayModal(e){let t=parseInt(e.target.getAttribute("data-id")),o=await fetch(`/api/v1/jobs/${t}`),i=(await o.json())[0];this.shadowRoot.querySelector("#job__display").showModal(),this.shadowRoot.querySelector(".job__display--job_title").textContent=i.job_title,this.shadowRoot.querySelector(".job__display--location").textContent=i.location,this.shadowRoot.querySelector(".job__display--details").textContent=i.details,this.shadowRoot.querySelector(".job__display--job_type").textContent=i.job_type,this.shadowRoot.querySelector(".job__display--category").textContent=i.category,this.shadowRoot.querySelector(".job__display--experience_level").textContent=i.experience_level}closeJobDisplayModal(){this.shadowRoot.querySelector("#job__display").close()}}customElements.define("job-component",l);
//# sourceMappingURL=careers.34ca1ac5.js.map
