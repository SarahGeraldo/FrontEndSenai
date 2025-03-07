// **Tabuada de um número**
//    - Crie uma função tabuada(numero) que recebe um número e exibe a tabuada de 1 a 10 no console.
//   - **Exemplo de uso:** tabuada(5);

let numero = parseInt(prompt("Digite um número: "));

function tabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
tabuada(numero);
