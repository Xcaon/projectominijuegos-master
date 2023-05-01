
/*const datos = [
  { nombre: "Elemento 1", categoria: "Categoria 1" },
  { nombre: "Elemento 2", categoria: "Categoria 2" },
  { nombre: "Elemento 3", categoria: "Categoria 1" },
  { nombre: "Elemento 4", categoria: "Categoria 3" },
  { nombre: "Elemento 5", categoria: "Categoria 2" }
];*/

/*const datos = [
  { nombre: "Snake", direccion: "Juegos/Snake/gamePage.html", imagen: "Juegos/Snake/images/snake.jpg" },
  { nombre: "Tetris", direccion: "Juegos/Tetris/Source/tetris.html", imagen: "Juegos/Tetris/Source/images/bannertetris.PNG" },
  {nombre: "Tres en raya", direccion: "Juegos/Tik-Tak-Toe/frontend/index.html", imagen: "Juegos/Tik-Tak-Toe/images/portada.png"},
  { nombre: "Sonic", direccion:"", imagen: ""},
  { nombre: "Flappy Birds", direccion:"", imagen: ""},
  { nombre: "Football Heads", direccion:"", imagen: ""}
];*/

/*const listaElementos = datos.map((dato) => {
  return `<div style="background-image: url(${dato.imagen} ); background-size: cover;" class="juego"> <a href="${dato.direccion}">
  
  <button class="nombre">${dato.nombre}</button></a> </div>`;
  //return `<div class="elemento" data-categoria="${dato.categoria}">${dato.nombre}</div>`;
});*/
const datos = [
  { nombre: "Snake", direccion: "Juegos/Snake/gamePage.html", imagen: "Juegos/Snake/images/snake.jpg", tipo: "tradicionales" },
  { nombre: "Tetris", direccion: "Juegos/Tetris/Source/tetris.html", imagen: "Juegos/Tetris/Source/images/bannertetris.PNG", tipo: "puzles" },
  { nombre: "Tres en raya", direccion: "Juegos/Tik-Tak-Toe/frontend/index.html", imagen: "Juegos/Tik-Tak-Toe/images/portada.png", tipo: "online" },
  { nombre: "Catan", direccion:"Juegos/Catan/CatanTorneo.html", imagen: "imagenes/Catan_Portada.png", tipo: "online" },
  { nombre: "Flappy Birds", direccion:"", imagen: "", tipo: "tradicionales" },
  { nombre: "Football Heads", direccion:"", imagen: "", tipo: "online" }
];
const listaElementos = datos.map((dato) => {
  return `<div style="background-image: url(${dato.imagen} ); background-size: cover;" class="juego"> <a href="${dato.direccion}">
  
  <button class="nombre">${dato.nombre}</button></a> </div>`;
});

// Agrega los elementos al contenedor del carousel
$('#carousel').append(listaElementos.join(""));

$(document).ready(function(){
  $('.tablaJuegos').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
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

/*FILTRO JUEGOS*/
