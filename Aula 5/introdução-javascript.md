### A Função do JavaScript numa Página Web

Para entender o papel do JavaScript, gosto de usar a Analogia do Corpo Humano para os três pilares da web:

* HTML: É o esqueleto. Ele define a estrutura da página (onde fica o texto, as imagens, os links).
* CSS: É a pele e as roupas. Ele define a aparência (cores, fontes, tamanhos, layout).
* JavaScript: É o cérebro e os músculos. Ele traz vida e interatividade.

Sem o JavaScript, uma página web é apenas um panfleto estático. Com o JavaScript, a página se torna um aplicativo. Ele é responsável por:

* Reagir aos cliques do usuário.
* Atualizar informações na tela sem precisar recarregar a página inteira.
* Criar animações complexas.
* Validar dados de formulários antes de enviá-los.

### Declaração de Variáveis em JavaScript

No JavaScript, há três formas de guardar dados. A diferença está no **escopo** e se o valor pode ser **alterado**.

```javascript
// ==========================================
// 1. CONST (A constante de confiança)
// ==========================================

const nomePai = "Marcos";
// nomePai = "Augusto César"; // Você não pode mudar o valor de uma constante.


// ==========================================
// 2. LET (A variável flexível moderna)
// ==========================================

let pontuacao = 10;
pontuacao = 15; // Podemos atualizar o valor do 'let'.


// ==========================================
// 3. VAR
// ==========================================

var cidade = "Surubim";
cidade = "Recife"; // Pode ser alterado.
´´´

