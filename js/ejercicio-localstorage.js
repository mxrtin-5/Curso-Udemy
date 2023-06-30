let form = document.getElementById('formpeliculas');
let formBorrar = document.getElementById('formborrarpeliculas');
let ul = document.getElementById('ul');

// Función para mostrar la lista de películas
function mostrarPeliculas() {
    ul.innerHTML = ""; // Limpiar la lista antes de mostrar las películas

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let pelicula = localStorage.getItem(key);

        let li = document.createElement("li");
        li.textContent = pelicula;
        ul.appendChild(li);
    }
}

// Mostrar las películas cuando se carga inicialmente la página
mostrarPeliculas();

// Evento para agregar una película
form.addEventListener('submit', function(event){
    event.preventDefault();

    let pelicula = document.getElementById('addpelicula').value;

    if (pelicula.length >= 1) {
        localStorage.setItem('Pelicula', pelicula);
        mostrarPeliculas(); // Actualizar la lista de películas
    }
});

// Evento para borrar una película
formBorrar.addEventListener('submit', function(event){
    event.preventDefault();

    let peliculaBorrada = document.getElementById('borrarpelicula').value;

    if (localStorage.getItem(peliculaBorrada)) {
        localStorage.removeItem(peliculaBorrada);
        mostrarPeliculas(); // Actualizar la lista de películas
    }
});