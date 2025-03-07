// MODO DE USO:
// switch (expressao) {
//   case valor1:
//     // código
//     break;

//   case valor2:
//     // código
//     break;

//     defoult;
//   // código
// }

// EXEMPLO 1
let dia = 3;

switch (dia) {
  case 1:
    console.log("Hoje é domingo!");
    break;
  case 2:
    console.log("Hoje é segunda!");
    break;
  case 3:
    console.log("Hoje é terça!");
    break;
  default:
    console.log("Erro no programa!");
}

// EXEMPLO 2
let nota = "B";

switch (nota) {
  case "A":
    console.log("Passou com nota A");
    break;
  case "B":
    console.log("Passou com nota B");
    break;
  case "C":
    console.log("Passou com nota C");
    break;
  default:
    console.log("Você reprovou!");
}

// EXEMPLO 3
letnumero = 5;

switch (true) {
  case numero < 5:
    console.log("O número é menor que 5");
    break;
  case numero === 5:
    console.log("O número é 5");
    break;
  default:
    console.log("Erro no programa!");
}
