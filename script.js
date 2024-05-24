const container = document.getElementById("container");

function divCreator() {
    for (i = 0; i < 256; i++) {        
        const div = document.createElement("div");
        div.classList.add("divGrid");
        div.style.minWidth = "6%";
        div.innerHTML = i;
        container.appendChild(div);
    }
};
container.addEventListener("beforeprint", divCreator());