function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let sumar = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return sumar;
}

sumame(5, 7, function(dato){
    console.log('La suma es:', dato);
}, 
function(dato){
    console.log('La suma por dos es:', (dato*2));
});

//una funcion anonima es una funcion sin nombre, sin que este estrictamente utilizadda para algo en concreto

//quedaria igual en una funcion flecha solo que asi

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let sumar = numero1 + numero2;

    sumaYmuestra(suma);
    sumaPorDos(suma);

    return sumar;
}

sumame(5, 7, (dato)=>{
    console.log('La suma es:', dato);
}, 
(dato)=>{
    console.log('La suma por dos es:', (dato*2));
});
