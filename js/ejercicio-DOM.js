let form = document.getElementById('form');
let box_dashed = document.querySelector('.dashed')

box_dashed.style.display = 'none'

form.addEventListener('submit', function (formulario) {
    formulario.preventDefault()
    console.log('submittt')

    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let edad = Number(document.getElementById('edad').value);

    if(nombre  === null || nombre.length === 0){
        document.getElementById('err_nombre').innerText = 'El nombre es incorrecto'
        return false
    }

    if(apellidos  === null || apellidos.length === 0){
        document.getElementById('err_apellidos').innerText = 'El apellido es incorrecto'
        return false
    }

    if(edad  === null || edad <= 0 || isNaN(edad)){
        document.getElementById('err_edad').innerText = 'la edad es incorrecta'
        return false
    }

    box_dashed.style.display = 'block';

    let datos = [nombre, apellidos, edad];

    for(indice in datos){
        let parrafo = document.createElement('p')
        parrafo.append(datos[indice])
        box_dashed.append(parrafo);
    }
    
});
