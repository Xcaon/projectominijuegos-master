
/*const datos = [
  { nombre: "Elemento 1", categoria: "Categoria 1" },
  { nombre: "Elemento 2", categoria: "Categoria 2" },
  { nombre: "Elemento 3", categoria: "Categoria 1" },
  { nombre: "Elemento 4", categoria: "Categoria 3" },
  { nombre: "Elemento 5", categoria: "Categoria 2" }
];*/
const datos = [
  { nombre: "Snake", direccion: "Juegos/Snake/gamePage.html", imagen: "Juegos/Snake/images/snake.jpg" },
  { nombre: "Tetris", direccion: "Juegos/Tetris/Source/tetris.html", imagen: "Juegos/Tetris/Source/images/bannertetris.PNG" },
  { nombre: "Sonic", direccion:"", imagen: ""},
  { nombre: "Flappy Birds", direccion:"", imagen: ""},
  { nombre: "Football Heads", direccion:"", imagen: ""}
];

const listaElementos = datos.map((dato) => {
  return `<div style="background-image: url(${dato.imagen} ); background-size: cover;" class="juego"> <a href="${dato.direccion}">
  
  <button class="nombre">${dato.nombre}</button></a> </div>`;
  //return `<div class="elemento" data-categoria="${dato.categoria}">${dato.nombre}</div>`;
});

document.getElementById("lista-individuales").innerHTML = listaElementos.join("");
document.getElementById("busqueda").addEventListener("input", function() {
  const filtro = this.value.toLowerCase();
  const elementos = document.getElementsByClassName("juego");
  
  for (let i = 0; i < elementos.length; i++) {
    const nombre = elementos[i].textContent.toLowerCase();
    //const categoria = elementos[i].dataset.categoria.toLowerCase();
    
    if (nombre.includes(filtro)) {
      elementos[i].style.display = "block";
    } else {
      elementos[i].style.display = "none";
    }
  }
});

var icono = document.querySelector('.imagen');

icono.addEventListener("click", redirigir);


function redirigir() {
  window.location.href = 'login.php';
}