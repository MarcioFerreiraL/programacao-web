const botaoLigaDesliga = document.getElementById('botao')
const quadrado = document.getElementById('quadrado')

function ligarDesligar() {
    if(quadrado.style.backgroundColor === 'blue') {
        quadrado.style.backgroundColor = 'red'
    } else {
        quadrado.style.backgroundColor ='blue'
    }
}

botao.addEventListener('click', ligarDesligar);