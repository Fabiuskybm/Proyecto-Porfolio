
// MENÚ HAMBURGUESA
const nav = document.querySelector("#nav");
const navList = document.querySelector("#nav-list");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.classList.add("ocultarMenu");
    navList.classList.add("nav-list-open");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.classList.remove("ocultarMenu");
    navList.classList.remove("nav-list-open");
})


// SLIDER
const slider = document.querySelector('.projects-slider');
const items = document.querySelectorAll('.projects-container .projects-slider .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.projects-container .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.projects-container .dots li.active');

    if (last_active_dot) {
        last_active_dot.classList.remove('active');
    }

    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    let last_active_item = document.querySelector('.projects-container .projects-slider .item-active');

    last_active_item.classList.remove('item-active');

    items[active].classList.add('item-active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
}