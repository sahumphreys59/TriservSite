function t(t,e,r,a){Object.defineProperty(t,e,{get:r,set:a,enumerable:!0,configurable:!0})}var e=globalThis,r={},a={},n=e.parcelRequirefc44;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequirefc44=n);var s=n.register;s("evz6q",function(e,r){async function a(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.error("Failed to fetch data:",t)}}async function n(){let t=await a(),e=new Date;return t.sort((t,r)=>{let a=new Date(t.start_date),n=new Date(r.start_date);return s(e,a)-s(e,n)})}t(e.exports,"sortDataByDate",()=>n);let s=(t,e)=>(e-t)/864e5}),s("eVKce",function(e,r){function a(t){let e=new Date(t),r=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear(),s=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(r);return`${a} ${r}${s}, ${n}`}t(e.exports,"formatDate",()=>a)});var i=n("evz6q"),o=n("800sp"),c=n("eVKce");class l extends o.LitElement{constructor(){super(),this.eventData=[],this.eventToDisplay={}}static get properties(){return{eventData:{type:Array,attribute:!1},eventData:{type:Object,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
        width: max-content;
        height: max-content;
        background-color: transparent;
        background-color: hsla(0, 0%, 0%, .7);
        padding: 2rem;
      }

      h2, h3, h4 {
        color: white;
        font-weight: 300;
      }

      .event-container {
        display: flex;
        gap: 2rem;
      }

    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,i.sortDataByDate)(),this.eventData.length>0&&(this.eventToDisplay=this.eventData[0])}render(){return this.eventToDisplay?(0,o.html)`
      <link rel="stylesheet" href="/index.css">
        <div class="event-container">
          <h3 class="heading">Upcoming Event:</h3>
          <div>
            <h3>${this.eventToDisplay.title}</h3>
            <h4>${(0,c.formatDate)(this.eventToDisplay.start_date)} - ${(0,c.formatDate)(this.eventToDisplay.end_date)}</h4>
            <h4>Location: ${this.eventToDisplay.location}</h4>
          </div>
        </div>

      `:(0,o.html)``}}customElements.define("show-first-event",l);
//# sourceMappingURL=index.d4e2fc61.js.map
