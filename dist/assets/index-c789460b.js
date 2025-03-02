import{u}from"./header-7e68b570.js";import{g as k,p as m,l as v,m as f}from"./modal-06e865c3.js";const a=()=>{const t=JSON.parse(localStorage.getItem("favorite-cocktails"));t!==null&&t.length!==0&&setTimeout(()=>{const s=document.querySelectorAll(".cocktails__item");t.forEach(c=>{s.forEach(o=>{if(c.idDrink===o.id){const e=o.children[1].children[1].children[1];e.children[0].textContent="Remove",e.classList.add("cocktails__remove-favorite"),e.querySelector(".cocktails__icon--white").children[0].setAttribute("href","./assets/icons/symbol-defs.svg#icon-full-heart"),e.querySelector(".cocktails__icon--black").children[0].setAttribute("href","./assets/icons/symbol-defs.svg#icon-full-heart"),setTimeout(()=>{e.classList.remove("cocktails__add-favorite")},500)}})})},500)};a();const r=async t=>{const s=document.querySelector(".cocktails"),c=await k(t);s.innerHTML="",c.forEach(o=>{const e=`
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
                <use href="../assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="../assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;s.insertAdjacentHTML("beforeend",e)})},g=async t=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then(e=>e.json())).drinks||[]).filter(e=>e.strAlcoholic==="Non alcoholic")}}catch(s){return console.error(s),{drinks:[]}}},p=()=>{const t=document.querySelector(".header__form-input"),s=document.querySelector(".cocktails"),c=document.querySelector(".pagination-box");t.addEventListener("input",async()=>{if(console.log(t.value),t.value!==""){const o=await g(t.value).then(e=>e.drinks);s.innerHTML="",c.style.display="none",o.forEach(e=>{console.log(e);const n=`
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
        `;s.insertAdjacentHTML("beforeend",n),a()})}else r(),a(),c.style.display="flex"})};p();const l=async t=>{try{return{drinks:((await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(e=>e.json())).drinks||[]).filter(e=>{const n=e.strDrink.toLowerCase().startsWith(t.toLowerCase()),i=e.strDrink.split(" ").length>=2;return n&&i})}}catch(s){return console.error(s),{drinks:[]}}},d=async t=>{const s=document.querySelector(".cocktails");s.innerHTML="",t.forEach(c=>{const o=`
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
                <use href="./assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="./assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;s.insertAdjacentHTML("beforeend",o)})},y=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__button")){const s=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),o=document.querySelector(".icon-frame"),e=document.querySelector(".pagination-box"),n=await l(t.target.textContent);n.drinks.length===0?(c.classList.add("is-hidden"),s.textContent="Sorry, we didn't find any cocktail for you",o.classList.remove("is-hidden"),e.classList.add("is-hidden")):(c.classList.remove("is-hidden"),o.classList.add("is-hidden"),s.textContent="Searching results",e.classList.add("is-hidden"),d(n.drinks))}})},b=()=>{const t=document.querySelector(".hero__dropdown"),s=document.querySelector(".hero__dropdown--content"),c=document.querySelector(".hero__box");let o=0;document.addEventListener("click",e=>{e.target.closest(".hero__dropdown")?(o+=1,o===1?(t.classList.add("hero__dropdown--clicked"),t.classList.remove("hero__dropdown--active")):o===2?(t.classList.add("hero__dropdown--active"),s.classList.remove("is-hidden-dropdown"),c.style.height="605px"):o===3&&(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),s.classList.add("is-hidden-dropdown"),c.style.height="auto",o=0)):(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),s.classList.add("is-hidden-dropdown"),c.style.height="auto",o=0)})},L=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__dropdown--button")){const s=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),o=document.querySelector(".icon-frame"),e=document.querySelector(".pagination-box"),n=await l(t.target.textContent),i=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const _=document.querySelector(".hero__dropdown--content"),h=document.querySelector(".hero__box");i.textContent=t.target.textContent,_.classList.add("is-hidden"),h.style.height="auto",n.drinks.length===0?(c.classList.add("is-hidden"),s.textContent="Sorry, we didn't find any cocktail for you",o.classList.remove("is-hidden"),e.classList.add("is-hidden")):(c.classList.remove("is-hidden"),o.classList.add("is-hidden"),s.textContent="Searching results",e.classList.add("is-hidden"),console.log(n),d(n.drinks))}})};b();L();y();const w=async()=>{try{await m(r),v(),f(),u()}catch(t){console.error(t)}};w();const S=()=>{const t=document.querySelector(".ingridients-backdrop");document.addEventListener("click",s=>{s.target.classList.contains("modal__text")&&(t.classList.remove("is-hidden"),document.body.classList.add("no-scroll"))})},E=()=>{const t=document.querySelectorAll(".modal__close"),s=document.querySelector(".ingridients-backdrop");t.forEach(o=>{o.addEventListener("click",()=>{s.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})}),document.querySelectorAll(".modal__item").forEach(o=>{o.addEventListener("click",()=>{s.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})};S();E();
