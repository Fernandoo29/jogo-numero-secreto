const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1 );
}

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;