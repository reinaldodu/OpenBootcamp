// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: 'Reinaldo',
    apellido: 'Duque',
    edad: '47',
    altura: '1.75',
    eresDesarrollador: true
};

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [{...datos }, { nombre:'Maria', apellido: 'Sánchez', edad: 33}, { nombre:'Carlos', apellido: 'Rodríguez', edad: 55} ];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

lista.sort((a, b) => b.edad - a.edad);
console.log(lista);