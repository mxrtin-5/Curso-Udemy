/*
Dada una matriz de enteros, encuentra el par de elementos adyacentes que tiene el producto más grande y devuelve ese producto.

Ejemplo

Para inputArray = [3, 6, -2, -5, 7, 3], la salida debería ser
solution(inputArray) = 21.

7y 3producir el producto más grande.
*/

function solution(inputArray) {
    let productoMaximo = - Infinity
    for (let i = 0; i < inputArray.length; i++) {
        let producto = inputArray[i] * inputArray[i + 1]

        if (producto > productoMaximo) {
            productoMaximo = producto;
        }
    }
    return productoMaximo
}

let inputArray = [3, 6, -2, -5, 7, 3]
console.log(solution(inputArray));

////////////////////

//1. ¿Qué devuelve la siguiente función?
function sayHi() {
    // var name se eleva aca pero sin su asignacion de valor
    console.log(name);
    //console.log(age);// no son accesibles antes que las declaremos
    var name = "Lydia"; // recien aca se le asigna un valor
    //let age = 21;// las variables con let y const tambien se elevan pero no se inicializan
}

sayHi();

/*

Dentro de la función, primero declaramos la variable name con la palabra reservada  var.
Esto significa que la variable se eleva (el espacio de memoria se configura durante la fase de creación.
Hace referencia al termino hoisting) con el valor predeterminado de indefinido, hasta que realmente llegamos a la línea donde definimos la variable.
Aún no hemos definido la variable en la línea donde intentamos registrar la variable name, por lo que aún mantiene el valor de undefined.

Las variables con la palabra clave let (y const) se elevan, pero a diferencia de var, no se inicializa .
No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la "zona muerta temporal".
Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un ReferenceError
*/

//2. ¿Qué devuelve la siguiente función?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}


/*Debido a la cola de eventos en JavaScript, la función setTimeout se llama una vez el ciclo se ha ejecutado.
Dado que la variable i en el primer bucle se declaró utilizando la palabra reservada  var, este valor es global.
Durante el bucle, incrementamos el valor de i en 1 cada vez, utilizando el operador unario ++. Cuando se invocó la función setTimeout, i era igual a 3 en el primer ejemplo.

En el segundo bucle, la variable i se declaró utilizando la palabra reservada let:
las variables declaradas con la palabra reservada let (y const) tienen un ámbito de bloque (un bloque es lo que se encuentra entre {}).
Durante cada iteración, i tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.
*/

//3. ¿Qué devuelve la siguiente función?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());

/*

Hay que tener en cuenta aqui que el valor de diámetro es una función regular o normal, mientras que el valor de perímetro es una función de flecha.

Con las funciones de flecha, la palabra clave this se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor radius en ese objeto, que devuelve undefined.

*/

//5. ¿Cuál NO es válida?
const bird = {
    size: "small"
};

const mouse = {
    name: "Mickey",
    small: true
};

/*
A: mouse.bird.size
B: mouse[bird.size]
C: mouse[bird["size"]]
D: Todas son correctas
Solución
Respuesta correcta: A
En JavaScript, todas las keys son cadenas (a menos que sea un símbolo). A pesar de que no podríamos escribirlos como cadenas, siempre funcionan como cadenas de manera interna.

JavaScript interpreta declaraciones. Cuando usamos la notación de corchetes, ve el corchete de apertura [ y continúa hasta que encuentra el corchete de cierre ]. Solo de esta manera se evaluará la afirmación.

mouse [bird.size]: Primero evalúa bird.size, que es"small". mouse ["small"] devuelve true

Sin embargo, con la notación de puntos, esto no sucede. mouse no tiene una clave llamada bird, lo que significa que mouse.bird es undefined. Luego, pedimos el tamaño usando la notación de puntos: mouse.bird.size. Como mouse.bird es undefined, en realidad estamos preguntando undefined.size. Esto no es válido y generará un error similar al Cannot read property "size" of undefined

*/

//6. ¿Qué devuelve la siguiente función?
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
A: Hello
B: undefined
C: ReferenceError
D: TypeError

/*
En JavaScript, TODOS los objetos interactúan por referencia, de modo que cuando se establecen iguales o pasan a una función, todos apuntan a la misma ubicación. De esta manera cuando cambia un objeto, los cambia a todos.

Primero, la variable c tiene un valor para un objeto. Más tarde, asignamos d con la misma referencia que c tiene al objeto.


Cuando cambias un objeto, cambias todos ellos.
*/


//7. ¿Qué devuelve la siguiente función?
let a2 = 3;
let b2 = new Number(3);
let c2 = 3;

console.log(a2 == b2);
console.log(a2 === b2);
console.log(b2 === c2);
/*

A: true false true
B: false false true
C: true false false
D: false true true
Respuesta correcta: C
new Number () es un constructor de funciones incorporado. Aunque parece un número, no es realmente un número: tiene muchas características adicionales y es un objeto.

Cuando usamos el operador ==, solo verifica si tiene el mismo valor. Ambos tienen el valor de 3, por lo que devuelve true.

Sin embargo, cuando usamos el operador ===, tanto el valor como el tipo deben ser iguales. Entonces: new Number () no es un número, es un objeto. Ambos devuelven "false".
*/

//8. ¿Qué devuelve la siguiente función ?
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");


/*
A: orange
B: purple
C: green
D: TypeError
Solución
Respuesta correcta: D
La función colorChange es estática.Los métodos estáticos están diseñados para vivir solo en el constructor en el que se crean y no se pueden transmitir a ningún elemento secundario.Como freddie es un niño, la función no se transmite y no está disponible en la instancia de freddie: por lo tanto se lanza un TypeError.
*/


//9. ¿Qué devuelve la siguiente función ?
let greeting;
greetign = {}; // Typo!
console.log(greetign);
/*
A: { }
B: ReferenceError: greetign is not defined
C: undefined
Solución
Respuesta correcta: A
Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global.Cuando escribimos erróneamente greeting como greetign, el intérprete de JS ve esto como global.greetign = {}(o window.greetign = {} en un navegador).

Para evitar esto, podemos usar el "uso estricto".Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.
*/


//10. ¿Qué ocurre cuando hacemos esto ?
function bark() {
    console.log("Woof!");
}

bark.animal = "dog";

/*
A: No pasa nada, es totalmente correcto.
B: SyntaxError.No es posible agregar propiedades a una función de esta manera.
C: undefined
D: ReferenceError
Solución
Respuesta correcta: A
Esto es perfectamente posible en JavaScript, porque las funciones son objetos(Recuerda: todo aparte de los tipos primitivos son objetos en JS)

Una función es un tipo especial de objeto.El código que escribes tú mismo no es la función real.La función es un objeto con propiedades.Esta propiedad es invocable.
*/


//11. ¿Qué devuelve la siguiente función ?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());

