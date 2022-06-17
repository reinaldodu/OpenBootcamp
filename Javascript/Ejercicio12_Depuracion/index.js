// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function Fibonacci(num) {
    let lista = [1,1];
    for (let i = 2; i < num; i++) {
        lista.push(lista[i - 2] + lista[i - 1]);
    }
    return lista;
}

console.log(Fibonacci(6));