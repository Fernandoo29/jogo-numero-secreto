console.log(numeroAleatorio );
function verificaChuteValido(chute){
    const numero = +chute; // Só de tentar somar ele ja converte para int

    // Caso um texto foi falado
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
        return;
    }

    // Caso o numnero falado esteja fora do range permetido
    if(chuteForaDoRangePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }

    // Caso de acerto do numero secreto
    if(numero === numeroAleatorio){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroAleatorio}.</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero >  numeroAleatorio){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>';
    } else{
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>';
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteForaDoRangePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
