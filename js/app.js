import { Gift } from "./clases.js";
import { cargaDeDatos } from "./funciones.js";
let datos = [];

const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));

let idGiftUpdate = null;

window.mostrarModal = (id) => {
  console.log(id);
  idGiftUpdate = id;
  let index = datos.findIndex((item) => item.id == idGiftUpdate);

  document.querySelector("#giftModal").value = datos[index].gift;
  document.querySelector("#tipoModal").value = datos[index].tipo;
  document.querySelector("#tiempoModal").value = datos[index].tiempo;
  document.querySelector("#precioModal").value = datos[index].precio;
  document.querySelector("#imagenModal").value = datos[index].imagen;

  myModal.show();
};

const giftUpdate = (e) => {
  e.preventDefault();
  let index = datos.findIndex((item) => item.id == idGiftUpdate);
  datos[index].gift = document.querySelector("#giftModal").value;
  datos[index].tipo = document.querySelector("#tipoModal").value;
  datos[index].tiempo = document.querySelector("#tiempoModal").value;
  datos[index].precio = document.querySelector("#precioModal").value;
  datos[index].imagen = document.querySelector("#imagenModal").value;

  let publicadoModal = document.querySelector("#publicadoModal").checked;
    datos[index].publicado = publicadoModal;

  localStorage.setItem('datos', JSON.stringify (datos));   
  cargarTabla();
  myModal.hide();
};

const cargarTabla = () => {
  datos = JSON.parse (localStorage.getItem('datos'));
  cuerpoTabla.innerHTML = "";
  datos.map((item) => {
    const fila = document.createElement("tr");

    const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>${item.publicado ? 'Sí' : 'No'}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" onclick="mostrarModal(${item.id})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class="btn btn-outline-danger" onclick="borrarGift(${item.id})"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        </td>
        `;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

const agregarGift = (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  let gift = document.querySelector("#gift").value;
  let tipo = document.querySelector("#tipo").value;
  let tiempo = document.querySelector("#tiempo").value;
  let precio = document.querySelector("#precio").value;
  let imagen = ''; // Puedes agregar la lógica para obtener la URL de la imagen si es necesario
  let publicado = document.querySelector("#publicadoPrincipal").checked;

  // Crear nueva instancia de Gift
  let nuevoGift = new Gift(datos.length + 1, gift, tipo, tiempo, precio, imagen, publicado);

  // Agregar el nuevo Gift al arreglo de datos
  datos.push(nuevoGift);

  console.log(datos);

  // Limpiar el formulario
  document.querySelector("#formGift").reset();

  document.querySelector("#formGift").addEventListener("submit", agregarGift);

  localStorage.setItem('datos', JSON.stringify (datos)); 
  // Recargar la tabla
  cargarTabla();
};



window.borrarGift = (id) => {
  let index = datos.findIndex((item) => item.id == id);

  let validar = confirm(
    `Está seguro/a que quiere eliminar el juego ${datos[index].gift}?`
  );

  if (validar) {
    datos.splice(index, 1);
    localStorage.setItem('datos', JSON.stringify (datos)); 
    cargarTabla();
  }
};

cargaDeDatos();
cargarTabla();

document.querySelector("#formGift").addEventListener("submit", agregarGift);
document.querySelector("#formModal").addEventListener("submit", giftUpdate);
