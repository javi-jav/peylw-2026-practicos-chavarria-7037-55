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