// tableau de couleur creer

let section = document.querySelector("section");
let div;
let color = ["red", "blue", "yellow", "green", "purple", "pink", "orange", "brown"];


// boucles for qui creer 792 div

for (let i = 0; i < 792; i++) {
    div = document.createElement("div");
    section.appendChild(div);
};


let newDiv = document.querySelectorAll("div");


// quand on passe la souris sur la div, la div prend une couleur random du tableau

newDiv.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = color[Math.floor(Math.random()*color.length)];
        element.style.transition = "0s";
    });
    // quand on la souris sort de la div, la div perd sa couleur
    element.addEventListener("mouseout", () => {
        element.style.background = "";
        element.style.transition = "1.5s";
    });
});