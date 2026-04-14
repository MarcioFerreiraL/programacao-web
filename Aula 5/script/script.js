// Seleção dos elementos do DOM (Document Object Model)
const campoEntrada = document.getElementById('meuInput');
const botao = document.getElementById('botaoSomar');
const textoResultado = document.getElementById('resultado');

// Variável de estado para armazenar o total
let totalAcumulado = 0;

// Função responsável pela lógica da soma
function realizarSoma() {
    // Converter o valor do input (string) para número
    const valorDigitado = Number(campoEntrada.value);

    // Validação simples: só soma se for um número válido
    if (!(valorDigitado) && campoEntrada.value !== '') {
        totalAcumulado += valorDigitado;
        
        // Atualiza a interface
        textoResultado.innerText = totalAcumulado;
        
        // Limpa e foca no input para a próxima jogada
        campoEntrada.value = '';
        campoEntrada.focus();
    } else {
        alert("Por favor, introduza um número válido.");
    }
}

// Ouvinte de eventos: Quando clicar, executa a função
botao.addEventListener('click', realizarSoma);

// Bónus: Permitir somar ao carregar na tecla "Enter"
campoEntrada.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        realizarSoma();
    }
});