/*
Composición:
La composición se refiere a la combinación de múltiples funciones más pequeñas para crear una función más grande y compleja.
En JavaScript, esto se logra utilizando la técnica de composición de funciones. La idea principal es que cada función realice una tarea específica y luego estas funciones se combinen para obtener el resultado deseado.
La composición se basa en el principio de dividir un problema en problemas más pequeños y luego construir soluciones más grandes a partir de las soluciones de los problemas más pequeños.
Esto permite un código más modular, reutilizable y fácil de mantener.
*/

function sum(a, b) {
    return a + b;
}

function multiplyByTwo(num) {
    return num * 2;
}

function compose(func1, func2) {
    return function (x, y) {
        return func2(func1(x, y)); //return multiplyByTwo(sum(x, y))
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
const compose1 = (...fns) => x => fns.reduce((y, f) => f(y), x);

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




/*
Ejemplo 1: Validación de formulario

Supongamos que tienes un formulario con varios campos y quieres realizar diferentes validaciones en cada campo.
Puedes utilizar la composición de funciones para encadenar las validaciones y obtener un resultado final.
*/

const validateRequired = (value) => {
    console.log(value);
    console.log('/////////////////////////////////////////////////////////////');
    return value ? undefined : 'Este campo es requerido';
};
/*
En esta función, el operador ternario se utiliza para verificar si value tiene un valor truthy. Si value tiene un valor truthy (es decir, no es undefined, null, false, 0, NaN o una cadena vacía), entonces se devuelve undefined, indicando que la validación pasó.
De lo contrario, si value no tiene un valor truthy, se devuelve la cadena de texto 'Este campo es requerido', indicando que la validación falló.
*/

const validateEmail = (value) => {
    console.log(value);
    console.log('/////////////////////////////////////////////////////////////');
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(value) ? undefined : 'Ingresa un correo electrónico válido';
};
/*
-En esta función, el operador ternario se utiliza para verificar si el value coincide con el patrón definido por la expresión regular emailRegex. Si value coincide con el patrón, se devuelve undefined, indicando que la validación pasó.
De lo contrario, si value no coincide con el patrón, se devuelve la cadena de texto 'Ingresa un correo electrónico válido', indicando que la validación falló.
-[w-]+ verifica uno o más caracteres alfanuméricos o guiones bajos (esto corresponde al nombre de usuario antes del símbolo @).
(\.[\w-]+)* verifica que pueda haber cero o más grupos de un punto seguido de uno o más caracteres alfanuméricos o guiones bajos (esto corresponde a los subdominios en el dominio del correo electrónico).
@ verifica que haya un símbolo @.
([\w-]+\.)+ verifica uno o más grupos de uno o más caracteres alfanuméricos o guiones bajos seguidos de un punto (esto corresponde al dominio y subdominios después del símbolo @).
[a-zA-Z]{2,7} verifica que el dominio tenga de 2 a 7 letras (esto corresponde al dominio de nivel superior, como .com, .net, .org, etc.).
-El método .test() es un método de las expresiones regulares en JavaScript que se utiliza para verificar si una cadena de texto coincide con un patrón especificado.
-En resumen, el método .test() se utiliza para comprobar si una cadena de texto cumple con un patrón específico definido por una expresión regular.
En el ejemplo dado, se utiliza para verificar si un valor es un correo electrónico válido basado en el patrón emailRegex.
*/

const validateMinLength = (minLength) => {
    return (value) => {
        console.log(value);
        console.log('/////////////////////////////////////////////////////////////');
        return value.length >= minLength ? undefined : `El valor debe tener al menos ${minLength} caracteres`;
    };
};
/*
Esta función interna toma un parámetro value, que representa el valor que se desea validar. La función compara la longitud de value con el valor minLength proporcionado en la función externa.

Si la longitud de value es mayor o igual a minLength, se devuelve undefined, indicando que la validación ha pasado y que el valor cumple con la longitud mínima requerida.
Si la longitud de value es menor que minLength, se devuelve una cadena de texto que indica que el valor debe tener al menos minLength caracteres.
En resumen, esta función validateMinLength permite crear validadores de longitud mínima reutilizables. Al llamar a validateMinLength con un valor minLength, se obtiene una función que puede ser utilizada para validar si un valor cumple con esa longitud mínima.*/

const composeValidators = (...validators) => {
    return (value) => {
        console.log(value);
        console.log('/////////////////////////////////////////////////////////////');
        return validators.reduce((error, validator) => error || validator(value), undefined);
    };
};

/*
Esta función interna toma un parámetro value, que representa el valor que se desea validar. La función utiliza el método reduce() en el array de validators para iterar sobre cada validador y ejecutarlos en el valor value.

La función reduce() acumula el resultado de las ejecuciones de los validadores anteriores en la variable error, que comienza con el valor undefined.
En cada iteración, se ejecuta el validador actual (validator) en el valor value. Si el validador devuelve un valor truthy (por ejemplo, una cadena de texto de error), se asigna a error, lo cual indica que la validación ha fallado.
Si el validador devuelve undefined (es decir, la validación ha pasado), error mantiene su valor actual (puede ser undefined o un error previo).
Al finalizar el proceso de reducción, la función composeValidators retorna el valor final de error, que indica si ha habido algún error en alguno de los validadores. Si no hay errores, se devuelve undefined.
*/

// Ejemplo de uso:
const validateName = validateMinLength(3); // el valor de minLength en la funcion validateMinLength es 3 y se almacena en validateName

const validateForm = composeValidators(validateRequired, validateEmail, validateName); // el valor del parametro (...validators) de la funcion composeValidators son validateRequired, validateEmail, validateName.

const name = 'John'; // john es el valor de value
const email = 'john@example.com'; // es el valor de validar email

const nameError = validateName(name); //  y el valor de value dentro de la funcion validateName es name, o sea john
const emailError = validateEmail(email); // el valor de value dentro de la funcion validateEmail es email, o sea john@example.com

const formError = validateForm(email); // Opcionalmente, se puede pasar el valor de email también

console.log(nameError); // Salida: undefined
console.log(emailError); // Salida: undefined
console.log(formError); // Salida: undefined



//Ejemplo 2: Manipulación de datos en una API


/*
Supongamos que tienes una API que proporciona datos y deseas aplicar una serie de transformaciones a esos datos antes de mostrarlos en tu aplicación.
Puedes utilizar la composición de funciones para encadenar las transformaciones de datos.
*/
/*p
const fetchData = async () => {
    // Lógica para obtener datos de la API
    const data = await fetch(url);
    return data;
};

const parseJSON = (data) => {
    return JSON.parse(data);
};

const filterByStatus = (status) => {
    return (data) => {
        return data.filter((item) => item.status === status);
    };
};

const formatData = (data) => {
    return data.map((item) => {
        return {
            id: item.id,
            name: `${item.firstName} ${item.lastName}`,
            email: item.email.toLowerCase()
        };
    });
};

const composeFunctions = (...functions) => {
    return (data) => {
        return functions.reduce((result, fn) => fn(result), data);
    };
};

// Ejemplo de uso:
const processAPIResponse = composeFunctions(parseJSON, filterByStatus('active'), formatData);

async function fetchDataAndProcess() {
    const apiData = await fetchData();
    const processedData = processAPIResponse(apiData);
    console.log(processedData);
};

fetchDataAndProcess();

*/
/*
Ejercicio 1:
Crea una función calculate que tome un número como argumento y realice una serie de operaciones matemáticas sobre ese número: lo multiplique por 2, le reste 3 y luego le sume 5. Utiliza la composición de funciones para lograrlo.
*/

function multiply(num) {
    return num * 2
};

function numMenos(num) {
    return num - 3
}

function sum5(num) {
    return num + 5
}

function calculate(func1, func2, fucnc3) {
    return function (num) {
        return func1(func2(fucnc3(num)));
    }
}

const calcular = calculate(sum5, numMenos, multiply);
console.log(calcular(50));


/*
Ejercicio 2:
Crea una función composePromises que tome un número variable de promesas como argumentos y retorne una nueva promesa que se resuelva cuando todas las promesas anteriores se resuelvan. Utiliza la composición de funciones para lograrlo.
*/

function composePromises(...promises) {
    return promises.reduce((acc, promise) => {
        console.log(acc); // acc es la promesa acumulada hasata el momento
        console.log(promise); // equivale a el valor de la promesa actual
        return acc.then(() => promise); // en cada iteracion se usa el then para esperar a que la promesa anterior se resuelva antes de pasar a la siguiente
    }, Promise.resolve());// La primera vez que se ejecuta la función de callback, el valor inicial (Promise.resolve()) se utiliza como acumulador (acc). Luego, en cada iteración, el valor de retorno de la función de callback se asigna al acumulador (acc) para la siguiente iteración.
}
/*
se hace un reduce de las promesas ingresadas como parametros, el primer parametro del reduce es el return y el segundo la promesa resuelta en Promise.resolve
a su vez los parametros del reduce son, acc y promise a esto se le pasa una funcion flecha con un return, que retorna acc (las promesas acumuladas hasta el momento).then => promise que reemplaza acc por el valor de las promesas en cada iteracion
siendo el valor en la primera (Promise.resolve), en la segunda iteracion(promise1), y en la tercera (promise2). el .then hace que espere a que primero se resuelva la promesa actual antes de pasar a la siguiente
*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const promise1 = delay(1000).then(() => console.log('Promise 1 resolved'));
const promise2 = delay(2000).then(() => console.log('Promise 2 resolved'));
const promise3 = delay(3000).then(() => console.log('Promise 3 resolved'));

const composedPromise = composePromises(promise1, promise2, promise3);
composedPromise.then(() => console.log('All promises resolved'));


/*
Ejercicio 3:
Implementa una función pipe que tome un valor inicial y una lista de funciones y aplique cada función en secuencia al valor inicial, utilizando el resultado de una función como entrada para la siguiente. Retorna el resultado final. Por ejemplo, pipe(3, [multiplyByTwo, subtractThree, square]) debería retornar 16, donde multiplyByTwo duplica el valor, subtractThree le resta 3 y square calcula el cuadrado.
*/

function pipe(value, ...func) {
    return func.reduce((acc, el) => {
        return el(acc);
    }, value);
}

function mult2(num) {
    return num * 2
}

function plus(num) {
    return num + 90
}

function root(num) {
    return Math.sqrt(num)
}

const ejemplo = pipe(50, mult2, plus, root);
console.log(ejemplo);


/*
Ejercicio 4:
Crea una función composeAsync que tome un número variable de funciones asíncronas y retorne una nueva función asíncrona que aplique cada función en secuencia, esperando la resolución de una función antes de pasar al siguiente. Utiliza la composición de funciones asíncronas para lograrlo.
*/


function composeAsync(...funcs) {
    return async function (value) {
        for (const func of funcs) {
            value = await func(value);
        }
        return value;
    };
};

function multBy2(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * 2), 500);
    });
};

