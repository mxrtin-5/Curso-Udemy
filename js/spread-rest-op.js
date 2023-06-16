// se usa cuando no se sabe la cantidad de parametros que seran ingresados

//rest
function listadoFrutas(...frutas){
    console.log(frutas);
}

listadoFrutas('naranja', 'manzana', 'sandia', 'pera');

//spread

let frutas1 = ['naranja', 'pera'];

listadoFrutas(...frutas1);