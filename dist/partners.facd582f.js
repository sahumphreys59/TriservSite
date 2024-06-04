var r=globalThis,e={},t={},n=r.parcelRequirefc44;null==n&&((n=function(r){if(r in e)return e[r].exports;if(r in t){var n=t[r];delete t[r];var a={id:r,exports:{}};return e[r]=a,n.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(r,e){t[r]=e},r.parcelRequirefc44=n),n.register;var a=n("800sp");class i extends a.LitElement{constructor(){super(),this.partnerDataArr=[]}static get properties(){return{partnerDataArr:{type:Array,attribute:!1}}}static get styles(){return(0,a.css)`
      :host {
        display: block;
        width: 100%;
        height: max-content;
      }

      .partner-wrap:not(:last-child) {
        margin-bottom: 2rem;
      }

      .partner-logo {
        height:70px;
        width: auto;
      }

      .row > * {
        flex: 1;
      }
    `}async connectedCallback(){super.connectedCallback(),console.log("partners connected callback");try{let r=await fetch("../partnerData.json");if(!r.ok)throw Error("Failed to fetch JSON");this.partnerDataArr=await r.json(),console.log("here",this.partnerDataArr.length)}catch(r){console.error("Error fetching JSON: ",r)}}render(){return(console.log("partner render"),this.partnerDataArr.length&&this.partnerDataArr.length>0)?(0,a.html)`
      <link rel="stylesheet" href="/index.css">

        ${this.partnerDataArr.map(r=>(0,a.html)`
          <div class="row__layer-01 partner-wrap">
            <div class="partner-info flex-item">
              ${this.renderCompany(r.company)}
              ${this.renderCountries(r.countries)}
              ${this.renderContact(r.contact)}
              ${this.renderPhone(r.phone)}
              ${this.renderMobile(r.mobile)}
              ${this.renderEmail(r.email)}
              ${this.renderAddress(r.address)}
              ${this.renderWebsite(r.website)}
              ${this.renderSummary(r.summary)}
            </div>
            ${this.renderLogo(r.logo)}
          </div>
        `)}

      
      `:(0,a.html)`<p>No data</p>`}renderCompany(r){if(r.length>0)return(0,a.html)`<h2>${r}</h2>`}renderCountries(r){if(r.length>0)return(0,a.html)`<h4>${r}</h4>`}renderContact(r){if(r.length>0)return(0,a.html)`<p>Contact: ${r}</p>`}renderPhone(r){if(r.length>0)return(0,a.html)`<p>Phone: ${r}</p>`}renderMobile(r){if(r.length>0)return(0,a.html)`<p>Mobile: ${r}</p>`}renderEmail(r){if(r.length>0)return(0,a.html)`<p>Email: <a href="mailto:${r}">${r}</a></p>`}renderAddress(r){if(r.length>0)return(0,a.html)`<p>Address: ${r}</p>`}renderSummary(r){if(r.length>0)return(0,a.html)`<p>Summary: ${r}</p>`}renderWebsite(r){if(r.length>0)return(0,a.html)`<p>Website: <a href="str" target="_blank">${r}</a></p>`}renderLogo(r){if(r.length>0)return(0,a.html)`
      <div class="flex-item">
        <img src="../${r}" class="partner-logo">
      </div>
      `}}customElements.define("partner-component",i);
//# sourceMappingURL=partners.facd582f.js.map
