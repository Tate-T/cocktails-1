import{u as k}from"./modal-c5a8f1cc.js";import{i,g as m,p,l as v,m as f}from"./add-to-favorite-1344d687.js";const a=()=>{const t=JSON.parse(localStorage.getItem("favorite-cocktails"));t!==null&&t.length!==0&&setTimeout(()=>{const o=document.querySelectorAll(".cocktails__item");t.forEach(c=>{o.forEach(e=>{if(c.idDrink===e.id){const s=e.children[1].children[1].children[1];s.children[0].textContent="Remove",s.classList.add("cocktails__remove-favorite"),s.querySelector(".cocktails__icon--white").children[0].setAttribute("href",`${i}#icon-full-heart`),s.querySelector(".cocktails__icon--black").children[0].setAttribute("href",`${i}#icon-full-heart`),setTimeout(()=>{s.classList.remove("cocktails__add-favorite")},500)}})})},500)};a();const l=async t=>{const o=document.querySelector(".cocktails"),c=await m(t);o.innerHTML="",c.forEach(e=>{const s=`
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
                <use href="${i}#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="${i}#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;o.insertAdjacentHTML("beforeend",s)})},g=async t=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then(s=>s.json())).drinks||[]).filter(s=>s.strAlcoholic==="Non alcoholic")}}catch(o){return console.error(o),{drinks:[]}}},y=()=>{const t=document.querySelectorAll(".header__form-input"),o=document.querySelector(".cocktails"),c=document.querySelector(".pagination-box");t.forEach(e=>{e.addEventListener("input",async()=>{if(console.log(e.value),e.value!==""){const s=await g(e.value).then(n=>n.drinks);o.innerHTML="",c.style.display="none",s.forEach(n=>{console.log(n);const r=`
          <li class="cocktails__item" id="${n.idDrink}">
            <img
              src="${n.strDrinkThumb}"
              alt="#"
              class="cocktails__img"
            />

            <div class="cocktails__padding">
              <h3 class="cocktails__subtitle">${n.strDrink}</h3>
              <div class="cocktails__box">
                <button class="cocktails__learn-more">Learn more</button>
                <button class="cocktails__add-favorite cocktails__add-favorite--styles">
                  <span>Add to</span>
                  <svg class="cocktails__icon cocktails__icon--white">
                    <use href="${i}#icon-white-heart"></use>
                  </svg>
                  <svg class="cocktails__icon cocktails__icon--black">
                    <use href="${i}#icon-black-heart"></use>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        `;o.insertAdjacentHTML("beforeend",r),a()})}else l(),a(),c.style.display="flex"})})};y();const d=async t=>{try{return{drinks:((await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(s=>s.json())).drinks||[]).filter(s=>{const n=s.strDrink.toLowerCase().startsWith(t.toLowerCase()),r=s.strDrink.split(" ").length>=2;return n&&r})}}catch(o){return console.error(o),{drinks:[]}}},_=async t=>{const o=document.querySelector(".cocktails");o.innerHTML="",t.forEach(c=>{const e=`
      <li class="cocktails__item" id="${c.idDrink}">
        <img
          src="${c.strDrinkThumb}"
          alt="#"
          class="cocktails__img"
        />

        <div class="cocktails__padding">
          <h3 class="cocktails__subtitle">${c.strDrink}</h3>
          <div class="cocktails__box">
            <button class="cocktails__learn-more">Learn more</button>
            <button class="cocktails__add-favorite cocktails__add-favorite--styles">
              <span>Add to</span>
              <svg class="cocktails__icon cocktails__icon--white">
                <use href="${i}#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="${i}#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;o.insertAdjacentHTML("beforeend",e)})},L=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__button")){const o=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),s=document.querySelector(".pagination-box"),n=await d(t.target.textContent);n.drinks.length===0?(c.classList.add("is-hidden"),o.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),s.classList.add("is-hidden")):(c.classList.remove("is-hidden"),e.classList.add("is-hidden"),o.textContent="Searching results",s.classList.add("is-hidden"),_(n.drinks))}})},b=()=>{const t=document.querySelector(".hero__dropdown"),o=document.querySelector(".hero__dropdown--content"),c=document.querySelector(".hero__box");let e=0;document.addEventListener("click",s=>{s.target.closest(".hero__dropdown")?(e+=1,e===1?(t.classList.add("hero__dropdown--clicked"),t.classList.remove("hero__dropdown--active")):e===2?(t.classList.add("hero__dropdown--active"),o.classList.remove("is-hidden-dropdown"),c.style.height="605px"):e===3&&(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),o.classList.add("is-hidden-dropdown"),c.style.height="auto",e=0)):(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),o.classList.add("is-hidden-dropdown"),c.style.height="auto",e=0)})},w=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__dropdown--button")){const o=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),s=document.querySelector(".pagination-box"),n=await d(t.target.textContent),r=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const h=document.querySelector(".hero__dropdown--content"),u=document.querySelector(".hero__box");r.textContent=t.target.textContent,h.classList.add("is-hidden"),u.style.height="auto",n.drinks.length===0?(c.classList.add("is-hidden"),o.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),s.classList.add("is-hidden")):(c.classList.remove("is-hidden"),e.classList.add("is-hidden"),o.textContent="Searching results",s.classList.add("is-hidden"),console.log(n),_(n.drinks))}})};b();w();L();const S=async()=>{try{await p(l),v(),f(),k()}catch(t){console.error(t)}};S();const E=()=>{const t=document.querySelector(".ingredients-backdrop");document.addEventListener("click",o=>{o.target.classList.contains("modal__text")&&(t.classList.remove("is-hidden"),document.body.classList.add("no-scroll"))})},q=()=>{const t=document.querySelectorAll(".modal__close"),o=document.querySelector(".ingredients-backdrop");t.forEach(e=>{e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})}),document.querySelectorAll(".modal__item").forEach(e=>{e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})};document.addEventListener("DOMContentLoaded",()=>{E(),q()});
