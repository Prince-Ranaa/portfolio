

let menu = document.getElementsByClassName("menu")[0]
let downmenu = document.getElementById("ul")
menu.addEventListener("click", function () {
    downmenu.classList.toggle("height")
})