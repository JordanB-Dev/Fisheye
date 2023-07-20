const getPhotographers = async () => {
  const errorApi = document.querySelector('main')
  const photographers = await fetch('./data/photographers.json')
    .then((response) => response.json())
    .catch((error) => {
      errorApi.insertAdjacentHTML(
        'beforeend',
        `<center><h1>404 NOT FOUND</h1></center>`
      )
      console.log('Error api:' + ' ' + error)
    })

  return photographers
}

const displayData = async (photographers) => {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
