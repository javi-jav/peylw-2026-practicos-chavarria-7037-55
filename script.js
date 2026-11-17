




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




// TP6: MEMOTEST DE OCHO PARES
// La lógica se encapsula para no exponer las cartas ni sus valores en variables globales.
(function () {
    const tablero = document.getElementById("juego-tablero");
    if (!tablero) return; // No intervenir en las otras páginas del portal.

    const token = "chavarria-7037-55";
    const claveRecord = "memotest-record-" + token;
    const iconos = ["🚀", "💻", "🎮", "🌐", "🧠", "⭐", "🔒", "🎨"];
    const intentosElemento = document.getElementById("juego-intentos");
    const puntosElemento = document.getElementById("juego-puntos");
    const recordElemento = document.getElementById("juego-record");
    const mensajeElemento = document.getElementById("juego-mensaje");
    const reiniciarBoton = document.getElementById("btn-reiniciar-" + token);

    let cartas = [];
    let primeraCarta = null;
    let segundaCarta = null;
    let bloqueado = false;
    let intentos = 0;
    let puntos = 0;
    let temporizador = null;
    let record = null;

    function leerRecord() {
        try {
            const guardado = localStorage.getItem(claveRecord);
            const numero = Number(guardado);
            record = guardado !== null && Number.isInteger(numero) && numero >= 8 ? numero : null;
        } catch (error) {
            record = null;
            mensajeElemento.textContent = "El navegador no permite acceder al récord guardado.";
        }
        mostrarRecord();
    }

    function guardarRecord() {
        if (record === null || intentos < record) {
            record = intentos;
            try {
                localStorage.setItem(claveRecord, String(record));
            } catch (error) {
                mensajeElemento.textContent = "¡Ganaste! No se pudo guardar el récord en este navegador.";
            }
            mostrarRecord();
        }
    }

    function mostrarRecord() {
        recordElemento.textContent = record === null ? "Sin récord todavía" : record + " intentos - " + token;
    }

    function mezclar(valores) {
        for (let i = valores.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [valores[i], valores[j]] = [valores[j], valores[i]];
        }
        return valores;
    }

    function actualizarEstadisticas() {
        intentosElemento.textContent = String(intentos);
        puntosElemento.textContent = String(puntos);
    }

    function mostrarCarta(carta) {
        carta.elemento.classList.add("descubierta");
        carta.elemento.textContent = carta.simbolo;
        carta.elemento.setAttribute("aria-label", "Carta descubierta: " + carta.simbolo);
        carta.elemento.setAttribute("aria-pressed", "true");
    }

    function ocultarCarta(carta) {
        carta.elemento.classList.remove("descubierta");
        carta.elemento.textContent = "?";
        carta.elemento.setAttribute("aria-label", "Carta oculta " + (carta.indice + 1));
        carta.elemento.setAttribute("aria-pressed", "false");
    }

    function seleccionarCarta(carta) {
        if (bloqueado || carta.encontrada || carta === primeraCarta) return;
        mostrarCarta(carta);
        if (primeraCarta === null) {
            primeraCarta = carta;
            mensajeElemento.textContent = "Elegí otra carta para buscar su pareja.";
            return;
        }

        segundaCarta = carta;
        intentos++;
        actualizarEstadisticas();
        if (primeraCarta.simbolo === segundaCarta.simbolo) {
            primeraCarta.encontrada = true;
            segundaCarta.encontrada = true;
            primeraCarta.elemento.classList.add("encontrada");
            segundaCarta.elemento.classList.add("encontrada");
            primeraCarta.elemento.disabled = true;
            segundaCarta.elemento.disabled = true;
            puntos++;
            actualizarEstadisticas();
            primeraCarta = null;
            segundaCarta = null;
            mensajeElemento.textContent = "¡Encontraste un par!";
            if (puntos === 8) {
                mensajeElemento.textContent = "¡Ganaste! Encontraste los 8 pares en " + intentos + " intentos.";
                guardarRecord();
            }
        } else {
            bloqueado = true;
            mensajeElemento.textContent = "No coinciden. ¡Probá de nuevo!";
            const cartaA = primeraCarta;
            const cartaB = segundaCarta;
            temporizador = setTimeout(function () {
                ocultarCarta(cartaA);
                ocultarCarta(cartaB);
                primeraCarta = null;
                segundaCarta = null;
                bloqueado = false;
                temporizador = null;
            }, 950);
        }
    }

    function nuevaPartida() {
        if (temporizador !== null) {
            clearTimeout(temporizador);
            temporizador = null;
        }
        primeraCarta = null;
        segundaCarta = null;
        bloqueado = false;
        intentos = 0;
        puntos = 0;
        tablero.replaceChildren();
        actualizarEstadisticas();
        leerRecord();
        mensajeElemento.textContent = "¡Empezá eligiendo una carta!";
        cartas = mezclar([...iconos, ...iconos]).map(function (simbolo, indice) {
            const boton = document.createElement("button");
            boton.type = "button";
            boton.id = "carta-" + token + "-" + indice;
            boton.className = "juego-carta";
            boton.textContent = "?";
            boton.setAttribute("aria-label", "Carta oculta " + (indice + 1));
            boton.setAttribute("aria-pressed", "false");
            const carta = { simbolo: simbolo, indice: indice, encontrada: false, elemento: boton };
            boton.addEventListener("click", function () { seleccionarCarta(carta); });
            tablero.appendChild(boton);
            return carta;
        });
    }

    reiniciarBoton.addEventListener("click", nuevaPartida);
    nuevaPartida();
})();
