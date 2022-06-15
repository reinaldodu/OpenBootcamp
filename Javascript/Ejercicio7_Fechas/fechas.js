// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let hoy = new Date();

// - La fecha de tu nacimiento
let nacimiento = new Date(1974, 7, 13);
console.log(nacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let compara = hoy.getTime() > nacimiento.getTime();
console.log (compara);
// - Una variable que contenga el día de tu nacimiento
let dia = nacimiento.getDate();
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = nacimiento.getMonth()+1;
console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anio = nacimiento.getFullYear();
console.log(anio);