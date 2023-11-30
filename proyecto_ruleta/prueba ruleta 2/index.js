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


function agregarTarjeta() {

    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.id = "card-2";


    let titulo = document.createElement("h3");
    let nombre = prompt("Ingresa el nombre de la tarjeta");
    titulo.textContent = nombre;


    let color = prompt("Elige un color para la tarjeta (ejemplo: blue, red, yellow)  !intente no repetir colores¡");


    nuevaTarjeta.style.backgroundColor = color;


    nuevaTarjeta.appendChild(titulo);


    let contenedor = document.querySelector(".container");


    contenedor.appendChild(nuevaTarjeta);

    return nombre;
}


function eliminarTarjeta() {

    let contenedor = document.querySelector(".container");


    let tarjetaAEliminar = document.getElementById("card-2");


    if (tarjetaAEliminar && tarjetaAEliminar.parentNode === contenedor) {

        contenedor.removeChild(tarjetaAEliminar);
        alert("Tarjeta eliminada exitosamente.");
    } else {
        alert("La tarjeta con el ID 'card-2' no se encontró en el contenedor.");
    }

}