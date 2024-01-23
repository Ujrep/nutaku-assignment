const c=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};c();class i{constructor({id:s,text:o,small:a,type:e,onClick:t=()=>{}}){this.id=s,this.text=o,this.onClick=t,this.type=e==="secondary"?"secondary":"primary",this.small=a}render(){return`
        <button id="${this.id}" onclick="(${this.onClick})()" class="button ${this.small?"button--small":""} button--${this.type}">
          ${this.text}
        </button>
    `}}class d{constructor(){this.preOrderButton=new i({text:"Pre-Order",onClick:()=>{document.querySelector("#preorder-modal").classList.add("modal--show")},id:"preorder"})}render(){return`
        <header class="header">
          <p class="header-subtitle">The spicy as fuck</p>

          <h1 class="header-title">HENTAI HOT SAUCE</h1>

          ${this.preOrderButton.render()}
        </header>
    `}}var u="/nutaku-assignment/assets/bottle-lineup.3b8c723f.png";class h{constructor(){}render(){return`
      <section class="info">
        <div class="info-right">
          <div class="info-texts">
            <div class="info-text">
              <h2 class="info-title">WHERE IS MY HOT SAUCE?</h2>
              <p class="info-description">Due to overwhelming demand we blasted through our first batch of hot sauce in no time. We honestly thought this would last us a little while at least, but we burned through it in a matter of hours. You all really love Hentai and Hot Sauce!!!</p>
            </div>

            <div class="info-text">
              <h2 class="info-title">NEW INGREDIENTS</h2>
              <p class="info-description">
                The first batch of hot sauce used a specific kind of fermentation process which would take a very long time to go through again. The original plan was to only release 1 batch of this premium hot sauce, but the demand was so high we have decided to start permanent production and fulfillment.

                This means we have also had to change the receipt slightly to accommodate faster production and fulfillment. The new recipe contains the below ingredients:
              </p>

              <blockquote class="info-quote"> 
                Selected Hot Peppers, Apple Juice*, Apple Sauce*, Cider vinegar*, Carrots, Onions*, Maple Syrup*, Tomato Paste*, Garlic, Salt, Spices, Xanthan Gum (GMO Free).  *Organic Ingredients
              </blockquote>

              <h3 class="info-headline">Don't worry, this new recipe will still make you say "Fuck me, it's so hot!"</h3>
            </div>
          </div>
        </div>

        <div class="info-left">
          <div class="info-texts">
            <div class="info-text">
              <img src="${u}" alt="Bottle Lineup"/>
              <span class="info-restocking">RESTOCKING...</span>
              <p class="info-contact">If you have any questions please reach out to <span class="info-email">hotsauce@nutaku.net</span></p>
            </div>
          </div>
        </div>
      </section>
      <div class="info-text info-text--black">
        <h2 class="info-title">Production timeline</h2>
        <p class="info-description">We're super excited to get this 100% Canadian made lewd sauce in as many hands, and mouths, as possible, and we know you want it to. So in order to keep everyone as informed as possible please find the most up-to-date production schedule below.</p>
      </div>
    `}}var p="/nutaku-assignment/assets/production.a8073307.png",m="/nutaku-assignment/assets/quality-control.8f0927b5.png",f="/nutaku-assignment/assets/delivery-nutaku.ea155b44.jpg",v="/nutaku-assignment/assets/second-quality-control.eb25cb46.jpg",g="/nutaku-assignment/assets/packaging.48f4c6c5.jpg",b="/nutaku-assignment/assets/delivery-final.1baece6b.png";const k={done:"DONE!",progress:"IN-PROGRESS",empty:""},y=[{name:"PRODUCTION (FERMENTING, MIXING)",icon:p},{name:"BOTTLING & QUALITY CONTROL",icon:m},{name:"DELIVERY TO NUTAKU HQ",icon:f},{name:"SECOND QUALITY CONTROL",icon:v},{name:"HAND PACKAGING",icon:g},{name:"SHIPPING TO HENTAI LOVERS",icon:b}];class w{constructor(){const s=new URLSearchParams(window.location.search),o=parseInt(s.get("active"),10);this.active=o>5?6:o,this.steps=y.map((a,e)=>{let t="empty";return e<o?t="done":e===o&&(t="progress"),{...a,status:t}})}render(){return`
        <section class="tracker">
          <div class="tracker-items">
            ${this.steps.map(s=>`
                <div class="tracker-item">
                  <img class="tracker-logo" src="${s.icon}" alt="step-icons" />
                  <p class="tracker-title">${s.name}</p>
                  <div class="tracker-status">
                    <div class="tracker-bubble tracker-bubble--${s.status}"></div>
                    <p class="tracker-statusText">${k[s.status]}</p>
                  </div>
                </div>
              `).join("")}
          </div>
          
          <div class="tracker-bottle">
            <div class="tracker-bottleCap">
            </div>
            <div class="tracker-bottleTop ${this.active===6?"tracker-bottleTop--fill":""}">
            </div>
            <div class="tracker-bottleBottom">
              <div class="tracker-bottleLabel">
              </div>
              <div class="tracker-bottleLabelSide">
              </div>
              <div class="tracker-bottleFiller tracker-bottleFiller--level${this.active}"></div>
            </div>
          </div>
        </section>
    `}}var I="/nutaku-assignment/assets/nutaku-logo.3f182e7e.png";class O{constructor(){this.PreOrderButton=new i({text:"Pre-Order"})}render(){return`
        <footer class="footer">
          <p class="footer-subtitle">The spicy as fuck</p>

          <h1 class="footer-title">HENTAI HOT SAUCE</h1>

          <div class="footer-buttons">
            ${this.PreOrderButton.render()}
          </div>

          <a href="//nutaku.com" class="footer-logo">
            <img src="${I}" alt="Nutaku logo"/>
          </a>
        </footer>
    `}}class l{constructor({type:s,name:o,placeholder:a}){this.type=s||"text",this.name=o,this.placeholder=a}render(){return`
      <label for="inp" class="input-group">
        <input class="input" type="${this.type}" name="${this.name}" id="inp" placeholder="${this.placeholder}" required>
      </label>
    `}}class T{constructor(){this.PreOrderButton=new i({id:"submit",text:"Submit",small:!0}),this.CancelButton=new i({id:"cancel",text:"Cancel",small:!0,type:"secondary",onClick:()=>{document.querySelector("#preorder-modal").classList.remove("modal--show")}}),this.NameInput=new l({type:"text",name:"name",placeholder:"Name"}),this.EmailInput=new l({type:"email",name:"email",placeholder:"Email"}),this.onSubmit=async()=>{const{success:s}=await Promise.resolve({success:!0});return s&&(document.querySelector(".modal-fields").classList.remove("modal-fields--show"),document.querySelector(".modal-success").classList.add("modal-success--show"),document.querySelector("#submit").remove()),!1}}render(){return`
        <div class="modal" id="preorder-modal">
          <div class="modal-container">
            <div class="modal-title">
              Pre-Order
            </div>
            <div class="modal-content">
              <form class="modal-form"  onsubmit="(${this.onSubmit})(); return false;">
                  <div class="modal-success">
                    You successfully pre-ordered the sauce 
                  </div>                  
                  <div class="modal-fields modal-fields--show">
                    ${this.NameInput.render()}
                    ${this.EmailInput.render()}
                  </div>
                  <div class="modal-buttons">
                    ${this.CancelButton.render()}
                    ${this.PreOrderButton.render()}
                  </div>
              </form>
            </div>
          </div>
        </div>
    `}}class N{constructor(){this.Info=new h,this.Tracker=new w,this.Footer=new O,this.Modal=new T,this.Header=new d({showModal:this.Modal.showModal})}init(){const s=document.getElementById("app"),o=this.Header.render(),a=this.Info.render(),e=this.Tracker.render(),t=this.Footer.render(),n=this.Modal.render();s.innerHTML=`
        ${o}
        ${a}
        ${e}
        ${t}
        ${n}
    `}}const S=new N;window.addEventListener("load",()=>S.init());
