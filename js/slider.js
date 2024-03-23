
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
const requestURL = "projects.json";

const request = new XMLHttpRequest();
request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    const projects = request.response;
    agregarProyecto(projects);
  };


function agregarProyecto(jsonObj) {

    const projectsContainer = document.querySelector('.projects-container');
    const projectSubContainer = document.querySelector('.projects-subcontainer');

    const sliderContainer = document.createElement('div');

    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const prevImg = document.createElement('img');
    const nextImg = document.createElement('img');

    nextButton.id = 'next';
    nextButton.classList.add('next', 'slider-buttons');
    nextImg.src = './images/icon-next.png';
    nextImg.alt = 'icon-next';
    nextButton.appendChild(nextImg);

    prevButton.id = 'prev';
    prevButton.classList.add('back', 'slider-buttons');
    prevImg.src = './images/icon-back.png';
    prevImg.alt = 'icon-back';
    prevButton.appendChild(prevImg);
    
    projectSubContainer.appendChild(prevButton);

    sliderContainer.classList.add('projects-slider')
    projectSubContainer.appendChild(sliderContainer);

    projectSubContainer.appendChild(nextButton);

    const slider = document.querySelector(".projects-slider");

    const dot = document.createElement('ul');
    dot.classList.add('dots');

    projectsContainer.appendChild(dot);


    for (let i = 0; i < jsonObj.length; i++) {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const img = document.createElement('img');
        const item = slider.appendChild(div);
        item.classList.add('item');

        if (i == 0) {
            item.classList.add('item-active');
        }
        
        const projectImg = item.appendChild(div2);
        projectImg.classList.add('project-img');

        const image = projectImg.appendChild(img);
        image.src = jsonObj[i].image;
    
    
        const information = item.appendChild(div3);
        information.classList.add('project-information');

        const h3 = document.createElement('h3');
        h3.classList.add('project-title');

        const projectTitle = information.appendChild(h3);
        projectTitle.textContent = jsonObj[i].title;

        const p = document.createElement('p');
        p.classList.add('project-description');

        const projectDescription = information.appendChild(p);
        projectDescription.textContent = jsonObj[i].description;

        const links = document.createElement('div');
        links.classList.add('project-links');
        item.appendChild(links);

        const urlDiv = document.createElement('div');
        urlDiv.classList.add('url');
        links.appendChild(urlDiv);

        const url = document.createElement('a');
        url.href = jsonObj[i].url;
        url.title = 'Visitar página del proyecto';
        url.target = '_blank';
        urlDiv.appendChild(url);

        const urlIcon = document.createElement('img');
        urlIcon.src = jsonObj[i].urlIcon;
        url.appendChild(urlIcon);

        const githubDiv = document.createElement('div');
        githubDiv.classList.add('slider-github-icon');
        links.appendChild(githubDiv);

        const github = document.createElement('a');
        github.href = jsonObj[i].projectGithub;
        github.title = 'Visitar github del proyecto';
        github.target = '_blank';
        githubDiv.appendChild(github);

        const githubIcon = document.createElement('img');
        githubIcon.src = jsonObj[i].github;
        github.appendChild(githubIcon);


        const dotList = document.createElement('li');
        
        if (i == 0) {
            dotList.classList.add('active');
        }

        dot.appendChild(dotList);


    }

    iniciarSlider();

}


function iniciarSlider() {
    const slider = document.querySelector('.projects-slider');
    const items = document.querySelectorAll('.projects-container .projects-subcontainer .projects-slider .item');
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

}







