function sum(a, b) {
    return a + b;
}

function multiplyByTwo(num) {
    return num * 2;
}

function compose(func1, func2) {
    return function (x, y) {
        return func2(func1(x, y));
    };
}

const composedFunction = compose(sum, multiplyByTwo);
console.log(composedFunction(3, 4)); // Salida: 14

/*

Se definen las funciones sum y multiplyByTwo:

sum(a, b) toma dos parámetros a y b y devuelve la suma de ambos.
multiplyByTwo(num) toma un parámetro num y devuelve el resultado de multiplicar num por 2.
Se define la función compose que acepta dos parámetros, func1 y func2. Esta función retorna una nueva función anónima.

La función anónima toma dos parámetros, x e y.
Dentro de la función anónima, se invoca func1(x, y) que sería sum(x, y), donde x e y toman los valores pasados cuando se invoca la función.
Luego, se toma el resultado de func1(x, y) y se pasa como argumento a func2, es decir, func2(func1(x, y)) que sería multiplyByTwo(sum(x, y)).
El resultado final de la función anónima sería el resultado de func2(func1(x, y)).
Se asigna el resultado de compose(sum, multiplyByTwo) a la variable composedFunction.

Se llama a composedFunction(3, 4).

En este caso, x sería 3 y y sería 4.
Dentro de composedFunction, se evalúa func1(x, y) que sería sum(3, 4) y devuelve 7.
Luego, se pasa el resultado 7 como argumento a func2, es decir, func2(func1(x, y)) que sería multiplyByTwo(7), y devuelve 14.
Finalmente, el resultado 14 se imprime en la consola mediante console.log(composedFunction(3, 4))


*/

// compose1 es una funcion que tiene un array ...fns como parametro y retorna una funcion
// esta tiene "x" como parametro y retorna (ya que esa arrow tiene return implicito)el array fns con el metodo reduce con "y" y "f" como parametros
// "y" es el acumulador que almacena el resultado acumulado de aplicar las funciones sucesivas
// y "f" es la funcion actual que se aplica al acumulador
/*
reduce se utiliza en compose1 para encadenar funciones en orden, aplicándolas una tras otra al resultado acumulado.
Esto permite crear composiciones de funciones flexibles y reutilizables.
*/
/*
fns.reduce((y, f) => f(y), x):
fns es el arreglo de funciones a componer.
y es el acumulador que almacena el resultado acumulado. Se inicializa con el valor de x
y en cada iteración, el resultado de aplicar la función actual f al valor acumulado "y" se convierte en el nuevo valor del acumulador "y"
f es la función actual que se aplica en cada iteración.
x es el valor inicial, es decir, el primer argumento para la primera función en la secuencia.
*/
const compose1 = (...fns) => x => fns.reduce((y,f) => f(y),x);

const addFee = (amount) => amount + 2;

const addDiscount = (amount) => amount - 5;
//addFree y addDiscount se almacenan en (...fns)
const composition = compose1(addFee, addDiscount)(100);
/*
El valor inicial de y es x, que es 100.
En la primera iteración, se aplica la función addFee al valor acumulado y, que es 100, y se obtiene el resultado 102. Este resultado se convierte en el nuevo valor de y.
En la siguiente iteración, se aplica la función addDiscount al nuevo valor de y, que es 102, y se obtiene el resultado 97. Nuevamente, este resultado se convierte en el nuevo valor de y.
Al finalizar la reducción, el valor final de y será el resultado acumulado de aplicar todas las funciones en orden.
*/
console.log(composition);