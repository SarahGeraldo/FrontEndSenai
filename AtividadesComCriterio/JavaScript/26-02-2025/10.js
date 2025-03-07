// **Classifica Nota**
//    - Crie uma função classificarNota(nota) que recebe uma nota de **0 a 10** e retorna uma classificação baseada na seguinte tabela:
//    - **Exemplo de uso:** console.log(classificarNota(9)); // Retorna "Ótimo"
//    - **10** → "Excelente"
//    - **8 ou 9** → "Ótimo"
//    - **6 ou 7** → "Bom"
//    - **4 ou 5** → "Regular"
//    - **0 a 3** → "Ruim"
//    - **Qualquer outro valor** → "Nota inválida"

let nota = parseInt(prompt("Digite sua nota: "));

function classificarNota(nota) {
  switch (true) {
    case nota === 10:
      console.log("Excelente!");
      break;
    case nota >= 8 && nota <= 9:
      console.log("Ótimo!");
      break;
    case nota >= 6 && nota <= 7:
      console.log("Bom!");
      break;
    case nota >= 4 && nota <= 5:
      console.log("Regular!");
      break;
    case nota >= 0 && nota <= 3:
      console.log("Ruim!");
      break;
    default:
      console.log("Nota inválida!");
  }
}

classificarNota(nota);
