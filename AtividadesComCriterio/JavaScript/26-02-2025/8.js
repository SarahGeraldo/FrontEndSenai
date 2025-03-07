// **Números Pares até N**
//    - Crie uma função numerosPares(n) que exiba todos os números pares de 0 até n.
//    - **Exemplo de uso:** numerosPares(10); // Saída esperada: 0, 2, 4, 6, 8, 10

let n = parseFloat(prompt("Digite um número: "));

function numerosPares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

numerosPares(n);
