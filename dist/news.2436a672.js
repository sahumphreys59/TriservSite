function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var e=globalThis,a={},n={},i=e.parcelRequirefc44;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return a[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequirefc44=i);var r=i.register;r("evz6q",function(e,a){async function n(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.log("Failed to fetch data:",t)}}async function i(){let t=await n(),e=new Date;return t.sort((t,a)=>{let n=new Date(t.start_date),i=new Date(a.start_date);return r(e,n)-r(e,i)})}t(e.exports,"sortDataByDate",()=>i);let r=(t,e)=>(e-t)/864e5}),r("eVKce",function(e,a){function n(t){let e=new Date(t),a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],i=e.getFullYear(),r=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${n} ${a}${r}, ${i}`}t(e.exports,"formatDate",()=>n)});var o=i("800sp"),s=i("evz6q"),l=i("eVKce");class d extends o.LitElement{constructor(){super(),this.eventData=[]}static get properties(){return{eventData:{type:Array,attribute:!1}}}static get styles(){return(0,o.css)`
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
    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,s.sortDataByDate)()}render(){return(0,o.html)`
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
      ${this.eventData.length>0?this.eventData.map(t=>(0,o.html)`
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
              <span class="button__event--edit" title="edit event" data-id="${t.id}"></span>
            </div>
            <div class="icon__wrap">
              <span class="button__event--delete" title="delete event" data-id="${t.id}" @click="${this.deleteEvent}"></span>
            </div>
          </div>
        </div>

        <dialog id="dialog__event--edit">
        
        </dialog>
        `):(0,o.html)`<p>No upcoming events</p>`}
    `}openNewEventForm(){let t=this.shadowRoot.querySelector("#dialog__event--new");t.classList.remove("hidden"),t.classList.add("visible")}closeNewEventForm(){let t=this.shadowRoot.querySelector("#dialog__event--new");t.classList.remove("visible"),t.classList.add("hidden")}async deleteEvent(t){let e=parseInt(t.target.getAttribute("data-id"));try{if((await fetch(`/api/v1/events/${e}`,{method:"DELETE"})).ok)this.eventData=await (0,s.sortDataByDate)();else throw Error("Failed to delete event")}catch(t){console.error("Error:",t),alert("An error occurred while trying to delete the event.")}}async editEvent(t){parseInt(t.target.getAttribute("data-id"))}}customElements.define("event-component",d);
//# sourceMappingURL=news.2436a672.js.map
