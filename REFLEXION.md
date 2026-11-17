
# Reflexión - Laboratorio 2

## 1. Imagen y atributo alt

La imagen guardada en la carpeta `img/` se llama `foto_javier.jpg`.

El valor del atributo `alt` utilizado en `acercade.html` es:

`Foto de Javier Chavarria`

## 2. Uso de etiquetas semánticas

Es importante utilizar etiquetas semánticas como `<main>` y `<nav>` porque permiten identificar la función que cumple cada parte de una página web. A diferencia de una etiqueta genérica como `<div>`, las etiquetas semánticas ayudan a organizar y comprender mejor la estructura del sitio.

## 3. Verificación de las rutas de navegación

Primero verifiqué las rutas de manera local abriendo `index.html` en el navegador. Desde la página de inicio accedí a `acercade.html` mediante el enlace "Acerca de" y luego regresé a `index.html` mediante el enlace "Inicio".

Después de publicar los cambios, verifiqué nuevamente ambos enlaces desde la página desplegada en GitHub Pages y comprobé que las rutas relativas funcionaban correctamente.


# Reflexión - Trabajo Práctico 3

## 1. Código Postal y validación mediante pattern

El código HTML utilizado para definir el campo Código Postal es:

```html
<label for="codigo-postal">Código Postal:</label>
<input
    type="text"
    id="codigo-postal"
    name="codigo-postal"
    pattern="^[A-Z]\d{4}[A-Z]{3}$"
    title="Ingrese el código postal con el formato R8500AAF">
```

Este patrón permite validar que el Código Postal tenga una letra mayúscula, cuatro dígitos y tres letras mayúsculas.

## 2. Uso de la etiqueta label

La etiqueta `<label>` sirve para identificar o describir un campo de un formulario. Para asociarla correctamente con un campo se utiliza el atributo `for` en el `<label>`, cuyo valor debe coincidir con el atributo `id` del campo correspondiente.

Por ejemplo:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

En este caso, `for="nombre"` se relaciona con `id="nombre"`.

## 3. Comportamiento de los campos radio según el atributo name

Cuando varios campos de tipo `radio` comparten el mismo atributo `name`, forman parte del mismo grupo y solamente se puede seleccionar una opción a la vez. Al seleccionar una nueva opción, la anterior se desmarca.

En cambio, si los campos `radio` tienen diferentes atributos `name`, pertenecen a grupos distintos y se puede mantener seleccionada una opción de cada grupo al mismo tiempo.

En el formulario de contacto, las tres opciones utilizan `name="metodo-contacto"`, por lo que son excluyentes entre sí.


# Reflexión - Trabajo Práctico 4

## 1. Animación de rotación vertical del logo del CURZA

El fragmento de código CSS utilizado para realizar la animación de rotación vertical del logo del CURZA al pasar el cursor por encima es:

```css
.logo-curza {
    width: 70px;
    transition: transform 1s ease-in-out;
}

.logo-curza:hover {
    transform: rotateY(360deg);
}
```

La propiedad `transition` permite que el giro se realice de manera fluida y `rotateY(360deg)` hace que el logo complete una rotación sobre su eje vertical.

## 2. Color de fondo en el elemento con position: sticky

Es necesario definir un `background-color` en el elemento con `position: sticky` porque, mientras el título permanece fijo dentro de la caja, el resto del contenido se desplaza detrás de él.

Si no se definiera un color de fondo, el texto que se desplaza podría verse detrás del título y dificultar su lectura.

En este caso se utilizó:

```css
.biografia > h2 {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
    padding: 10px 0;
}
```

## 3. Cambios visuales en una pantalla menor a 768px

Al probar el sitio en una pantalla de tamaño celular, el menú de navegación cambia de una distribución horizontal a una distribución vertical.

También se reduce el tamaño del título y del logo del CURZA, el formulario se adapta al espacio disponible y la tabla permite desplazamiento horizontal para evitar que supere el ancho de la pantalla.

Estos cambios se aplican mediante la regla:

```css
@media (max-width: 768px)
```


# Reflexión - Trabajo Práctico 5

## 1. Validación de edad menor a 18 años

