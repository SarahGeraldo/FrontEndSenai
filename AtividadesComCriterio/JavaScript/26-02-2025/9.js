// **Operações Matemáticas**
//    - Crie uma função calculadora(a, b, operacacao) que recebe dois números (`a`, `b`) e uma string com a operação desejada (`"+", "-", "*", "/"`). Retorne o resultado da operação.
//    - **Exemplo de uso:** console.log(calculadora(5, 3, "+")); // Retorna 8

// COM if
//let a = parseFloat(prompt("Digite o primeiro número: "));
//let b = parseFloat(prompt("Digite o segundo número: "));
//let operacao = prompt("Digite uma operação: ");

//function calculadora(a, b, operacao) {
//  if (operacao === "+") {
//    console.log(a + b);
//  } else if (operacao === "-") {
//    console.log(a - b);
//  } else if (operacao === "*") {
//    console.log(a * b);
//  } else if (operacao === "/") {
//    console.log(a / b);
//  } else {
//    console.log("Operação inválida!");
//  }
//}
//calculadora(a, b, operacao);

// COM switch case
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const operacao = prompt("Digite á operação: ");
let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    console.log(`${numero1} + ${numero2} = ${resultado}`);
    break;

  case "-":
    resultado = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = ${resultado}`);
    break;

  case "*":
    resultado = numero1 * numero2;
    console.log(`${numero1} * ${numero2} = ${resultado}`);
    break;

  case "/":
    resultado = numero1 / numero2;
    console.log(`${numero1} / ${numero2} = ${resultado}`);
    break;

  default:
    console.log("Operação Inválida!");
    break;
}
