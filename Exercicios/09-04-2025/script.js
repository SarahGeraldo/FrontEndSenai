console.log("JAVASCRIPT CONECTADO!"); //teste de JS

document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();
  /* o "querySelector" identifica o id para que o "addEventListener" monitore a atividade, 
  quando o "subimit" for acionado o "preventDefault" cancela a ação do clique sem impedir os efeitos da ação. */

  const city = document.querySelector("#city").value; // no HTML, "city" é a caixa de texto INPUT
  const apiKey = "a80254d65f21628ff71961ff13601a34"; // chave do "https://openweathermap.org/"

  if (!city) return msgAlert("Você precisa digitar uma cidade..."); // mensagem exibida na caixa de texto

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`; // lugar de onde a key foi retirada (key na linha 9)
  const results = await fetch(api); // esperando a resposta da API    |- requisição assincrona
  const data = await results.json(); // esperando a resposta do JSON  |

  if (data.cod === 200) {
    // 200 = tipo de código devolvido (método HTTP)
    show(data); // função "show"
  } else {
    document.querySelector(".weather_results").classList.remove("show"); // classe "show"
    return msgAlert("Não foi possível localizar a cidade...");
  } /* quando a cidade não for identificada, a classe "show" será removida da classe "weather_results".
  a classe "weather_results" no browser é a caixa de texto e toda informação de clima sobre a cidade, 
  quando a cidade for inválida: as informações sobre o clima (classe show) não apareceram. */
});

const show = (data) => {
  // função "show" iniciada na linha 19
  console.log(data.weather[0].description); // o 0 no ".weather[0]" é para identificar que o "weather" é o primeiro
  /* "data" retorna: os valores da API no console;
  --------------------------------------------------------------------------
  "weather" retorna: os valores da array: 
description: 
"nublado"
icon: 
"04d"
id: 
803
main: 
"Clouds"
--------------------------------------------------------------------------
"description" retorna: o clima da cidade (nublado, chuvoso, ensolarado, etc)
  */
  if (
    data.weather[0].description === "chuva leve" || // descrição de clima chuvoso e com trovoadas
    data.weather[0].description === "trovoadas"
  ) {
    document.querySelector(
      // "querySelector" procura um seletor (tag, classe, id, etc)
      "body" // nesse caso o "querySelector" tem como seletor a tag "body"
    ).style.background = `url("img/chuva.gif") center / cover no-repeat`;
    // estilização do fundo quando o tempo
  } else if (
    data.weather[0].description === "nuvens dispersas" || // descrição de clima
    data.weather[0].description === "nublado"
  ) {
    document.querySelector(
      "body"
    ).style.background = `url("img/nublado.gif") center / cover no-repeat`;
  } else {
    document.querySelector(
      "body"
    ).style.background = `url("img/sol.gif") center / cover no-repeat`;
  }

  document.querySelector("#title").innerHTML = `${data.name}`;
  /* o "querySelector" tem como seletor o id "title";
  "innerHTML" permite a modificação do HTML pelo JS, é usado qunado uma tag HTML é usada.*/
  document.querySelector(
    ".temp_value" // o "querySelector" tem como seletor a classe "temp_value"
  ).innerHTML = `${data.city}, ${data.sys.country}`;
  // "sys" pega os dados da cidade e retorna o país a qual a cidade pertence
  document.querySelector(".temp_value").innerHTML = `${data.main.temp
    // "data" é a resposta da API
    // para acessar o tempo é preciso passar pela chave "main" ("main" é o caminho para o tempo)
    .toFixed(1) // 1 número fixo depois da vírgula
    .toString() // transformar em string
    .replace(".", ",")} <sup>Cº</sup>`; // sup serve para deixa sobrescrito (para cima)
  // "replace" está transformando o ponto em vírgula
  document.querySelector(
    ".temp_description"
  ).innerHTML = `${data.weather[0].description}`;
  document.querySelector(".temp_img").setAttribute(
    // "setAttribute" define ou altera o valor de um atributo HTML
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // coloca imagem junto com a temperatura pela API
  );
  document.querySelector(".temp_max").innerHTML = `${data.main.temp_max
    .toFixed(1)
    .toString()
    .replace(".", ",")} <sup>Cº</sup>`;
  document.querySelector(".temp_min").innerHTML = `${data.main.temp_min
    .toFixed(1)
    .toString()
    .replace(".", ",")} <sup>Cº</sup>`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed.toFixed(
    1
  )}km/h`; // caminho para chamar o vento "data.wind.speed" (precisa estar completo)
  document.querySelector(".weather_results").classList.add("show");
  // se a cidade requisitada for encontarda os itens da classe show irão aparecer refentes a cidade
};

const msgAlert = (msg) => {
  // função const
  const section_msg_alert = document.querySelector("#alert");
  const mensagem = document.createElement("p");
  mensagem.innerText = msg;
  section_msg_alert.appendChild(mensagem);

  setTimeout(() => {
    // "setTimeout" agenda uma função após determinado tempo
    mensagem.remove();
  }, 2000);
};

// "mensagem.remove(); 2000" = após 2 segundos a mensagem é removida
