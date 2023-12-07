const botonReproducir = document.getElementById("reproducirAudio");
const miAudio = document.getElementById("miAudio");

botonReproducir.addEventListener("click", function() {
    miAudio.play(); // Reproducir el audio
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5501/Ruleta-equipo-uno/proyecto_ruleta/prueba%20ruleta%202/prueba%20ruleta%202/ruleta.html';
    });
});




function redireccion(){
    location.href = "venta.btn"
}
