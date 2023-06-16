const user = {
    name: 'John Doe',
    age: 34,
    phone: {
        home:12345,
        mobile: 453234
    }
}

//desestructuracion de objetos
const {name: nombre, age: edad} = user  // asi se le asignan ALIAS a los parametros
const{age, phone:{mobile}} = user  // asi se accede a un valor dentro de un valor


console.log(age,mobile);

//desestructuracion de arrays

const usuarios = ['Jorge', 'Raul','Julieta', 'Matias'];

const [,, a, b] = usuarios // poniendo esas comas te salteas posiciones del array

console.log(a,b);

const arr = [24, 'ReactJS', 'Fede'];

const [ edad1, curso, nombre1] = arr

console.log(edad1, curso, nombre1);


// uso del operador ternario

const temperatura = 4;

const mensaje = temperatura >= 20 ? 'Dia caluroso' : 'Dia fresco'
console.log(mensaje)