function add5(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num + 5), 1000);
    });
};

function square(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 2000);
    });
};

const funcionCompuesta = composeAsync(multBy2, add5, square);

(async function () {
    const resultado = await funcionCompuesta(90);
    console.log(resultado);
})();


/*
Ejercicio 5:
Implementa una función memoize que tome una función y la "memoice", es decir, cachee sus resultados para evitar cálculos innecesarios.
Cada vez que se llame a la función con los mismos argumentos, debe retornar el resultado almacenado en caché en lugar de realizar el cálculo nuevamente.
*/

function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        } else {
            const result = func.apply(null, args);
            cache[key] = result;
            return result;
        }
    };
}

/*
En esta implementación, la función memoize toma como argumento la función que deseas memoizar. Crea un objeto cache donde se almacenarán los resultados en caché.

La función devuelta por memoize toma un número variable de argumentos utilizando el operador ...args.
Luego, se convierten los argumentos en una cadena JSON mediante JSON.stringify(args) para generar una clave única para cada combinación de argumentos.

Si la clave ya existe en el objeto cache, significa que el resultado ya está almacenado en caché. En este caso, se devuelve el resultado almacenado en la caché.

Si la clave no existe en el objeto cache, significa que es la primera vez que se llama a la función con esos argumentos.
En este caso, se ejecuta la función original func.apply(null, args) con los argumentos proporcionados y se almacena el resultado en la caché bajo la clave correspondiente.
Finalmente, se devuelve el resultado recién calculado.
*/


function expensiveCalculation(num) {
    console.log("Realizando cálculo costoso...");
    return num * 2;
}

/*
En este ejemplo, la función expensiveCalculation es una función costosa en términos de tiempo de ejecución.
Al memoizarla con memoize, la primera vez que se llama a la función con un determinado argumento, se realiza el cálculo costoso y se almacena el resultado en la caché.
En llamadas posteriores con el mismo argumento, se recupera el resultado de la caché, evitando el cálculo repetido.
*/

const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(5)); // Salida: Realizando cálculo costoso... 10
console.log(memoizedCalculation(5)); // Salida: 10 (resultado obtenido de la caché)
console.log(memoizedCalculation(10)); // Salida: Realizando cálculo costoso... 20
console.log(memoizedCalculation(10)); // Salida: 20 (resultado obtenido de la caché)