/*
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
Solución
Respuesta correcta: A
En JS no se pueden añadir propiedades a un constructor como se puede hacer con los objetos.Si se desea añadir una característica a todos los objetos a la vez, se debe utilizar prototype en su lugar.
Así que en este caso,
*/
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
//habría hecho que member.getFullName() funcionara. ¿Por qué es bueno ? Imaginemos que añadimos este método al constructor.Quizás no todas las "personas" necesitaban este método.Esto desperdiciaría mucho espacio de memoria, ya que todavía tendrían esa propiedad, que ocupa espacio de memoria para cada caso.En cambio, si sólo lo añadimos al prototipo, sólo lo tenemos en un lugar en la memoria,
//¡pero todos ellos tienen acceso a él!



//12. ¿Qué devuelve la siguiente función ?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

/*
A: Person { firstName: "Lydia", lastName: "Hallie" } and undefined
B: Person { firstName: "Lydia", lastName: "Hallie" } and Person { firstName: "Sarah", lastName: "Smith" }
C: Person { firstName: "Lydia", lastName: "Hallie" } and { }
D:Person { firstName: "Lydia", lastName: "Hallie" } and ReferenceError
Solución
Respuesta correcta: A
Para sarah, no usamos la palabra reservada new.Cuando se usa new, se refiere al nuevo objeto vacío que creamos.
Sin embargo, si no se agrega`new', se refiere al objeto global!

En el ejemplo this.firstName equivale a "Sarah" y this.lastName equivale a "Smith".
Lo que realmente hicimos fue definir global.firstName = Sarah'yglobal.lastName = Smith'.
La misma sarah se deja indefinida.
*/


//13. ¿Cuáles son las tres fases de la propagación de eventos?
A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling

/*
Solución
Respuesta correcta: D
Durante la fase de Capturing, el evento pasa a través de los elementos ancestrales hasta el elemento objetivo.
A continuación, alcanza el elemento Target y comienza el bubbling.
Más información aquí.
*/

//14. All object have prototypes.
A: true
B: false

/*
Solución
Respuesta correcta: B
Todos los objetos tienen prototipos, excepto el objeto base (Más info aquí). El componente tiene acceso a algunos métodos y propiedades, como .toString.
Esta es la razón principal por la que se puede utilizar los métodosa JavaScript incorporados. Todos estos métodos están disponibles en el prototipo.
Aunque JavaScript no puede encontrar de manera directa en su objeto,
baja por la cadena de prototipos y lo encuentra allí,
lo que lo hace accesible para poder usarse posteriormente.
*/


//15. ¿Qué devuelve la siguiente función?
function sum(a, b) {
    return a + b;
}

sum(1, "2");
/*
A: NaN
B: TypeError
C: "12"
D: 3
Solución
Respuesta correcta: C
JavaScript es un lenguaje dinámicamente tipado o de tipado débil, esto significa que no es necesario declarar el tipo de variable antes de usarla pues será determinado
 automáticamente cuando el programa comience a ser procesado.
Los valores se pueden convertir automáticamente en otro tipo sin que se sepa, esto se llama denomina implicit type coercion (Más info aquí).
La coerción es la conversión de un tipo a otro.

En este ejemplo, JavaScript convierte el número 1 en una cadena, para que la función tenga sentido y devuelva un valor.Durante la suma de un tipo numérico(1) y un tipo de cadena('2'),
el número se trata como una cadena.
Podemos concatenar cadenas como "Hello" + "World"``, así que lo que está pasando aquí es "1" + "2"que devuelve"12"`
*/


//16. ¿Qué devuelve la siguiente función?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
/*
A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
Solución
Respuesta correcta: C
El operador postfix unario ++:

Devuelve el valor (esto devuelve 0)
Incrementa el valor (el número es ahora 1)
El operador unario prefix ++:

Incrementa el valor (el número es ahora 2)
Devuelve el valor (esto devuelve 2)
Por lo tanto, devuelve 0 2 2 2.
*/


//18. ¿Qué devuelve la siguiente función ?
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });
/*
A: You are an adult!
B: You are still an adult.
    C: Hmm..You don't have an age I guess
Solución
Respuesta correcta: C
Al probar la igualdad, las primitivas se comparan por su valor, mientras que los objetos se comparan por su referencia.
JavaScript comprueba si los objetos tienen una referencia a la misma ubicación en la memoria.

Los dos objetos que estamos comparando no tienen eso: el objeto que pasamos como parámetro se refiere a una ubicación diferente en la memoria que el objeto que usamos para comprobar la igualdad.

Esta es la razón por la que ambos { edad: 18 } === { edad: 18 } y { edad: 18 }} == { edad: 18 } devuelven false
*/


//19. ¿Qué devuelve la siguiente función ?
function getAge(...args) {
    console.log(typeof args);
}

getAge(21);
/*
A: "number"
B: "array"
C: "object"
D: "NaN"
Solución
Respuesta correcta: C
El operador spread(...args.) devuelve un array con argumentos.Una matriz es un objeto, así que typeof args devuelve "object"
*/


//20. ¿Qué devuelve la siguiente función ?
function getAge() {
    "use strict";
    age = 21;
    console.log(age);
}

getAge();

/*
A: 21
B: undefined
C: ReferenceError
D: TypeError
Solución
Respuesta correcta: C
Con "use strict", es posible asegurarse de que no se declara accidentalmente variables globales.
Nunca declaramos la variable age, y como usamos "use strict", nos dará un error de referencia.Si no hubiéramos usado "use strict",
habría funcionado, ya que la propiedad age se habría añadido al objeto global.
*/


//21. ¿Cuál es el valor de sum ?
const sum1 = eval("10*10+5");

/*
A: 105
B: "105"
C: TypeError
D: "10*10+5"
Solución
Respuesta correcta: A
eval evalúa los códigos que se pasan como una cadena.
Si es una expresión, como en este caso, evalúa la expresión.La expresión es 10 * 10 + 5. Esto devuelve el número 105.
*/


//22. ¿Cuánto tiempo es accesible cool_secret ?
sessionStorage.setItem("cool_secret", 123);
/*
A: Para siempre, los datos no se pierden.
B: Cuando el usuario cierra la pestaña.
C: Cuando el usuario cierra todo el navegador, no sólo la pestaña.
D: Cuando el usuario apaga su ordenador.
Solución
Respuesta correcta: B
Los datos almacenados en sessionStorage se eliminan después de cerrar la pestaña.

Si se usó localStorage, los datos habrían estado allí siempre, a menos que por ejemplo localStorage.clear() sea invocado.
*/


//23. ¿Qué devuelve la siguiente función ?
var num = 8;
var num = 10;

console.log(num);
/*
A: 8
B: 10
C: SyntaxError
D: ReferenceError
Solución
Respuesta correcta: B
Con la palabra reservada var, se pueden declarar múltiples variables con el mismo nombre.
La variable tendrá entonces el último valor.

No es posible hacer esto con let o const ya que tienen un alcance de bloque.
*/


