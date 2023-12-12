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
    window.location.href = "/Ruleta-equipo-uno/proyecto_ruleta/prueba ruleta 2/prueba ruleta 2/ruleta.html";
});
