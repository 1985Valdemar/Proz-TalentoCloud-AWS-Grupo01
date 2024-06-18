// ********** INTERAÇÃO MUDAR COR DOS LINKS DO MENU ************** //
// Selecionar todos os links do menu
const links = document.querySelectorAll('.nav-item a');

// Adicionar evento de passar o mouse por cima de cada link
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red'; // Mudar a cor do texto para vermelho ao passar o mouse
  });

  // Adicionar evento de tirar o mouse de cima de cada link
  link.addEventListener('mouseout', () => {
    link.style.color = ''; // Resetar a cor do texto ao tirar o mouse de cima
  });
});

// ---------- FUNÇÕES DE VALIDAÇÃO DE FORMULÁRIO -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO EMAIL (Login) ---------- //
let emailLoginInput = document.getElementById("email");
let emailLoginLabel = document.querySelector('label[for="email"]');
let emailLoginHelper = document.getElementById("email-helper");

togglePopup(emailLoginInput, emailLoginLabel);

emailLoginInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".")) {
    estilizarInputCorreto(emailLoginInput, emailLoginHelper);
    inputCorretos.email = true;
  } else {
    emailLoginHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailLoginInput, emailLoginHelper);
    inputCorretos.email = false;
  }
});

// ---------- VALIDAÇÃO Senha (Login) ---------- //
let senhaLoginInput = document.getElementById("senha");
let senhaLoginLabel = document.querySelector('label[for="senha"]');
let senhaLoginHelper = document.getElementById("senha-helper");

togglePopup(senhaLoginInput, senhaLoginLabel);

senhaLoginInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    senhaLoginHelper.innerText = "A senha deve ter no mínimo 3 caracteres";
    estilizarInputIncorreto(senhaLoginInput, senhaLoginHelper);
    inputCorretos.senha = false;
  } else {
    estilizarInputCorreto(senhaLoginInput, senhaLoginHelper);
    inputCorretos.senha = true;
  }
});

// ---------- VALIDAÇÃO USERNAME (Cadastro) ---------- //
let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("nome-helper");

togglePopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    usernameHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputCorretos.username = false;
  } else {
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorretos.username = true;
  }
});

// ---------- VALIDAÇÃO EMAIL (Cadastro) ---------- //
let emailCadastroInput = document.getElementById("email-cadastro");
let emailCadastroLabel = document.querySelector('label[for="email-cadastro"]');
let emailCadastroHelper = document.getElementById("email-cadastro-helper");

togglePopup(emailCadastroInput, emailCadastroLabel);

// Validar valor do input
emailCadastroInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".")) {
    estilizarInputCorreto(emailCadastroInput, emailCadastroHelper);
    inputCorretos.emailcadastro = true;
  } else {
    emailCadastroHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailCadastroInput, emailCadastroHelper);
    inputCorretos.emailcadastro = false;
  }
});

// ---------- VALIDAÇÃO Senha (Cadastro) ---------- //
let senhaCadastroInput = document.getElementById("senha-cadastro");
let senhaCadastroLabel = document.querySelector('label[for="senha-cadastro"]');
let senhaCadastroHelper = document.getElementById("senha-cadastro-helper");

togglePopup(senhaCadastroInput, senhaCadastroLabel);

senhaCadastroInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    senhaCadastroHelper.innerText = "A senha deve ter no mínimo 3 caracteres";
    estilizarInputIncorreto(senhaCadastroInput, senhaCadastroHelper);
    inputCorretos.senhacadastro = false;
  } else {
    estilizarInputCorreto(senhaCadastroInput, senhaCadastroHelper);
    inputCorretos.senhacadastro = true;
  }
});

// ************* Habilitar o envio do formulário **************
const btnSubmit1 = document.querySelector("button[type=submit]");
const btnSubmit2 = document.querySelector("button[type=submit1]");

let inputCorretos = {
  username: false,
  email: false,
  emailcadastro: false,
  senhacadastro: false,
  senha: false
};

btnSubmit1.addEventListener("click", (e) => {
  if (!inputCorretos.email || !inputCorretos.senha) {
    e.preventDefault();
    alert("Preencha todos os campos corretamente1");
  } else {
    alert("Formulário Enviado");
    // Aqui você pode adicionar código para realmente enviar o formulário, se necessário
    // e.g., document.querySelector('form-login').submit();
  }
});

btnSubmit2.addEventListener("click", (e) => {
  if (!inputCorretos.username || !inputCorretos.emailcadastro || !inputCorretos.senhacadastro) {
    e.preventDefault();
    alert("Preencha todos os campos corretamente2");
  } else {
    alert("Formulário Enviado");
    // Aqui você pode adicionar código para realmente enviar o formulário, se necessário
    // e.g., document.querySelector('form-cadastro').submit();
  }
});