El fragmento de código JavaScript utilizado para verificar si la edad ingresada es menor de 18 años y aplicar el estilo dinámico en la tabla es:

```javascript
if (entrada.id === "edad") {

    if (entrada.value !== "" && Number(entrada.value) < 18) {
        celda.innerText = entrada.value + " (Menor de edad)";
        celda.style.backgroundColor = "#ffcccc";
    } else {
        celda.innerText = entrada.value;
        celda.style.backgroundColor = "";
    }
}
```

Este código comprueba que el campo sea el de edad y que tenga un valor ingresado. Si el número es menor de 18, agrega el texto "(Menor de edad)" y cambia el fondo de la celda a rojo claro.

Cuando la edad es igual o mayor a 18, se muestra solamente el número y se restablece el color de fondo normal.

## 2. Diferencia entre los eventos input y change

Se utilizó el evento `input` porque permite actualizar la tabla inmediatamente mientras el usuario escribe o modifica el contenido de un campo.

En cambio, el evento `change` se ejecuta cuando se confirma un cambio en el valor. En los campos de texto, normalmente ocurre cuando el usuario termina de escribir y sale del campo.

Por eso, para mostrar los datos en tiempo real utilizamos `input`, mientras que para los botones de opción (`radio`) y las casillas de verificación (`checkbox`) utilizamos `change`.

## 3. Prevención de errores al utilizar un archivo JavaScript común

El archivo `script.js` se utiliza tanto en `contacto.html` como en `acercade.html`, pero cada página contiene elementos diferentes.

Para evitar errores al intentar acceder a elementos que no existen en una página, primero verificamos su existencia.

En el formulario utilizamos:

```javascript
if (document.getElementById("nombre")) {
```

Esto permite ejecutar el código del formulario solamente cuando existe el campo con identificador `nombre`.

Para la biografía utilizamos:

```javascript
if (botonLeerMas && cvCompleto) {
```

De esta manera, el código del botón "Leer más" solamente se ejecuta cuando existen tanto el botón como el contenedor de la biografía.

Estas verificaciones evitan intentar utilizar elementos inexistentes y permiten compartir el mismo archivo JavaScript entre ambas páginas sin generar errores en la consola.


---

## Laboratorio 6: Memotest interactivo

**1. ¿Qué opción de juego seleccionó?**

Seleccioné **Memoria con Cartas (Memotest)**, con 8 pares de cartas (16 cartas en total). El jugador descubre dos cartas por turno. Si coinciden, permanecen visibles; de lo contrario, se ocultan luego de 950 milisegundos. El objetivo es encontrar todos los pares usando la menor cantidad posible de intentos.

**2. Fragmento literal de JavaScript para leer y guardar el récord con `localStorage`:**

Lectura (`getItem`), dentro de `leerRecord()`:

```javascript
const guardado = localStorage.getItem(claveRecord);
const numero = Number(guardado);
record = guardado !== null && Number.isInteger(numero) && numero >= 8 ? numero : null;
```

Escritura (`setItem`), dentro de `guardarRecord()`:

```javascript
if (record === null || intentos < record) {
    record = intentos;
    try {
        localStorage.setItem(claveRecord, String(record));
    } catch (error) {
        mensajeElemento.textContent = "¡Ganaste! No se pudo guardar el récord en este navegador.";
    }
    mostrarRecord();
}
```

El récord se identifica con una clave que incluye mi token (`memotest-record-chavarria-7037-55`). Como el objetivo es usar menos intentos, solo se reemplaza cuando la nueva partida tiene un resultado menor.

**3. ¿Cómo evitó que el usuario descubra las respuestas mediante variables globales?**

Encapsulé toda la lógica del Memotest en una función autoejecutable (`IIFE`). Los símbolos, el arreglo mezclado de cartas y el estado de cada turno se declaran dentro de esa función, sin asignarse a propiedades globales de `window`. Además, cada botón muestra inicialmente `?` y el símbolo se incorpora al DOM únicamente cuando el usuario descubre la carta. Durante la espera entre dos cartas incorrectas se bloquean los clics para impedir turnos adicionales. Esto dificulta consultar directamente las respuestas desde variables globales, aunque no constituye una protección absoluta frente a alguien que inspeccione o modifique el código del navegador.
