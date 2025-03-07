// **Número aleatório entre 1 e 10**
//    - Crie uma função adivinharNumero() que gere um número aleatório de 1 a 10 e continue pedindo ao usuário para adivinhar até acertar.
//    - **Exemplo de uso:** adivinharNumero(); // O usuário digita até acertar

const numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let valorDigitado;

function adivinharNumero(numeroAleatorio) {
  do {
    valorDigitado = parseInt(prompt("Tente adivinhar o número: "));
  } while (numeroAleatorio !== valorDigitado);

  console.log("PARABÉNS, VOCÊ ADIVINHOU O NÚMERO!!");
}

adivinharNumero(numeroAleatorio);
