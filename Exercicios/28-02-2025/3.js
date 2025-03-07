// Acrescenta espaços no texto
// Crie uma função addSpaces(palavra), que recebe uma palavra e retorna uma nova palavra, com espaços entre as letras. A última letra não pode ter espaço no final.
// Exemplo de uso: addSpaces(“abacate”); // Retorna “a b a c a t e”

// CÓDIGO ERRADO
// let palavra = prompt("Digite uma palavra: ");
// let palavraComEspaco = "";

// function addSpaces(palavra){
//     for(i = 1; palavra.length != 0; i++){
//         palavraComEspaco = i + palavra;
//         console.log(palavra);
//     }
//     return palavra;
// }

// console.log(addSpaces(palavra));

let palavra = prompt("Digite uma palavra: ");
let palavraComEspaco = ""; // Variável para armazenar a nova palavra

// Função que adiciona espaços entre as letras
function addSpaces(palavra) {
  // espaço é = a um index vazio
  for (let i = 0; i < palavra.length; i++) {
    palavraComEspaco += palavra[i]; // Adiciona a letra à nova palavra
    if (i < palavra.length - 1) {
      palavraComEspaco += " "; // Adiciona um espaço entre as letras, mas não após a última letra
    }
  }
  return palavraComEspaco;
}

console.log(addSpaces(palavra)); // Exibe a palavra com espaços entre as letras
