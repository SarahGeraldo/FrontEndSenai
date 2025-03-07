// Hipotenusa: Desenvolva uma função calcularHipotenusa(a, b) que calcule a hipotenusa de um triângulo retângulo usando o Teorema de Pitágoras.

let a = parseInt(prompt("Digite um número: "));
let b = parseInt(prompt("Digite um número: "));
function calcularHipotenusa(a, b) {
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  console.log("C é igual a: ", c);
  return;
}
calcularHipotenusa(a, b);

// Número Aleatório: Crie uma função gerarNumeroAleatorio(min, max) que gere um número aleatório entre os valores min e max (inclusive).

let max = 10;
let min = 1;
const numeroAleatorio = Math.random() * (max - min + 1) + min;

function gerarNumeroAleatorio(min, max) {
  console.log(numeroAleatorio);
  return;
}

gerarNumeroAleatorio(min, max);

// Fatorial: Escreva uma função calcularFatorial(n) que calcule o fatorial de um número.

let n = parseInt(prompt("Digite um número para fatoriar: "));
let result = 1;

function calcularFatorial(n) {
  for (let i = n; i > 0; i--) {
    result *= i; // i sendo = n trás o número escolhido. i é o resultado do fatorial, se * n multiplicaria o valor final do fatorial ao número inicial, portanto deve-se multiplicar por 1 para o resultado real.
  }
  return result;
}

console.log(calcularFatorial(n));
