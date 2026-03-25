
const url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS/10";

const urlcomments = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
 
let dataBaseUsuarios = [];

let dataBaseComments = [];

const firstPlace = document.getElementsByClassName("first-place");
const secondPlace = document.getElementsByClassName("second-place");
const thirdPlace = document.getElementsByClassName("third-place");
const podium = document.getElementsByClassName("podium");


function obtenerClasificacion() {
fetch(url)
  .then(response => response.json())
  .then(data => {
            dataBaseUsuarios = data.data;
          console.log("Datos obtenidos:", dataBaseUsuarios);
          mostrarClasificacion(); 
            podio();
      })
    .catch(error => console.error("Error fetching data:", error));
}
obtenerClasificacion();
function obtenerComentarios() {
fetch(urlcomments)
  .then(response => response.json())
  .then(data => {
            dataBaseComments = data.data;
          console.log("Datos obtenidos:", dataBaseComments);
          mostrarComentarios(); 
      })
    .catch(error => console.error("Error fetching data:", error));
}
obtenerComentarios();
function mostrarClasificacion() {
    const rankingTotal = document.getElementById("ranking");
    
    rankingTotal.innerHTML = ""; 
    
    dataBaseUsuarios.forEach((usuario,index) => {
        
        rankingTotal.innerHTML += `
            <li>
                ${usuario.name} (${usuario.puntuacion} pts)
                
            </li>
        `;
    });
}


 


function podio() {
    const firstPlace = document.getElementById("namePlayer1");
    const points1 = document.getElementsByClassName("points1");   
    const secondPlace = document.getElementById("namePlayer2");
    const points2 = document.getElementsByClassName("points2");
    const thirdPlace = document.getElementById("namePlayer3");
    const points3 = document.getElementsByClassName("points3");
    if (dataBaseUsuarios.length > 0) {
        firstPlace.textContent = `${dataBaseUsuarios[0].name} `;
        points1[0].textContent = `${dataBaseUsuarios[0].puntuacion} pts`;
        secondPlace.textContent = `${dataBaseUsuarios[1].name} `;
        points2[0].textContent = `${dataBaseUsuarios[1].puntuacion} pts`;
        thirdPlace.textContent = `${dataBaseUsuarios[2].name} `;
        points3[0].textContent = `${dataBaseUsuarios[2].puntuacion} pts`;

    }    

}

function  mostrarComentarios(){

    const comentarios = document.getElementById("comments");

    comentarios.innerHTML = "";

    dataBaseComments.forEach((comentario,index) => {
        comentarios.innerHTML += `
            <article class="comment">
                <h4 class="comment-name">${comentario.name}</h4>
                <p class="comment-content">${comentario.content}</p>
            </article>
        `;
    }
    
    );
}



