
// comprobar disponibilidad de localstorage
if(typeof(Storage) !== 'undefined'){
    console.log('localstorage disponible');
}else{
    console.log('incompatible')
}

//guardar datos en el localstorage
localStorage.setItem('titulo', 'Curso re piola re loco');

// obtener datos del localstorage
const valorLocal = localStorage.getItem('titulo');

// mostrarlo incluido en la web

const parrafo = document.getElementById('parrafo');

parrafo.innerText = valorLocal;

//guardar objetos 

let usuario = {
    nombre: 'juan',
    edad: 20,
    apellido:'mendoza'
}

localStorage.setItem('usuario',JSON.stringify(usuario) ) // siendo el primer parametro el titulo y el segundo el objeto
// el JSON.stringify pasa el formato de objeto a JSON

//recuperar objeto
const recuperado = JSON.parse(localStorage.getItem('usuario'));
console.log(recuperado);

//mostrarlo integrado a la web

parrafo.append(recuperado.edad);

