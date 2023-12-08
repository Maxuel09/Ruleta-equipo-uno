document.addEventListener("DOMContentLoaded", function() {
    const audioFondo = document.getElementById("audioFondo");
    const controlVolumen = document.getElementById("controlVolumen");
    const botonMute = document.getElementById("botonMute");

    // Reproducir el sonido al cargar la página
    audioFondo.play();

    // Control de volumen
    controlVolumen.addEventListener("input", function() {
        audioFondo.volume = this.value; // Ajustar el volumen según el control
    });

    // Botón de mute
    botonMute.addEventListener("click", function() {
        if (audioFondo.muted) {
            audioFondo.muted = false;
            this.textContent = "Mute";
        } else {
            audioFondo.muted = true;
            this.textContent = "Unmute";
        }
    });
});


function redireccion(){
    location.href = "venta.btn"
}
document.getElementById("btn-1").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Ruleta-equipo-uno/proyecto_ruleta/prueba%20ruleta%202/prueba%20ruleta%202/ruleta.html";
});
