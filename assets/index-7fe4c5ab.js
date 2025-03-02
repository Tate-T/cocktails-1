import{u}from"./header-7e68b570.js";import{g as k,p as m,l as v,m as g}from"./modal-2ce7dd6c.js";const i=()=>{const s=JSON.parse(localStorage.getItem("favorite-cocktails"));s!==null&&s.length!==0&&setTimeout(()=>{const t=document.querySelectorAll(".cocktails__item");s.forEach(c=>{t.forEach(e=>{if(c.idDrink===e.id){const o=e.children[1].children[1].children[1];o.children[0].textContent="Remove",o.classList.add("cocktails__remove-favorite"),o.querySelector(".cocktails__icon--white").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),o.querySelector(".cocktails__icon--black").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),setTimeout(()=>{o.classList.remove("cocktails__add-favorite")},500)}})})},500)};i();const l=async s=>{const t=document.querySelector(".cocktails"),c=await k(s);t.innerHTML="",c.forEach(e=>{const o=`
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
    `;t.insertAdjacentHTML("beforeend",o)})},f=async s=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${s}`).then(o=>o.json())).drinks||[]).filter(o=>o.strAlcoholic==="Non alcoholic")}}catch(t){return console.error(t),{drinks:[]}}},p=()=>{const s=document.querySelector(".header__form-input"),t=document.querySelector(".cocktails"),c=document.querySelector(".pagination-box");s.addEventListener("input",async()=>{if(console.log(s.value),s.value!==""){const e=await f(s.value).then(o=>o.drinks);t.innerHTML="",c.style.display="none",e.forEach(o=>{console.log(o);const n=`
          <li class="cocktails__item" id="${o.idDrink}">
            <img
              src="${o.strDrinkThumb}"
              alt="#"
              class="cocktails__img"
            />

            <div class="cocktails__padding">
              <h3 class="cocktails__subtitle">${o.strDrink}</h3>
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
        `;t.insertAdjacentHTML("beforeend",n),i()})}else l(),i(),c.style.display="flex"})};p();const r=async s=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${s}`).then(o=>o.json())).drinks||[]).filter(o=>o.strAlcoholic==="Non alcoholic")}}catch(t){return console.error(t),{drinks:[]}}},d=async s=>{const t=document.querySelector(".cocktails");t.innerHTML="",s.forEach(c=>{const e=`
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
                <use href="../../assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="../../assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;t.insertAdjacentHTML("beforeend",e)})},y=()=>{document.addEventListener("click",async s=>{if(s.target.classList.contains("hero__button")){const t=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),o=document.querySelector(".pagination-box"),n=await r(s.target.textContent);n.drinks.length===0?(c.classList.add("is-hidden"),t.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),o.classList.add("is-hidden")):(c.classList.remove("is-hidden"),e.classList.add("is-hidden"),t.textContent="Searching results",o.classList.add("is-hidden"),d(n.drinks))}})},b=()=>{const s=document.querySelector(".hero__dropdown"),t=document.querySelector(".hero__dropdown--content"),c=document.querySelector(".hero__box");let e=0;document.addEventListener("click",o=>{o.target.closest(".hero__dropdown")?(e+=1,e===1?(s.classList.add("hero__dropdown--clicked"),s.classList.remove("hero__dropdown--active")):e===2?(s.classList.add("hero__dropdown--active"),t.classList.remove("is-hidden-dropdown"),c.style.height="605px"):e===3&&(s.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),t.classList.add("is-hidden-dropdown"),c.style.height="auto",e=0)):(s.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),t.classList.add("is-hidden-dropdown"),c.style.height="auto",e=0)})},L=()=>{document.addEventListener("click",async s=>{if(s.target.classList.contains("hero__dropdown--button")){const t=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),e=document.querySelector(".icon-frame"),o=document.querySelector(".pagination-box"),n=await r(s.target.textContent),a=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const _=document.querySelector(".hero__dropdown--content"),h=document.querySelector(".hero__box");a.textContent=s.target.textContent,_.classList.add("is-hidden"),h.style.height="auto",n.drinks.length===0?(c.classList.add("is-hidden"),t.textContent="Sorry, we didn't find any cocktail for you",e.classList.remove("is-hidden"),o.classList.add("is-hidden")):(c.classList.remove("is-hidden"),e.classList.add("is-hidden"),t.textContent="Searching results",o.classList.add("is-hidden"),console.log(n),d(n.drinks))}})};b();L();y();const w=async()=>{try{await m(l),v(),g(),u()}catch(s){console.error(s)}};w();const S=()=>{const s=document.querySelector(".ingridients-backdrop");document.addEventListener("click",t=>{t.target.classList.contains("modal__text")&&(s.classList.remove("is-hidden"),document.body.classList.add("no-scroll"))})},E=()=>{const s=document.querySelectorAll(".modal__close"),t=document.querySelector(".ingridients-backdrop");s.forEach(e=>{e.addEventListener("click",()=>{t.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})}),document.querySelectorAll(".modal__item").forEach(e=>{e.addEventListener("click",()=>{t.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})};S();E();
