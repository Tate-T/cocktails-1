import{_ as h,i as u}from"./modal-7642a63a.js";const d="/cocktails-1/assets/symbol-defs-bc6ac176.svg",n=[],v=()=>{const o=JSON.parse(localStorage.getItem("favorite-cocktails"));if(o!==null&&o.length!==0){o.forEach(i=>{n.push(i)});const s=document.querySelector(".cocktails");o.forEach(i=>{const e=`
        <li class="cocktails__item" id="${i.idDrink}">
          <img
            src="${i.strDrinkThumb}"
            alt="#"
            class="cocktails__img"
          />
  
          <div class="cocktails__padding">
            <h3 class="cocktails__subtitle">${i.strDrink}</h3>
            <div class="cocktails__box">
              <button class="cocktails__learn-more">Learn more</button>
              <button class="cocktails__remove-favorite cocktails__add-favorite--styles">
                <span>Remove</span>
                <svg class="cocktails__icon cocktails__icon--white">
                  <use href="${d}#icon-full-heart"></use>
                </svg>
                <svg class="cocktails__icon cocktails__icon--black">
                  <use href="${d}#icon-full-heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>
      `;s.insertAdjacentHTML("beforeend",e)}),document.addEventListener("click",async i=>{setTimeout(async()=>{if(i.target.classList.contains("cocktails__remove-favorite")){const e=i.target.closest("li").id;await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`).then(t=>t.json()).then(t=>n.push(t.drinks[0])),localStorage.setItem("favorite-cocktails",JSON.stringify(n))}else if(i.target.classList.contains("cocktails__add-favorite")){const e=i.target.closest("li").id,t=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`).then(r=>r.json()).then(r=>r.drinks[0]);h.remove(n,t),localStorage.setItem("favorite-cocktails",JSON.stringify(n))}},500)})}},m=async()=>await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(o=>o.json()).then(o=>o.drinks),p=async(o=1)=>{const i=(o-1)*9;return await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(e=>e.json()).then(e=>e.drinks.slice(i,i+9))},L=async o=>{let s=1;const i=await m(),e=Math.ceil(i.length/9),t=document.querySelector(".previous-cocktail"),r=document.querySelector(".next-cocktail"),g=()=>{const c=document.querySelectorAll(".pagination__btn");c.forEach(l=>{l.classList.remove("pagination__btn--active"),Number(l.textContent)===s&&l.classList.add("pagination__btn--active")});const a=Array.from(c).find(l=>l.textContent==="...");a&&(s>3&&s<e?a.classList.add("pagination__btn--active"):a.classList.remove("pagination__btn--active")),s===1?t.querySelector(".left-icon").classList.add("left-icon--empty"):t.querySelector(".left-icon").classList.remove("left-icon--empty"),s===e?r.querySelector(".right-icon").classList.add("right-icon--empty"):r.querySelector(".right-icon").classList.remove("right-icon--empty")},f=async c=>{c>=1&&c<=e&&(s=c,await o(s),g())},k=()=>{const c=document.querySelector(".pagination");if(c){c.innerHTML="";for(let a=1;a<=e;a++)if(a<=3||a===e){const l=`
            <li class="pagination__item">
              <button class="pagination__btn ${s===a?"pagination__btn--active":""}">${a}</button>
            </li>
          `;c.insertAdjacentHTML("beforeend",l)}else if(a===4&&e>4){const l=`
            <li class="pagination__item">
              <button class="pagination__btn">...</button>
            </li>
          `;c.insertAdjacentHTML("beforeend",l)}}};document.addEventListener("click",async c=>{if(c.target.classList.contains("pagination__btn")){const a=Number(c.target.textContent);isNaN(a)||await f(a)}}),t.addEventListener("click",async c=>{await f(s-1)}),r.addEventListener("click",async c=>{await f(s+1)}),k(),await f(1)},b=()=>{document.addEventListener("click",o=>{const s=o.target,i=s.querySelector(".cocktails__icon--white"),e=s.querySelector(".cocktails__icon--black");if(o.target.classList.contains("cocktails__remove-favorite")){if(u()){if(e){const t=e.querySelector("use");t&&(i.classList.add("is-hidden"),t.setAttribute("href",`${d}#icon-black-heart`),e.classList.remove("is-hidden"))}if(i){const t=i.querySelector("use");t&&t.setAttribute("href","")}}else{if(i){const t=i.querySelector("use");t&&(e.classList.add("is-hidden"),t.setAttribute("href",`${d}#icon-white-heart`),i.classList.remove("is-hidden"))}if(e){const t=e.querySelector("use");t&&t.setAttribute("href","")}}s.children[0].textContent="Add to",s.classList.toggle("cocktails__remove-favorite"),setTimeout(()=>{s.classList.toggle("cocktails__add-favorite")},500)}if(o.target.classList.contains("cocktails__add-favorite")){if(u()){if(e){const t=e.querySelector("use");t&&(i.classList.add("is-hidden"),t.setAttribute("href",`${d}#icon-full-heart`),e.classList.remove("is-hidden"))}if(i){const t=i.querySelector("use");t&&t.setAttribute("href","")}}else{if(i){const t=i.querySelector("use");t&&(e==null||e.classList.add("is-hidden"),t.setAttribute("href",`${d}#icon-full-heart`),i.classList.remove("is-hidden"))}if(e){const t=e.querySelector("use");t&&t.setAttribute("href","")}}s.children[0].textContent="Remove",s.classList.toggle("cocktails__remove-favorite"),setTimeout(()=>{s.classList.toggle("cocktails__add-favorite")},500)}})},y=()=>{const o=JSON.parse(localStorage.getItem("favorite-cocktails"));o!==null&&o.length!==0&&o.forEach(s=>{n.push(s)}),document.addEventListener("click",async s=>{setTimeout(async()=>{if(s.target.classList.contains("cocktails__remove-favorite")){const i=s.target.closest("li").id;await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`).then(e=>e.json()).then(e=>n.push(e.drinks[0])),localStorage.setItem("favorite-cocktails",JSON.stringify(n))}else if(s.target.classList.contains("cocktails__add-favorite")){const i=s.target.closest("li").id,e=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`).then(t=>t.json()).then(t=>t.drinks[0]);h.remove(n,e),localStorage.setItem("favorite-cocktails",JSON.stringify(n))}},500)})};export{p as g,d as i,b as l,y as m,L as p,v as r};
