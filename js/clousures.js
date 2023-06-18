/*
Un closure en JavaScript es una función que tiene acceso a variables en su ámbito léxico, incluso después de que la función haya sido ejecutada y su ámbito léxico haya sido destruido



. En otras palabras, un closure es una función que "recuerda" el entorno en el que se creó, incluyendo las variables y funciones disponibles en ese momento

.
Los closures son útiles para crear funciones que actúan como fábricas de funciones, ya que permiten crear funciones con diferentes ámbitos léxicos que pueden compartir variables comunes

. También son útiles para crear funciones privadas, ya que las variables definidas en el ámbito léxico de una función no son accesibles desde fuera de la función

.
Para crear un closure, se define una función dentro de otra función y se devuelve la función interna

. La función interna tiene acceso a las variables definidas en la función externa, incluso después de que la función externa haya sido ejecutada

.
En resumen, un closure en JavaScript es una función que tiene acceso a variables en su ámbito léxico, incluso después de que la función haya sido ejecutada
y su ámbito léxico haya sido destruido. Los closures son útiles para crear funciones que actúan como fábricas de funciones y para crear funciones privadas
*/


const miFuncion = () => {
    let miValor = 2;
    console.log(miValor);
    const funcionHija = () => {
        console.log(miValor += 1);
    }
    funcionHija();
}
miFuncion();



const saludar = () => {
    const nombre = "Juan";
    console.log(`Hola, ${nombre}!`);
}
saludar();
console.log(nombre); // Error: nombre is not defined




const crearSumador = (numero) => {
    return (otroNumero) => {
        return numero + otroNumero;
    }
}
const sumarCinco = crearSumador(5);
console.log(sumarCinco(3)); // 8
console.log(sumarCinco(7)); // 12

/*
El ámbito léxico en JavaScript se refiere al alcance de las variables en una función y cómo se accede a ellas

. El ámbito léxico describe cómo las funciones anidadas tienen acceso a las variables definidas en los ámbitos de sus padres
. En otras palabras, el ámbito léxico se refiere a la forma en que las variables se buscan en la cadena de ámbitos anidados en una función

En JavaScript, cada función tiene su propio ámbito léxico, lo que significa que las variables definidas dentro de una función solo son accesibles dentro de esa función y de las funciones anidadas dentro de ella

. El ámbito léxico es importante para entender cómo funcionan los closures en JavaScript, ya que los closures tienen acceso
a las variables en su ámbito léxico, incluso después de que la función haya sido ejecutada y su ámbito léxico haya sido destruido

En resumen, el ámbito léxico en JavaScript se refiere al alcance de las variables en una función y cómo se accede a ellas.
Cada función tiene su propio ámbito léxico, lo que significa que las variables definidas dentro de una función solo son accesibles dentro de esa función y de las funciones anidadas dentro de ella. El ámbito léxico es importante para entender cómo funcionan los closures en JavaScript


*/