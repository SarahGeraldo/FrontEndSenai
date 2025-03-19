console.log("JS ativo");

const formulario = document.getElementById("cadastroForm");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("cPassword");
const phone = document.getElementById("tel");
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const msgError = document.getElementsByClassName("msgError");

// ------------------------------------------------------------------

// função de seta para renderizar as diferentes mensagens de erro:
const createDisplayMsgError = (mensagem) => {
  msgError[0].textContent = mensagem;
};

// ------------------------------------------------------------------

// função para verificar se o nome está dentro dos critérios:
const checkNome = () => {
  const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  return nomeRegex.test(nome.value);
};

// ------------------------------------------------------------------

// função para verificar se o email está dentro dos critérios:
const checkEmail = (email) => {
  const partesEmail = email.split("@");
  // o "split" separa o email em duas pertes: antes e depois do @

  if (
    (partesEmail.length === 2 &&
      partesEmail[1].toLowerCase() === "gmail.com") ||
    (partesEmail.length === 2 &&
      partesEmail[1].toLowerCase() === "outlook.com") ||
    (partesEmail.length === 2 && partesEmail[1].toLowerCase() === "hotmail.com")
  ) {
    return true;
  } else {
    return false;
  }
};

// ------------------------------------------------------------------

// função para verificar a igualdade das senhas:
function xxx() {}

function checkPasswordMatch() {
  return password.value === confirmPassword.value ? true : false;
}

// ------------------------------------------------------------------

// função para inserir máscara no telefone (com regex):
function maskPhoneNumber(event) {
  let phone = event.target.value;

  if (/[A-Za-zÀ-ÿ]/.test(phone)) {
    createDisplayMsgError("The phone number must contain only numbers.");
  } else {
    createDisplayMsgError("");
  }

  phone = phone.replace(/\D/g, "");
  // "replace" remove os caracteres nõo numéricos

  if (phone.length > 11) {
    phone = phone.substring(0, 11);
  }

  if (phone.length > 2) {
    phone = `(${phone.substring(0, 2)}) ${phone.substring(2)}`;
  } else if (phone.length > 0) {
    phone = `(${phone})`;
  }

  if (phone.length > 10) {
    phone = phone.replace(/(\(\d{2}\)) (\d{5})(\d{1,4})/, "$1 $2-$3");
  }

  event.target.value = phone;
}

// ------------------------------------------------------------------

// funçaõ para verificar força da senha
function checkPasswordStrength(password) {
  if (!/[a-z]/.test(password)) {
    return "The password must have at least one lowercase letter.";
  }
  if (!/[A-Z]/.test(password)) {
    return "The password must have at least one capital letter.";
  }
  if (!/[\W_]/.test(password)) {
    return "The password must have at least one special characters.";
  }
  if (!/\d/.test(password)) {
    return "The password must have at least one number.";
  }
  if (password.length < 8) {
    return "The password must have at least 8 characters.";
  }

  return null;
}

// ------------------------------------------------------------------

// ------------------------------------------------------------------

// função par verificar e enviar dados:
function fetchDatas(event) {
  event.preventDefault();

  if (!chackNome) {
    createDisplayMsgError(
      "The name Password must not contain numbers or characters."
    );
    return;
  }

  if (!checkEmail(email.value)) {
    createDisplayMsgError("The email is invalid.");

    return;
  }

  if (!checkPasswordMatch()) {
    ("The passwords don't match.");
    return;
  }

  const passwordError = checkPasswordStrength(password.value);
  if (passwordError) {
    createDisplayMsgError(passwordError);
    return;
  }

  if (phone.value && /[A-Za-zÀ-ÿ]/.test(phone.value)) {
    createDisplayMsgError("The phone must have at least only numbers.");
    return;
  }

  const formData = {
    nome: nome.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    cpf: cpf.value,
    rg: rg.value,
  };

  console.log("Form sent: ", JSON.stringify(formData, null, 2));
}

// ------------------------------------------------------------------

// "addEventListener()" é um comando JS que executa o comando de dentro do parênteses
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nome.value);
});
// "preventDefault" é um método JS uasado para associar um evento a um elemnto do HTML (ele permite que o texto digitado possa ser lido e analisado)

// ------------------------------------------------------------------

nome.addEventListener("input", () => {
  if (nome.value && !checkNome()) {
    createDisplayMsgError(
      "The password must't contain numbers or special characters."
    );
  } else {
    createDisplayMsgError("");
  }
});

// ------------------------------------------------------------------

email.addEventListener("input", () => {
  if (email.value && !checkEmail(email.value)) {
    createDisplayMsgError("The email typed is invalid.");
  } else {
    createDisplayMsgError("");
  }
});

// ------------------------------------------------------------------

password.addEventListener("input", () => {
  if (password.value && checkPasswordStrength(password.value)) {
    createDisplayMsgError(checkPasswordStrength(password.value));
  } else {
    createDisplayMsgError("");
  }
});

phone.addEventListener("input", maskPhoneNumber);
