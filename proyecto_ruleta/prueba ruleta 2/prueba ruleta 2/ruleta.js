function para() {
    let tarjetas = document.querySelectorAll('.tarjeta'); // Obtener todas las tarjetas

    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.animationPlayState = 'paused'; // Pausar la animación de cada tarjeta
    });
}
function iniciaCarrusel() {
    let tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.animationPlayState = 'running';
    });
}




function seleccionarTarjetaAleatoria() {
    let tarjetas = document.querySelectorAll('.tarjeta');
    let cantidadTarjetas = tarjetas.length;


    let indiceAleatorio = Math.floor(Math.random() * cantidadTarjetas);

    // Ocultar todas las tarjetas
    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.display = 'none';
    });


    tarjetas[indiceAleatorio].style.display = 'block';
}



let nombresTarjetas = []; // Array para almacenar los nombres de las tarjetas

function agregarTarjeta() {
    let nombre = document.getElementById("nombreTarjeta").value;
    let color = document.getElementById("colorTarjeta").value;

    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.style.backgroundColor = color;

    let titulo = document.createElement("h3");
    titulo.textContent = nombre;

    nuevaTarjeta.appendChild(titulo);

    let contenedor = document.querySelector(".container");
    contenedor.appendChild(nuevaTarjeta);

    nombresTarjetas.push(nombre); // Agregar el nombre al array
    actualizarListaTarjetas(); // Actualizar la lista en el HTML

    // Limpiar los campos después de agregar la tarjeta
    document.getElementById("nombreTarjeta").value = "";
    document.getElementById("colorTarjeta").value = "#ff0000";
}

function actualizarListaTarjetas() {
    let listaTarjetas = document.getElementById("listaTarjetas");
    listaTarjetas.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombresTarjetas.forEach(function (nombre) {
        let listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaTarjetas.appendChild(listItem);
    });
}

// Esta parte del código para eliminar tarjetas parece no estar completa o en uso
let eliminar = document.createElement("button");
eliminar.classList.add("btn");
eliminar.textContent = "Eliminar";

function quitar() {
    eliminar.remove("nombre");
}




