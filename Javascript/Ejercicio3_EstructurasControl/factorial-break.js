//Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial = 10;
let resultado = 1;
let i=1;
while (i<20) {
    resultado *= i;
    i++;
    if (i>factorial) {
        break;
    }
}
console.log(resultado);