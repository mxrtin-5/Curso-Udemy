//this tiene el contexto de donde se ejecuta

function getName(){
    // si hicieramos un console.log de this, nos daria el objeto window global
    console.log(`mi nombre es ${this.nick}`)
}

window.nick = 'global-nick';

getName()// aqui el dueño de la ejecucion de la funcion es el objeto global //global == globalThis == window // devuelve undefined pq en la variable global no tenemos nada

let midu = {
    nick: 'midu',
    getName: getName
}


midu.getName()//aqui el dueño de la ejecucion es el MIDU por ende el objeto midu de arriba, es el que va a llegar al this


// en caso de que sea una arrow function
const getName1 = () =>{
    console.log(`Mi nombre es ${this.nick}`); // esto mostraria undefined, por mas que este bien
    //ya que las arrow functions no pueden ser owners de la ejecucion de una funcion
    // las arrow functions no añaden contexto de ejecucion
}


let midu1 = {
    nick:'minu1',
    getName1: getName1
}

midu1.getName1()