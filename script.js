const container = document.getElementById("container");

function divCreator(num) {
    const grid = 100 / num;
    for (i = 0; i < num * num && num < 101; i++) {        
        const div = document.createElement("div");
        div.classList.add("divGrid");
        div.style.width = grid + "%";
        container.appendChild(div);
    }
};
container.addEventListener("beforeprint", divCreator(16));

const btn = document.getElementById("btn");

function eraseGrid() {
    while (container.firstChild != null) {
        container.firstChild.remove()
    }
}

function newGrid () {    
    const input = prompt("How big do you want your grid!?");
    eraseGrid();
    divCreator(input);
}
btn.addEventListener("click", newGrid);