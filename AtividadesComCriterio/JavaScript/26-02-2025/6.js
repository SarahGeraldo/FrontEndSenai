// **Soma de números até um negativo ser digitado**
//    - Crie uma função somarAteNegativo() que peça ao usuário números e continue somando até que ele digite um número negativo.
//    - **Exemplo de uso:** somarAteNegativo(); // O usuário digita até inserir um número negativo

let valorDigitado;
let resultado = 0;

function somarAteNegativo() {
  do {
    valorDigitado = parseInt(prompt("Digite um número: "));
    resultado += valorDigitado;
    console.log(resultado);
  } while (valorDigitado >= 0);
}

somarAteNegativo();
