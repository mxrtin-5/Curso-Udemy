/*
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;
}



sumame(5, 7, function(dato){
    console.log('La suma es:', dato);
}, 
function(dato){
    console.log('La suma por dos es:', (dato*2));
});
*/
//una funcion anonima es una funcion sin nombre, sin que este estrictamente utilizadda para algo en concreto

//quedaria igual en una funcion flecha solo que asi

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;
}

sumame(5, 7, (dato)=>{
    console.log('La suma es:', dato);
}, 
(dato)=>{
    console.log('La suma por dos es:', (dato*2));
});

// mas sobre las funcionas anonimas

(function(name, subname){
    alert(`${name} ${subname}`);
}('Pepe', 'Sire'));

// funcion anonima autoejecutable

const getName = function(nombre, apellido){
    alert(`${nombre} ${apellido}`);
}

getName('Damian', 'Puerro');

// funcion anonima guardada en una variable para poder reutilizarla

//yo considero que tienen desventajas ya que no pueden ser llamadas mas de una vez a menos que se las guarde en una variable o algo
