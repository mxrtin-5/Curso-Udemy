/*
Ejercicio de promesas:
Escribe una función llamada getRandomFact que utiliza la API "NumbersAPI" para obtener un hecho aleatorio sobre un número específico.
La función debe tomar un parámetro number y devolver una promesa que se resuelva con el hecho obtenido de la API.
Utiliza el siguiente endpoint de la API: http://numbersapi.com/{number}/trivia.
*/

function getRandomFact(number) {
    return new Promise((resolve, reject) => {
        fetch(`http://numbersapi.com/${number}/trivia`)
            .then(response => {
                if (response.ok) {
                    resolve(response.text());
                } else {
                    reject(new Error('Error al obtener el hecho'))
                }
            })
            .catch(error => reject(error))
    });
}

// Uso de la función getRandomFact
getRandomFact(42)
    .then(fact => console.log(fact))
    .catch(error => console.log(error));

/*
-Primero, definimos la función getRandomFact que tomará un parámetro number. Esta función será responsable de obtener un hecho aleatorio sobre el número especificado.

-Dentro de la función getRandomFact, creamos una nueva promesa utilizando la sintaxis new Promise((resolve, reject) => { ... }). Esta promesa tendrá dos callbacks: resolve y reject, que se usarán para indicar si la promesa se resuelve exitosamente o se rechaza debido a un error.

-Utilizamos la función fetch para realizar una solicitud HTTP a la API "NumbersAPI" y obtener el hecho aleatorio. Pasamos la URL del endpoint de la API como argumento a fetch, donde el número específico se sustituye por ${number} en la URL.

-Después de realizar la solicitud a la API, encadenamos una llamada a then en el objeto response devuelto por fetch. Este then se ejecutará cuando se reciba la respuesta de la API.

-Dentro del then, verificamos si la respuesta es exitosa verificando el estado de la respuesta usando response.ok. Si la respuesta es exitosa, llamamos a response.text() para obtener el contenido de la respuesta como texto.

-Si obtenemos el contenido del hecho exitosamente, resolvemos la promesa llamando a resolve(response.text()) y pasando el texto del hecho como argumento para indicar que la promesa se ha resuelto correctamente.

-Si la respuesta no es exitosa (por ejemplo, si hay un error en la solicitud o el número no existe), rechazamos la promesa llamando a reject(new Error('Error al obtener el hecho')). Esto creará un nuevo objeto Error con el mensaje especificado y rechazará la promesa, indicando que ha ocurrido un error.

-Por último, capturamos cualquier error que pueda ocurrir durante el proceso de obtener el hecho mediante el uso de catch. Si hay algún error en el fetch o en cualquier etapa anterior, se ejecutará el catch y rechazará la promesa con el error correspondiente.

-Para utilizar la función getRandomFact, llamamos a la función y pasamos el número deseado como argumento. Después, encadenamos then para manejar la resolución de la promesa. Si la promesa se resuelve exitosamente, el hecho aleatorio se imprimirá en la consola. Si se produce un error y la promesa es rechazada, se imprimirá el mensaje de error en la consola.
*/


//PROMESAS

/*
En JavaScript, las promesas son objetos que representan la finalización (o falla) eventual de una operación asíncrona y su resultado asociado. Proporcionan una forma más estructurada y fácil de manejar el flujo de código cuando se trabaja con operaciones asincrónicas.

Las promesas tienen tres estados posibles:

Pendiente (pending): Estado inicial de una promesa. Significa que la operación aún no se ha completado y la promesa está en espera de ser resuelta o rechazada.

Resuelta (fulfilled): La operación asincrónica se completó con éxito y la promesa se resolvió. En este estado, la promesa contiene el valor resultante de la operación.

Rechazada (rejected): La operación asincrónica falló y la promesa se rechazó. En este estado, la promesa contiene información sobre el error ocurrido durante la operación.

Las promesas se utilizan para manejar operaciones asincrónicas de una manera más estructurada y legible, evitando el anidamiento excesivo de callbacks. En lugar de pasar una función de callback como argumento, se devuelve una promesa que puede ser encadenada utilizando los métodos then() y catch().

El método then() se utiliza para manejar la resolución exitosa de una promesa. Recibe una función de callback que se ejecutará cuando la promesa se resuelva, y puede recibir el valor resultante de la operación asincrónica.

El método catch() se utiliza para manejar el rechazo de una promesa. Recibe una función de callback que se ejecutará cuando la promesa sea rechazada, y puede recibir el motivo del rechazo (normalmente un objeto Error).

Al encadenar múltiples then() y catch(), podemos crear un flujo de control más legible y claro para manejar diferentes escenarios en operaciones asincrónicas.

En el ejemplo del ejercicio 1, utilizamos una promesa para encapsular la operación de obtener un hecho aleatorio de la API "NumbersAPI". La función getRandomFact devuelve una promesa que se resolverá con el hecho obtenido o se rechazará con un error en caso de que ocurra un problema durante la solicitud a la API.

Luego, al llamar a getRandomFact(42).then(fact => console.log(fact)).catch(error => console.error(error)), encadenamos los métodos then() y catch() para manejar la resolución exitosa de la promesa (imprimiendo el hecho en la consola) o el rechazo de la promesa (imprimiendo el error en la consola).
*/