//24. ¿Qué devuelve la siguiente función ?
const obj2 = { 1: "a", 2: "b", 3: "c" };
const set2 = new Set([1, 2, 3, 4, 5]);

obj2.hasOwnProperty("1");
obj2.hasOwnProperty(1);
set2.has("1");
set2.has(1);
/*
A: false true false true
B: false true true true
C: true true false true
D: true true true true
Solución
Respuesta correcta: C
Todas las claves de un objeto(excepto los símbolos) actúan como cadenas, incluso si no son escritas como una cadena.Es por eso que obj.hasOwnProperty('1') también devuelve verdadero.

No funciona así para un conjunto.No hay un "1" en nuestro set: set.has('1') devuelve falso.Tiene el tipo numérico 1, set.has(1) devuelve true.
*/


//25. ¿Qué devuelve la siguiente función ?
const obj1 = { a: "one", b: "two", a: "three" };
console.log(obj1);

/*
A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError
Solución
Respuesta correcta: C
Si tiene dos claves con el mismo nombre, la clave será reemplazada.Seguirá estando en su primera posición, pero con el último valor especificado
*/


//26. El contexto de ejecución de JS crea dos cosas: el objecto global y la palabra reservada "this".
/*
A: true
B: false
C: it depends
Solución
Respuesta correcta: A
El contexto de ejecución base es el contexto de ejecución global: es accesible en todo el código.
*/


//27. ¿Qué devuelve la siguiente función ?
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

/*
A: 1 2
B: 1 2 3
C: 1 2 4
D: 1 3 4
Solución
Respuesta correcta: C
La sentencia continue omite una iteración si una cierta condición, en este caso(i === 3), devuelve true.
*/


//28. ¿Qué devuelve la siguiente función ?
String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
};

const name1 = "Lydia";

console.log(name1.giveLydiaPizza());
/*
A: "Just give Lydia pizza already!"
B: TypeError: not a function
    C: SyntaxError
D: undefined
Solución
Respuesta correcta: A
String es un constructor incorporado, al que podemos añadir propiedades.En este caso concreto, añadimos un método a su prototipo.
Las cadenas primitivas se convierten automáticamente en un objeto de cadena, generado por la función de prototipo de cadena.
Por lo tanto, todas las cadenas(objetos de cadena) tienen acceso a ese método.
*/

//29. ¿Qué devuelve la siguiente función ?
const a1 = {};
const b1 = { key: "b1" };
const c1 = { key: "c1" };

a1[b1] = 123;
a1[c1] = 456;

/*
console.log(a[b]);
A: 123
B: 456
C: undefined
D: ReferenceError
Solución
Respuesta correcta: B
Las claves se convierten automáticamente en strings.Estamos tratando en este pregunta de establecer un objeto como clave para el objeto a, con el valor de 123.

Sin embargo, cuando se stringfy(compleja traducción) un objeto, se convierte en "[object Object]".
Así que lo que estamos diciendo aquí, es que a["object Object"] = 123. Entonces, podemos intentar hacer lo mismo de nuevo.c es otro objeto que estamos implícitamente encadenando.
Entonces, a["object Object"] = 456.

Para finalizar, registramos a[b], que en realidad es a["Object"].Acabamos de ponerlo en 456, así que devuelve 456.
*/

//30. ¿Qué devuelve la siguiente función ?
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
/*
A: First Second Third
B: First Third Second
C: Second First Third
D: Second Third First
Solución
Respuesta correcta: B
Tenemos una función setTimeout y la invocamos primero.Sin embargo, fue el último en ser registrado.

Esto se debe a que en los navegadores, no sólo tenemos el motor de tiempo de ejecución, también tenemos algo llamado WebAPI.
El WebAPI nos da la función setTimeout para empezar, y por ejemplo el DOM.

Después de que la callback es empujada a la WebAPI, la función setTimeout en sí misma(¡pero no la callback!) es removida de la pila.


Ahora, foo es invocado, y "First" está siendo registrado.


Foo se quita de la pila, y Baz es invocado.Third se registra.


La WebAPI no puede simplemente añadir cosas a la pila cuando está lista.En su lugar, empuja la función de devolución de llamada a algo llamado la queue(cola en español).


Aquí es donde un bucle de eventos comienza a funcionar.Un lazo de evento mira la pila y la cola de tareas.Si la pila está vacía, toma lo primero que encuentra en la cola y la empuja sobre la pila.


Se invoca el bar, se registra el "Second" y se quita de la pila.
*/


//33. ¿Qué devuelve la siguiente función ?
const person1 = { name: "Lydia" };

function sayHi(age) {
    console.log(`${this.name} is ${age}`);
}

sayHi.call(person1, 21);
sayHi.bind(person1, 21);
/*
A: undefined is 21 Lydia is 21
B: function function
    C: Lydia is 21 Lydia is 21
D: Lydia is 21 function
    Solución
Respuesta correcta: D
En ambos podemos pasar el objeto al que queremos que se refiera la palabra reservada this.Sin embargo, la diferencia es que.call es ejecutado inmediatamente!

    .bind devuelve una copia de la función, pero con un contexto enlazado.Es decir, no se ejecuta de inmediato.
*/


//34. ¿Qué devuelve la siguiente función ?
function sayHi() {
    return (() => 0)();
}

typeof sayHi();
/*
A: "object"
B: "number"
C: "function"
D: "undefined"
Solución
Respuesta correcta: B
La función sayHi devuelve el valor devuelto de la función invocada inmediatamente(IIFE).Esta función devuelve 0, que es el tipo "number".

En JS solo hay 7 tipos incorporados(En inglés se llaman built -in types,
    y pueden identificarse con el operador typeof.Más información aquí): null, undefined, boolean, number, string, object, symbol y bigint.
    "function" no es un tipo, ya que las funciones son objetos, es de tipo "object".
*/


//35. ¿Cuáles de estos valores son falsos ?
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;

/*
A: 0, '', undefined
B: 0, new Number(0), '', new Boolean(false), undefined
C: 0, '', new Boolean(false), undefined
D: All of them are falsy
Solución
Respuesta correcta: A
Solo hay seis valores falsos:

undefined
null
NaN
0
''(cadena vacía)
false
Los constructores de funciones, como new Number y new Boolean son correctos.
*/


//36. ¿Qué devuelve la siguiente función ?
console.log(typeof typeof 1);
/*
A: "number"
B: "string"
C: "object"
D: "undefined"
Solución
Respuesta correcta: B
typeof 1 devuelve "number".typeof "number" devuelve "string"
*/


//37. ¿Qué devuelve la siguiente función ?
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

