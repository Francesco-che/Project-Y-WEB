const toggleBoton = document.getElementById("theme-toggle");

toggleBoton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

