// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaDeLaCompra = ["Leche", "Huevos", "Pan", "Carne", "Pollo", "Lechuga"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaDeLaCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeLaCompra.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas = [
    { titulo: "Belleza inesperada", director: "David Frankel", fecha: 2016 },
    { titulo: "En busca de la felicidad", director: "Gabriele Muccino", fecha: 2007 },
    { titulo: "Aladdin", director: "Guy Ritchie", fecha: 2019 },
];
    
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosterioresFilter = peliculasFavoritas.filter( pelicula => pelicula.fecha > 2010 );

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando map)
let peliculasPosterioresMap = peliculasFavoritas.map(pelicula => {
    if (pelicula.fecha > 2010) {
        return pelicula;
    }
    });


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando for)
let peliculasPosterioresFor = [];
for (let i = 0; i < peliculasFavoritas.length; i++) {
    if (peliculasFavoritas[i].fecha > 2010) {
        peliculasPosterioresFor.push(peliculasFavoritas[i]);
    }
}

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando while)
let peliculasPosterioresWhile = [];
let i = 0;
while (i < peliculasFavoritas.length) {
    if (peliculasFavoritas[i].fecha > 2010) {
        peliculasPosterioresWhile.push(peliculasFavoritas[i]);
    }
    i++;
}

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando do while)
let peliculasPosterioresDoWhile = [];
let j = 0;
do {
    if (peliculasFavoritas[j].fecha > 2010) {
        peliculasPosterioresDoWhile.push(peliculasFavoritas[j]);
    }
    j++;
} while (j < peliculasFavoritas.length);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando for of)
let peliculasPosterioresForOf = [];
for (let pelicula of peliculasFavoritas) {
    if (pelicula.fecha > 2010) {
        peliculasPosterioresForOf.push(pelicula);
    }
}

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFavoritas.map(pelicula => pelicula.director);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresYTitulos = directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresYTitulosFactorPropagacion = [...directores, ...titulos];
console.log(directoresYTitulosFactorPropagacion)