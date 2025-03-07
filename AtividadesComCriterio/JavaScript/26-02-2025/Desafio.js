// DESAFIO:

//**Fibonacci até um limite**

//- Crie uma função fibonacci(limite) que exibe os números da sequência de Fibonacci até um determinado número limite.
//- **Exemplo de uso:** fibonacci(15); // Exibe 0, 1, 1, 2, 3, 5, 8, 13

let numero1 = 0;
let numero2 = 1;
let soma = 0;
let num = parseFloat(prompt("Digite um número: "));

console.log(numero1);
console.log(numero2);

function fibonacci(num) {
  for (let i = 0; i <= num; i++) {
    soma = numero1 + numero2;
    numero1 = numero2;
    numero2 = soma;

    if (soma <= num) {
      console.log(soma);
    }
  }
}

fibonacci(num);
