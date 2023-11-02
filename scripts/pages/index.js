// Async function to retrieve photographers data from the JSON file.
const getPhotographers = async () => {
  const errorApi = document.querySelector('main')
  // Data retrieved from the JSON
  const photographers = await fetch('./data/photographers.json')
    .then((response) => response.json())
    .catch((error) => {
      errorApi.insertAdjacentHTML(
        'beforeend',
        `<center><h1>404 NOT FOUND</h1></center>`
      )
      console.log('Error api:' + ' ' + error)
    })
  // Return the photographers array only once
  return photographers
}

// Async function to display photographers' data in the dedicated .photographer_section
const displayData = async (photographers) => {
  const photographersSection = document.querySelector('.photographer_section')

  // Iterate through the photographers and create user cards for each photographer.
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

// Initialization function to retrieve photographers' data and display it.
const init = async () => {
  // Retrieve photographers' data.
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
