const boton = document.getElementById('btn1');

boton.addEventListener('click', () => {
    alert ("click en el botón");
});

// Lanzando un mensaje de alerta con JQuery
$(document).ready(() => {
    $("#btn2").click( () => alert("Hola, estoy utilizando jQuery"));

    $("h1").click( () => $("h1").css("color", "red"));
    
});

