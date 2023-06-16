let categorias = ['Accion', 'Terror', 'Comedia'];
let peliculas = ['La la land', 'Spider man', 'Silent voice'];

// ordena el array en orden alfabetico
peliculas.sort();

console.log(peliculas);

// le da la vuelta al array
peliculas.reverse();

console.log(peliculas);

//metodo de busqueda

let busqueda = peliculas.find(function(pelicula1){
    return pelicula1 === 'La la land'
});

console.log(busqueda);

// metodo de busqueda usando arrow functions con return explicito

let busqueda1 = peliculas.find(pelicula2 => pelicula2 === 'Spider man');

console.log(busqueda1);

// metodo de busqueda que devuelve el indice de lo que se busca

let busqueda2 = peliculas.findIndex(pelicula3 => pelicula3 === 'Silent voice');

console.log(busqueda2);



let cine = [categorias, peliculas];

console.log(cine[0][1]);// entra al array cine, a la variable categorias y al genero terror

let elemento = '';
/*
do{
    elemento = prompt('Intoduce la pelicula');
    peliculas.push(elemento);
}while(elemento !== 'esc');
*/

let indice = peliculas.indexOf("Silent voice");

if(indice > -1){
    peliculas.splice(indice, 1) // el metodo splice nos permite mediente un indice borrar tantos elementos como se quiera haciaa adelante de ese indice
}

console.log(peliculas);

// convierte y en un string
let peliculasString = peliculas.join();

console.log(peliculasString);

let string = 'texto1, texto2, texto3';
//convierte un string en un  array separado por aquello que se le pase como parametro
let cadenaArray = string.split(', ')

console.log(cadenaArray);

//como crear un filtro 

let precios = [100,200,500,430,123,7832,678,127,867,3645];

// el metodo some busca elementos que cumplan con una condicion en concreto
let buscarPrecio = precios.some(precio => precio >= 500);

console.log(buscarPrecio);