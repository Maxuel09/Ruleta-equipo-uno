

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



const mostrarTodosButton = document.getElementById("mostrarTodos");
const modal = document.getElementById("myModal");
const closeModalSpan = document.querySelector(".material-symbols-outlined");
const alumnosContainer = document.getElementById("alumnosContainer");
const inputAlumno = document.getElementById("inputAlumno");
const btnAgregarAlumno = document.getElementById("agregarAlumno");
const btnEliminarSeleccionados = document.getElementById("eliminarSeleccionados");
const btnSeleccionar = document.getElementById("seleccionar");

//datos de alumnos
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
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            agregarTarjeta(nombre);
        }
    });

    return label;
}

const tarjetas = {};
// Función para agregar una nueva tarjeta con el nombre dado
// Función para crear checkbox de alumnos con identificadores únicos
function crearCheckbox(nombre) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = nombre;

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(nombre));
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            agregarTarjeta(nombre);
        } else {
            eliminarTarjeta(nombre);
        }
    });

    return label;
}

// Función para agregar una nueva tarjeta con el nombre dado
function agregarTarjeta(nombre) {
    let color = "#ff0000"; // Podrías definir un color predeterminado o elegir uno dinámicamente

    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.style.backgroundColor = color;

    let titulo = document.createElement("h3");
    titulo.textContent = nombre;

    nuevaTarjeta.appendChild(titulo);

    let contenedor = document.querySelector(".container");
    contenedor.appendChild(nuevaTarjeta);

    // Asignar un identificador único basado en el nombre del alumno
    nuevaTarjeta.setAttribute("id", `tarjeta-${nombre}`);
    // Guardar la referencia de la tarjeta por nombre de alumno
    tarjetas[nombre] = nuevaTarjeta;
}

// Función para eliminar la tarjeta correspondiente al alumno
function eliminarTarjeta(nombre) {
    // Obtener la referencia de la tarjeta por nombre de alumno
    const tarjeta = tarjetas[nombre];
    if (tarjeta) {
        tarjeta.remove(); // Eliminar la tarjeta del DOM
        delete tarjetas[nombre]; // Eliminar la referencia de la tarjeta
    }
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




// este es el de boton
btnEliminarSeleccionados.addEventListener("click", () => {
    let contenedor = document.querySelectorAll('.container');
    contenedor.forEach((elemento) => {
        let tarjetas = elemento.querySelectorAll('.tarjeta');
        tarjetas.forEach((tarjeta) => {
            tarjeta.remove();
        });
    })
    })




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




