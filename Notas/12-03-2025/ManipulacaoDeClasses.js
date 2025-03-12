const container = document.getElementById("container"); // identificação pelo ID

container.classList.add("qualquer_coisa");
container.classList.add("ativo");
// "container" é a identificação
// "classList" serve para adicionar uma classe
// "add" é o método da lista

container.classList.remove("qualquer_coisa");
// "remove" remove a classe

container.classList.toggle("ativo");
// "toggle" verifica se a classe existe
// se sim, remove
// senão, adiciona

console.log(container.classList.contains("ativo"));
console.log(container.classList.contains("card"));
// "contains" verifica se a classe existe
// se sim, emite um TRUE
// senão, emite um FALSE

if (container.classList.contains("ativo")) {
  // "contains" em uma função
  console.log("A caixa etá ativa");
}
