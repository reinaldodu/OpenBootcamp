// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
let altura_cms = 175;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_mts = 1.75; 

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 63.6;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_mts_redondeada = Math.ceil(altura_mts);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kg_redondeado = Math.floor(peso_kg);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(max_valor); // true 

