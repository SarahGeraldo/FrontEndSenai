// Contar Letras: Crie uma função contarLetras(texto) que receba uma string e retorne o número de letras nela.

let texto = prompt("Digite uma palavra para ser contada: ");

function contarLetras(texto) {
  console.log("O número de letras é igual a: ", texto.length);
  return;
}
contarLetras(texto);

// Inverter String: Desenvolva uma função inverterString(texto) que retorne o texto invertido.

// VERSÃO FEITA POR MIM
let texto = prompt("Digite uma palavra: ");
let textoInvertido = "";

function inverterString(texto) {
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido = textoInvertido + texto[i];
  }

  return textoInvertido;
}

console.log(inverterString(texto));

// CORREÇÃO FEITA COM OS PROFESSORES

// SPLIT = [H, E, L, L, O]
// REVERSE = [O, L, L, E, H]
// JOIN = OLLEH

let text = prompt("Digite um texto: ");

function inverterString(texto) {
  console.log(texto.split("").reverse().join(""));
  // o split tranforma a string em array para que reverse possa ser usado
  // o join transforma o array em string novamente para que possa ser enviada para o console
}
inverterString(texto);

// Verificar Palíndromo: Crie uma função ehPalindromo(texto) que verifique se uma string é um palíndromo, ignorando espaços e diferenças entre maiúsculas e minúsculas.

let texto = prompt("Digite uma palavra: ");

function ehPalindromo(texto) {}

// Verificar Palíndromo: Crie uma função ehPalindromo(texto) que verifique se uma string é um palíndromo, ignorando espaços e diferenças entre maiúsculas e minúsculas.

let texto = prompt("Digite uma palavra: ");
let textoInvertido = "";

function ehPalindromo(texto) {
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido = textoInvertido + texto[i];
  }
  //   return textoInvertido;

  if (
    textoInvertido.toLowerCase().replace(/\s+/g, "") !=
    texto.toLowerCase().replace(/\s+/g, "")
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(ehPalindromo(texto));

// textoInvertido.toLowerCase().replace(/\s+/g, "") != texto.toLowerCase().replace(/\s+/g, "")

// kaka
// akak

// akak != kaka => false

// ana
// ana

// ana != ana

// subi NO oniBUs

// subinoonibus

//.toLowerCase() = indenpendente da forma como foi escrito será enviado em minusculo
//.replace(/\s+/g, "")
// s+ calcula os espaços na frase
// g calcula a frase tota (global)
