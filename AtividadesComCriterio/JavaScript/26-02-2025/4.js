// **Contagem regressiva**
//    - Crie uma função contagemRegressiva(n) que recebe um número n e exibe a contagem regressiva até 0 no console.
//    - **Exemplo de uso:** contagemRegressiva(5); // Exibe 5, 4, 3, 2, 1, 0

let n = parseInt(prompt("Digite um número: "));

function contagemRegressiva(n) {
  for (let i = n; i >= 0; i--) {
    console.log("A contagem é: ", i);
  }
}
contagemRegressiva(n);
