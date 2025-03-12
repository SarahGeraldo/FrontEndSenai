// TAG "a":
const botao = document.createElement("a"); // criar a tag "a"
botao.textContent = "Click me"; // adicionar texto na tag "a"

// BOTÃO:
botao.setAttribute("onclick", "saudacao()"); // dicionar ao botão o atributo "onclick" para chamar a função saudacao()
botao.classList.add("btn"); // adicionar class á tag "a"
document.body.prepend(botao); // apresentar a tag no HTML
console.log(botao.getAttribute("onclick")); // verificar se o atributo está ativo e senão estiver, ativar
console.log(typeof botao.getAttribute("onclick")); // verificar a tipo de dado que o atriburo "onclick" está retornando para o console

// ENCAMINHAMENTO PARA A FUNÇÃO:
if (
  // se a classe for btn ou o botão for clicado deve-se encaminhar para a função "saudacao()"
  botao.classList.contains("btn") ||
  botao.getAttribute("onclick") === "saudacao()"
) {
  // STYLE:
  botao.style.textDecoration = "none";
  botao.style.padding = "10px 20px";
  botao.style.fontSize = "24px";
  botao.style.fontWeight = "bold";
  botao.style.textAlign = "center";
  botao.style.color = "#fff";
  botao.style.backgroundColor = "#ff5252";
  botao.style.border = "2px solid #000";
  botao.style.borderRadius = "10px";
  botao.style.cursor = "pointer";
  botao.style.boxShadow = "5px 5px 0 #000";
  botao.style.transition = "all 0.3s ease";
}

// "onclick" evento de clicar no botão
// "typeof" serve para descobrir o tipo do dados retornado
