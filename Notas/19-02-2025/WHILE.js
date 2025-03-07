// TABUADA
let valor = parseInt(prompt("Digite o número para tabuada: "));

for (let i = 0; i <= 10; i++) {
  console.log(`${valor} x ${i} = ${valor * i}`);
}

// EXEMPLO 1 (while):
let i = 5;
while (i >= 1) {
  console.log("AA");
  i--;
}

// console.log("A condição do while não é mais verdadeira");

// EXEMPLO 2 (while):
const senhaCorreta = "12345";
let senha = prompt("Digite sua senha: ");

while (senha !== senhaCorreta) {
  console.log("A senha está incorreta");
  senha = prompt("Digite sua senha: "); // REPETIR O PEDIDO DE SENHA
}
console.log("A senha está correta!");
