// **Número perfeito**
//    - Crie uma função ehNumeroPerfeito(numero) que verifica se um número é perfeito (a soma de seus divisores próprios é igual a ele).
//    - **Exemplo de uso:** ehNumeroPerfeito(6); // Retorna true (6 = 1+2+3)

let valor = parseInt(prompt("Digite um valor: "));
let soma = 0;

function ehNumeroPerfeito(valor) {
  if (valor <= 0) {
    return false;
  }

  for (let i = 1; i < valor; i++) {
    if (valor % i === 0) {
      soma += i;
    }
  }

  if (soma === valor) {
    return true;
  }
  return false;
}

console.log(ehNumeroPerfeito(valor));
