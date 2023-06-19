/*
La coerción de datos en JavaScript es el proceso mediante el cual JavaScript convierte el valor
de una variable de un tipo a otro.

La coerción de tipos es una característica de JavaScript que fuerza a una variable de cierto tipo
a tener el comportamiento de una diferente.

En otras palabras, la coerción es la conversión automática o implícita de valores de un tipo de dato a otro
Por ejemplo, si se intenta sumar una cadena de texto con un número, JavaScript convierte la cadena de texto
en un número antes de realizarla operación.

En algunos casos, la coerción puede ser útil, pero en otros
puede llevar a resultados inesperados.

En JavaScript, la coerción puede ser implícita o explícita.

La coerción implícita ocurre automáticamente cuando se realiza una operación entre dos valores de diferentes tipos, mientras que la coerción explícita se realiza
mediante la llamada a una función de conversión de tipo, como Number() o String().

En resumen, la coerción de datos en JavaScript es el proceso mediante el cual JavaScript convierte el valor de una variable de un tipo a otro, ya sea de forma implícita o explícita.
La coerción puede ser útil en algunos casos, perotambién puede llevar a resultados inesperados, por lo que es importante comprender cómo funciona para evitar errores en el código
*/


const data1 = document.querySelector('#data1');
const data2 = document.querySelector('#data2');
const boton = document.querySelector('#btn');

boton.addEventListener('click', ()=>{
    /*
    let dato = data1; En JavaScript, cuando accedes a un elemento del DOM utilizando document.querySelector o cualquier otro método de selección, obtienes un objeto que representa ese elemento HTML.
    let dato2 = data2; Sin embargo, el valor real del elemento no está almacenado directamente en el objeto. En su lugar, el valor se encuentra en una propiedad llamada value del objeto.
    sin el .value no funciona     Entonces, cuando accedes a data1 y data2 sin el .value, estás obteniendo los objetos que representan los elementos HTML correspondientes. Estos objetos no son 
    directamente concatenables o sumables, ya que son de tipo HTMLElement o Element.
    */
/*
    let dato = (data1.value);    asi tampoco se puede ya que por mas que accedamos al valor, este mismo esta en formato string y asi no nos sirve
    let dato2 = (data2.value);   debemos pasarlo manuelmente a number con la funcion reservada Number
*/

    let dato = Number(data1.value);
    let dato2 = Number(data2.value);
    // asi si
    let resultado = dato + dato2;

    console.log(`El resultado es: ${resultado} y el tipo es: ${typeof(resultado)}`);
})


/////////////////////////////////////////////////////

//Coerción de tipo numérico a cadena:

const numero = 42;
const cadena = String(numero);

console.log(cadena); // Output: "42"
console.log(typeof cadena); // Output: "string"

/*
En este ejemplo, utilizamos la función String() para realizar la coerción del número 42 a una cadena. Al llamar a String(numero),
JavaScript convierte automáticamente el número en su representación de cadena y asigna el valor resultante a la variable cadena. Como resultado, obtenemos la cadena "42".
*/

//Coerción de cadena a número:

const cadena1 = "3.14";
const numero1 = Number(cadena1);

console.log(numero1); // Output: 3.14
console.log(typeof numero1); // Output: "number"
/*
Aquí, utilizamos la función Number() para realizar la coerción de la cadena "3.14" a un número. Al llamar a Number(cadena),
JavaScript interpreta la cadena como un número y asigna el valor resultante a la variable numero. En este caso, el resultado es el número de punto flotante 3.14.
*/


//Coerción de cadena a booleano:

const cadena2 = "true";
const booleano = Boolean(cadena2);

console.log(booleano); // Output: true
console.log(typeof booleano); // Output: "boolean"

/*
En este ejemplo, utilizamos la función Boolean() para realizar la coerción de la cadena "true" a un valor booleano. Al llamar a Boolean(cadena),
JavaScript evalúa la cadena y asigna el valor booleano correspondiente a la variable booleano. En este caso, la cadena "true" se convierte en true.
*/

//Es importante tener en cuenta que JavaScript realiza coerciones implícitas en muchas situaciones, como al usar operadores o comparar valores de tipos diferentes. Por ejemplo:

console.log(5 + "2"); // Output: "52"
console.log("3" - 1); // Output: 2
console.log("false" == false); // Output: true

/*
En estos casos, JavaScript realiza coerciones implícitas para adaptar los tipos y realizar la operación o comparación.
*/