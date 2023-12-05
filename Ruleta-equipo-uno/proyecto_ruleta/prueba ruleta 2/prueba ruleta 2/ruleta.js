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

const mostrarTodosButton = document.getElementById("mostrarTodos");
const modal = document.getElementById("myModal");
const closeModalSpan = document.querySelector(".close");
const alumnosContainer = document.getElementById("alumnosContainer");
const inputAlumno = document.getElementById("inputAlumno");
const btnAgregarAlumno = document.getElementById("agregarAlumno");
const btnEliminarSeleccionados = document.getElementById("eliminarSeleccionados");
const btnSeleccionar = document.getElementById("seleccionar");

// Datos de ejemplo (puedes modificarlos con tus propios datos)
const alumnos = ["Elena", "Alba", "Yadi", "Isaac", "Maxwell", "Jander", "Raúl", "Victor", "Denisse", "Alfredo", "Alicia", "Álvaro", "Marcela", "Joaco", "David", "Isaac", "Anzuly", "Paolo", "Hannah", "Laudy", "Alba", "Jose"];

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
    modal.style.display = "block";
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


