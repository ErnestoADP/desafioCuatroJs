let btnSumar = document.getElementById('btn-sumar')
btnSumar.addEventListener('click', function(event) {

    let valorUno = parseInt(document.getElementById('valor1').value);
    let valorDos = parseInt(document.getElementById('valor2').value);
    let span = document.getElementById('resultado');
    let resultado = document.createTextNode(valorUno + valorDos)
    span.appendChild(resultado)

})
let btnRestar = document.getElementById('btn-restar')
btnRestar.addEventListener('click', function(event) {
    let valorUno = parseInt(document.getElementById('valor1').value);
    let valorDos = parseInt(document.getElementById('valor2').value);
    let span = document.getElementById('resultado');
    let calculoResta = valorUno - valorDos;

    if (calculoResta < 0) {
        calculoResta = 0;
    }
    let resultado = document.createTextNode(calculoResta)
    span.appendChild(resultado)

})