/*
Un closure en JavaScript es una función que tiene acceso a variables en su ámbito léxico, incluso después de que la función haya sido ejecutada y su ámbito léxico haya sido destruido



. En otras palabras, un closure es una función que "recuerda" el entorno en el que se creó, incluyendo las variables y funciones disponibles en ese momento

.
Los closures son útiles para crear funciones que actúan como fábricas de funciones, ya que permiten crear funciones con diferentes ámbitos léxicos que pueden compartir variables comunes

. También son útiles para crear funciones privadas, ya que las variables definidas en el ámbito léxico de una función no son accesibles desde fuera de la función

.
Para crear un closure, se define una función dentro de otra función y se devuelve la función interna

. La función interna tiene acceso a las variables definidas en la función externa, incluso después de que la función externa haya sido ejecutada

.
En resumen, un closure en JavaScript es una función que tiene acceso a variables en su ámbito léxico, incluso después de que la función haya sido ejecutada
y su ámbito léxico haya sido destruido. Los closures son útiles para crear funciones que actúan como fábricas de funciones y para crear funciones privadas
*/


const miFuncion = () => {
    let miValor = 2;
    console.log(miValor);
    const funcionHija = () => {
        console.log(miValor += 1);
    }
    funcionHija();
}
miFuncion();



const saludar = () => {
    const nombre = "Juan";
    console.log(`Hola, ${nombre}!`);
}
saludar();
//console.log(nombre); // Error: nombre is not defined




const crearSumador = (numero) => {
    return (otroNumero) => {
        return numero + otroNumero;
    }
}
const sumarCinco = crearSumador(5);
console.log(sumarCinco(3)); // 8
console.log(sumarCinco(7)); // 12

/*
El ámbito léxico en JavaScript se refiere al alcance de las variables en una función y cómo se accede a ellas

. El ámbito léxico describe cómo las funciones anidadas tienen acceso a las variables definidas en los ámbitos de sus padres
. En otras palabras, el ámbito léxico se refiere a la forma en que las variables se buscan en la cadena de ámbitos anidados en una función

En JavaScript, cada función tiene su propio ámbito léxico, lo que significa que las variables definidas dentro de una función solo son accesibles dentro de esa función y de las funciones anidadas dentro de ella

. El ámbito léxico es importante para entender cómo funcionan los closures en JavaScript, ya que los closures tienen acceso
a las variables en su ámbito léxico, incluso después de que la función haya sido ejecutada y su ámbito léxico haya sido destruido

En resumen, el ámbito léxico en JavaScript se refiere al alcance de las variables en una función y cómo se accede a ellas.
Cada función tiene su propio ámbito léxico, lo que significa que las variables definidas dentro de una función solo son accesibles dentro de esa función y de las funciones anidadas dentro de ella. El ámbito léxico es importante para entender cómo funcionan los closures en JavaScript


*/


// Función exterior que retorna una función interior
function sumador(x) {
    // La función interior tiene acceso a la variable "x" debido a la clausura
    return function (y) {
        // La función interior suma "x" y "y"
        return x + y;
    };
}

// Crear una instancia de la función sumador con el valor 5
const sumaCinco = sumador(5);

// Llamar a la función interna pasando un valor
console.log(sumaCinco(3)); // Output: 8

// Llamar a la función interna nuevamente con otro valor
console.log(sumaCinco(7)); // Output: 12

/*
Definimos una función llamada sumador que toma un argumento x. Esta función retorna otra función.
La función interior, que se devuelve, toma un argumento y y suma x y y. Aquí, la función interior tiene acceso a la variable x de la función exterior debido a la clausura. La clausura permite que la función interna acceda y recuerde las variables de la función exterior incluso después de que la función exterior haya finalizado su ejecución.
Creamos una instancia de la función sumador llamándola con el valor 5. Esto devuelve la función interior con la variable x establecida en 5. Asignamos esta instancia a la variable sumaCinco.
Luego, llamamos a sumaCinco pasando 3 como argumento. La función interior suma x (que es 5) y y (que es 3), devolviendo 8.
Volvemos a llamar a sumaCinco, esta vez pasando 7 como argumento. La función interior suma x (que es 5) y y (que es 7), devolviendo 12.
*/


function contador() {
    let count = 0; // Variable privada dentro de la función externa

    function incrementar() {
        count++; // Incrementa la variable count
        console.log('Contador:', count);
    }

    function decrementar() {
        count--; // Decrementa la variable count
        console.log('Contador:', count);
    }

    return {
        increment: incrementar,
        decrement: decrementar
    };
}

// Crear una instancia de contador
const miContador = contador();

// Incrementar y decrementar el contador
miContador.increment(); // Output: Contador: 1
miContador.increment(); // Output: Contador: 2
miContador.decrement(); // Output: Contador: 1

