
const mostrarTodosButton = document.getElementById("mostrarTodos");
const modal = document.getElementById("myModal");
const closeModalSpan = document.querySelector(".close");
const alumnosContainer = document.getElementById("alumnosContainer");
const inputAlumno = document.getElementById("inputAlumno");
const btnAgregarAlumno = document.getElementById("agregarAlumno");
const btnEliminarSeleccionados = document.getElementById("eliminarSeleccionados");
const btnSeleccionar = document.getElementById("seleccionar");

// Datos de ejemplo (puedes modificarlos con tus propios datos)
const alumnos = ["Elena", "Alba", "Yadi", "Isaac", "Maxwell","Jander","Raúl","Victor","Denisse","Alfredo","Alicia","Álvaro","Marcela","Joaco","David","Isaac","Anzuly","Paolo","Hannah","Laudy","Alba","Jose"];

// Función para mostrar la modal
function mostrarModal() {
    modal.style.display = "block"; // Mostrar la modal

    // Mostrar los alumnos existentes al abrir la modal
    mostrarAlumnos();
}

// Función para cerrar la modal
function cerrarModal() {
    modal.style.display = "none"; // Ocultar la modal
}
// Función para mostrar los alumnos en la modal
function mostrarAlumnos() {
    alumnosContainer.innerHTML = ""; // Limpiar el contenedor de alumnos

    alumnos.forEach((alumno) => {
        const nuevoAlumno = crearCheckbox(alumno);
        alumnosContainer.appendChild(nuevoAlumno);
    });
}

// Función para crear checkbox de alumnos
function crearCheckbox(nombre) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = nombre;

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(nombre));

    return label;
}

// Evento para agregar un nuevo alumno
btnAgregarAlumno.addEventListener("click", () => {
    const nombreAlumno = inputAlumno.value.trim();

    if (nombreAlumno !== "") {
        const nuevoAlumno = crearCheckbox(nombreAlumno);
        alumnosContainer.appendChild(nuevoAlumno);
        inputAlumno.value = "";
    }
});

// Evento para eliminar alumnos seleccionados
btnEliminarSeleccionados.addEventListener("click", () => {
    const checkboxes = alumnosContainer.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        const label = checkbox.parentElement;
        alumnosContainer.removeChild(label);
    });
});

// Evento para seleccionar todos los alumnos
btnSeleccionar.addEventListener("click", () => {
    mostrarAlumnos();
    modal.style.display= "block";
    const checkboxes = alumnosContainer.querySelector('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
        
        
    });
});

// Agregar eventos para mostrar la modal y cerrarla
mostrarTodosButton.addEventListener("click", () => {
    mostrarModal();
});

closeModalSpan.addEventListener("click", () => {
    cerrarModal();
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        cerrarModal();
    }
});
