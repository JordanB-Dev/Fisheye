const modal = document.getElementById("contact_modal");
const main = document.getElementById("main");
const form = document.querySelector("form");

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea[id="message"]'
);

let firstName, lastName, email, message;

const regexText = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/i;

const displayModal = () => {
  modal.style.display = "block";
  main.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-modal", "true");
};

const closeModal = () => {
  modal.style.display = "none";
  main.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-modal", "false");
};

const errorDisplay = (tag, message, valid) => {
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    span.classList.add("error");
    span.textContent = message;
  } else {
    span.classList.remove("error");
    span.textContent = message;
  }
};

const firstChecker = (value) => {
  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      "first",
      "Veuillez entrer 2 caractères ou plus pour le champ prénom."
    );
    firstName = null;
  } else if (!value.match(regexText)) {
    errorDisplay(
      "first",
      "Le prénom ne doit pas contenir de caractères spéciaux"
    );
    firstName = null;
  } else {
    errorDisplay("first", "", true);
    firstName = value;
  }
};

const lastChecker = (value) => {
  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      "last",
      "Veuillez entrer 2 caractères ou plus pour le champ nom."
    );
    lastName = null;
  } else if (!value.match(regexText)) {
    errorDisplay("last", "Le nom ne doit pas contenir de caractères spéciaux");
    lastName = null;
  } else {
    errorDisplay("last", "", true);
    lastName = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", " L'adresse électronique n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const messageChecker = (value) => {
  if (value.length < 20 || value.length > 150) {
    errorDisplay(
      "message",
      "Veuillez entrer 20 caractères minimum ou 150 caractères maximum."
    );
    message = null;
  } else if (!value.match(regexText)) {
    errorDisplay(
      "message",
      "Le nessage ne doit pas contenir de caractères spéciaux"
    );
    message = null;
  } else {
    errorDisplay("message", "", true);
    message = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "message":
        messageChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName && lastName && email && message) {
    const data = {
      firstName,
      lastName,
      email,
      message,
    };
    console.log(data);
    closeModal();
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
