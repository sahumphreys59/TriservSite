function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}var e=globalThis,a={},i={},o=e.parcelRequirefc44;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},e.parcelRequirefc44=o);var n=o.register;n("evz6q",function(e,a){async function i(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.log("Failed to fetch data:",t)}}async function o(){let t=await i(),e=new Date;return t.sort((t,a)=>{let i=new Date(t.start_date),o=new Date(a.start_date);return n(e,i)-n(e,o)})}t(e.exports,"sortDataByDate",()=>o);let n=(t,e)=>(e-t)/864e5}),n("eVKce",function(e,a){function i(t){let e=new Date(t),a=e.getDate(),i=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],o=e.getFullYear(),n=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${i} ${a}${n}, ${o}`}t(e.exports,"formatDate",()=>i)});var l=o("800sp"),r=o("evz6q"),s=o("eVKce");class d extends l.LitElement{constructor(){super(),this.eventData=[]}static get properties(){return{eventData:{type:Array,attribute:!1}}}static get styles(){return(0,l.css)`
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
    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,r.sortDataByDate)()}render(){return(0,l.html)`
    <link rel="stylesheet" href="/index.css">
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

      ${this.eventData.length>0?this.eventData.map(t=>(0,l.html)`
        <div class="event">

        <div class="event-data">
          <h2>${t.title}</h2>
          <div class="event-info">
            <p>${(0,s.formatDate)(t.start_date)} - ${(0,s.formatDate)(t.end_date)}</p>
            <p>Location: ${t.location}</p>
            <p>Details: ${t.details}</p>
          </div>
          </div>
          <div class="event__action-bar">
            <div class="icon__wrap">
              <span class="button__event--edit" title="edit event" data-id="${t.id}" @click="${this.editEvent}"></span>
            </div>
            <div class="icon__wrap">
              <span class="button__event--delete" title="delete event" data-id="${t.id}" @click="${this.deleteEvent}"></span>
            </div>
          </div>
        </div>

        `):(0,l.html)`<p>No upcoming events</p>`}
    `}openNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").showModal()}closeNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").close()}async deleteEvent(t){let e=parseInt(t.target.getAttribute("data-id"));try{if((await fetch(`/api/v1/events/${e}`,{method:"DELETE"})).ok)this.eventData=await (0,r.sortDataByDate)();else throw Error("Failed to delete event")}catch(t){console.error("Error:",t),alert("An error occurred while trying to delete the event.")}}closeEditEventForm(){this.shadowRoot.querySelector("#dialog__event--edit").close(),this.shadowRoot.querySelector("#form__event--edit").reset()}async editEvent(t){let e=parseInt(t.target.getAttribute("data-id"));this.shadowRoot.querySelector("#dialog__event--edit").showModal();try{let t=await fetch(`/api/v1/events/${e}`),a=(await t.json())[0];console.log(a),this.shadowRoot.querySelector("#edit__title").value=a.title,this.shadowRoot.querySelector("#edit__start_date").value=this.formatDate(a.start_date),this.shadowRoot.querySelector("#edit__end_date").value=this.formatDate(a.end_date),this.shadowRoot.querySelector("#edit__location").value=a.location,this.shadowRoot.querySelector("#edit__details").value=a.details,this.shadowRoot.querySelector(".edit__id--hidden").value=a.id}catch(t){console.error("Error: ",t)}}async updateEvent(t){t.preventDefault();let e=this.shadowRoot.querySelector("#dialog__event--edit"),a=this.shadowRoot.querySelector(".edit__id--hidden").value,i=this.shadowRoot.querySelector("#form__event--edit"),o={title:this.shadowRoot.querySelector("#edit__title").value,start_date:this.shadowRoot.querySelector("#edit__start_date").value,end_date:this.shadowRoot.querySelector("#edit__end_date").value,location:this.shadowRoot.querySelector("#edit__location").value,details:this.shadowRoot.querySelector("#edit__details").value,id:this.shadowRoot.querySelector(".edit__id--hidden").value};try{console.log("inside try block"),(await fetch(`/api/v1/events/${a}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(console.info("Successfully updated event"),i.reset(),e.close()):console.error("Failed to updated event")}catch(t){console.error(t)}this.eventData=await (0,r.sortDataByDate)()}formatDate(t){return new Date(t).toISOString().split("T")[0]}}customElements.define("event-component",d);
//# sourceMappingURL=news.d842270f.js.map
