// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos

class Estudiante {    
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = ["Javascript", "HTML", "CSS"];
    }
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevo = new Estudiante("Reinaldo");  // Se crea la instancia de la clase Estudiante
console.log(nuevo.obtenDatos());  // Se llama al método obtenDatos() de la instancia nuevo
