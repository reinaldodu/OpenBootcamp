// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const papelera = document.querySelector('.papelera');

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', e => {    
    parrafo.classList.add('dragging');
    e.dataTransfer.setData('id', parrafo.id);
    });

    parrafo.addEventListener('dragend', () => parrafo.classList.remove('dragging'));
});

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', e => e.preventDefault());
    seccion.addEventListener('drop', e => {       
        const id_parrafo = e.dataTransfer.getData('id');
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});

papelera.addEventListener('dragover', e => e.preventDefault());

papelera.addEventListener('drop', e => {
    const id_parrafo = e.dataTransfer.getData('id');
    const parrafo = document.getElementById(id_parrafo);
    if (parrafo) {
        parrafo.remove();
    }    
});