function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var t=globalThis,r={},a={},n=t.parcelRequirefc44;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequirefc44=n);var s=n.register;s("evz6q",function(t,r){async function a(){try{let e=await fetch("/api/v1/events");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){console.log("Failed to fetch data:",e)}}async function n(){let e=await a(),t=new Date;return e.sort((e,r)=>{let a=new Date(e.start_date),n=new Date(r.start_date);return s(t,a)-s(t,n)})}e(t.exports,"sortDataByDate",()=>n);let s=(e,t)=>(t-e)/864e5}),s("eVKce",function(t,r){function a(e){let t=new Date(e),r=t.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],n=t.getFullYear(),s=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(r);return`${a} ${r}${s}, ${n}`}e(t.exports,"formatDate",()=>a)});var o=n("800sp"),i=n("evz6q"),c=n("eVKce");class l extends o.LitElement{constructor(){super(),this.eventData=[]}static get properties(){return{eventData:{type:Array,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
        width: 100%;
        height: max-content;
      }

      .event {
       /* width: max-content; */
       width: 50vw;
      }

      .event:not(:last-child) {
        margin-bottom: 2rem;
      }

      .event-info {
        justify-self: flex-end;
        margin-left: 3rem;
      }

      h2 {
        margin: auto 0;
      }
    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,i.sortDataByDate)(),console.log(this.eventData)}render(){return(console.log("render"),this.eventData.length>1)?(0,o.html)`
      <link rel="stylesheet" href="/index.css">
      <div class="event-list">
        ${this.eventData.map(e=>(0,o.html)`
          <div class="event">
            <h2>${e.title}</h2>
            <div class="event-info">
              <p>${(0,c.formatDate)(e.start_date)} - ${(0,c.formatDate)(e.end_date)}</p>
              <p>Location: ${e.location}</p>
              <p>Details: ${e.details}</p>
            </div>

          </div>
        `)}
      </div>
    `:(0,o.html)`<p>No events</p>`}}customElements.define("event-component",l);
//# sourceMappingURL=news.0d17fa7f.js.map
