const filterArray = [];
const gallery = document.querySelector(".gallery");

for (let i = 0, i < works.length; i++){
    const filterBtn = document.createElement("button");
    filterBtn.classList.add("filterBtn");
    const category = works[i].category.name;
    filterBtn.innerText = category;
    if(filterArray.includes(category)){
        continue;
    } else {
        filterArray.push(category)
    }
    
    gallery.appendChild(filterBtn);
}