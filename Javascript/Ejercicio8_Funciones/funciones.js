// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function verdadera ()
{
    return true;
}
console.log(verdadera());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa()
{
    return new Promise(resolve => setTimeout(() => {
        resolve(console.log('Hola soy una promesa'))
      }, 5000));
}

promesa()
   
// - Una función generadora de índices pares automáticos

function* indicesPares()
{
    let i = 0;
    while(true)
    {
        yield i;
        i += 2;
    }
}

const indice = indicesPares();

console.log(indice.next().value);  // 0
console.log(indice.next().value);  // 2
console.log(indice.next().value);  // 4
console.log(indice.next().value);  // 6