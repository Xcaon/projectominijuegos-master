

/*const datos = [
  { nombre: "Snake", direccion: "Juegos/Snake/gamePage.html", imagen: "Juegos/Snake/images/snake.jpg" },
  { nombre: "Tetris", direccion: "Juegos/Tetris/Source/tetris.html", imagen: "Juegos/Tetris/Source/images/bannertetris.PNG" },
  {nombre: "Tres en raya", direccion: "Juegos/Tik-Tak-Toe/frontend/index.html", imagen: "Juegos/Tik-Tak-Toe/portada.PNG"},
  { nombre: "Sonic", direccion:"", imagen: "Juegos/images_juegos/captura.PNG"},
  { nombre: "Flappy Birds", direccion:"", imagen: "Juegos/images_juegos/flapy.PNG"},
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
  { nombre: "Tres en raya", direccion: "Juegos/Tik-Tak-Toe/frontend/index.html", imagen: "Juegos/Tik-Tak-Toe/frontend/images/portada.png", tipo: "online" },
  { nombre: "Catan", direccion:"Juegos/Catan/CatanTorneo.html", imagen: "imagenes/Catan_Portada.png", tipo: "online" },
  { nombre: "Flappy Birds", direccion:"", imagen: "Juegos/images_juegos/flapy.PNG", tipo: "tradicionales" },
  { nombre: "Sonic", direccion:"", imagen: "Juegos/images_juegos/captura.PNG", tipo: "carreras" },
  { nombre: "Football Heads", direccion:"", imagen: "Juegos/images_juegos/heads.PNG", tipo: "online" },
  { nombre: "Ajedrez", direccion:"", imagen: "Juegos/images_juegos/ajedrez.PNG", tipo: "online" },
  { nombre: "Air Fighter", direccion:"", imagen: "Juegos/images_juegos/air.PNG", tipo: "combate" },
  { nombre: "Street Fighter", direccion:"", imagen: "Juegos/images_juegos/street.PNG", tipo: "combate" },
  { nombre: "Dragon Ball Z 3", direccion:"", imagen: "Juegos/images_juegos/dragon.PNG", tipo: "combate" },
  { nombre: "Puzzle de madera", direccion:"", imagen: "Juegos/images_juegos/madera.PNG", tipo: "puzles" },
  { nombre: "Moto XM3 Race", direccion:"", imagen: "Juegos/images_juegos/moto.PNG", tipo: "carreras" },
  { nombre: "Formula 1 Racing", direccion:"", imagen: "Juegos/images_juegos/f1.PNG", tipo: "carreras" },
  { nombre: "Bubble Shooter", direccion:"", imagen: "Juegos/images_juegos/bubble.PNG", tipo: "puzles" },
  { nombre: "Sopas de letras", direccion:"", imagen: "Juegos/images_juegos/letras.PNG", tipo: "educativos" }
];
const listaElementos = datos.map((dato) => {
  return `<div style="background-image: url(${dato.imagen} ); background-size: cover;" class="juego"> <a href="${dato.direccion}">
  
  <button class="nombre">${dato.nombre}</button></a> </div>`;
});
const listaMultijugador = document.getElementById("lista-multijugador");

    datos.forEach((dato) => {
    const juego = document.createElement("div");
    juego.setAttribute("style", `background-image: url(${dato.imagen}); background-size: cover;`);
    juego.setAttribute("class", "juego");
    juego.innerHTML = `
        <a href="${dato.direccion}">
        <button class="nombre">${dato.nombre}</button>
        </a>
    `;
    listaMultijugador.appendChild(juego);
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