/*
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError
Solución
Respuesta correcta: C
Cuando se establece un valor en un elemento de una matriz que excede la longitud de la matriz, JS crea algo llamado "ranuras vacías".
Estos realmente tienen el valor de undefined,
pero se podrá ver algo como:

[1, 2, 3, 7 x empty, 11]

dependiendo de dónde lo ejecute(es diferente para cada navegador, nodo, etc.)
*/


//38. ¿Qué devuelve la siguiente función ?
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

/*
A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined
Solución
Respuesta correcta: A
El bloque catch recibe el argumento x.Este no es el mismo x que la variable cuando pasamos los argumentos.Esta variable x tiene un ámbito de bloque.

Más adelante, establecemos esta variable de ámbito de bloque igual a 1, y establecemos el valor de la variable y.Ahora, registramos la variable de ámbito de bloque x, que es igual a 1.

Fuera del bloque catch, x sigue siendo undefined, e y es 2. Cuando queremos console.log(x) fuera del bloque catch, devuelve undefined, y y devuelve 2.

*/



//39. Todo en Javascript es o bien un(a)..
/*
A: tipo primitivo o un objeto
B: función u objeto
C: ¡pregunta trampa! solo objetos
D: número u objeto
Solución
Respuesta correcta: A
JavaScript solo tiene tipos y objetos primitivos.

Los tipos primitivos son boolean, null, undefined, bigint, number, string y symbol.

Lo que diferencia a un tipo primitivo de un objeto es que los primeros no tienen propiedades o métodos; sin embargo,
se puede ver que 'foo'.toUpperCase() se evalúa como 'FOO' y no da como resultado un TypeError.Esto se debe a que cuando se intenta acceder a una propiedad o método en un tipo primitivo,
como una cadena, JavaScript envolverá implícitamente el objeto utilizando una de las clases de envoltura, por ejemplo string, y luego descartará la envoltura inmediatamente después de evaluar la expresión.
Todas los tipos primitivos excepto null y undefined poseen este comportamiento.
*/
//40. ¿Qué devuelve la siguiente función ?
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2]
);

/*
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
Solución
Respuesta correcta: C
[1, 2] es nuestro valor inicial.Este es el valor con el que empezamos y el valor del primer acc.Durante la primera ronda, acc es[1, 2], y cur es[0, 1].
Los concatenamos, lo que resulta en[1, 2, 0, 1].

Entonces, [1, 2, 0, 1] es acc y[2, 3] es cur.Los concatenamos, y obtenemos[1, 2, 0, 1, 2, 3]
*/



//41. ¿Qué devuelve la siguiente función ?
/*
!!null;
!!"";
!!1;
A: false true false
B: false false true
C: false true true
D: true true false
Solución
Respuesta correcta: B
null es falso. ! null devuelve true. ! true devuelve false.

" " es falso. !" " devuelve true. ! true devuelve false.

'1' es verdadero. ! 1 devuelve false. ! false devuelve true.
*/


//42. ¿Qué devuelveel método setInterval ?
setInterval(() => console.log("Hi"), 1000);
/*
A: una id único
B: la cantidad de milisegundos especificada
C: la función pasada
D: undefined
Solución
Respuesta correcta: A
Devuelve una identificación única, un id único.Este id se puede usar para borrar ese intervalo con la función clearInterval().
*/


//43. ¿Qué devuelve la siguiente función ?
[..."Lydia"];

/*
A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]
Solución
Respuesta correcta: A
Una cadena es un iterable.El operador de propagación asigna todos los caracteres de un iterable a un elemento.
*/


