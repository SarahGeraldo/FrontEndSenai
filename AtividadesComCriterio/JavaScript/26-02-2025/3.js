// **Verificar número primo**
//    - Crie uma função ehPrimo(numero) que recebe um número e verifica se ele é primo. Retorne true se for primo e false caso contrário.
//    - **Exemplo de uso:** ehPrimo(7); // Retorna true

let numero = parseInt(prompt("Digite um número primo: "));

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    7 % 2 === 0;
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(numero));
