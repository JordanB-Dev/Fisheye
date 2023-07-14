const getPhotographers = async () => {
  const photographers = await fetch("./data/photographers.json")
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return photographers;
};

const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

const init = async () => {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
};

init();