//44. ¿Cuál es el resultado ?
function* generator(i) {
    yield i;
    yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

/*
A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 y 10, 20
Solución
Respuesta correcta: C
Las funciones regulares no pueden pararse a mitad de ejecución después de invocarse.Sin embargo, una función generadora sí puede ser parada,
y más adelante continuar desde donde fue detenida.Cada vez que una función generadora encuentra un yield, la función cede el valor especificado después de él.
Observa que la función generadora en este caso no devuelve el valor, cede el valor.

Primero, iniciamos la función generadora con i igual a 10. Invocamos la función generadora usando el método next().La primera vez que invocamos la función generadora,
i es igual a 10. Encuentra el primer yield: cede el valor de i.El generador está ahora "pausado", y 10 es mostrado por consola.

Después, invocamos la función otra vez con el método next().Continúa donde fue detenida previamente, todavía con i igual a 10. Ahora, 
encuentra el siguiente yield, y cede i * 2. i es igual a 10, así que devuelve 10 * 2, que es 20. Esto da como resultado 10, 20.
*/


//45. ¿Qué devuelve esto ?
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
/*
A: "one"
B: "two"
C: "two" "one"
D: "one" "two"
Solución
Respuesta correcta: B
Cuando pasamos múltiples promesas al método Promise.race, resuelve / rechaza la primera promesa que sea resuelta / rechazada.
Para el método setTimeout, pasamos un cronómetro: 500ms para la primera promesa(firstPromise), y 100ms para la segunda promesa(secondPromise).
Esto significa que secondPromise se resuelve primero con el valor de 'two'.res ahora guarda el valor 'two', el cual se muestra por consola.
*/



//46. ¿Cuál es el resultado ?
let person2 = { name: "Lydia" };
const members = [person];
person2 = null;

console.log(members);
/*
A: null
B: [null]
C: [{}]
D: [{ name: "Lydia" }]
Solución
Respuesta correcta: D
Primero, declaramos la variable person con el valor de un objeto que tiene una propiedad name.


Después, declaramos una variable llamada members.Asignamos el primer elemento de ese array igual al valor de la variable person.
Un objeto interactúa por referencia cuando es asignado igual a otro objeto.Cuando asignas una referencia de una variable a otra,
haces una copia de esa referencia. (¡observa que no tienen la misma referencia!)


Después, asignamos que la variable person es igual a null.


Solo estamos modificando el valor de la variable person, y no el primer elemento del array, ya que este elemento tiene una referencia diferente(copiada) al objeto.
El primer elemento en members todavía mantiene su referencia hacia el objeto original.Cuando mostramos por consola el array members,
el primer elemento todavía mantiene el valor del objeto,
el cual se muestra por consola.
*/
//47. ¿Cuál es el resultado ?
const person = {
    name: "Lydia",
    age: 21
};

for (const item in person) {
    console.log(item);
}
/*
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]
Solución
Respuesta correcta: B
Con un bucle for-in, podemos iterar sobre claves de objetos, en este caso name y age.Internamente, las claves de objetos son strings(si no son Symbol).En cada bucle, asignamos item igual a la clave actual que se está iterando.Primero, item es igual a name, y se muestra por consola.Después, item es igual a age, que se muestra por consola.
*/


//48. ¿Cuál es el resultado ?
console.log(3 + 4 + "5");
/*
A: "345"
B: "75"
C: 12
D: "12"
Solución
Respuesta correcta: B
La asociatividad de operadores es el orden en el que el compilador evalúa las expresiones, ya sea de izquierda a derecha o de derecha a izquierda.Esto solo pasa si todos los operadores tienen la misma precedencia.Solo tenemos un tipo de operador: +.Para la suma, la asociatividad es de izquierda a derecha.

3 + 4 se evalúa primero.Esto da como resultado el número 7.

7 + '5' da "75" por la coerción.JavaScript convierte el número 7 a string, mira la pregunta 15. Podemos concatenar dos strings usando el operador +. 7 + '5' da como resultado "75".
*/


//49. ¿Cuál es el valor de num ?
const num2 = parseInt("7*6", 10);
/*
A: 42
B: "42"
C: 7
D: NaN
Solución
Respuesta correcta: C
Solo el primer número en el string es devuelto.Según en la base seleccionada(el segundo argumento para especificar a qué tipo de número queremos transformarlo: base 10, hexadecimal, octal, binario, etc.), el parseInt comprueba si los caracteres del string son válidos.Una vez encuentra un caracter que no es un número válido en la base seleccionada, deja de recorrer el string e ignora los siguientes caracteres.

* no es un número válido.Solo convierte "7" al decimal 7. num tiene el valor 7.
*/

//50. ¿Cuál es el resultado ?
[1, 2, 3].map(num => {
    if (typeof num === "number") return;
    return num * 2;
});
/*
A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [3 huecos vacíos]
Solución
Respuesta correcta: C
Cuando se mapea sobre un array, el valor de num es igual al elemento que se está iterando.En este caso, los elementos son números, por lo que la condición del if typeof num === "number" devuelve true.La función de mapeo crea un nuevo array e inserta los valores devueltos por la función.

Sin embargo, no devolvemos un valor.Cuando no devolvemos un valor desde la función, la función devuelve undefined.Para cada elemento en el array, la función de bloque es llamada, así que por cada elemento devolvemos undefined.
*/


//51. ¿Cuál es el resultado ?
function getInfo(member, year) {
    member.name = "Lydia";
    year = "1998";
}

const person4 = { name: "Sarah" };
const birthYear = "1997";

getInfo(person4, birthYear);

console.log(person4, birthYear);
/*
A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
Solución
Respuesta correcta: A
Los argumentos son pasados por valor, a no ser que su valor sea un objeto,
en cuyo caso con pasados por referencia.birthYear es pasado por valor, ya que es un string, no un objeto.
Cuando pasamos argumentos por valor, una copia de ese valor es creada(ver pregunta 46).

La variable birthYear tiene una referencia al valor "1997".El argumento year también tiene una referencia al valor "1997",
pero no es el mismo valor al que birthYear referencia.Cuando actualizamos el valor de year igualándolo a "1998",
solo estamos actualizando el valor de year.birthYear todavía es igual a "1997".

El valor de person es un objeto.El argumento member tiene una referencia(copiada) al mismo objeto.
Cuando modificamos la propiedad a la que el objeto member referencia, el valor de person también será modificado, ya que ambos tienen una referencia al mismo objeto.
La propiedad name de person es ahora igual al valor "Lydia".
*/


//52. ¿Cuál es el resultado ?
function greeting2() {
    throw "Hello world!";
}

function sayHi() {
    try {
        const data = greeting2();
        console.log("It worked!", data);
    } catch (e) {
        console.log("Oh no an error!", e);
    }
}

sayHi();

/*
A: "It worked! Hello world!"
B: "Oh no an error! undefined
C: SyntaxError: can only throw Error objects
D: "Oh no an error! Hello world!
Solución
Respuesta correcta: D
Con la sentencia throw, podemos crear errores personalizados.Con esta sentencia, puedes lanzar excepciones.
Una excepción puede ser un string, un número, un boolean o un objeto.En este caso, nuestra excepción es el string 'Hello world'.

Con la sentencia catch, podemos especificar qué queremos hacer si una excepción es lanzada en el bloque try. 
Se lanza una excepción: el string 'Hello world'.e es ahora igual a ese string, el cual se muestra por consola.
Esto da como resultado 'Oh an error: Hello world'.
*/


//53. ¿Cuál es el resultado ?
function Car() {
    this.make = "Lamborghini";
    return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
/*
A: "Lamborghini"
B: "Maserati"
C: ReferenceError
D: TypeError
Solución
Respuesta correcta: B
Cuando devuelves una propiedad, el valor de la propiedad es igual al valor retornado, no el valor indicado en el constructor de la función.
Devolvemos el string "Maserati", por lo que myCar.make es igual a "Maserati".
*/



//54. ¿Cuál es el resultado ?
(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
/*
A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
Solución
Respuesta correcta: A
let x = y = 10; es en realidad una forma más corta de escribir:

y = 10;
let x = y;
Cuando asignamos y igual a 10, en realidad añadimos una propiedad y al objeto global(window en navegador, global en Node).En un navegador, window.y es ahora igual a 10.

Después, declaramos una variable x con el valor de y, el cual es 10. Las variables declaradas con let tienen alcance de bloque,
solo son definidas dentro del bloque en el que son declaradas; las expresiones de función ejecutadas inmediatamente(IIFE por sus siglas en inglés) en este caso.
Cuando usamos el operador typeof, el operando x no está definido: estamos intentando acceder a x fuera del bloque en el que es declarado.Esto significa que x no está definido.
Los valores a los que no se les ha asignado un valor o que no han sido declarados son de tipo "undefined".console.log(typeof x) devuelve "undefined".

Sin embargo, hemos creado una variable global y cuando la hemos igualado a 10. Este valor es accesible desde cualquier parte en nuestro código.
y es definida, y tiene un valor de tipo "number".console.log(typeof y) devuelve "number".
*/


//55. ¿Cuál es el resultado ?
class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.prototype.bark = function () {
    console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
/*
A: "Woof I am Mara", TypeError
B: "Woof I am Mara", "Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
Solución
Respuesta correcta: A
Podemos borrar propiedades de objetos usando delete, también en el prototipo(prototype).Borrando una propiedad en el prototipo,
hace que no vuelva a estar disponible en la cadena de prototipo.En este caso, la función bark deja de estar disponible en el prototipo después de delete
Dog.prototype.bark, pero aún intentamos acceder a ella.

Cuando intentamos invocar algo que no es una función, un TypeError es lanzado.En este caso TypeError: pet.bark is not a function, ya que pet.bark es undefined.
*/


//56. ¿Cuál es el resultado ?
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
/*
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: { 1, 1, 2, 3, 4 }
D: { 1, 2, 3, 4 }
Solución
Respuesta correcta: D
El objeto Set es una colección de valores únicos: un valor solo puede aparecer una vez en un set.

Pasamos el iterable[1, 1, 2, 3, 4] con el valor 1 duplicado.Como no podemos tener dos valores iguales en el set, uno de ellos es eliminado.Esto da como resultado { 1, 2, 3, 4 }.
*/


//57. ¿Cuál es el resultado ?
// counter.js
let counter = 10;
//export default counter;
// index.js
//import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
/*
A: 10
B: 11
C: Error
D: NaN
Solución
Respuesta correcta: C
Un módulo importado es de solo lectura: no puedes modificar el módulo importado.Solo el módulo que los exporta puede cambiar su valor.

Cuando intentamos incrementar el valor de myCounter, lanza un error: myCounter es de solo lectura y no puede ser modificado.
*/


//59. ¿Cuál es el resultado ?
const numbers2 = [1, 2, 3, 4, 5];
const [y] = numbers2;

console.log(y);
/*
A: [[1, 2, 3, 4, 5]]
B: [1, 2, 3, 4, 5]
C: 1
D: [1]
Solución
Respuesta correcta: C
Podemos desempaquetar valores de arrays o propiedades de objetos con desestructuración.Por ejemplo:

[a, b] = [1, 2];

El valor de a es ahora 1, y el valor de b es ahora 2. Lo que realmente se hizo en la pregunta es:

[y] = [1, 2, 3, 4, 5];

Esto significa que el valor de y es igual al primer valor del array, el cual es el número 1. Cuando mostramos por consola y, 1 es devuelto.
*/


//60. ¿Cuál es el resultado ?
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
/*
A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }
Solución
Respuesta correcta: B
Se pueden combinar objetos usando el operador de propagación .... Te permite crear copias de los pares clave / valor de un objeto,
y añadirlos a otro objeto.En este caso, creamos copias del objeto user, y las añadimos al objeto admin.
El objeto admin ahora contiene los pares clave / valor copiados, lo cual da como resultado { admin: true, name: "Lydia", age: 21 }.
*/


//61. ¿Cuál es el resultado ?
const person3 = { name: "Lydia" };

Object.defineProperty(person3, "age", { value: 21 });

console.log(person3);
console.log(Object.keys(person3));
/*
A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia" }, ["name", "age"]
D: { name: "Lydia" }, ["age"]
Solución
Respuesta correcta: B
Con el método defineProperty, podemos añadir nuevas propiedades a un objeto, o modificar las existentes.Cuando añadimos una propiedad a un objeto usando el método defineProperty,
es por defecto no enumerable.El método Object.keys devuelve todos los nombres de propiedades enumerables de un objeto, en este caso solo "name".

Las propiedades añadidas usando el método defineProperty son inmutables por defecto.Puedes sobrescribir este comportamiento usando las propiedades writable,
configurable y enumerable.De esta forma, el método defineProperty te da mucho más control sobre las propiedades que estás añadiendo a un objeto.
*/
//62. ¿Cuál es el resultado ?
const settings = {
    username: "lydiahallie",
    level: 19,
    health: 90
};

const dat2 = JSON.stringify(settings, ["level", "health"]);
console.log(data2);

/*
A: "{"level":19, "health":90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
Solución
Respuesta correcta: A
El segundo argumento de JSON.stringify es el replacer(reemplazador).El reemplazador puede ser una función o un array,
y te permite controlar qué y cómo deberían convertirse los valores a string.

Si el reemplazador es un array, solo los nombres de las propiedades incluidos en el array serán agregados al string JSON.
En este caso, solo las propiedades con nombres "level" y "health" son incluidas, "username" es excluido.data es ahora igual a "{"level":19, "health":90}".

Si el reemplazador es una función, esta función es llamada en cada propiedad en el objeto que estás convirtiendo a string.
El valor retornado por esta función será el valor de la propiedad cuando es añadida al string JSON.Si el valor es undefined, esta propiedad es excluida del string JSON.
*/


//63. ¿Cuál es el resultado ?
let num3 = 10;

const increaseNumber = () => num3++;
const increasePassedNumber = number => number++;

const num4 = increaseNumber();
const num5 = increasePassedNumber(num1);

console.log(num4);
console.log(num5);
/*
A: 10, 10
B: 10, 11
C: 11, 11
D: 11, 12
Solución
Respuesta correcta: A
El operador unario++ devuelve primero el valor del operando, y después incrementa el valor del operando.
El valor de num1 es 10, ya que la función increaseNumber primero devuelve el valor de num, que es 10, y solo incrementa el valor de num después.

num2 es 10, ya que pasamos num1 a increasePassedNumber.number es igual a 10(el valor de num1.
    Una vez más, el operador unario++ primero devuelve el valor del operando, y después incrementa el valor del operando.
    El valor de number es 10, así que num2 es igual a 10.
*/


//64. ¿Cuál es el resultado ?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
/*
A: 20, 40, 80, 160
B: 20, 40, 20, 40
C: 20, 20, 20, 40
D: NaN, NaN, 20, 40
Solución
Respuesta correcta: C
En ES6, podemos inicializar parámetros con un valor por defecto.El valor del parámetro será el valor por defecto si no se pasa otro valor a la función,
o si el valor del parámetro es "undefined".En este caso, propagamos las propiedades del objeto value en un nuevo objeto,
por lo que x tiene el valor por defecto de { number: 10 }.

¡El argumento por defecto es evaluado cuando es llamado! Cada vez que llamamos a la función, un nuevo objeto es creado.
Invocamos la función multiply las dos primeras veces sin pasar un valor: x tiene el valor por defecto de { number: 10 }. 
Después mostramos por consola el valor multiplicado de ese número, que es 20.

La tercera vez que invocamos multiply, pasamos un argumento: el objeto llamado value.
El operador *= es en realidad una forma corta de escribir x.number = x.number * 2: modificamos el valor de x.number y mostramos por consola el valor multiplicado de 20.

La cuarta vez, pasamos el objeto value otra vez.x.number fue previamente modificado a 20, por lo que x.number *= 2 devuelve 40.
*/


//65. ¿Cuál es el resultado ?
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
/*
A: 1 2 y 3 3 y 6 4
B: 1 2 y 2 3 y 3 4
C: 1 undefined y 2 undefined y 3 undefined y 4 undefined
D: 1 2 y undefined 3 y undefined 4
Solución
Respuesta correcta: D
El primer argumento que el método reduce recibe es el acumulador, x en este caso.
El segundo argumento es el valor actual, y.Con el método reduce, podemos ejecutar una función de callback en cada elemento en el array,
lo cual puede resultar en un único valor al final.

En este ejemplo, no estamos devolviendo ningún valor, simplemente estamos mostrando por consola los valores del acumulador y del valor actual.

El valor del acumulador es igual al valor previamente devuelto por la función de callback.
Si no pasas el argumento opcional initialValue al método reduce, el acumulador es igual al primer elemento de la primera llamada.

En la primera llamada, el acumulador(x) es 1, y el valor actual(y) es 2.
No devolvemos desde la función de callback, mostramos por consola el acumulador y el valor actual: se muestra 1 y 2.

Si no devuelves un valor de una función, se devuelve undefined.En la siguiente llamada,
el acumulador es undefined, y el valor actual es 3. Se muestra por consola undefined y 3.

En la cuarta llamada, otra vez no devolvemos desde la función de callback.El acumulador es una vez más undefined, y el valor actual es 4. Se muestra por consola undefined y 4.
*/


//66. ¿Con qué constructor podemos extender correctamente la clase Dog ?
class Dog1 {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog1 {
    /*
    // 1 
    constructor(name, size) {
        this.size = size;
    }
    // 2
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    // 3
    constructor(size) {
        super(name);
        this.size = size;
    }
    // 4 
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

};
*/
}
/*
A: 1
B: 2
C: 3
D: 4
Solución
Respuesta correcta: B
En una clase derivada, no puedes acceder a this antes de llamar a super.Si intentas hacerlo, se lanzará un ReferenceError: 1 y 4 lanzarían este error.

Con super, llamamos al constructor del padre con unos argumentos.El constructor del padre recibe el argumento name, 
por lo que necesitamos pasar name a super.

La clase Labrador recibe dos argumentos, name porque extiende de Dog, y size como una propiedad adicional en la clase Labrador.
Ambos necesitan ser pasados al constructor de Labrador, lo cual se realiza correctamente usando el constructor 2.
*/


//68. ¿Cuál es el resultado ?
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
/*
A: true, true, false
B: false, true, false
C: true, false, true
D: true, true, true
Solución
Respuesta correcta: A
Cada Symbol es completamente único.El propósito del argumento pasado a Symbol es para darle una descripción.El valor de Symbol no depende del argumento pasado.
Como se comprueba igualdad, estamos creando dos Symbol completamente nuevos: el primer Symbol('foo'), y el segundo Symbol('foo').
Estos dos valores son únicos y no iguales, Symbol('foo') === Symbol('foo') devuelve false.
*/


//69. ¿Cuál es el resultado ?
const name6 = "Lydia Hallie"
console.log(name6.padStart(13))
console.log(name6.padStart(2))
/*
A: "Lydia Hallie", "Lydia Hallie"
B: "           Lydia Hallie", "  Lydia Hallie"("[13 espacios en blanco]Lydia Hallie", "[2 espacios en blanco]Lydia Hallie")
C: " Lydia Hallie", "Lydia Hallie"("[1 espacio en blanco]Lydia Hallie", "Lydia Hallie")
D: "Lydia Hallie", "Lyd",
    Solución
Respuesta correcta: C
Con el método padStart, podemos añadir relleno al principio de un string.
El valor pasado a este método es la longitud total del string incluyendo el relleno.El string "Lydia Hallie" tiene una longitud de 12. name.padStart(13) inserta 1 espacio al principio del string,
porque 12 + 1 es 13.

Si el argumento pasado al método padStart es más pequeño que la longitud del string, no se añade relleno.
*/


//70. ¿Cuál es el resultado ?
console.log("🥑" + "💻");
/*
A: "🥑💻"
B: 257548
C: Un string con una secuencia de puntos de código
D: Error
Solución
Respuesta correcta: A
Con el operador + puedes concatenar strings.En este caso, estamos concatenando el string "🥑" con el string "💻", lo que da como resultado "🥑💻".
*/


//71. ¿Cómo puedes mostrar por consola los valores comentados junto a las sentencias console.log ?
function* startGame() {
    const answer = yield "Do you love JavaScript?";
    if (answer !== "Yes") {
        return "Oh wow... Guess we're gone here";
    }
    return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
/*
A: game.next("Yes").value y game.next().value
B: game.next.value("Yes") y game.next.value()
C: game.next().value y game.next("Yes").value
D: game.next.value() y game.next.value("Yes")
Solución
Respuesta correcta: C
Una función generadora "pausa" su ejecución cuando ve un yield.Primero,
tenemos que dejar a la función ceder el string "Do you love JavaScript?", lo cual se puede hacer llamando a game.next().value.

Todas las líneas son ejecutadas, hasta que encuentra el primer yield.Hay un yield en la primera línea dentro de la función:
¡la ejecución se para en el primer yield! ¡Esto significa que la variable answer todavía no está definida!

Cuando llamamos a game.next("Yes").value, el yield anterior se reemplaza con el valor de los parámetros pasados en la función next(),
"Yes" en este caso.El valor de la variable answer es ahora igual a "Yes".La condición del if devuelve false, y JavaScript loves you back ❤️ se muestra por consola.
*/


//72. ¿Cuál es el resultado ?
console.log(String.raw`Hello\nworld`);
/*
A: Hello world!
B: Hello 
world
C: Hello\nworld
D: Hello\n
world
Solución
Respuesta correcta: C
String.raw devuelve un string donde las secuencias de escape(\n, \v, \t etc.) son ignoradas.Las contrabarras pueden ser un problema ya que puedes acabar con algo como:

const path = `C:\Documents\Projects\table.html`

Que resultaría en:

"C:DocumentsProjects able.html"

Con String.raw, simplemente ignoraría las secuencias de escape e imprimiría:

C: \Documents\Projects\table.html

En este caso, el string es Hello\nworld, que es lo que se muestra por consola.
*/


//73. ¿Cuál es el resultado ?
async function getData() {
    return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);

/*
A: "I made it!"
B: Promise {
<resolved>: "I made it!"}
C: Promise {<pending>}
D: undefined
Solución
Respuesta correcta: C
Una función asíncrona siempre devuelve una promesa. El await todavía tiene que esperar a que la promesa se resuelva: cuando llamamos a getData() para asignarle que es igual a data, se devuelve una promesa pendiente.
Si quisiéramos tener acceso al valor resuelto "I made it", tendríamos que haber usado el método .then() en data:

data.then(res => console.log(res))

Esto habría mostrado por consola "I made it!"
*/
//74. ¿Cuál es el resultado?
function addToList(item, list) {
    return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
/*
A: ['apple', 'banana']
B: 2
C: true
D: undefined
Solución
Respuesta correcta: B
¡El método.push() devuelve la longitud del nuevo array! Al principio, el array contenía un elemento(el string "banana") y tenía una longitud de 1. Después de añadir el string "apple" al array, el array contiene dos elementos, y tiene una longitud de 2. Esto es lo que devuelve la función addToList.

El método push modifica el array original.Si quisieras devolver el array de la función en lugar de la longitud del array deberías haber devuelto list después de introducir item en él.
*/


//75. ¿Cuál es el resultado ?
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape2 = box;
shape.x = 100;

console.log(shape2);
/*
A: { x: 100, y: 20 }
B: { x: 10, y: 20 }
C: { x: 100 }
D: ReferenceError
Solución
Respuesta correcta: B
Object.freeze congela e imposibilita la adición, eliminación o modificación de las propiedades de un objeto(a no ser que el valor de la propiedad sea otro objeto).

Cuando creamos la variable shape y la igualamos al objeto congelado box, shape también referencia al objeto congelado.Puedes comprobar si un objeto está congelado usando Object.isFrozen.En este caso, Object.isFrozen(shape) devuelve true, ya que la variable shape tiene una referencia a un objeto congelado.

Como shape está congelado, y como el valor de x no es un objeto, no podemos modificar la propiedad x.x es todavía igual a 10, y { x: 10, y: 20 } se muestra por consola.
*/
//76. ¿Cuál es el resultado ?
const { name: myName } = { name: "Lydia" };

console.log(name);
/*
A: "Lydia"
B: "myName"
C: undefined
D: ReferenceError
Solución
Respuesta correcta: D
Cuando desempaquetamos la propiedad name del objeto de la parte derecha, asignamos su valor "Lydia" a una variable con el nombre myName.

    Con { name: myName }, le decimos a JavaScript que queremos crear una nueva variable llamada myName con el valor de la propiedad name de la parte derecha.

Como intentamos mostrar por consola name, una variable que no está definida, se lanza un ReferenceError.
*/


//77. ¿Esta es una función pura ?
    function sum(a, b) {
        return a + b;
    }

    /*
A: Sí
B: No
Solución
Respuesta correcta: A
Una función pura es una función que siempre devuelve el mismo resultado, si se le pasan los mismos argumentos.

La función sum siempre devuelve el mismo resultado.Si pasamos 1 y 2, siempre devuelve 3 sin efectos secundarios.Si pasamos 5 y 10, siempre devuelve 15, etcétera.Esta es la definición de una función pura.
*/


//78. ¿Cuál es el resultado ?
const add = () => {
    const cache = {};
    return num => {
        if (num in cache) {
            return `From cache! ${cache[num]}`;
        } else {
            const result = num + 10;
            cache[num] = result;
            return `Calculated! ${result}`;
        }
    };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
/*
A: Calculated! 20 Calculated! 20 Calculated! 20
B: Calculated! 20 From cache! 20 Calculated! 20
C: Calculated! 20 From cache! 20 From cache! 20
D: Calculated! 20 From cache! 20 Error
Solución
Respuesta correcta: C
La función add es una función memoizada.Con la memoización, podemos guardar en caché los resultados de una función para acelerar su ejecución.
En este caso, creamos el objeto cache que guarda los valores previamente retornados.

Si llamamos a la función addFunction otra vez con el mismo argumento, primero comprueba si ya tiene ese valor en su caché.Si es el caso, se devuelve el valor de la caché.
Si no está en la caché, calculará el valor y lo almacenará justo después.

Llamamos a la función addFunction tres veces con el mismo valor: en la primera invocación, el valor de la función cuando num es igual a 10 no está en caché todavía.
La condición del if num in cache devuelve false, y se ejecuta el bloque else: Calculated! 20 se muestra por consola, y el valor del resultado se añade al objeto cache.cache ahora contiene { 10: 20 }.

La segunda vez, el objeto cache contiene el valor que se devuelve para 10. La condición del if num in cache devuelve true, y se muestra por consola 'From cache! 20'.

La tercera vez, pasamos 5 * 2 a la función, que se evalúa como 10. El objeto cache contiene el valor que se devuelve para 10. 
La condición del if num in cache devuelve true,
y se muestra por consola 'From cache! 20'.
*/


//79. ¿Cuál es el resultado ?
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
    console.log(item)
}

for (let item of myLifeSummedUp) {
    console.log(item)
}
/*
A: 0 1 2 3 y "☕"  "💻" "🍷" "🍫"
B: "☕"  "💻" "🍷" "🍫" y "☕"  "💻" "🍷" "🍫"
C: "☕"  "💻" "🍷" "🍫" y 0 1 2 3
D: 0 1 2 3 y { 0: "☕", 1: "💻", 2: "🍷", 3: "🍫" }
Solución
Respuesta correcta: A
Con el bucle for-in, podemos iterar sobre propiedades enumerables.En un array, las propiedades enumerables son las "claves" de los elementos del array,
las cuales son sus índices.Puedes ver el array como:

{ 0: "☕", 1: "💻", 2: "🍷", 3: "🍫" }

Donde las claves son las propiedades enumerables. 0 1 2 3 se muestran por consola.

Con un bucle for-of, podemos iterar sobre iterables.Un array es un iterable.Cuando iteramos sobre un array,
la variable "item" es igual al elemento sobre el que se está iterando en ese momento, "☕"  "💻" "🍷" "🍫" se muestra por consola.
*/


//80. ¿Cuál es el resultado ?
const list2 = [1 + 2, 1 * 2, 1 / 2]
console.log(list2)
/*
A: ["1 + 2", "1 * 2", "1 / 2"]
B: ["12", 2, 0.5]
C: [3, 2, 0.5]
D: [1, 1, 1]
Solución
Respuesta correcta: C
Los elementos de un array pueden contener cualquier valor.Números, strings, objetos, otros arrays, null, valores booleanos, undefined, y otras expresiones como fechas, funciones o cálculos.

El elemento será igual al valor retornado. 1 + 2 devuelve 3, 1 * 2 devuelve 2, y 1 / 2 devuelve 0.5.
*/



//81. ¿Cuál es el resultado ?
    function sayHi(name) {
        return `Hi there, ${name}`
    }

            console.log(sayHi())
/*
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Solución
Respuesta correcta: B
Por defecto, los argumentos tienen el valor undefined, a no ser que un valor haya sido pasado a la función.En este caso, no pasamos ningún valor para el argumento name.name es igual a undefined, que es mostrado por consola.

En ES6, podemos sobrescribir este valor undefined por defecto con parámetros por defecto.Por ejemplo:

function sayHi(name = "Lydia") {... }

En ese caso, si no pasáramos un valor o si pasáramos undefined, name siempre sería igual al string Lydia.
*/


//82. ¿Cuál es el resultado ?
var status = "😎"

setTimeout(() => {
    const status = "😍"

    const data = {
        status: "🥑",
        getStatus() {
            return this.status
        }
    }

    console.log(data.getStatus())
    console.log(data.getStatus.call(this))
}, 0)

/*
A: "🥑" y "😍"
B: "🥑" y "😎"
C: "😍" y "😎"
D: "😎" y "😎"
Solución
            Respuesta correcta: B
            El valor de this depende de dónde lo uses.En un método, como el método getStatus, this referencia al objeto al que el método pertenece.El método pertenece al objeto data, por lo que this referencia al objeto data.Cuando mostramos por consola this.status, la propiedad status en el objeto data es mostrada por consola, la cual es "🥑".

            Con el método call, podemos cambiar el objeto al cual this referencia.En funciones, el this referencia al objeto al que la función pertenece, por lo que dentro de la función setTimeout, el this referencia al objeto global.En el objeto global, hay una variable llamada status con el valor "😎".Cuando se muestra this.status por consola, "😎" aparece por pantalla.
*/