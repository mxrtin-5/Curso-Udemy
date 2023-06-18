
let rideTime = 30;
let rideDistance = 7;
let costPerMinute = [0.2, 0.35, 0.4, 0.45];
let costPerMile = [1.1, 1.8, 2.3, 3.5];

function solucion(rideTime, rideDistance, costPerMinute, costPerMile) {
    return costPerMile.map((costo, indice) => {
        const rideMinuteCost = costPerMinute[indice];
        // el parametro INDICE itera sobre la variable costPerMile y devuelve los indices (posiciones) de cada valor
        console.log(indice)
        // el parametro COSTO itera sobre la variable costPerMile y dedvuelve el valor en cada posicion del array
        console.log(costo);
        return (rideMinuteCost * rideTime) + (costo * rideDistance);
    })
}

// (cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)


console.log(solucion(rideTime, rideDistance,  costPerMinute, costPerMile));

/*
let rideTime = 30;
let rideDistance = 7;
let costPerMinute = [0.2, 0.35, 0.4, 0.45];
let costPerMile = [1.1, 1.8, 2.3, 3.5];

function solucion(rideTime, rideDistance, costPerMinute, costPerMile) {
    const costos = costPerMile.map((costo, indice) => {
        const rideMinuteCost = costPerMinute[indice];
        // el parametro INDICE itera sobre la variable costPerMile y devuelve los indices (posiciones) de cada valor
        console.log(indice)
        // el parametro COSTO itera sobre la variable costPerMile y dedvuelve el valor en cada posicion del array
        console.log(costo);
        return (rideMinuteCost * rideTime) + (costo * rideDistance);
    });
    return costos;
}

// (cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)

const resultado = solucion(rideTime, rideDistance, costPerMinute, costPerMile)
console.log(resultado);
*/
/*
let rideTime = 30;
let rideDistance = 7;
let costPerMinute = [0.2, 0.35, 0.4, 0.45];
let costPerMile = [1.1, 1.8, 2.3, 3.5];

function solucion(rideTime, rideDistance, costPerMinute, costPerMile) {
    const costos = [];

    costPerMile.forEach((element, indice) => {
        const rideMinuteCost = costPerMinute[indice];

        const costo = (rideMinuteCost * rideTime) + (element * rideDistance);

        costos.push(costo);
    });

    return costos;

};


const resultado = solucion(rideTime, rideDistance, costPerMinute, costPerMile );
console.log(resultado);
*/


