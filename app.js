const searchContainerEl = document.querySelector(".search-container");
const magnifierEl = document.querySelector(".magnifier");

//eveniment pe search icon cu activare de clasa in css
magnifierEl.addEventListener("click", ()=>{
    searchContainerEl.classList.toggle("active");
});