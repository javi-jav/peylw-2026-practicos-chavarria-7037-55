




console.log("Script cargado exitosamente");

// TAREA 2: VOLCADO DEL FORMULARIO EN TIEMPO REAL

// Verificamos que estamos en la pagina de contacto
if (document.getElementById("nombre")) {

    // Campos de texto y numero
    const campos = [
        ["nombre", "resumen-nombre"],
        ["apellido", "resumen-apellido"],
        ["email", "resumen-email"],
        ["telefono", "resumen-telefono"],
        ["edad", "resumen-edad"],
        ["direccion", "resumen-direccion"],
        ["codigo-postal", "resumen-cp"]
    ];

    // Actualizamos la tabla mientras el usuario escribe
    campos.forEach(function(campo) {

        const entrada = document.getElementById(campo[0]);
        const celda = document.getElementById(campo[1]);

        entrada.addEventListener("input", function() {

            celda.innerText = entrada.value;

            // Validacion especial para la edad
            if (entrada.id === "edad") {

                if (entrada.value !== "" && Number(entrada.value) < 18) {
                    celda.innerText = entrada.value + " (Menor de edad)";
                    celda.style.backgroundColor = "#ffcccc";
                } else {
                    celda.innerText = entrada.value;
                    celda.style.backgroundColor = "";
                }
            }
        });
    });

    // Provincia
    const provincia = document.getElementById("provincia");
    const resumenProvincia = document.getElementById("resumen-provincia");

    provincia.addEventListener("input", function() {
        resumenProvincia.innerText = provincia.value;
    });

    // Metodo de contacto preferido
    const metodos = document.querySelectorAll('input[name="metodo-contacto"]');
    const resumenMetodo = document.getElementById("resumen-metodo-contacto");

    metodos.forEach(function(metodo) {

        metodo.addEventListener("change", function() {

            if (metodo.checked) {
                resumenMetodo.innerText = metodo.value;
            }
        });
    });

    // Suscripciones
    const suscripciones = document.querySelectorAll('input[name="suscripciones"]');
    const resumenSuscripciones = document.getElementById("resumen-suscripciones");

    suscripciones.forEach(function(suscripcion) {

        suscripcion.addEventListener("change", function() {

            const seleccionadas = [];

            suscripciones.forEach(function(opcion) {
                if (opcion.checked) {
                    seleccionadas.push(opcion.value);
                }
            });

            resumenSuscripciones.innerText = seleccionadas.join(", ");
        });
    });

    // Mostramos las opciones seleccionadas inicialmente
    const metodoInicial = document.querySelector('input[name="metodo-contacto"]:checked');

    if (metodoInicial) {
        resumenMetodo.innerText = metodoInicial.value;
    }

    const suscripcionesIniciales = [];

    suscripciones.forEach(function(opcion) {
        if (opcion.checked) {
            suscripcionesIniciales.push(opcion.value);
        }
    });

    resumenSuscripciones.innerText = suscripcionesIniciales.join(", ");
}

// TAREA 3: BOTON LEER MAS / LEER MENOS

const botonLeerMas = document.getElementById("btn-leer-mas-chavarria-7037-55");
const cvCompleto = document.querySelector(".cv-completo");

// Verificamos que los elementos existan en esta pagina
if (botonLeerMas && cvCompleto) {

    botonLeerMas.addEventListener("click", function() {

        if (cvCompleto.style.display === "block") {

            cvCompleto.style.display = "none";
            botonLeerMas.innerText = "Leer más";
            botonLeerMas.setAttribute("aria-expanded", "false");

        } else {

            cvCompleto.style.display = "block";
            botonLeerMas.innerText = "Leer menos";
            botonLeerMas.setAttribute("aria-expanded", "true");
        }
    });
}


