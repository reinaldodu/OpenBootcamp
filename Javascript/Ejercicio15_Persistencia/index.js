// - Crea una variable con tu nombre
const nombre = 'Reinaldo';

// - Crea una variable con tu apellido
const apellido = 'Duque';

// - Crea un objeto con tu nombre y tu apellido
const persona = { nombre, apellido };

// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem('persona', JSON.stringify(persona));

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem('persona', JSON.stringify(persona));

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = `persona=${JSON.stringify(persona)}; max-age=120`;

