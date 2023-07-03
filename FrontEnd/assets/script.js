let works
async function getData() {

     works = window.localStorage.getItem("works");

    if (works === null) {
        const response = await fetch("http://localhost:5678/api/works");
        works = await response.json();

        const valeurWorks = JSON.stringify(works);

        window.localStorage.setItem("works", valeurWorks);
        console.log(`From fetch`);
    } else {
        works = JSON.parse(works);
        console.log(`From localStorage`);
    }
}

getData();

function generateWorks(works){
        
    for (let i = 0; i < works.length; i++){
        const project = works[i];

        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");

        const imgProjet = document.createElement("img");
        imgProjet.src = project.imageUrl;
        imgProjet.alt = project.title

        const legendProject = document.createElement("figcaption");
        legendProject.innerText = project.title;


        gallery.appendChild(figure);
        figure.appendChild(imgProjet);
        figure.appendChild(legendProject);
    }
}

generateWorks(works);

async function getCategories(works) {

    const filterArray = [];
    const portfolio = document.getElementById("portfolio");
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filterContainer");

    portfolio.appendChild(filterContainer)

    
    for (let i = 0; i < works.length; i++){
        const filterBtn = document.createElement("button");
        filterBtn.classList.add("filterBtn");
    
        const category = works[i].category.name;
        filterBtn.innerText = category;
        
        if(filterArray.includes(category)){
            continue;
        } else {
            filterArray.push(category)
        }
        
        filterContainer.appendChild(filterBtn);

        filterBtn.addEventListener("click", function() {
            const listWorkFiltered = works.filter(function (works){
                return works.category.id = filterBtn.classList;
            })
        })
    }
}

getCategories(works);