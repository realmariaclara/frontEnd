const btnAumentar = document.querySelector('#Aumentar');
const btnDiminuir = document.querySelector('#Diminuir');
//const btnZerar = document.querySelector('#Zerar');
const contadorElemento = document.querySelector('#contador')

let contador = 0;

function aumentar() {
    contador++;
    contadorElemento.textContent = contador;
}

function diminuir() {
    if (contador < 0) {
        alert("Contador Zero")
    } else {
        contador--;
        contadorElemento.textContent = contador;
    }
}

function zerar() {
    contador = 0;
    contadorElemento.textContent = contador;
}

btnAumentar.addEventListener('click', aumentar);
btnDiminuir.addEventListener('click', diminuir);
btnZerar.addEventListener('#zerar').addEventListener('click', zerar);