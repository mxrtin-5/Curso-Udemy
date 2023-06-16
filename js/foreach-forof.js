let lenguajes = ['PHP', 'JS', 'Go', 'Java'];


// metodo normal de recorrer arrays

for(let i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
};

console.log('-------------------');

//metodo con foreach

lenguajes.forEach((elemento, indice)=>{
    console.log(`${indice}: ${elemento}`);
});

console.log('--------------------');

// con for of

for(let lenguaje of lenguajes){
    console.log(lenguaje)
}

console.log('-----------------------');

// con for in

for(let lenguaje1 in lenguajes){
    let valor = lenguajes[lenguaje1];
    console.log(valor);
}
