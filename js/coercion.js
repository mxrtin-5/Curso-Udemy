/*
La coerción de datos en JavaScript es el proceso mediante el cual JavaScript convierte el valor
de una variable de un tipo a otro
1
. La coerción de tipos es una característica de JavaScript que fuerza a una variable de cierto tipo
a tener el comportamiento de una diferente
2
. En otras palabras, la coerción es la conversión automática o implícita de valores de un tipo de dato a otro
3
.
Por ejemplo, si se intenta sumar una cadena de texto con un número, JavaScript convierte la cadena de texto
en un número antes de realizarla operación
1
. En algunos casos, la coerción puede ser útil, pero en otros
puede llevar a resultados inesperados
4
.
En JavaScript, la coerción puede ser implícita o explícita
3
. La coerción implícita ocurre automáticamente cuando se realiza una operación entre dos valores de diferentes tipos, mientras que la coerción explícita se realiza
mediante la llamada a una función de conversión de tipo, como Number() o String() 
3
.
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