//DOM selectors
const squares = document.querySelector(".squares");
const clear = document.querySelector(".clear");
const input = document.querySelector("input");

for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    squares.appendChild(div);
}

clear.addEventListener("click",(e)=>{
    const square = document.querySelectorAll(".square");
    square.forEach(e => {
        e.style.display = "none";
    })
    input.classList.add("input-shown");
})