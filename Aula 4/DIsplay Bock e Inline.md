# 🧱 Guia Didático: Elementos Block vs. Inline no HTML/CSS

No desenvolvimento web, o comportamento de exibição (`display`) dita como os elementos se organizam no fluxo da página. A maioria das tags HTML se divide naturalmente em duas famílias principais: **Block-level** (Nível de Bloco) e **Inline-level** (Em linha).

Compreender essa diferença é o primeiro passo para dominar a criação de layouts.

![](http://devfuria.com.br/html-css/elementos-inline-e-elementos-block-level/inline-blocklevel-b.jpeg)
---

## 1. Elementos de Bloco (`display: block`)

Um elemento de bloco funciona como uma "caixa" autônoma. Ele sempre força uma quebra de linha antes e depois de si mesmo, separando-se estruturalmente do restante do conteúdo.

### 📌 Principais Características:
* **Nova linha:** Sempre começa em uma nova linha.
* **Largura máxima:** Ocupa **100% da largura** disponível do seu contêiner pai, esticando-se da esquerda para a direita.
* **Dimensões flexíveis:** Você **pode** definir a largura (`width`) e a altura (`height`) livremente via CSS.
* **Espaçamento total:** Margens (`margin`) e preenchimentos (`padding`) funcionam perfeitamente em todas as quatro direções, empurrando os elementos vizinhos.

### 🏷️ Tags mais comuns (Padrão Bloco):
* `<div>` (Contêiner genérico para agrupar blocos)
* `<p>` (Parágrafo de texto)
* `<h1>` a `<h6>` (Títulos e subtítulos)
* `<ul>`, `<ol>`, `<li>` (Listas e seus itens)
* **Tags Semânticas:** `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`

### 💻 Exemplo em HTML:
```html
<div style="background-color: #87CEEB; padding: 10px;">
  Sou uma div (bloco). Ocupo toda a largura da tela!
</div>

<p style="background-color: #98FB98; padding: 10px;">
  Sou um parágrafo (bloco). Fui empurrado para a próxima linha.
</p>
```

---

## 2. Elementos Em Linha (`display: inline`)

Um elemento em linha flui no documento exatamente como as palavras em um texto escrito. Ele não quebra o fluxo da página e foi feito para envelopar pequenas partes de conteúdo.

### 📌 Principais Características:
* **Mesma linha:** Permanece na mesma linha dos elementos e textos ao seu redor.
* **Largura mínima:** Ocupa **apenas o espaço estritamente necessário** para envolver o seu conteúdo.
* **Dimensões bloqueadas:** Você **não pode** definir `width` ou `height`. O navegador irá simplesmente ignorar essas regras no CSS.
* **Espaçamento restrito:** Margens e paddings *horizontais* (esquerda/direita) funcionam bem. No entanto, margens e paddings *verticais* (cima/baixo) não empurram as linhas vizinhas do layout.

### 🏷️ Tags mais comuns (Padrão Inline):
* `<span>` (Contêiner genérico para textos na mesma linha)
* `<a>` (Links de hipertexto)
* `<strong>`, `<b>` (Destaque em negrito)
* `<em>`, `<i>` (Destaque em itálico)
* `<img>` (Imagem)*

*(Nota Avançada: Tags como `<img>`, `<input>` e `<button>` são tecnicamente chamadas de "inline-replaced elements". Elas ficam na mesma linha, mas, diferentemente de um texto em um `<span>`, elas aceitam regras de largura e altura).*

### 💻 Exemplo em HTML:
```html
<p>
  Este é um texto normal, mas 
  <span style="background-color: #FFD700; font-weight: bold;">este span (inline)</span> 
  permanece perfeitamente na mesma linha. <a href="#">Este link</a> também fica ao lado!
</p>
```

---

## ⚖️ Resumo Comparativo

Para fixar o conhecimento, compare os dois comportamentos:

| Característica | `display: block` | `display: inline` |
| :--- | :--- | :--- |
| **Começa em nova linha?** | Sim | Não |
| **Espaço ocupado** | 100% da largura do elemento pai | Apenas o tamanho do próprio conteúdo |
| **Aceita `width` e `height`?**| Sim | Não (são ignorados) |
| **Aceita `margin`/`padding`?**| Sim, em todas as direções | Afeta o layout apenas na horizontal |
| **Propósito principal** | Estruturar grandes áreas do layout | Formatar pedaços de texto ou microelementos |

---

> **💡 Dica de Ouro:**
> O comportamento padrão de uma tag não é uma regra imutável! O grande poder do CSS é alterar essa natureza. Você pode transformar um link (`<a>`) em um bloco usando `display: block;` para criar um botão grande e clicável, ou colocar itens de uma lista horizontalmente usando `display: inline;` em suas tags `<li>` para criar um menu de navegação superior.