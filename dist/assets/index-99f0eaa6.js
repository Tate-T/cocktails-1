import{g as h,p as _,l as u,m as k,u as m}from"./modal-66edb3a0.js";const a=async t=>{try{return{drinks:((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`).then(o=>o.json())).drinks||[]).filter(o=>o.strAlcoholic==="Non alcoholic")}}catch(e){return console.error(e),{drinks:[]}}},r=async t=>{const e=document.querySelector(".cocktails");e.innerHTML="",t.forEach(c=>{const s=`
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
    `;e.insertAdjacentHTML("beforeend",s)})},f=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__button")){const e=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),s=document.querySelector(".icon-frame"),o=document.querySelector(".pagination-box"),i=await a(t.target.textContent);i.drinks.length===0?(c.classList.add("is-hidden"),e.textContent="Sorry, we didn't find any cocktail for you",s.classList.remove("is-hidden"),o.classList.add("is-hidden")):(c.classList.remove("is-hidden"),s.classList.add("is-hidden"),e.textContent="Searching results",o.classList.add("is-hidden"),r(i.drinks))}})},g=()=>{const t=document.querySelector(".hero__dropdown"),e=document.querySelector(".hero__dropdown--content"),c=document.querySelector(".hero__box");let s=0;document.addEventListener("click",o=>{o.target.closest(".hero__dropdown")?(s+=1,s===1?(t.classList.add("hero__dropdown--clicked"),t.classList.remove("hero__dropdown--active")):s===2?(t.classList.add("hero__dropdown--active"),e.classList.remove("is-hidden-dropdown"),c.style.height="605px"):s===3&&(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),e.classList.add("is-hidden-dropdown"),c.style.height="auto",s=0)):(t.classList.remove("hero__dropdown--clicked","hero__dropdown--active"),e.classList.add("is-hidden-dropdown"),c.style.height="auto",s=0)})},v=()=>{document.addEventListener("click",async t=>{if(t.target.classList.contains("hero__dropdown--button")){const e=document.querySelector(".cocktails__title"),c=document.querySelector(".cocktails"),s=document.querySelector(".icon-frame"),o=document.querySelector(".pagination-box"),i=await a(t.target.textContent),n=document.querySelector(".hero__dropdown--selected");document.querySelector(".hero__dropdown");const l=document.querySelector(".hero__dropdown--content"),d=document.querySelector(".hero__box");n.textContent=t.target.textContent,l.classList.add("is-hidden"),d.style.height="auto",i.drinks.length===0?(c.classList.add("is-hidden"),e.textContent="Sorry, we didn't find any cocktail for you",s.classList.remove("is-hidden"),o.classList.add("is-hidden")):(c.classList.remove("is-hidden"),s.classList.add("is-hidden"),e.textContent="Searching results",o.classList.add("is-hidden"),console.log(i),r(i.drinks))}})};g();v();f();const p=async t=>{const e=document.querySelector(".cocktails"),c=await h(t);e.innerHTML="",c.forEach(s=>{const o=`
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
    `;e.insertAdjacentHTML("beforeend",o)})},y=async()=>{try{await _(p),u(),k(),m()}catch(t){console.error(t)}};y();const w=()=>{const t=JSON.parse(localStorage.getItem("favorite-cocktails"));t!==null&&t.length!==0&&setTimeout(()=>{const e=document.querySelectorAll(".cocktails__item");t.forEach(c=>{e.forEach(s=>{if(c.idDrink===s.id){const o=s.children[1].children[1].children[1];o.children[0].textContent="Remove",o.classList.add("cocktails__remove-favorite"),o.querySelector(".cocktails__icon--white").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),o.querySelector(".cocktails__icon--black").children[0].setAttribute("href","../../../assets/icons/symbol-defs.svg#icon-full-heart"),setTimeout(()=>{o.classList.remove("cocktails__add-favorite")},500)}})})},500)};w();
