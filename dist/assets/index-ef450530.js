import{u as k}from"./header-7e68b570.js";import{i,g as m,p,l as v,m as f}from"./modal-e3b82751.js";const r=()=>{const t=JSON.parse(localStorage.getItem("favorite-cocktails"));t!==null&&t.length!==0&&setTimeout(()=>{const e=document.querySelectorAll(".cocktails__item");t.forEach(c=>{e.forEach(o=>{if(c.idDrink===o.id){const s=o.children[1].children[1].children[1];s.children[0].textContent="Remove",s.classList.add("cocktails__remove-favorite"),s.querySelector(".cocktails__icon--white").children[0].setAttribute("href",`${i}icon-full-heart`),s.querySelector(".cocktails__icon--black").children[0].setAttribute("href",`${i}#icon-full-heart`),setTimeout(()=>{s.classList.remove("cocktails__add-favorite")},500)}})})},500)};r();const l=async t=>{const e=document.querySelector(".cocktails"),c=await m(t);e.innerHTML="",c.forEach(o=>{const s=`
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
                <use href="${i}#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="${i}#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;e.insertAdjacentHTML("beforeend",s)})},g=async t=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then(s=>s.json())).drinks||[]).filter(s=>s.strAlcoholic==="Non alcoholic")}}catch(e){return console.error(e),{drinks:[]}}},y=()=>{const t=document.querySelector(".header__form-input"),e=document.querySelector(".cocktails"),c=document.querySelector(".pagination-box");t.addEventListener("input",async()=>{if(console.log(t.value),t.value!==""){const o=await g(t.value).then(s=>s.drinks);e.innerHTML="",c.style.display="none",o.forEach(s=>{console.log(s);const n=`
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
        `;e.insertAdjacentHTML("beforeend",n),r()})}else l(),r(),c.style.display="flex"})};y();const d=async t=>{try{return{drinks:((await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(s=>s.json())).drinks||[]).filter(s=>{const n=s.strDrink.toLowerCase().startsWith(t.toLowerCase()),a=s.strDrink.split(" ").length>=2;return n&&a})}}catch(e){return console.error(e),{drinks:[]}}},_=async t=>{const e=document.querySelector(".cocktails");e.innerHTML="",t.forEach(c=>{const o=`
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
    `;e.insertAdjacentHTML("beforeend",o)})},L=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__button")){const e=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),o=document.querySelector(".icon-frame"),s=document.querySelector(".pagination-box"),n=await d(t.target.textContent);n.drinks.length===0?(c.classList.add("is-hidden"),e.textContent="Sorry, we didn't find any cocktail for you",o.classList.remove("is-hidden"),s.classList.add("is-hidden")):(c.classList.remove("is-hidden"),o.classList.add("is-hidden"),e.textContent="Searching results",s.classList.add("is-hidden"),_(n.drinks))}})},b=()=>{const t=document.querySelector(".hero__dropdown"),e=document.querySelector(".hero__dropdown--content"),c=document.querySelector(".hero__box");let o=0;document.addEventListener("click",s=>{s.target.closest(".hero__dropdown")?(o+=1,o===1?(t.classList.add("hero__dropdown--clicked"),t.classList.remove("hero__dropdown--active")):o===2?(t.classList.add("hero__dropdown--active"),e.classList.remove("is-hidden-dropdown"),c.style.height="605px"):o===3&&(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),e.classList.add("is-hidden-dropdown"),c.style.height="auto",o=0)):(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),e.classList.add("is-hidden-dropdown"),c.style.height="auto",o=0)})},w=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__dropdown--button")){const e=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),o=document.querySelector(".icon-frame"),s=document.querySelector(".pagination-box"),n=await d(t.target.textContent),a=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const h=document.querySelector(".hero__dropdown--content"),u=document.querySelector(".hero__box");a.textContent=t.target.textContent,h.classList.add("is-hidden"),u.style.height="auto",n.drinks.length===0?(c.classList.add("is-hidden"),e.textContent="Sorry, we didn't find any cocktail for you",o.classList.remove("is-hidden"),s.classList.add("is-hidden")):(c.classList.remove("is-hidden"),o.classList.add("is-hidden"),e.textContent="Searching results",s.classList.add("is-hidden"),console.log(n),_(n.drinks))}})};b();w();L();const S=async()=>{try{await p(l),v(),f(),k()}catch(t){console.error(t)}};S();const E=()=>{const t=document.querySelector(".ingridients-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("modal__text")&&(t.classList.remove("is-hidden"),document.body.classList.add("no-scroll"))})},q=()=>{const t=document.querySelectorAll(".modal__close"),e=document.querySelector(".ingridients-backdrop");t.forEach(o=>{o.addEventListener("click",()=>{e.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})}),document.querySelectorAll(".modal__item").forEach(o=>{o.addEventListener("click",()=>{e.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})};E();q();
