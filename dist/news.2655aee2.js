function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}var e=globalThis,a={},i={},o=e.parcelRequirefc44;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},e.parcelRequirefc44=o);var n=o.register;n("evz6q",function(e,a){async function i(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.log("Failed to fetch data:",t)}}async function o(){let t=await i(),e=new Date;return t.sort((t,a)=>{let i=new Date(t.start_date),o=new Date(a.start_date);return n(e,i)-n(e,o)})}t(e.exports,"sortDataByDate",()=>o);let n=(t,e)=>(e-t)/864e5}),n("eVKce",function(e,a){function i(t){let e=new Date(t),a=e.getDate(),i=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],o=e.getFullYear(),n=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${i} ${a}${n}, ${o}`}t(e.exports,"formatDate",()=>i)});var r=o("800sp"),s=o("evz6q"),l=o("eVKce");class d extends r.LitElement{constructor(){super(),this.eventData=[]}static get properties(){return{eventData:{type:Array,attribute:!1}}}static get styles(){return(0,r.css)`
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
    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,s.sortDataByDate)()}render(){return(0,r.html)`
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
            <lable for="title">Title:</lable>
            <input type="text" id="title" name="title">
          </div>

          <div class="input-wrap">
            <lable for="start_date">Start Date:</lable>
            <input type="date" id="start_date" name="start_date">
          </div>

          <div class="input-wrap">
            <lable for="end_date">End Date:</lable>
            <input type="date" id="end_date" name="end_date">
          </div>

          <div class="input-wrap">
            <lable for="location">Location:</lable>
            <input type="text" id="location" name="location">
          </div>

          <div class="input-wrap">
            <lable for="details">Details:</lable>
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
          <lable for="title">Title:</lable>
          <input type="text" id="edit__title" name="title">
          <lable for="start_date">Start Date:</lable>
          <input type="date" id="edit__start_date" name="start_date">
          <lable for="end_date">End Date:</lable>
          <input type="date" id="edit__end_date" name="end_date">
          <lable for="location">Location:</lable>
          <input type="text" id="edit__location" name="location">
          <lable for="details">Details:</lable>
          <input type="text" id="edit__details" name="details">
          <button type="submit">Update</button>

          <input type="hidden" id="edit__id--hidden" name="id">
        </form>
      </dialog>

      ${this.eventData.length>0?this.eventData.map(t=>(0,r.html)`
        <div class="event">

        <div class="event-data">
          <h2>${t.title}</h2>
          <div class="event-info">
            <p>${(0,l.formatDate)(t.start_date)} - ${(0,l.formatDate)(t.end_date)}</p>
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

        `):(0,r.html)`<p>No upcoming events</p>`}
    `}openNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").showModal()}closeNewEventForm(){this.shadowRoot.querySelector("#dialog__event--new").close()}async deleteEvent(t){let e=parseInt(t.target.getAttribute("data-id"));try{if((await fetch(`/api/v1/events/${e}`,{method:"DELETE"})).ok)this.eventData=await (0,s.sortDataByDate)();else throw Error("Failed to delete event")}catch(t){console.error("Error:",t),alert("An error occurred while trying to delete the event.")}}closeEditEventForm(){let t=this.shadowRoot.querySelector("#dialog__event--edit");t.classList.remove("visible"),t.classList.add("hidden"),this.shadowRoot.querySelector("#form__event--edit").reset()}async editEvent(t){let e=parseInt(t.target.getAttribute("data-id")),a=this.shadowRoot.querySelector("#dialog__event--edit");this.shadowRoot.querySelector("#form__event--edit"),a.classList.add("visible"),a.classList.remove("hidden");try{let t=await fetch(`/api/v1/events/${e}`),a=(await t.json())[0];console.log(a.title),this.shadowRoot.querySelector("#edit__title").value=a.title,this.shadowRoot.querySelector("#edit__start_date").value=a.start_date,this.shadowRoot.querySelector("#edit__end_date").value=a.end_date,this.shadowRoot.querySelector("#edit__location").value=a.location,this.shadowRoot.querySelector("#edit__details").value=a.details,this.shadowRoot.querySelector("#edit__id--hidden").value=a.id}catch(t){console.error("Error: ".error)}}async sendPutRequest(t){t.preventDefault();let e=Object.fromEntries(new FormData(this.shadowRoot.querySelector("#form__event--edit")).entries());parseInt(e.id);try{let t=await fetch("/api/v1/events//:id",{method:"PUT",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e});if(!t.ok)throw Error("Network response was not ok"+t.statusText);let a=await t.json();console.log("Success:",a),alert("Update successfull")}catch(t){console.error("Error:",t),alert("Update failed: "+t.message)}this.closeEditEventForm(),this.eventData=await (0,s.sortDataByDate)()}async updateEvent(t){}}customElements.define("event-component",d);
//# sourceMappingURL=news.2655aee2.js.map
