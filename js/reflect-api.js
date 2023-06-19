const person = {
    name: 'john',
    email: 'john@gmail.com'
};

console.log(Reflect.get(person, 'name')); // devuelve el name si hay
console.log(Reflect.has(person, 'email')); //pregunta si hay email
console.log(Reflect.has(person, 'phone'));// pregunta si hay phone
console.log(Reflect.getPrototypeOf(person)); // podemos ver el prototipo del objeto que pasamos
console.log(Reflect.getOwnPropertyDescriptor(person, 'name'));// podemos ver el descriptor del objeto que pasemos
/*
En JavaScript, el descriptor de un atributo es un objeto que define las propiedades de una propiedad de un objeto. Un descriptor de propiedad es un registro con algunos de los siguientes atributos:
value: el valor asociado con la propiedad (descriptores de datos únicamente).
writable: true si y solo si el valor asociado con la propiedad puede ser cambiado (descriptores de datos únicamente).
get: una función que sirve como método de acceso para la propiedad, o undefined si no hay método de acceso (métodos de acceso de descripciones únicamente).
set: una función que sirve como método de escritura para la propiedad, o undefined si no hay método de escritura (métodos de acceso de descripciones únicamente).
configurable: true si y solo si la propiedad puede ser eliminada y los atributos de la propiedad pueden ser cambiados.
enumerable: true si y solo si la propiedad puede ser enumerada en un bucle for...in o Object.keys()
Los descriptores de propiedad se utilizan para definir las propiedades de un objeto y para examinar las propiedades de un objeto. El método Object.getOwnPropertyDescriptor() se utiliza para obtener el descriptor de propiedad de una propiedad dada si existe en el objeto, y Object.defineProperty() se utiliza para definir una propiedad con un descriptor de propiedad específico
*/

console.log(Reflect.ownKeys(person)); // podemos obtener las keys (propiedades) del objeto

Reflect.defineProperty(person, 'phone', { writable: true }); // se puede definir una propiedad
console.log(Reflect.has(person, 'phone')); // ahora si si se comprueba si tiene la propiedad phone, si la tiene

Reflect.set(person, 'phone', '6457876');;
console.log(Reflect.get(person, 'phone')); // ahora se puede ver el valor de phone
Reflect.deleteProperty(person, 'email');// se elimina la propiedad email
console.log(Reflect.has(person, 'email'));// ahora esto da false pq se elimino la propiedad


// Por que utilizar este metodo para manipular objetos 

// el metodo tradicional es asi 

// Crear un objeto
const persona = {
    nombre: 'Juan',
    edad: 25
};

// Agregar una propiedad al objeto
persona.profesion = 'Ingeniero';

// Acceder a una propiedad del objeto
console.log(persona.nombre); // Output: 'Juan'

// Editar una propiedad del objeto
persona.edad = 30;

// Borrar una propiedad del objeto
delete persona.edad;

console.log(persona); // Output: { nombre: 'Juan', profesion: 'ingeniero }




// Crear un objeto
const persona1 = {
    nombre: 'Juan',
    edad: 25
};

// Agregar una propiedad al objeto utilizando la API Reflect
Reflect.set(persona1, 'profesion', 'Ingeniero');

// Acceder a una propiedad del objeto utilizando la API Reflect
console.log(Reflect.get(persona1, 'nombre')); // Output: 'Juan'

// Editar una propiedad del objeto utilizando la API Reflect
Reflect.set(persona1, 'edad', 30);

// Borrar una propiedad del objeto utilizando la API Reflect
Reflect.deleteProperty(persona1, 'profesion');

console.log(persona1); // Output: { nombre: 'Juan', edad: 30 }
