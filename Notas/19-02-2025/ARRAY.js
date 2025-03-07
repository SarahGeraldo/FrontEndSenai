// ARRAY
const alunos = [
  { nome: "Thayná", idade: 17 },
  { nome: "Julia Custódio", idade: 17 },
  { nome: "Julia Borgo", idade: 17 },
];

// ACESSAR OVALOR DO ARRAY DE OBJETOS
alert(alunos[1].idade);

// CONTAR DE 1 A 10
let soma = 0;
for (let i = 1; i <= 10; i++) {
  // soma = soma + 1;
  soma += i;
}
console.log(soma);
