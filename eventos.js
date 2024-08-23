function mostrarAlerta() {
    alert("Hola!");
}

// Selecciona el div por su id
const boton = document.getElementById("boton");

// Agrega el manejador de eventos para el evento "click"
boton.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

// Agrega el manejador de eventos para el evento "click" en el botón
boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el evento se propague al div
    alert("Hola!");
});