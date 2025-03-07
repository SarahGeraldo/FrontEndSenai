// ARREDONDA PARA O VALOR MAIS PRÓXIMO
// ARREDONDA PARA CIMA
console.log(Math.round(4.7));
console.log(Math.round(4.5));

//ARREDONDA PARA BAIXO
console.log(Math.round(4.3));
console.log(Math.round(4.4));

//MATH.FLOR()
//ARREDONDA SEMPRE PARA BAIXO
console.log(Math.floor(4.9));
console.log(Math.floor(4.3));

//MATH.CEIL()
//ARREDONDO SEMPRE PARA CIMA
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.1));

//MATH.MAX()
//DIZ QUAL O MAIOR VALOR ENTRE OS VALORES FORNECIDOS
console.log(Math.max(10, 20, 30));
console.log(Math.max(30, 20, 40, 50));

//MATH.MIN()
//DIZ QUAL O MENOR VALOR ENTRE OS VALORES FORNECIDOS
console.log(Math.min(5, 4, 10, 1, 3));

//MATH.POW()
//ELEVA UM NÚMERO A UMA POTÊNCIA (BASE^EXPOENTE)
console.log(Math.pow(2, 3));

//MATH.SQRT()
//RETORNA A RAIZ QUADRADA
console.log(Math.sqrt(16));
console.log(Math.sqrt(81));

//MATH.PI
// NÃO É UMA FUNÇÃO, É UMA PROPRIEDADE ENTÃO NÃO PRECISA DO "()"
const pi = Math.PI;
console.log(3 * Math.PI);

//MATH.RANDOM
//GERA UM NÚMERO ALEATÓRIO ENTRE 0 E 1 (EXCLUSIVO DO 1)
const qntNumeros = 10;
console.log(Math.random() * (qntNumeros + 1));

//GERANDO NÚMERO ENTRE O MÁXIMO E O MINIMO (INCLUINDO OS DOIS)
const max = 10;
const min = 1;
console.log(Math.random() * (max - min + 1) + min);
