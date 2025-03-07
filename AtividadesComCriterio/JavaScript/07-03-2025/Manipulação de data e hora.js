// Obter Data Atual: Crie uma função obterDataAtual() que retorne a data atual no formato DD/MM/AAAA.

let data = new Date();

function obterDataAtual() {
  console.log(
    data.getDate(),
    `/`,
    data.getMonth() + 1,
    `/`,
    data.getFullYear()
  );
  return;
}
obterDataAtual();

// Obter Hora Atual: Desenvolva uma função obterHoraAtual() que retorne a hora atual no formato HH:MM:SS.

function obterHoraAtual() {
  console.log(data.toLocaleTimeString());
  return;
}

obterHoraAtual();
