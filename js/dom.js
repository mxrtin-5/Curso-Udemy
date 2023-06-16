//DOM - Document Object Model



function cambiarColor(color){
    caja.style.background = color;
};

// conseguir elemento con id concreto

// let caja = document.getElementById('micaja');
let caja = document.querySelector('#micaja')
caja.innerHTML = 'Hola putasss';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'poronga'

cambiarColor(prompt('Ingrese un color'));


//conseguir elementos por su etiqueta

let todosLosDivs = document.getElementsByTagName('div');

let valor;

for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent === 'string'){
        let parrafo = document.createElement('p');
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        let seccion = document.querySelector('#miseccion');
        seccion.appendChild(parrafo);
    }
}


let contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML=`
<p> otro texto para ese elemento </p>
`

console.log(todosLosDivs);

console.log(caja);

//conseguir elemento por su clase

let divsRojos = document.getElementsByClassName('rojo');
let divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = 'yellow';

let div;
for(div in divsRojos){
    if(divsRojos[div].className === 'rojo'){
        divsRojos[div].style.background = 'red';
    }
}

// con query selector

let id = document.querySelector('#encabezado');
console.log(id);

let claseRojo = document.querySelector('div.rojo');
console.log(claseRojo);

let etiqueta = document.querySelector('div');
console.log(etiqueta);

