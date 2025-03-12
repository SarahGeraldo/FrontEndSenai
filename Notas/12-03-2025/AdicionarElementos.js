console.log("OIIIIII");

// CRIAR TEXTOS VIA JAVASCRIPT
const paragrafo = document.createElement("p");
paragrafo.textContent = "first text"; // OU "paragrafo.innerText = "first text";"

document.body.appendChild(paragrafo);
// "appendChild" adiciona a tag criada pelo "createElement" no final do HTML

document.body.prepend(paragrafo);
// "prepend" adiciona o elemento criado no começo do HTML

// ---------------------------------------------------------------------

// ADICIONAR ELEMENTOS Á UMA LISTA PRÉ-CRAIDA
const lista = document.getElementsByTagName("ul"); // chamar a lista criada pela tag geral

const Item1 = document.createElement("li");
Item1.textContent = "Item 1";

const Item3 = document.createElement("li");
Item3.textContent = "Item 3";

const Item5 = document.createElement("li");
Item5.textContent = "Item 5";

// ORGANIZAR OS ELEMENTOS ADICIONADOS PELO "createElement"
// *Item 1*, Item 2, Item 4
lista[0].prepend(Item1);

// Item 1, Item 2, ** **, Item 4
//   0       1       2      3
lista[0].insertBefore(Item3, lista[0].children[2]);

// Item 1, Item 2, Item 3, Item 4, *Item 5*
lista[0].appendChild(Item5);
