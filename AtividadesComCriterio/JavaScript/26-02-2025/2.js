// **Soma dos N primeiros números**
//  - Crie uma função somaAteN(n) que recebe um número inteiro n e retorna a soma de todos os números de 1 até n.
//    - **Exemplo de uso:** somaAteN(5); // Retorna 15 (1+2+3+4+5)

//let soma (n = 0);
let n = parseInt(prompt("Digite um número para a soma: "));
let soma = 0;

function somaAteN(n) {
  for (let i = 1; i <= n; i++) {
    soma += i;
  }

  console.log("O resultado da soma é: ", soma);
}
somaAteN(n);
