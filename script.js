const menu = document.getElementById("menu");
const lines = document.getElementById("linesInMenu");
const scroll = document.getElementById("scroll");
const buttons = [
    document.getElementById("button_0"),
    document.getElementById("button_1"),
    document.getElementById("button_2"),
    document.getElementById("button_3")
];

menu.addEventListener("click", function() {
    scroll.style.visibility = "visible";
});
lines.addEventListener("click", function() {
    scroll.style.visibility = "visible";
});
