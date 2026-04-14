### Os 7 Tipos Primitivos do JavaScript

No JavaScript, os tipos primitivos são os blocos de construção mais básicos da linguagem. Eles representam um único valor simples (não são objetos).

**1. String (Texto)**
Usado para representar palavras, frases, letras ou números tratados como texto. Precisa estar entre aspas (simples `'...'`, duplas `"..."` ou crases `` `...` ``).

**2. Number (Número)**
Diferente de outras linguagens, no JavaScript inteiros e decimais são todos do tipo `Number`. Decimais usam ponto ao invés de vírgula.

**3. Boolean (Booleano)**
Como um interruptor, só tem dois valores possíveis: `true` (verdadeiro) ou `false` (falso). É a base das tomadas de decisão no código.

**4. Undefined (Indefinido)**
Acontece quando uma variável é criada, mas não recebe nenhum valor. O JavaScript a define como "indefinida".

**5. Null (Nulo)**
A diferença para o `undefined` é a **intenção**. O `null` é usado quando o programador quer esvaziar uma variável de propósito.

**6. BigInt (Inteiro Gigante)**
Criado para trabalhar com números absurdamente grandes que ultrapassam o limite seguro do tipo `Number` (usado em cálculos científicos ou criptografia).

**7. Symbol (Símbolo)**
Cria um valor único e exclusivo, garantido para não colidir com nenhum outro, mesmo com descrições iguais.

---

```javascript
// 1. STRING
const nome = "Maria da Silva";
const cpfTexto = '123.456.789-00'; // Números que não calculamos devem ser Strings.

// 2. NUMBER
const idade = 28;
const temperatura = -5.5; 

// 3. BOOLEAN
const usuarioEstaLogado = true;
const temSaldoNaConta = false;

// 4. UNDEFINED
let endereco; 
console.log(endereco); // Retorna 'undefined'

// 5. NULL
let carrinhoDeCompras = "Celular, Capinha";
carrinhoDeCompras = null; // Variável esvaziada de propósito

// 6. BIGINT
// Para criar um BigInt, colocamos a letra 'n' no final do número.
const numeroGigante = 90071992547409913425345345n; 

// 7. SYMBOL
const idUnico = Symbol('id_usuario');
const idUnico2 = Symbol('id_usuario');
// idUnico é diferente de idUnico2, eles são identificadores exclusivos.