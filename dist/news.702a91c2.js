function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t=globalThis,a={},n={},i=t.parcelRequirefc44;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequirefc44=i);var r=i.register;r("evz6q",function(t,a){async function n(){try{let e=await fetch("/api/v1/events");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){console.log("Failed to fetch data:",e)}}async function i(){let e=await n(),t=new Date;return e.sort((e,a)=>{let n=new Date(e.start_date),i=new Date(a.start_date);return r(t,n)-r(t,i)})}e(t.exports,"sortDataByDate",()=>i);let r=(e,t)=>(t-e)/864e5}),r("eVKce",function(t,a){function n(e){let t=new Date(e),a=t.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],i=t.getFullYear(),r=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${n} ${a}${r}, ${i}`}e(t.exports,"formatDate",()=>n)});var o=i("800sp"),s=i("evz6q"),l=i("eVKce");class d extends o.LitElement{constructor(){super(),this.eventData=[]}static get properties(){return{eventData:{type:Array,attribute:!1}}}static get styles(){return(0,o.css)`
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

      .event__icon--wrap {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
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
      ${this.eventData.length>0?this.eventData.map(e=>(0,o.html)`
        <div class="event">

        <div class="event-data">
          <h2>${e.title}</h2>
          <div class="event-info">
            <p>${(0,l.formatDate)(e.start_date)} - ${(0,l.formatDate)(e.end_date)}</p>
            <p>Location: ${e.location}</p>
            <p>Details: ${e.details}</p>
          </div>
          </div>
          <div class="event__action-bar">
            <div class="icon__wrap">
              <span class="button__event--edit" title="edit event" data-id="${e.id}"></span>
            </div>
            <div class="icon__wrap">
              <span class="button__event--delete" title="delete event" data-id="${e.id}" @click="${this.deleteEvent}"></span>
            </div>
          </div>
        </div>

        <dialog id="dialog__event--edit">
        
        </dialog>
        `):(0,o.html)`<p>No upcoming events</p>`}
    `}openNewEventForm(){let e=this.shadowRoot.querySelector("#dialog__event--new");e.classList.remove("hidden"),e.classList.add("visible")}closeNewEventForm(){let e=this.shadowRoot.querySelector("#dialog__event--new");e.classList.remove("visible"),e.classList.add("hidden")}async deleteEvent(e){let t=parseInt(e.target.getAttribute("data-id"));try{if((await fetch(`/api/v1/events/${t}`,{method:"DELETE"})).ok)this.eventData=await (0,s.sortDataByDate)();else throw Error("Failed to delete event")}catch(e){console.error("Error:",e),alert("An error occurred while trying to delete the event.")}}async editEvent(e){parseInt(e.target.getAttribute("data-id"))}}customElements.define("event-component",d);
//# sourceMappingURL=news.702a91c2.js.map
