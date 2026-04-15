let cur_developer = 0;
const SCROLL_ROTATE_HEIGHT = 300;
const SCROLL_OPACITY_RANGE = 100;

function getTransitionValue() {
    return (SCROLL_ROTATE_HEIGHT - window.scrollY)/(SCROLL_OPACITY_RANGE);
}

function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
}

function update() {
    for(let i = 0; i < 3; i++) {
        document.getElementById(`container-${i}`).style.display =
            (i != cur_developer && window.innerWidth <= 1400 ? "none" : "");
    }

    console.log(scrollY);

    document.getElementById("gamedev-section").style =
        `transform: rotate(${window.scrollY < SCROLL_ROTATE_HEIGHT ? "0deg" : "180deg"}) translate(${clamp(Math.abs(50/getTransitionValue()), 0, 2000) - 20}px); 
         opacity: ${getCurrentOpacity()};`;
    document.getElementById("webdev-section").style =
        `transform: rotate(${window.scrollY < SCROLL_ROTATE_HEIGHT ? "180deg" : "0deg"}) translate(${clamp(Math.abs(50/getTransitionValue()), 0, 2000) - 20}px);
         opacity: ${getCurrentOpacity()};`;
}

function getCurrentOpacity() {
    return Math.min(Math.abs(getTransitionValue()), 1);
}

document.getElementById("previous-dev").addEventListener("click", (ev) => {
    cur_developer--;
    if(cur_developer < 0) cur_developer = 2;

    update();
});

document.getElementById("next-dev").addEventListener("click", (ev) => {
    cur_developer++;
    if(cur_developer >= 3) cur_developer = 0;
    update();
});

window.addEventListener("resize", (ev) => {
    update();
});

window.addEventListener("scroll", (ev) => {
    update();
});

update();