function para() {
    let tarjetas = document.querySelectorAll('.tarjeta'); // Obtener todas las tarjetas

    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.animationPlayState = 'paused'; // Pausar la animación de cada tarjeta
    });
}
function iniciaCarrusel() {
    let tarjetas = document.querySelectorAll('.tarjeta'); // Obtener todas las tarjetas

    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.animationPlayState = 'running'; // Reanudar la animación de cada tarjeta
    });
}


function seleccionarTarjetaAleatoria() {
    let tarjetas = document.querySelectorAll('.tarjeta'); // Obtener todas las tarjetas
    let cantidadTarjetas = tarjetas.length;

    // Generar un número aleatorio entre 0 y la cantidad de tarjetas - 1
    let indiceAleatorio = Math.floor(Math.random() * cantidadTarjetas);

    // Ocultar todas las tarjetas
    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.display = 'none';
    });

    // Mostrar la tarjeta aleatoria seleccionada
    tarjetas[indiceAleatorio].style.display = 'block';
}


// function realizarAccion() {
//     let tarjetas = document.querySelectorAll('.tarjeta'); // Obtener todas las tarjetas
//     let cantidadTarjetas = tarjetas.length;

//     // Detener la animación de las tarjetas
//     tarjetas.forEach(function (tarjeta) {
//         tarjeta.style.animationPlayState = 'paused';
//     });

//     // Seleccionar una tarjeta aleatoria (la última será la ganadora)
//     let indiceAleatorio = Math.floor(Math.random() * cantidadTarjetas);
//     let indiceGanador = cantidadTarjetas - 1;

//     tarjetas.forEach(function (tarjeta, index) {
//         tarjeta.style.display = 'none';

//         // Mostrar la tarjeta ganadora y ocultar las demás
//         if (index === indiceGanador) {
//             tarjeta.style.display = 'block';
//         }
//     });

//     // Reanudar la animación después de un breve tiempo (por ejemplo, 3 segundos)
//     setTimeout(function () {
//         tarjetas.forEach(function (tarjeta) {
//             tarjeta.style.animationPlayState = 'running';
//         });
//     }, 3000); // Cambia el tiempo según sea necesario
// }

// elegir una tarjeta mediante su clase y modificar su h3

addEventListener('text', function () {
   




})
