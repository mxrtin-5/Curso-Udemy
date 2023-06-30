// Fetrch (ajax) y peticiones a servicios / api rest

let divUsers = document.getElementById('usuarios');

let usuarios = [];
setTimeout(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')// esto es una promesa
    .then(data => data.json())// convierte un objeto que llega a un json y el then hace que quede a la espera de recibir los datos
    .then(users => { // cuando la info este formateada, en json
        usuarios = users;// se hace esto
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + '. '+ user.name + ' ';

            divUsers.append(nombre);

            document.querySelector('.loading').style.display = 'none'
        })
    });
}, 1000);


