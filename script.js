const menu = document.getElementById("menu");
const lines = document.getElementById("linesInMenu");
const scroll = document.getElementById("scroll");
const buttons = [
    document.getElementById("button_0"),
    document.getElementById("button_1"),
    document.getElementById("button_2"),
    document.getElementById("button_3")
];
const contents = [
    document.getElementById("content_0"),
    document.getElementById("content_1"),
    document.getElementById("content_2"),
    document.getElementById("content_3")
];
menu.addEventListener("click", function() {
    scroll.classList.toggle("lathato");
});
lines.addEventListener("click", function() {
    scroll.classList.toggle("lathato");
});
function buttonclick(button, content){
    content.classList.toggle("activeCont");
}
buttons[0].addEventListener("click",buttonclick(buttons[0],contents[0]))
buttons[1].addEventListener("click",buttonclick(buttons[1],contents[1]))
buttons[2].addEventListener("click",buttonclick(buttons[2],contents[2]))
buttons[3].addEventListener("click",buttonclick(buttons[3],contents[3]))