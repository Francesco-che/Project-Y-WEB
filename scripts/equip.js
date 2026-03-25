let cur_developer = 0

function update() {
    for(let i = 0; i < 3; i++) {
        document.getElementById(`container-${i}`).style.display =
            (i != cur_developer && window.screen.width <= 1400 ? "none" : "");
    }
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

update();