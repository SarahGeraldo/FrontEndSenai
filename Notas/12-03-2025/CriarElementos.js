// CRIAR TEXTOS VIA JAVASCRIPT
const paragrafo = document.createElement("p");
paragrafo.textContent = "first text"; // OU "paragrafo.innerText = "first text";"

// estilização:
paragrafo.style.color = "#ff0000";
paragrafo.style.fontSize = "18px";
paragrafo.style.fontStyle = "italic";
paragrafo.style.backgroundColor = "#ffffff";
console.log(paragrafo);
