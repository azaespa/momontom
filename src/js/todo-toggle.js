const footer = document.querySelector("footer"),
    toDoBtn = footer.querySelector("button"),
    toDoContainer = document.querySelector(".right-side");

const SHOWING_FLEX_CN = "showing-flex";
const FADE_IN_CN = "fadeIn";

function paintToDoContainer() {
    if(toDoContainer.classList.contains(SHOWING_FLEX_CN)){
        toDoContainer.classList.remove(SHOWING_FLEX_CN)
    } else {
        toDoContainer.classList.add(FADE_IN_CN);
        toDoContainer.classList.add(SHOWING_FLEX_CN);
    }
}

function init(){
    toDoBtn.addEventListener("click", paintToDoContainer);
}

init();
    