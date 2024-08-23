function mostrarAlerta() {
    alert("Hola!");
}


// Selecciona el div por su id
const boton = document.getElementById("boton");

// Agrega el manejador de eventos para el evento "click"
boton.addEventListener("onclick", function() {
    alert("Hola! Soy el div");
});
