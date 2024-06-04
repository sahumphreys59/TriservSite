function t(t,e,a,r){Object.defineProperty(t,e,{get:a,set:r,enumerable:!0,configurable:!0})}var e=globalThis,a={},r={},n=e.parcelRequirefc44;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequirefc44=n);var s=n.register;s("ecmO7",function(e,a){async function r(){try{let t=await fetch("/api/v1/events");if(!t.ok)throw Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){console.log("Failed to fetch data:",t)}}async function n(){let t=await r(),e=new Date;return t.sort((t,a)=>{let r=new Date(t.start_date),n=new Date(a.start_date);return s(e,r)-s(e,n)})}t(e.exports,"sortDataByDate",()=>n);let s=(t,e)=>(e-t)/864e5}),s("baa6D",function(e,a){function r(t){let e=new Date(t),a=e.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear(),s=function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(a);return`${r} ${a}${s}, ${n}`}t(e.exports,"formatDate",()=>r)});var i=n("ecmO7"),o=n("800sp"),c=n("baa6D");class l extends o.LitElement{constructor(){super(),this.eventData=[],this.eventToDisplay={}}static get properties(){return{eventData:{type:Array,attribute:!1},eventData:{type:Object,attribute:!1}}}static get styles(){return(0,o.css)`
      :host {
        display: block;
        width: max-content;
        height: max-content;
        margin: 2rem auto !important;
      }

      h2, h3, h4 {
        color: white;
        font-weight: 300;
      }

    `}async connectedCallback(){super.connectedCallback(),this.eventData=await (0,i.sortDataByDate)(),this.eventData.length>0&&(this.eventToDisplay=this.eventData[0])}render(){return this.eventToDisplay?(0,o.html)`
      <link rel="stylesheet" href="/index.css">
        <h2>Upcoming Event:</h2><span><h3>${this.eventToDisplay.title}</h3></span>
        <div>
          <h4>${(0,c.formatDate)(this.eventToDisplay.start_date)} - ${(0,c.formatDate)(this.eventToDisplay.end_date)}</h4>
          <h4>Location: ${this.eventToDisplay.location}</h4>
        </div>
      `:(0,o.html)``}}customElements.define("show-first-event",l);
//# sourceMappingURL=index.26d97875.js.map
