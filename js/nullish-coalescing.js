const foo = null ?? 'bar';
console.log(foo); // 'bar'

const baz = undefined ?? 'qux';
console.log(baz); // 'qux'

const quux = 'corge' ?? 'grault';
console.log(quux); // 'corge'

/*
En este ejemplo, el operador ?? se utiliza para fusionar dos valores. En el primer caso, foo es null, por lo que el valor resultante es 'bar'. En el segundo caso, baz es undefined, por lo que el valor resultante es 'qux'. En el tercer caso, quux es 'corge', por lo que el valor resultante es 'corge'.
En resumen, el "coalescing" en JavaScript se refiere a la operación de fusionar dos o más valores en un solo valor. El "nullish coalescing" es una operación que se utiliza para fusionar dos valores, donde el valor resultante es el primer valor que no es nulo o indefinido. El operador de "nullish coalescing" en JavaScript es ??, que devuelve el valor de la izquierda si no es nulo o indefinido, y en caso contrario, devuelve el valor de la derecha
*/