/*

Definimos una función llamada contador que no toma ningún argumento.
Dentro de la función contador, declaramos una variable count que se inicializa en 0. Esta variable count es privada dentro de la función externa y solo es accesible dentro de las funciones internas debido a la clausura.
Definimos dos funciones internas: incrementar y decrementar. Estas funciones tienen acceso a la variable count debido a la clausura y modifican su valor.
Retornamos un objeto que contiene las referencias a las funciones incrementar y decrementar, lo que nos permite acceder a ellas desde fuera de la función contador.
Creamos una instancia del contador llamando a la función contador y asignando el resultado a la variable miContador.
Utilizamos la instancia miContador para llamar a las funciones incrementar y decrementar, lo que modifica la variable count y muestra el valor actualizado del contador en la consola.
*/


// otro ejemplo 

function generadorSecuencia(prefix) {
    let contador = 0;

    function generarId() {
        contador++;
        return prefix + contador;
    }

    function obtenerContador() {
        return contador;
    }

    return {
        generarId: generarId,
        obtenerContador: obtenerContador
    };
}

// Crear dos instancias de generadorSecuencia con diferentes prefijos
const secuencia1 = generadorSecuencia('A-');
const secuencia2 = generadorSecuencia('B-');

// Generar IDs utilizando las instancias
console.log(secuencia1.generarId()); // Output: 'A-1'
console.log(secuencia1.generarId()); // Output: 'A-2'
console.log(secuencia2.generarId()); // Output: 'B-1'
console.log(secuencia2.generarId()); // Output: 'B-2'

// Obtener el contador de cada instancia
console.log(secuencia1.obtenerContador()); // Output: 2
console.log(secuencia2.obtenerContador()); // Output: 2

/*

Definimos una función llamada generadorSecuencia que toma un argumento prefix.
Dentro de la función generadorSecuencia, declaramos una variable contador que se inicializa en 0. Esta variable contador es privada dentro de la función externa y solo es accesible dentro de las funciones internas debido a la clausura.
Definimos dos funciones internas: generarId y obtenerContador. La función generarId incrementa el contador y devuelve el valor del contador concatenado con el prefijo. La función obtenerContador simplemente devuelve el valor actual del contador.
Retornamos un objeto que contiene las referencias a las funciones generarId y obtenerContador, lo que nos permite acceder a ellas desde fuera de la función generadorSecuencia.
Creamos dos instancias de generadorSecuencia llamando a la función y asignando los resultados a las variables secuencia1 y secuencia2. Cada instancia tiene su propio contexto de clausura y su propia variable contador.
Utilizamos las instancias secuencia1 y secuencia2 para llamar a la función generarId, lo que genera una secuencia de IDs únicos para cada instancia. También llamamos a la función obtenerContador para obtener el valor actual del contador de cada instancia.
*/


// otro ejemplo mas complejo 

function gestorTareas() {
    let tareas = [];

    function agregarTarea(descripcion) {
        const nuevaTarea = {
            id: tareas.length + 1,
            descripcion: descripcion,
            completada: false
        };
        tareas.push(nuevaTarea);
        console.log('Tarea agregada:', nuevaTarea);
    }

    function obtenerTareas() {
        return tareas;
    }

    function completarTarea(id) {
        const tarea = tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
            console.log('Tarea completada:', tarea);
        }
    }

    return {
        agregarTarea: agregarTarea,
        obtenerTareas: obtenerTareas,
        completarTarea: completarTarea
    };
}

// Crear una instancia de gestorTareas
const gestor = gestorTareas();

// Agregar tareas
gestor.agregarTarea('Terminar el informe');
gestor.agregarTarea('Hacer la compra');
gestor.agregarTarea('Llamar al cliente');

// Obtener todas las tareas
console.log(gestor.obtenerTareas());

// Completar una tarea por su ID
gestor.completarTarea(2);

// Obtener todas las tareas nuevamente
console.log(gestor.obtenerTareas());


/*

Definimos una función llamada gestorTareas que no toma ningún argumento.
Dentro de la función gestorTareas, declaramos una variable tareas que se inicializa como un array vacío. Esta variable tareas es privada dentro de la función externa y solo es accesible dentro de las funciones internas debido a la clausura.
Definimos tres funciones internas: agregarTarea, obtenerTareas y completarTarea. La función agregarTarea crea un nuevo objeto de tarea con un ID, descripción y estado de completada, lo agrega al array de tareas y muestra un mensaje en la consola. La función obtenerTareas simplemente devuelve el array de tareas. La función completarTarea busca una tarea por su ID en el array de tareas y la marca como completada si la encuentra.
Retornamos un objeto que contiene las referencias a las funciones agregarTarea, obtenerTareas y completarTarea, lo que nos permite acceder a ellas desde fuera de la función gestorTareas.
Creamos una instancia de gestorTareas llamando a la función y asignando el resultado a la variable gestor.
Utilizamos la instancia gestor para llamar a las funciones agregarTarea y completarTarea, agregando tareas y marcando una tarea como completada.
Luego, utilizamos la instancia gestor para llamar a la función obtenerTareas y mostramos el array de tareas en la consola.

*/