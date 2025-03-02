import"./modal-7642a63a.js";const i=()=>{const e=JSON.parse(localStorage.getItem("favorite-ingredients"));if(e&&e.length>0){e.forEach(t=>{});const n=document.querySelector(".ingredients__list");e.forEach(t=>{const s=`
        <li class="ingredients__cards" id="${t.idIngredient}">
          <h3 class="ingredients__cards-title">${t.strIngredient}</h3>
          <p class="ingredients__cards-subtitle">${t.strType||"Unknown"}</p>
          <div class="ingredients__button-box">
            <button class="ingredients__button-more">Learn More</button>
            <button class="ingredients__button-remove">
              Remove
              <svg class="ingredients__icon">
                <use href="./assets/icons/symbol-defs.svg#icon-full-heart"></use>
              </svg>
            </button>
          </div>
        </li>
      `;n.insertAdjacentHTML("beforeend",s)})}},r=document.querySelector(".err"),o=document.querySelector(".favorite");function a(){const e=JSON.parse(localStorage.getItem("favorite-ingredients"));!e||e.length===0?(r.style.display="block",o.style.display="none"):(r.style.display="none",o.style.display="block")}a();const c=async()=>{try{i()}catch(e){console.error(e)}};c();document.addEventListener("click",e=>{if(e.target.classList.contains("ingredients__button-remove")){const n=e.target.closest("li");n.style.display="none";let t=JSON.parse(localStorage.getItem("favorite-ingredients"))||[];t=t.filter(s=>s.idIngredient!==n.id),setTimeout(()=>{localStorage.setItem("favorite-ingredients",JSON.stringify(t)),checkIfFavoritesEmpty()},750)}});
