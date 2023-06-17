/*
1. pida 6 numeros por pantalla y se los introduzca en un array
2. mostrar el array entero en el cuerpo de la pagina y la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busca un valor introducido por el usuario, que nos diga si se encuentra y su indice
*/
let numeros = [];

for (let i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt("Introduce tu número " + (i)));
    //numeros.push(parseInt(prompt("Introduce tu número " + (i))));
    //cualquiera sirve
}

function mostrarArray() {
    document.write("<h1> Contenido del array </h1>");
    numeros.forEach((numero, i) => {
        document.write('<strong>' + numero + '</strong><br>');
    });
};

numeros.sort(function(a, b){return b-a});

mostrarArray();
console.log(numeros);


numeros.sort(function(a, b){return a-b});

mostrarArray();
console.log(numeros);


//numeros.reverse();
//mostrarArray();
//console.log(numeros);

document.write('<h3>El array tiene: ' + numeros.length + ' elementos</h3>');


let busqueda = parseInt(prompt('Busca un numero'));

let buscado = numeros.findIndex(numero => numero === busqueda);

if(buscado && buscado !== -1){
    document.write('<h3>Posicion de la busqueda: ' + buscado + '</h3>');
}else{
    document.write('<h3>No encontrado</h3>');
}

// metodo slice
// el metodo slice no muta el array original
let slice = numeros.slice(0,3);
console.log(slice);

//metodo splice
// este metodo si afecta al array original
let splice = numeros.splice(3);
console.log(splice);

//metodo lenght
//afecta al array original
numeros.length = 5;
console.log(numeros); 
