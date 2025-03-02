import{u as h}from"./header-7e68b570.js";import{g as _,p as u,l as k,m}from"./modal-869c7aeb.js";const a=async t=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`).then(c=>c.json())).drinks||[]).filter(c=>c.strAlcoholic==="Non alcoholic")}}catch(o){return console.error(o),{drinks:[]}}},r=async t=>{const o=document.querySelector(".cocktails");o.innerHTML="",t.forEach(s=>{const e=`
      <li class="cocktails__item" id="${s.idDrink}">
        <img
          src="${s.strDrinkThumb}"
          alt="#"
          class="cocktails__img"
        />

        <div class="cocktails__padding">
          <h3 class="cocktails__subtitle">${s.strDrink}</h3>
          <div class="cocktails__box">
            <button class="cocktails__learn-more">Learn more</button>
            <button class="cocktails__add-favorite cocktails__add-favorite--styles">
              <span>Add to</span>
              <svg class="cocktails__icon cocktails__icon--white">
                <use href="../../assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="../../assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;o.insertAdjacentHTML("beforeend",e)})},v=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__button")){const o=document.querySelector(".cocktails__title"),s=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),c=document.querySelector(".pagination-box"),n=await a(t.target.textContent);n.drinks.length===0?(s.classList.add("is-hidden"),o.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),c.classList.add("is-hidden")):(s.classList.remove("is-hidden"),e.classList.add("is-hidden"),o.textContent="Searching results",c.classList.add("is-hidden"),r(n.drinks))}})},f=()=>{const t=document.querySelector(".hero__dropdown"),o=document.querySelector(".hero__dropdown--content"),s=document.querySelector(".hero__box");let e=0;document.addEventListener("click",c=>{c.target.closest(".hero__dropdown")?(e+=1,e===1?(t.classList.add("hero__dropdown--clicked"),t.classList.remove("hero__dropdown--active")):e===2?(t.classList.add("hero__dropdown--active"),o.classList.remove("is-hidden-dropdown"),s.style.height="605px"):e===3&&(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),o.classList.add("is-hidden-dropdown"),s.style.height="auto",e=0)):(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),o.classList.add("is-hidden-dropdown"),s.style.height="auto",e=0)})},g=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__dropdown--button")){const o=document.querySelector(".cocktails__title"),s=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),c=document.querySelector(".pagination-box"),n=await a(t.target.textContent),i=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const l=document.querySelector(".hero__dropdown--content"),d=document.querySelector(".hero__box");i.textContent=t.target.textContent,l.classList.add("is-hidden"),d.style.height="auto",n.drinks.length===0?(s.classList.add("is-hidden"),o.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),c.classList.add("is-hidden")):(s.classList.remove("is-hidden"),e.classList.add("is-hidden"),o.textContent="Searching results",c.classList.add("is-hidden"),console.log(n),r(n.drinks))}})};f();g();v();const y=async t=>{const o=document.querySelector(".cocktails"),s=await _(t);o.innerHTML="",s.forEach(e=>{const c=`
      <li class="cocktails__item" id="${e.idDrink}">
        <img
          src="${e.strDrinkThumb}"
          alt="#"
          class="cocktails__img"
        />

        <div class="cocktails__padding">
          <h3 class="cocktails__subtitle">${e.strDrink}</h3>
          <div class="cocktails__box">
            <button class="cocktails__learn-more">Learn more</button>
            <button class="cocktails__add-favorite cocktails__add-favorite--styles">
              <span>Add to</span>
              <svg class="cocktails__icon cocktails__icon--white">
                <use href="../../assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="../../assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;o.insertAdjacentHTML("beforeend",c)})},p=async()=>{try{await u(y),k(),m(),h()}catch(t){console.error(t)}};p();const L=()=>{const t=document.querySelector(".ingridients-backdrop");document.addEventListener("click",o=>{o.target.classList.contains("modal__text")&&(t.classList.remove("is-hidden"),document.body.classList.add("no-scroll"))})},b=()=>{const t=document.querySelectorAll(".modal__close"),o=document.querySelector(".ingridients-backdrop");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})}),document.querySelectorAll(".modal__item").forEach(e=>{e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})};L();b();const w=()=>{const t=JSON.parse(localStorage.getItem("favorite-cocktails"));t!==null&&t.length!==0&&setTimeout(()=>{const o=document.querySelectorAll(".cocktails__item");t.forEach(s=>{o.forEach(e=>{if(s.idDrink===e.id){const c=e.children[1].children[1].children[1];c.children[0].textContent="Remove",c.classList.add("cocktails__remove-favorite"),c.querySelector(".cocktails__icon--white").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),c.querySelector(".cocktails__icon--black").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),setTimeout(()=>{c.classList.remove("cocktails__add-favorite")},500)}})})},500)};w();
