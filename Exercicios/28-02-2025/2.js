// Inverte um texto:
// Crie uma função revertString(palavra), que recebe uma palavra e retorna a palavra invertida.
// Exemplo de uso: revertString(“Brasil”); // Retorna “lisarB”

let palavra = prompt("Digite uma palavra: ");
let palavraInvertida = "";

// AMORA
// INDICE: 01234
// TAMANHO: 5

function revertString(palavra) {
  //    for(let i = 1; i <= palavra.length; i++)
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
  }

  return palavraInvertida;
}

console.log(revertString(palavra));
