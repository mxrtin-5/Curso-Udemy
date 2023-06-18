/*
const transaccion = (fee, balance, amount) => {
    return balance + amount - fee;
};

const curry = (fn, ...args) => {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

const freeTransaccion = curry(transaccion, 0);

console.log(freeTransaccion(10, 90));

...args representa un parámetro de longitud variable que captura los argumentos iniciales pasados
a la función curry, mientras que ..._arg representa un parámetro de longitud variable que captura los argumentos adicionales pasados a la función retornada por curry.

Cuando se llama a curry(transaccion, 0), el argumento transaccion se asigna al parámetro fn, y el argumento 0 se asigna a ...args. Esto significa que args será un arreglo que contiene el valor 0.

Luego, cuando se llama a la función retornada por curry, como freeTransaccion(10, 90), los argumentos 10 y 90 se asignan a ..._arg. Esto significa que _arg será un arreglo que contiene los valores 10 y 90

Finalmente, en el cuerpo de la función retornada por curry, se utiliza la sintaxis de propagación (...) para combinar los arreglos args y _arg. En este caso, ...args se expandirá para ser 0 y ..._arg se expandirá para ser 10 y 90. Luego, se llama a fn (que es transaccion) con estos argumentos combinados: fn(0, 10, 90).

// se puede hacer sin usar la funcion curry

const transaccion1 = (fee, balance, amount) => {
    return balance + amount - fee;
};

const freeTransaccion1 = (balance, amount) => {
    return transaccion1(0, balance, amount);
};

console.log(freeTransaccion1(10, 90));
*/

const transaccion = (fee, balance, amount) => {
    return balance + amount - fee;
};

const curry = (balance) =>{
    return function(amount){
        return function(fee){
                return balance + amount - fee;
        }
    }
}

console.log(curry(5)(10)(25));