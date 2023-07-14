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

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
});
