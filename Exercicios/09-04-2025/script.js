console.log("JAVASCRIPT CONECTADO!");

document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = document.querySelector("#city").value;
  const apiKey = "83eb15cc5476a4c6c93d958ef780a997";

  if (!city) return msgAlert("Você precisa digitar uma cidade...");

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  const results = await fetch(api);
  const data = await results.json();

  if (data.cod === 200) {
    show(data);
  } else {
    document.querySelector(".weather_results").classList.remove("show");
    return msgAlert("Não foi possível localizar a cidade...");
  }
});

const show = (data) => {
  console.log(data.weather[0].description);
  if (
    data.weather[0].description === "chuva leve" ||
    data.weather[0].description === "trovoadas"
  ) {
    document.querySelector(
      "body"
    ).style.background = `url("img/chuva.gif") center / cover no-repeat`;
  } else if (
    data.weather[0].description === "nuvens dispersas" ||
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
  document.querySelector(
    ".temp_value"
  ).innerHTML = `${data.city}, ${data.sys.country}`;
  document.querySelector(".temp_value").innerHTML = `${data.main.temp
    .toFixed(1)
    .toString()
    .replace(".", ",")} <sup>Cº</sup>`;
  document.querySelector(
    ".temp_description"
  ).innerHTML = `${data.weather[0].description}`;
  document
    .querySelector(".temp_img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
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
  )}km/h`;
  document.querySelector(".weather_results").classList.add("show");
};

const msgAlert = (msg) => {
  const section_msg_alert = document.querySelector("#alert");
  const mensagem = document.createElement("p");
  mensagem.innerText = msg;
  section_msg_alert.appendChild(mensagem);

  setTimeout(() => {
    mensagem.remove();
  }, 2000);
};
