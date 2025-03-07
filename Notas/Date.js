let data = new Date();

console.log(data.getFullYear()); // ANO ATUAL
console.log(data.getMonth()); // MÊS (0 a 11)
console.log(data.getDate()); // DIA DO MÊS
console.log(data.getHours()); // HORAS
console.log(data.getMinutes()); // MINUTOS
console.log(data.getSeconds()); // SEGUNDOS
console.log(data.getDay()); // DIA (0 a 6)

console.log(data.toLocaleDateString("pt-BR")); // DATA COMPLETA
console.log(data.toLocaleTimeString()); // HORAS:MINUTOS:SEGUNDOS
console.log(data.toLocaleString("pt-BR")); // DATA - HORA:MINUTOS:SEGUNDOS

// "get..." = função
// EXEMPLO: getDate
