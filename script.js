//DOM selectors
const squares = document.querySelector(".squares");
const clear = document.querySelector(".clear");
const input = document.querySelector("input");

function createSquare(s){
    for(let i = 0; i < s; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        squares.appendChild(div);
    }   
}

clear.addEventListener("click",(e)=>{
    const square = document.querySelectorAll(".square");
    square.forEach(e => {
        e.style.display = "none";
    })
    const user = prompt("How many grids Do you want?");
    createSquare(user);
})
