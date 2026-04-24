let cur_developer = 0;
const SCROLL_ROTATE_HEIGHT = 300;

function updateResponsive() {
    for(let i = 0; i < 3; i++) {
        document.getElementById(`container-${i}`).style.display =
            (i != cur_developer && window.innerWidth <= 1400 ? "none" : "");
    }
}

function updateScrollInversion() {
    if(scrollY < SCROLL_ROTATE_HEIGHT) {
        document.getElementById("gamedev-section").classList.remove("reverse");
        document.getElementById("webdev-section").classList.add("reverse");
    } else {
        document.getElementById("gamedev-section").classList.add("reverse");
        document.getElementById("webdev-section").classList.remove("reverse");
    }
}

document.getElementById("previous-dev").addEventListener("click", (ev) => {
    cur_developer--;
    if(cur_developer < 0) cur_developer = 2;

    updateResponsive();
});

document.getElementById("next-dev").addEventListener("click", (ev) => {
    cur_developer++;
    if(cur_developer >= 3) cur_developer = 0;
    updateResponsive();
});

window.addEventListener("resize", (ev) => {
    updateResponsive();
});

window.addEventListener("scroll", (ev) => {
    updateScrollInversion();
});

updateResponsive();