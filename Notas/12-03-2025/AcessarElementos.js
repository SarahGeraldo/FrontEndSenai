console.log("OIIIIII");

// "document" refere-se ao html
const titulo = document.getElementById("titulo");
// getElementById = textContent
const inputNome = document.getElementById("Nome");
const paragrafos = document.getElementsByClassName("paragrafo");
// getElementsByClassName = value
const itensP = document.getElementsByTagName("p");
const textCard1 = document.querySelector(".card p");
const textCard2 = document.querySelector(".card #p2");
// o "querySelector" pede o tipo (id, class...) e o nome (ex.: cards)
// com o "querySelector" pode-se ter combinções porque ele retorna uma coisa/resposta só
const cards = document.querySelectorAll(".card");
const Nome = document.getElementsByName;
// (getElementsByName) by name = name="Nome"
// (getElementsByTagName) bytagname = input

function getEmail() {
  const email = document.getElementById("email");

  console.log(email.value);
}

console.log(titulo); // puxa todo o documento
console.log(titulo.textContent); // puxa somente o texto
console.log(inputNome);
console.log(inputNome.value);
console.log(paragrafos);
console.log(paragrafos[0]);
console.log(paragrafos[1]);
console.log(paragrafos[0].textContent);
console.log(paragrafos[1].textContent);
console.log(itensP[3]);
console.log(textCard1.textContent);
console.log(textCard2.textContent);
console.log(cards.length);
console.log(Nome);
