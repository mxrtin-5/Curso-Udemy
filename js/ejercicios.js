/*
programar un programa que pida ingresar via prompt dos numeros, que devuelva en un alert cual es el mayor, y crea validaciones que 
validen que los valores ingresados no sean numeros negativos ni strings

let numero1 = Number(prompt('Introduce el primer numero'));
let numero2 = Number(prompt('Introduce el segundo numero'));
let salir = true


while (salir) {
    if (isNaN(numero1) || numero1 < 0) {
        alert('Ingrese numeros validos y no negativos');
        numero1 = Number(prompt('Introduce el primer numero nuevamente'));
    } else if (isNaN(numero2) || numero2 < 0) {
        alert('Ingrese numeros validos y no negativos');
        numero2 = Number(prompt('Introduzca el numero nuevamente'));
    } else if (numero1 > numero2) {
        alert(`El numero1: ${numero1} es mayor a el numero 2: ${numero2}`);
        salir = false
    } else if (numero1 < numero2) {
        alert(`El numero1: ${numero1} es menor al numero 2: ${numero2}`);
        salir = false
    }else{
        alert('Los numeros ingresados son iguales');
        salir=false
    }
}
*/
/*
let numero1 = Number(prompt('Introduce el primer numero'));
let numero2 = Number(prompt('Introduce el segundo numero'));
let salir = true;

while (salir) {
    salir = !(isNaN(numero1) || numero1 < 0) ? (
        alert('Ingrese números válidos y no negativos'),
        numero1 = Number(prompt('Introduce el primer número nuevamente')),
        salir = true
    ) : (isNaN(numero2) || numero2 < 0) ? (
        alert('Ingrese números válidos y no negativos'),
        numero2 = Number(prompt('Introduzca el número nuevamente')),
        salir = true
    ) : numero1 > numero2 ? (
        alert(`El número1: ${numero1} es mayor al número2: ${numero2}`),
        salir = false
    ) : numero1 < numero2 ? (
        alert(`El número1: ${numero1} es menor al número2: ${numero2}`),
        salir = false
    ) : (
        alert('Los números ingresados son iguales'),
        salir = false
    );
}
*/

// Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasat que el numero introducido sea negativo
/*
let suma = 0;
let contador = 0;
let numero;

do{
    numero = Number(prompt('Introduce un numero'));

    if(isNaN(numero)){
        numero = 0
    }else if(numero >= 0 ){
        suma += numero;
        contador++
    }
}while(numero >= 0)

alert(`La suma de todos los numeros es: ${suma}`);
alert(`La media de los numeros ingresados: ${suma / contador}`);
*/

//hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
/*
let numero1 = Number(prompt('Ingrese el primer numero'));
let numero2 = Number(prompt('Introduce el segundo numero'));


if(!isNaN(numero1) && !isNaN(numero2)){
    for (let i = numero1; i <= numero2; i++) {
        console.log(i)
    }
}else{
    console.log('Error: los valores ingresados deben ser numeros')
}
*/

// mostrar todos ,los numeros impares que hay entre dos numeros introducidos por el usuario
/*
let numero1 = Number(prompt('Ingrese el primer valor'));
let numero2 = Number(prompt('Ingrese el segundo valor'));

if(!isNaN(numero1) && !isNaN(numero2)){
    for(let i = numero1; i <= numero2; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
*/

//Muestra todos los numeros divisores de un numero introducido por el usuario
/*
let numero = Number(prompt('Ingrese un numero'));

for(let i = 1; i <= numero; i++){

    if(numero % i === 0){
        console.log(`Divisor: ${i}`);
    }

}
*/

// Programa una funcion que diga si un numero es par o impar 
/*
let numero1 = Number(prompt('Ingrese el numero'));

while(isNaN(numero1)){
    numero1 = Number(prompt('Introduce el numero nuevamente'))
}

if(numero1 % 2 === 0){
    alert(`El numero ${numero1} es par`);
}else{
    alert(`El numero ${numero1} es impar`);
}
*/

// Tabla de multiplicar de un numero introducido en pantalla
/*
let numero = Number(prompt('Introduzca el numero'));

for(let i = 1; i <= 10; i++){
    alert(i + 'x' + numero + '=' + (i * numero));
}
*/

// crea una calculadora
// que pida dos numeros
// si ingresamos un numero invalido que lo vuelva a pedir
/*
let numero1 = Number(prompt('Introduce el primer numero'));
let operador = prompt('Ingrese el operador que desea para realizar la operacion');
let numero2 = Number(prompt('Ingrese el segundo numero'));
let resultado;


while(numero1 < 0 || numero2 < 0 || isNaN(numero1 || isNaN(numero2))){
    numero1 = Number(prompt('Introduce el primer numero'));
    numero2 = Number(prompt('Ingrese el segundo numero'));
}

if(operador === '+'){
    resultado = numero1 + numero2;
    alert(resultado);
}else if(operador === '-'){
    resultado = numero1 - numero2;
    alert(resultado);
}else if(operador === '.' || operador === 'x'){
    resultado = numero1 * numero2;
    alert(resultado);
}else if(operador === '/' || operador === ':'){
    resultado = numero1 / numero2;
    alert(resultado);
}else{
    alert('El operador no es valido');
}
*/

/*
A) Los nombres de los productos en un string separado por comas.
B) El precio total
C) El precio promedio
D) El producto con el menor precio
E) El producto con mayor precio
F) con los datos de los puntos del 1 al 5 crear un objeto y representarlo por consola
*/

const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
];

//A)
const nombres = productos.map(el => el.nombre);
const nombresString = nombres.join(',');
console.log(nombresString);

//B)
const precios = productos.map((elemento) => elemento.precio);

const total = precios.reduce((acc, el) => acc + el, 0);
console.log(total);

//C)
const promedio = total / productos.length;
console.log(promedio);

//D)
const productoMenorPrecio = productos.reduce((min, producto) => producto.precio < min.precio ? producto : min);

console.log(productoMenorPrecio);

/*
El método reduce() itera sobre los elementos del array y acumula un valor a medida que avanza. En este caso, el acumulador se llama min y representa el producto con el precio más bajo encontrado hasta el momento.

En cada iteración, comparamos el precio del producto actual con el precio del producto almacenado en min. Si el precio del producto actual es menor, reemplazamos min con el producto actual. De lo contrario, lo dejamos sin cambios. Esto se hace utilizando una expresión condicional (operador ternario) en la que comparamos producto.precio < min.precio.

Al final de la iteración, min contendrá el objeto producto con el precio más bajo en el array productos. Finalmente, asignamos este objeto a la variable productoMenorPrecio.
*/

//E)
const productoMayorPrecio = productos.reduce((max, producto) => producto.precio > max.precio ? producto : max);

console.log(productoMayorPrecio);

//F)
const objetoResultado = {
    nombres: nombresString,
    total,
    promedio,
    productoMenorPrecio,
    productoMayorPrecio
};

console.log(objetoResultado);


