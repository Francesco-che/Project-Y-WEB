const toggleBoton = document.getElementById("theme-toggle");
let contador = 0;
const imagenSecreta = document.getElementById("easter-egg");
toggleBoton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    contador++;

    
    if (contador === 15) {
        activarEasterEgg();
    }

    
});


function activarEasterEgg(){

    imagenSecreta.style.display = "block";

    setTimeout(() => {
        imagenSecreta.style.display = "none";
        contadorClicks = 0; 
    }, 5000);

   
}




