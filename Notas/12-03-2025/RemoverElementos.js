// PRIMEIRA FORMA:
// remover atravéz do elemnto pai
const lista = document.getElementById("lista"); // identificação do elemento pai
const itemParaRemover = document.getElementsByClassName("itemParaRemover");
//identificação do elemnto que será removido

console.log(itemParaRemover);
console.log(lista);

lista.removeChild(itemParaRemover[0]); // OU itemParaRemover[0].remove();
// "removeChild" serve para remover o elemento filho
// "[0]" serve para identificar que o item removido será o primeiro com onome "itemParaRemover" (classe)

// SEGUNDA FORMA:
// remover o próprio elemento
const itemRemove = document.getElementById("itemRemove");

itemRemove.remove();
