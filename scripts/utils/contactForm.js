const modal = document.getElementById("contact_modal");
const main = document.getElementById("main");

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea[id="message"]'
);

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

const firstChecker = () => {};
const lastChecker = () => {};
const emailChecker = () => {};
const messageChecker = () => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(console.log(e.target.value));
        break;
      case "last":
        lastChecker(console.log(e.target.value));
        break;
      case "email":
        emailChecker(console.log(e.target.value));
        break;
      case "message":
        messageChecker(console.log(e.target.value));
        break;
      default:
        nul;
    }
  });
});
