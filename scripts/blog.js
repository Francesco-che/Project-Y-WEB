const url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";

let dataBasePosts = [];


function obtenerPosts() {
fetch(url)
  .then(response => response.json())
  .then(data => {
            dataBasePosts = data.data;
          console.log("Datos obtenidos:", dataBasePosts);
          mostrarPosts();
      })
    .catch(error => console.error("Error fetching data:", error));
}
obtenerPosts();



function mostrarPosts() {
    const espacioBlog = document.getElementById("espacioBlog");
    let numActualizacion = dataBasePosts.length ; 
    espacioBlog.innerHTML = "";
    
    dataBasePosts.reverse().forEach((post) => {
        let resta = numActualizacion --;
        const numeroActualizacionString = resta.toString()
        espacioBlog.innerHTML += `
            <article class="post">
                <div class="post-header">
                    <img src="../assets/images/characters/Yang_sprite1-sBg.png" alt="Logo" class="post-logo">
                    
                    <div class="post-info">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-meta">
                            Publicado por <span class="accent-blue">Cristian</span> actualizacion ${ numeroActualizacionString + "." + "0" } 
                        </p>
                    </div>
                </div>
                
                <div class="post-content">
                    <p>${post.content}</p>
                </div>
            </article>
        `;
    }); 
}
            