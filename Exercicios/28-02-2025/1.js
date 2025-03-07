// Contagem regressiva
// Crie uma função contagemRegressiva(n) que recebe um número n e retorna a contagem regressiva em uma matriz (vetor).
// Exemplo de uso: contagemRegressiva(5); // Retorna: [5, 4, 3, 2, 1, 0]

let n = parseInt(prompt("Digite um número: "));

function contagemRegressiva(n) {
  let contagem = [];
  for (let i = n; i >= 0; i--) {
    //   console.log("A contagem é: ", i);
    contagem.push(i);
  }
  return contagem;
}
console.log(contagemRegressiva(n));
let x = contagemRegressiva(15);
console.log(x);
