/*
const minhaPromise = new Promise((resolve, Object) => {
  let sucesso = true;

  setTimeout(() => {
    if (sucesso) {
      resolve("A promise foi um sucesso!");
    } else {
      PromiseRejectionEvent("A promise não foi um sucesso.");
    }
  }, 2000);
});

minhaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
*/

// --------------------------------------------------------------------

// UMA DAS MANEIRAS DE ENCONTRAR O ENDEREÇO:
/*
function buscarEndereco(cep) {
  return new Promise((resolve, reject) => {
    console.log("Buscando endereço...");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }

        return response.json();
      })

      .then((data) => {
        if (data.erro) {
          reject("CEP não encontrado.");
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject("Erro na requisição: " + error);
      });
  });
}

buscarEndereco("01001000")
  .then((endereco) => {
    console.log("Endereço encontrado: ", endereco);
  })
  .catch((error) => console.log(error));
*/

// --------------------------------------------------------------------

async function buscarEndereco(cep) {
  try {
    console.log("Buscando endereço...");
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = resposta.json();
    console.log(dados);
  } catch (error) {
    console.log(error);
  }
}

buscarEndereco("01001000");
console.log("Requisição enviada!");
