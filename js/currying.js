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

const curry = (balance) => {
    return function (amount) {
        return function (fee) {
            return balance + amount - fee;
        }
    }
}

console.log(curry(5)(10)(25));



/*
Cálculo de impuestos:

Crea una función calcularImpuesto que tome el monto y el porcentaje de impuesto como parámetros y devuelva el monto total con impuestos.
Utiliza el currying para crear una función parcial calcularImpuestoConPorcentaje que tome solo el porcentaje de impuesto y devuelva una función que espera el monto.
Utiliza la función parcial para calcular el impuesto sobre diferentes montos con el mismo porcentaje.
*/



function calcularImpuesto(monto, porcentaje) {
    const impuesto = monto * (porcentaje / 100);
    return monto + impuesto
};

function calcularImpuestoConPorcentaje(porcentaje) {
    return (monto) => calcularImpuesto(monto, porcentaje);
};

const calculo = calcularImpuestoConPorcentaje(30);

console.log(calculo(100)); // 100 con un impuesto de 30





/*
Gestión de usuarios:

Crea una función crearUsuario que tome un nombre, un correo electrónico y una contraseña y cree un objeto de usuario.
Utiliza el currying para crear una función parcial crearUsuarioConNombre que tome solo el nombre y devuelva una función que espera el correo electrónico y la contraseña.
Utiliza la función parcial para crear varios usuarios proporcionando solo el nombre en cada llamada.
*/


function crearUsuario(nombre, email, contraseña) {
    return {
        nombre,
        email,
        contraseña
    }
}

function crearUsuarioConNombre(nombre) {
    return function (email, contraseña) {
        return crearUsuario(nombre, email, contraseña);
    }
}

const logIn = crearUsuarioConNombre('Juan');
console.log(logIn('juan@example.com', 'password123'));

const crearUsuarioMaria = crearUsuarioConNombre('María');
console.log(crearUsuarioMaria('maria@example.com', '123456'))


/*
Generación de URLs amigables:

Crea una función generarURL que tome un dominio y una ruta y devuelva una URL completa.
Utiliza el currying para crear una función parcial generarURLConDominio que tome solo el dominio y devuelva una función que espera la ruta.
Utiliza la función parcial para generar URLs con el mismo dominio y diferentes rutas.
*/


function generarURL(dominio, ruta) {
    return `https://${dominio}/${ruta}`
}

function generarURLConDominio(dominio) {
    return function (ruta) {
        return generarURL(dominio, ruta);
    }
}

const ruta1 = generarURLConDominio('www.pito.com');
console.log(ruta1('pitoooooo'));

//esta bien uwu

/*
Conversión de unidades de medida:

Crea una función convertirUnidad que tome una unidad de medida, una cantidad y una unidad de destino, y devuelva la cantidad convertida a la unidad de destino.
Utiliza el currying para crear una función parcial convertirUnidadConUnidadOrigen que tome solo la unidad de medida y devuelva una función que espera la cantidad y la unidad de destino.
Utiliza la función parcial para convertir cantidades de la misma unidad a diferentes unidades de destino.
*/

function convertirUnidad(unidadOrigen, cantidad, unidadDestino) {
    let cantidadConvertida;

    if (unidadOrigen === 'kg' && unidadDestino === 'lb') {
        // Conversión de kilogramos a libras
        cantidadConvertida = cantidad * 2.20462;
    } else if (unidadOrigen === 'cm' && unidadDestino === 'inch') {
        // Conversión de centímetros a pulgadas
        cantidadConvertida = cantidad * 0.393701;
    } else {
        // Manejar otras conversiones o casos no soportados
        cantidadConvertida = null;
    }

    // se pueden agregar mas conversiones

    return cantidadConvertida;
}


function convertirUnidadConUnidadOrigen(unidadOrigen){
    return function(cantidad, unidadDestino){
        return convertirUnidad(unidadOrigen, cantidad, unidadDestino);
    }
}

const convertirKgToLb = convertirUnidadConUnidadOrigen('kg');
console.log(convertirKgToLb(100, 'lb'));

/*
Validación de datos:

Crea una función validarDato que tome un patrón de validación y un valor y devuelva un booleano indicando si el valor cumple con el patrón.
Utiliza el currying para crear una función parcial validarDatoConPatrón que tome solo el patrón de validación y devuelva una función que espera el valor.
Utiliza la función parcial para validar diferentes valores con el mismo patrón de validación.
*/

function validarDato(patronValidacion, valor){
    const expresionRegular = new RegExp(patronValidacion);
    return expresionRegular.test(valor);
}

function validarDatoConPatron(patron){
    return function(valor){
        return validarDato(patron, valor)
        };
}


const validarEmail = validarDatoConPatron(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
console.log(validarEmail("correo@example.com")); // Output: true (el valor cumple con el patrón de un email válido)
console.log(validarEmail("correoexample.com")); // Output: false (el valor no cumple con el patrón de un email válido)