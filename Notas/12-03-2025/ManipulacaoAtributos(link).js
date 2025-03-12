const link = document.getElementById("linkGoogle");
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");

console.log(link.setAttribute("target", "_blank"));

link.removeAttribute("target");

// "setAttribute" verifica se o valor de um atributo já existe. Se sim, atualiza o valor, seão, cria
// "target" abre o link na mesma aba (facilita a exeperiência com links em sites)
// "blank" abre o link em uma nova aba ou em uma nova janela do navegador
