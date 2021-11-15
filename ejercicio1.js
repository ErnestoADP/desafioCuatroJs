botton.addEventListener('click', function(event) {
    event.preventDefault();

    const expresionRegVacio = /^$/;
    const expresionRegLetras = /^[A-Za-z]+$/;

    var nombreInput = document.getElementById('nombre');
    var asuntoInput = document.getElementById('asunto');
    var mensajeInput = document.getElementById('mensaje');

    var errorNombre = document.getElementsByClassName("errorNombre");
    var errorAsunto = document.getElementsByClassName("errorAsunto");
    var errorMensaje = document.getElementsByClassName("errorMensaje");

    var mensajeResultado = document.getElementsByClassName("resultado");

    if (expresionRegLetras.test(nombreInput.value)) {
        errorNombre[0].style.display = "none";
        if (expresionRegVacio.test(nombreInput.value)) {
            errorNombre[0].style.display = "block";
        } else {
            errorNombre[0].style.display = "none";
        }
    } else {
        errorNombre[0].style.display = "block";
    }
    if (expresionRegLetras.test(asuntoInput.value)) {
        errorAsunto[0].style.display = "none";
        if (expresionRegVacio.test(asuntoInput.value)) {
            errorAsunto[0].style.display = "block";
        } else {
            errorAsunto[0].style.display = "none";
        }
    } else {
        errorAsunto[0].style.display = "block";
    }
    if (expresionRegLetras.test(mensajeInput.value)) {
        errorMensaje[0].style.display = "none";
        if (expresionRegVacio.test(mensajeInput.value)) {
            errorMensaje[0].style.display = "block";
        } else {
            errorMensaje[0].style.display = "none";
        }
    } else {
        errorMensaje[0].style.display = "block";
    }

    if (expresionRegLetras.test(nombreInput.value) &&
        expresionRegLetras.test(asuntoInput.value) &&
        expresionRegLetras.test(mensajeInput.value)) {
        if (!expresionRegVacio.test(nombreInput.value) &&
            !expresionRegVacio.test(asuntoInput.value) &&
            !expresionRegVacio.test(mensajeInput.value)) {
            mensajeResultado[0].style.display = "block";

        } else {
            mensajeResultado[0].style.display = "none";
        }


    } else {
        mensajeResultado[0].style.display = "none";
    }



})