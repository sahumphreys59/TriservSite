function t(t,e,a,r){Object.defineProperty(t,e,{get:a,set:r,enumerable:!0,configurable:!0})}var e=globalThis,a={},r={},n=e.parcelRequirefc44;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequirefc44=n);var i=n.register;i("ecmO7",function(e,a){async function r(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.log("Failed to fetch data:",t)}}async function n(){let t=await r(),e=new Date;return t.sort((t,a)=>{let r=new Date(t.start_date),n=new Date(a.start_date);return i(e,r)-i(e,n)})}t(e.exports,"sortDataByDate",()=>n);let i=(t,e)=>(e-t)/864e5}),i("baa6D",function(e,a){function r(t){let e=new Date(t),a=e.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear(),i=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${r} ${a}${i}, ${n}`}t(e.exports,"formatDate",()=>r)});var s=n("ecmO7"),o=n("800sp"),c=n("baa6D");class l extends o.LitElement{constructor(){super(),this.eventData=[],this.eventToDisplay={}}static get properties(){return{eventData:{type:Array,attribute:!1},eventData:{type:Object,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
        width: max-content;
        height: max-content;
        margin: 1rem auto !important;
        background-color: transparent;
        background-color: hsla(0, 0%, 0%, .5);
        padding: 2rem 4rem;
      }

      h2, h3, h4 {
        color: white;
        font-weight: 300;
      }

      .event-container {
        display: flex;
      }

    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,s.sortDataByDate)(),this.eventData.length>0&&(this.eventToDisplay=this.eventData[0])}render(){return this.eventToDisplay?(0,o.html)`
      <link rel="stylesheet" href="/index.css">
        <div class="event-container">
          <h2>Upcoming Event:</h2>
          <div>
            <h3>${this.eventToDisplay.title}</h3>
            <h4>${(0,c.formatDate)(this.eventToDisplay.start_date)} - ${(0,c.formatDate)(this.eventToDisplay.end_date)}</h4>
            <h4>Location: ${this.eventToDisplay.location}</h4>
          </div>
        </div>

      `:(0,o.html)``}}customElements.define("show-first-event",l);
//# sourceMappingURL=index.9eb5be93.js.map
