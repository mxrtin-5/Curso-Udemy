/*
Ejercicio 1

Dado un numero mostrar su serie de fibonacci.

*/

function fibonacci(number) {
    let arr = [0, 1];

    for (let i = 2; i < number; i++) {
        let fibNumber = arr[i - 1] + arr[i - 2];
        arr.push(fibNumber);
    }
    return arr
}


console.log(fibonacci(70));

// Ejercicio 2



const a = [
    { id: 4, name: 'Greg' },
    { id: 1, name: 'David' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Matt' }];

const b = [
    { id: 5, name: 'Mathew', position: '1' },
    { id: 6, name: 'Gracia', position: '2' },
    { id: 2, name: 'John', position: '2' },
    { id: 3, name: 'Matt', position: '2' }];

let map = new Map();
// Insert all entries keyed by ID into the Map, filling in placeholder
// 'position' since the Array 'a' lacks 'position' entirely:
a.forEach((item)=>{
    item.position = null;
    console.log(map.set(item.id, item));
});

// For values in 'b', insert them if missing, otherwise, update existing values:
b.forEach((item)=>{
    let existente = map.get(item.id);
    if(existente === undefined){
        map.set(item.id, item);
    }else{
        console.log(Object.assign(existente, item));

        /*

        La línea de código Object.assign(existente, item); se utiliza para fusionar las propiedades del objeto item en el objeto existente.

        La función Object.assign() en JavaScript se utiliza para copiar los valores de todas las propiedades enumerables propias de uno o más objetos fuente (item en este caso) a un objeto destino (existente en este caso). Devuelve el objeto destino actualizado con las propiedades fusionadas.

        En el contexto del código que mencionaste, cuando se encuentra un objeto con la misma clave (id) en el Map, se guarda una referencia a ese objeto existente en la variable existente. Luego, se utiliza Object.assign(existente, item); para fusionar las propiedades del objeto item en el objeto existente.

        Esto significa que las propiedades del objeto item se copiarán en el objeto existente, sobrescribiendo los valores existentes en caso de haber propiedades en común. Si hay propiedades en item que no existen en existente, se agregarán al objeto existente.

        En resumen, la línea Object.assign(existente, item); se utiliza para actualizar el objeto existente en el Map con las propiedades del objeto item, fusionando los valores de las propiedades correspondientes. Esto permite combinar la información de los objetos cuando hay claves duplicadas en el segundo array.

*/
    }
})


// Extract resulting combined objects from the Map as an Array
let result = Array.from(map.values());

console.log(JSON.stringify(result));
/*
let result = Array.from(map.values());: En esta línea, se utiliza Array.from() para convertir los valores del objeto Map en un array. El método values() del objeto Map devuelve un iterador de los valores almacenados en el Map. Al pasar este iterador al Array.from(), se crea un array que contiene todos los valores del Map. El resultado se asigna a la variable result.

console.log(JSON.stringify(result));: Esta línea muestra en la consola el array result en forma de cadena JSON utilizando JSON.stringify(). JSON.stringify() convierte un valor en JavaScript (en este caso, el array result) en una cadena JSON. Esto facilita la visualización de los valores en la consola.
*/

// Ejercicio 3

// dada una cadena de texto, comprobar si es palindromo o no

function palindromo(palabra){
    const palabraRevez = palabra.split('').reverse().join('');

    if(palabra === palabraRevez){
        console.log('es palindromo')
    }else{
        console.log('no es palindromo')
    }
}

palindromo('ono');