/*

Ejercicio de Fetch:
Escribe una función llamada getGitHubRepos que utilice la API de GitHub para obtener la lista de repositorios de un usuario específico.
La función debe tomar un parámetro username y devolver una promesa que se resuelva con la lista de repositorios obtenida de la API.
Utiliza el siguiente endpoint de la API: https://api.github.com/users/{username}/repos.
*/

function getGitHubRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Error al obtener lista de repositorios');
            }
        });
}

// Uso de la función getGitHubRepos
getGitHubRepos('nombreusuario')
    .then(repos => console.log(repos))
    .catch(error => console.error(error));



/*

Consumo de API de clima:
Escribe una función que utilice una API de clima para obtener información sobre el clima actual de una ciudad específica.
Puedes utilizar la API de OpenWeatherMap, AccuWeather u otra de tu elección.
*/

function clima(lat, lon) {
    const apiKey = "e7fa615bd41494f59f70699f9eca041d";
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={minutely}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error ${response.status}`);
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        });
}

clima(34.36, 58.26)


/*
Consumo de API de noticias:
Crea una función que consuma una API de noticias para obtener los titulares más recientes en una categoría específica, como tecnología, deportes o entretenimiento.
Puedes utilizar la API de NewsAPI o cualquier otra API de noticias que prefieras.
*/

function news(category) {
    const apiKey = `c751c3bffe8e40a9bada91b495c7a989`
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error ${response.status}`)
            }
        })
        .then(data => {
            console.log('noticia', data);
        })
        .catch(error => {
            console.log(error)
        })
}

news('technology');

/*
Consumo de API de imágenes:
Desarrolla una función que haga una solicitud a una API de imágenes, como la API de Unsplash o Pixabay, y obtenga una imagen aleatoria basada en una palabra clave proporcionada.
*/

function getRandomImg(keyword) {
    const apiKey = '09HV9_D71WNzxsyu6coJnHjS_Ahm-1gXBjbw7bZ4OlA'; // Reemplaza esto con tu propia clave de API de Unsplash
    const apiUrl = `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`${response.status}`);
            }
        })
        .then(data => {
            console.log('Img', data)
        })
        .catch(error => {
            console.log(error)
        })
}

getRandomImg('nature')

/*
Consumo de API de traducción:
Crea una función que utilice una API de traducción, como Google Translate o Microsoft Translator, para traducir un texto de un idioma a otro.
Puedes permitir que el usuario ingrese el texto y elija los idiomas de origen y destino.
*/
/*
function translateText(text, sourceLanguage, targetLanguage) {
    const apiKey = 'tu_clave_de_API'; // Reemplaza esto con tu propia clave de API de Google Cloud Translation
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const requestBody = {
        q: text,
        source: sourceLanguage,
        target: targetLanguage
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al traducir el texto');
            }
        })
        .then(data => {
            // Aquí puedes trabajar con los datos de la traducción obtenida
            console.log(data.data.translations[0].translatedText);
        })
        .catch(error => {
            console.error(error);
        });
}

// Uso de la función translateText
translateText('Hello', 'en', 'es');

*/

/*
Consumo de API de música:
Escribe una función que haga una solicitud a una API de música, como la API de Spotify o Last.fm, y obtenga información sobre artistas, canciones o álbumes basados en un término de búsqueda.
*/

